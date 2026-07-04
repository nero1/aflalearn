/* AflaLearn application logic */

/* ================= STORAGE KEYS ================= */
const USERS_KEY = "aflalearn_users_v1";
const CURRENT_USER_KEY = "aflalearn_current_user_v1";
const THEME_KEY = "aflalearn_theme_v1";
function progressKey(user) { return "aflalearn_progress_v1_" + user; }

/* ================= UTIL ================= */
function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function safeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
function safeRemove(key) { try { localStorage.removeItem(key); } catch (e) {} }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function initials(name) {
  return (name || "?").trim().slice(0, 2).toUpperCase();
}

/* ================= USER ACCOUNTS ================= */
function getUsers() {
  try { return JSON.parse(safeGet(USERS_KEY) || "[]"); } catch (e) { return []; }
}
function saveUsers(list) { safeSet(USERS_KEY, JSON.stringify(list)); }
function getCurrentUser() { return safeGet(CURRENT_USER_KEY); }
function setCurrentUser(name) { safeSet(CURRENT_USER_KEY, name); }
function clearCurrentUser() { safeRemove(CURRENT_USER_KEY); }

function createOrSelectUser(name) {
  name = (name || "").trim();
  if (!name) return false;
  if (name.length > 24) name = name.slice(0, 24);
  const users = getUsers();
  if (!users.includes(name)) {
    users.push(name);
    saveUsers(users);
  }
  setCurrentUser(name);
  return true;
}

function logoutUser() {
  clearCurrentUser();
  renderLogin();
}

/* ================= PROGRESS ================= */
function emptyProgress() {
  const p = {};
  TOPICS.forEach((t) => {
    t.modules.forEach((m) => {
      p[m.id] = { read: false, quizDone: false, quizSkipped: false, best: 0 };
    });
  });
  return p;
}
let progress = {};
function loadProgress() {
  const user = getCurrentUser();
  if (!user) { progress = emptyProgress(); return; }
  try {
    const raw = safeGet(progressKey(user));
    const parsed = raw ? JSON.parse(raw) : {};
    const merged = emptyProgress();
    Object.keys(merged).forEach((k) => { if (parsed[k]) merged[k] = Object.assign(merged[k], parsed[k]); });
    progress = merged;
  } catch (e) { progress = emptyProgress(); }
}
function saveProgress() {
  const user = getCurrentUser();
  if (!user) return;
  safeSet(progressKey(user), JSON.stringify(progress));
  refreshProgressUI();
}
function resetProgress() {
  const user = getCurrentUser();
  if (!user) return;
  progress = emptyProgress();
  saveProgress();
}
function markRead(moduleId) {
  if (!progress[moduleId]) return;
  if (!progress[moduleId].read) {
    progress[moduleId].read = true;
    saveProgress();
  }
}
function topicStats(topic) {
  let done = 0;
  topic.modules.forEach((m) => { if (progress[m.id] && (progress[m.id].quizDone || progress[m.id].quizSkipped)) done++; });
  return { done, total: topic.modules.length };
}
function overallStats() {
  let done = 0, total = 0;
  TOPICS.forEach((t) => { t.modules.forEach((m) => { total++; if (progress[m.id] && (progress[m.id].quizDone || progress[m.id].quizSkipped)) done++; }); });
  return { done, total };
}

/* ================= THEME ================= */
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  const icon = document.getElementById("themeIcon");
  if (icon) icon.textContent = t === "dark" ? "☀" : "☽";
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = cur === "dark" ? "light" : "dark";
  applyTheme(next);
  safeSet(THEME_KEY, next);
}
function initTheme() {
  let t = "light";
  const saved = safeGet(THEME_KEY);
  if (saved) t = saved;
  else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) t = "dark";
  applyTheme(t);
}

/* ================= ICON LIBRARY ================= */
/* Each returns inner SVG markup for a 0 0 200 200 viewBox, wrapped by iconWrap(). */
const ICONS = {
  kernel: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M100 42 Q132 58 130 96 Q128 132 100 148 Q72 132 70 96 Q68 58 100 42 Z" class="svg-stroke" stroke-width="3"/>
    <circle cx="84" cy="80" r="4" class="svg-fill-rust"/><circle cx="113" cy="94" r="3" class="svg-fill-rust"/><circle cx="94" cy="116" r="3.5" class="svg-fill-rust"/>`,
  molecule: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <circle cx="80" cy="80" r="10" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="128" cy="76" r="8" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="118" cy="120" r="9" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="72" cy="122" r="7" class="svg-stroke" stroke-width="2.5"/>
    <line x1="80" y1="80" x2="128" y2="76" class="svg-ink-soft" stroke-width="2"/>
    <line x1="80" y1="80" x2="118" y2="120" class="svg-ink-soft" stroke-width="2"/>
    <line x1="80" y1="80" x2="72" y2="122" class="svg-ink-soft" stroke-width="2"/>`,
  pathway: `<rect x="20" y="140" width="160" height="4" class="svg-fill-ink"/>
    <g class="mono" font-size="10">
      <circle cx="40" cy="128" r="13" class="svg-fill-soft svg-stroke" stroke-width="1.5"/><text x="40" y="132" text-anchor="middle">1</text>
      <circle cx="90" cy="108" r="13" class="svg-fill-soft svg-stroke" stroke-width="1.5"/><text x="90" y="112" text-anchor="middle">2</text>
      <circle cx="140" cy="90" r="13" class="svg-fill-soft svg-stroke" stroke-width="1.5"/><text x="140" y="94" text-anchor="middle">3</text>
      <circle cx="170" cy="70" r="13" class="svg-fill-soft svg-stroke" stroke-width="1.5"/><text x="170" y="74" text-anchor="middle">4</text>
    </g>
    <path d="M40 115 L90 95 L140 77 L170 57" class="svg-ink-soft" stroke-width="2" stroke-dasharray="3 4"/>`,
  crops: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <ellipse cx="70" cy="110" rx="16" ry="30" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="120" cy="100" r="16" class="svg-stroke" stroke-width="2.5"/>
    <path d="M148 80 Q158 100 148 128" class="svg-stroke" stroke-width="2.5"/>`,
  liver: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M60 90 Q65 60 105 62 Q145 64 142 100 Q140 130 105 136 Q70 140 60 110 Z" class="svg-stroke" stroke-width="3"/>`,
  hospital: `<circle cx="100" cy="100" r="72" class="svg-fill-soft svg-stroke" stroke-width="2"/>
    <rect x="92" y="65" width="16" height="70" class="svg-fill-rust"/><rect x="65" y="92" width="70" height="16" class="svg-fill-rust"/>`,
  child: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <rect x="55" y="115" width="18" height="20" class="svg-fill-accent"/>
    <rect x="90" y="95" width="18" height="40" class="svg-fill-accent"/>
    <rect x="125" y="75" width="18" height="60" class="svg-fill-accent"/>
    <line x1="45" y1="135" x2="150" y2="135" class="svg-stroke" stroke-width="2"/>`,
  livestock: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <ellipse cx="100" cy="105" rx="45" ry="26" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="65" cy="88" r="14" class="svg-stroke" stroke-width="2.5"/>
    <path d="M55 78 L48 68 M62 74 L58 62" class="svg-stroke" stroke-width="2"/>`,
  coins: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <ellipse cx="85" cy="120" rx="34" ry="12" class="svg-stroke" stroke-width="2.5"/>
    <ellipse cx="85" cy="106" rx="34" ry="12" class="svg-stroke" stroke-width="2.5"/>
    <ellipse cx="85" cy="92" rx="34" ry="12" class="svg-fill-accent svg-stroke" stroke-width="2.5"/>`,
  globe: `<circle cx="100" cy="100" r="60" class="svg-fill-soft svg-stroke" stroke-width="2.5"/>
    <ellipse cx="100" cy="100" rx="60" ry="24" class="svg-ink-soft" stroke-width="1.5"/>
    <line x1="40" y1="100" x2="160" y2="100" class="svg-ink-soft" stroke-width="1.5"/>
    <line x1="100" y1="40" x2="100" y2="160" class="svg-ink-soft" stroke-width="1.5"/>`,
  warehouse: `<path d="M40 110 L100 68 L160 110 L160 145 L40 145 Z" class="svg-fill-soft svg-stroke" stroke-width="2.5"/>
    <rect x="88" y="112" width="24" height="33" class="svg-stroke" stroke-width="2"/>`,
  microscope: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M85 60 L115 60 L110 90 L90 90 Z" class="svg-stroke" stroke-width="2.5"/>
    <line x1="100" y1="90" x2="100" y2="120" class="svg-stroke" stroke-width="2.5"/>
    <ellipse cx="100" cy="132" rx="30" ry="9" class="svg-stroke" stroke-width="2.5"/>`,
  map: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M75 55 Q110 50 125 75 Q140 95 128 120 Q120 145 95 148 Q72 150 68 122 Q60 95 75 55 Z" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="95" cy="80" r="4" class="svg-fill-accent"/><circle cx="105" cy="105" r="4" class="svg-fill-accent"/><circle cx="88" cy="120" r="4" class="svg-fill-accent"/>`,
  shield: `<path d="M100 45 L145 62 L145 100 Q145 140 100 155 Q55 140 55 100 L55 62 Z" class="svg-fill-soft svg-stroke" stroke-width="2.5"/>
    <path d="M78 100 L94 118 L124 82" class="svg-stroke" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  "shield-check": `<path d="M100 45 L145 62 L145 100 Q145 140 100 155 Q55 140 55 100 L55 62 Z" class="svg-fill-soft svg-stroke" stroke-width="2.5"/>
    <path d="M78 100 L94 118 L124 82" class="svg-stroke" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  seedling: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M100 135 L100 90" class="svg-stroke" stroke-width="3"/>
    <path d="M100 100 Q75 95 70 72 Q98 72 100 100 Z" class="svg-fill-leaf svg-stroke" stroke-width="2"/>
    <path d="M100 95 Q125 88 130 65 Q102 68 100 95 Z" class="svg-fill-leaf svg-stroke" stroke-width="2"/>`,
  warning: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M100 55 L145 138 L55 138 Z" class="svg-stroke" stroke-width="3" stroke-linejoin="round"/>
    <line x1="100" y1="88" x2="100" y2="112" class="svg-fill-rust" stroke="var(--rust)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="100" cy="124" r="3" class="svg-fill-rust"/>`,
  network: `<circle cx="70" cy="65" r="26" class="svg-fill-soft svg-stroke" stroke-width="1.5"/>
    <circle cx="150" cy="65" r="26" class="svg-fill-soft svg-stroke" stroke-width="1.5"/>
    <circle cx="110" cy="135" r="26" class="svg-fill-soft svg-stroke" stroke-width="1.5"/>
    <line x1="94" y1="78" x2="122" y2="115" class="svg-ink-soft" stroke-width="1.5"/>
    <line x1="126" y1="78" x2="98" y2="115" class="svg-ink-soft" stroke-width="1.5"/>
    <line x1="96" y1="65" x2="124" y2="65" class="svg-ink-soft" stroke-width="1.5"/>`,
  biocontrol: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <circle cx="80" cy="100" r="30" class="svg-fill-leaf" opacity="0.55"/>
    <circle cx="125" cy="100" r="18" class="svg-fill-rust" opacity="0.7"/>`,
  digital: `<rect x="72" y="55" width="56" height="90" rx="8" class="svg-fill-soft svg-stroke" stroke-width="2.5"/>
    <line x1="82" y1="70" x2="118" y2="70" class="svg-ink-soft" stroke-width="2"/>
    <line x1="82" y1="85" x2="118" y2="85" class="svg-ink-soft" stroke-width="2"/>
    <line x1="82" y1="100" x2="104" y2="100" class="svg-ink-soft" stroke-width="2"/>
    <circle cx="100" cy="128" r="6" class="svg-fill-accent"/>`,
  farmer: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <circle cx="100" cy="75" r="18" class="svg-stroke" stroke-width="2.5"/>
    <path d="M65 145 Q65 105 100 105 Q135 105 135 145" class="svg-stroke" stroke-width="2.5"/>`,
  trader: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M65 90 L135 90 L128 140 L72 140 Z" class="svg-stroke" stroke-width="2.5"/>
    <path d="M80 90 Q80 65 100 65 Q120 65 120 90" class="svg-stroke" stroke-width="2.5" fill="none"/>`,
  home: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <path d="M60 108 L100 70 L140 108" class="svg-stroke" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <rect x="72" y="108" width="56" height="38" class="svg-stroke" stroke-width="2.5"/>`,
  policy: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <rect x="60" y="130" width="80" height="8" rx="3" class="svg-fill-ink"/>
    <path d="M100 55 L130 80 L70 80 Z" class="svg-stroke" stroke-width="2.5"/>
    <line x1="80" y1="80" x2="80" y2="122" class="svg-stroke" stroke-width="2.5"/>
    <line x1="120" y1="80" x2="120" y2="122" class="svg-stroke" stroke-width="2.5"/>`,
  people: `<circle cx="100" cy="100" r="72" class="svg-fill-soft"/>
    <circle cx="78" cy="78" r="14" class="svg-stroke" stroke-width="2.5"/>
    <circle cx="124" cy="82" r="12" class="svg-stroke" stroke-width="2.5"/>
    <path d="M50 140 Q52 105 82 103 Q108 102 112 130" class="svg-stroke" stroke-width="2.5" fill="none"/>
    <path d="M108 138 Q110 108 132 106 Q152 105 152 132" class="svg-stroke" stroke-width="2.5" fill="none"/>`
};
function iconWrap(key, size) {
  size = size || 200;
  const inner = ICONS[key] || ICONS.kernel;
  return `<svg class="diagram" viewBox="0 0 200 200" width="${size}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

/* ================= CHARTS ================= */
function barChartSvg(title, data) {
  const max = Math.max(...data.map((d) => d.value));
  const w = 320, h = 220, chartTop = 40, chartBottom = 178, chartLeft = 30, chartRight = 300;
  const n = data.length;
  const bw = (chartRight - chartLeft) / n - 16;
  let bars = "", labels = "";
  data.forEach((d, i) => {
    const x = chartLeft + i * ((chartRight - chartLeft) / n) + 8;
    const hgt = ((d.value / max) * (chartBottom - chartTop));
    const y = chartBottom - hgt;
    bars += `<rect x="${x.toFixed(1)}" y="${chartBottom}" width="${bw.toFixed(1)}" height="0" data-h="${hgt.toFixed(1)}" data-y="${y.toFixed(1)}" class="svg-fill-accent bar-rect"/>`;
    labels += `<text x="${(x + bw / 2).toFixed(1)}" y="${chartBottom + 18}" text-anchor="middle" class="mono" font-size="9" fill="var(--ink-soft)">${escapeHtml(d.label)}</text>`;
  });
  return `<svg class="diagram chart-anim" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <text x="${w / 2}" y="18" text-anchor="middle" class="mono" font-size="10" fill="var(--ink-faint)">${escapeHtml(title)}</text>
    ${bars}
    <line x1="${chartLeft}" y1="${chartBottom}" x2="${chartRight}" y2="${chartBottom}" class="svg-stroke" stroke-width="1.5"/>
    ${labels}
  </svg>`;
}
function lineChartSvg(title, data) {
  const max = Math.max(...data.map((d) => d.value));
  const w = 320, h = 220, chartTop = 40, chartBottom = 178, chartLeft = 34, chartRight = 300;
  const n = data.length;
  const points = data.map((d, i) => {
    const x = chartLeft + (i * (chartRight - chartLeft)) / (n - 1);
    const y = chartBottom - (d.value / max) * (chartBottom - chartTop);
    return { x, y, label: d.label };
  });
  const polyline = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  let labels = "";
  points.forEach((p) => { labels += `<text x="${p.x.toFixed(1)}" y="${chartBottom + 18}" text-anchor="middle" class="mono" font-size="8.5" fill="var(--ink-soft)">${escapeHtml(p.label)}</text>`; });
  return `<svg class="diagram" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <text x="${w / 2}" y="18" text-anchor="middle" class="mono" font-size="10" fill="var(--ink-faint)">${escapeHtml(title)}</text>
    <polyline points="${polyline}" class="svg-stroke" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="${points[0].x.toFixed(1)}" cy="${points[0].y.toFixed(1)}" r="3.5" class="svg-fill-leaf"/>
    <circle cx="${points[points.length - 1].x.toFixed(1)}" cy="${points[points.length - 1].y.toFixed(1)}" r="3.5" class="svg-fill-rust"/>
    <line x1="${chartLeft - 10}" y1="${chartBottom}" x2="${chartRight}" y2="${chartBottom}" class="svg-stroke" stroke-width="1.5"/>
    ${labels}
  </svg>`;
}

/* ================= VISUAL RENDERING ================= */
function renderVisual(v) {
  if (!v) return "";
  if (v.type === "icon") return iconWrap(v.key, 220);
  if (v.type === "chart-bar") return barChartSvg(v.title, v.data);
  if (v.type === "chart-line") return lineChartSvg(v.title, v.data);
  if (v.type === "checklist") {
    return `<div class="checklist">${v.items.map((it) => `<div class="item"><span class="mark">✓</span> ${escapeHtml(it)}</div>`).join("")}</div>`;
  }
  if (v.type === "video") {
    return `<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.videoId)}" title="${escapeHtml(v.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <p class="video-caption">${escapeHtml(v.title)} &middot; <a href="https://www.youtube.com/watch?v=${encodeURIComponent(v.videoId)}" target="_blank" rel="noopener">Watch on YouTube</a></p>`;
  }
  return "";
}

/* ================= ROUTING ================= */
function currentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) return { view: "home" };
  if (parts[0] === "settings") return { view: "settings" };
  if (parts[0] === "topic" && parts[1]) {
    if (parts[2] === "module" && parts[3]) return { view: "module", topicId: parts[1], moduleId: parts[3] };
    return { view: "topic", topicId: parts[1] };
  }
  return { view: "home" };
}
function navigate(hash) { window.location.hash = hash; }
window.addEventListener("hashchange", render);

/* ================= HEADER / NAV ================= */
function updateHeaderNav(route) {
  document.querySelectorAll(".navlink").forEach((b) => {
    const v = b.getAttribute("data-view");
    b.classList.toggle("active", v === route.view || (v === "home" && route.view === "topic") || (v === "home" && route.view === "module"));
  });
  const chip = document.getElementById("userChip");
  const user = getCurrentUser();
  if (chip) {
    if (user) {
      chip.style.display = "flex";
      chip.querySelector(".avatar").textContent = initials(user);
      chip.querySelector(".chip-name").textContent = user;
    } else {
      chip.style.display = "none";
    }
  }
}

/* ================= HOME VIEW ================= */
function renderHome() {
  const stats = overallStats();
  const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  let cards = "";
  TOPICS.forEach((t, i) => {
    const ts = topicStats(t);
    const tpct = ts.total ? Math.round((ts.done / ts.total) * 100) : 0;
    cards += `
      <div class="entity-card" data-nav="#/topic/${t.id}">
        ${ts.done === ts.total ? `<svg class="badge-stamp" viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" class="svg-stroke" stroke-width="2"/><circle cx="30" cy="30" r="21" class="svg-stroke" stroke-width="1" stroke-dasharray="2 3"/><text x="30" y="34" text-anchor="middle" class="mono svg-fill-ink" font-size="9" font-weight="700">DONE</text></svg>` : ""}
        <div class="num">Topic 0${i + 1}</div>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.summary)}</p>
        <div class="tags">${t.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="card-progress">
          <div class="lbl">${ts.done} of ${ts.total} modules complete</div>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:${tpct}%"></div></div>
        </div>
        <div class="cta">Open topic <span class="emoji">→</span></div>
      </div>`;
  });
  return `
    <div class="wrap">
      <div class="hero">
        <div class="hero-text">
          <span class="eyebrow"><span class="emoji">🌽</span> A plain-language course on food safety</span>
          <h1>Understand aflatoxin. Protect what you grow.</h1>
          <p>AflaLearn is a free, self-paced course on aflatoxin: what it is, why it matters for health and income, and what actually works to prevent it, with a close look at collaborative efforts like FS4Africa. No jargon, no sign-up beyond a username, and your progress stays on this device.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <button class="btn" data-nav="#/topic/${TOPICS[0].id}">Start with Topic 1 <span class="emoji">→</span></button>
            <button class="btn ghost" data-nav="#/settings" data-settings-tab="howto">How this works</button>
          </div>
        </div>
        <div class="hero-svg">${iconWrap("kernel", 300)}</div>
      </div>

      <div class="stat-row">
        <div class="stat-chip"><div class="n">${TOPICS.length}</div><div class="l">Topics</div></div>
        <div class="stat-chip"><div class="n">${stats.total}</div><div class="l">Modules</div></div>
        <div class="stat-chip"><div class="n">${pct}%</div><div class="l">Your progress</div></div>
        <div class="stat-chip"><div class="n">0</div><div class="l">Signal needed after loading</div></div>
      </div>

      <div class="section-head">
        <h2 style="font-size:22px;">Choose a topic</h2>
        <span class="mono" style="font-size:12px;color:var(--ink-faint);">progress is saved on this device, for this username</span>
      </div>
      <div class="card-grid">${cards}</div>
    </div>`;
}

/* ================= TOPIC VIEW ================= */
function renderTopic(topicId) {
  const topic = TOPIC_INDEX[topicId];
  if (!topic) { navigate("#/"); return ""; }
  let cards = "";
  topic.modules.forEach((m, i) => {
    const p = progress[m.id] || {};
    const done = p.quizDone || p.quizSkipped;
    cards += `
      <div class="entity-card" data-nav="#/topic/${topic.id}/module/${m.id}">
        ${done ? `<svg class="badge-stamp" viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" class="svg-stroke" stroke-width="2"/><circle cx="30" cy="30" r="21" class="svg-stroke" stroke-width="1" stroke-dasharray="2 3"/><text x="30" y="34" text-anchor="middle" class="mono svg-fill-ink" font-size="9" font-weight="700">DONE</text></svg>` : ""}
        <div class="num">Module ${i + 1} of ${topic.modules.length}</div>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.lede)}</p>
        <div class="cta">Open module <span class="emoji">→</span></div>
      </div>`;
  });
  const ts = topicStats(topic);
  const tpct = ts.total ? Math.round((ts.done / ts.total) * 100) : 0;
  return `
    <div class="wrap">
      <button class="back-link" data-nav="#/"><span class="emoji">←</span> Back to all topics</button>
      <div class="crumbs">Topics / ${escapeHtml(topic.title)}</div>
      <div class="module-hero">
        <div class="module-hero-text">
          <span class="eyebrow">${escapeHtml(topic.tags.join(" · "))}</span>
          <h1>${escapeHtml(topic.title)}</h1>
          <p class="lede">${escapeHtml(topic.summary)}</p>
          <div class="card-progress" style="max-width:320px;margin-top:16px;">
            <div class="lbl">${ts.done} of ${ts.total} modules complete</div>
            <div class="progress-bar"><div class="progress-bar-fill" style="width:${tpct}%"></div></div>
          </div>
        </div>
        <div class="module-hero-svg">${iconWrap(topic.icon, 200)}</div>
      </div>
      <div class="card-grid">${cards}</div>
    </div>`;
}

/* ================= MODULE VIEW ================= */
function renderModuleContentBlocks(module) {
  return module.sections.map((s, i) => {
    const reverse = i % 2 === 1 ? " reverse" : "";
    const list = s.list ? `<ul>${s.list.map((li) => `<li><strong>${escapeHtml(li.strong)}:</strong> ${escapeHtml(li.text)}</li>`).join("")}</ul>` : "";
    const paras = (s.paragraphs || []).map((p) => `<p>${p}</p>`).join("");
    const callout = s.callout ? `<div class="callout ${s.callout.type === "accent" ? "" : s.callout.type}">${s.callout.type === "accent" ? "<strong>Note: </strong>" : ""}${s.callout.text}</div>` : "";
    return `
      <div class="content-block${reverse}">
        <div class="content-text">
          <h2>${escapeHtml(s.heading)}</h2>
          ${paras}
          ${list}
          ${callout}
        </div>
        <div class="content-visual">${renderVisual(s.visual)}</div>
      </div>`;
  }).join("");
}

function renderModule(topicId, moduleId) {
  const entry = MODULE_INDEX[moduleId];
  if (!entry || entry.topic.id !== topicId) { navigate("#/topic/" + topicId); return ""; }
  const { module, topic, position, total } = entry;
  markRead(moduleId);
  const prevModule = topic.modules[position - 1];
  const nextModule = topic.modules[position + 1];
  return `
    <div class="wrap">
      <button class="back-link" data-nav="#/topic/${topic.id}"><span class="emoji">←</span> Back to ${escapeHtml(topic.title)}</button>
      <div class="crumbs">Topics / ${escapeHtml(topic.title)} / ${escapeHtml(module.title)}</div>
      <div class="module-hero">
        <div class="module-hero-text">
          <span class="eyebrow"><span class="emoji">📖</span> Module ${position + 1} of ${total}</span>
          <h1>${escapeHtml(module.title)}</h1>
          <p class="lede">${module.lede}</p>
        </div>
        <div class="module-hero-svg">${iconWrap(module.heroIcon, 180)}</div>
      </div>

      ${renderModuleContentBlocks(module)}

      <div class="flash-section" data-module="${module.id}"></div>
      <div class="quiz-section" data-module="${module.id}"></div>

      <div class="q-nav" style="max-width:640px;margin:40px auto 0;">
        ${prevModule ? `<button class="btn ghost" data-nav="#/topic/${topic.id}/module/${prevModule.id}">← ${escapeHtml(prevModule.title)}</button>` : `<span></span>`}
        ${nextModule ? `<button class="btn" data-nav="#/topic/${topic.id}/module/${nextModule.id}">${escapeHtml(nextModule.title)} →</button>` : `<button class="btn" data-nav="#/topic/${topic.id}">Back to topic</button>`}
      </div>
    </div>`;
}

/* ================= FLASHCARDS ================= */
function buildFlashcards(moduleId) {
  const container = document.querySelector('.flash-section[data-module="' + moduleId + '"]');
  if (!container) return;
  const module = MODULE_INDEX[moduleId].module;
  const cards = module.flashcards;
  let idx = 0;
  container.innerHTML = `
    <div class="section-head"><h2 style="font-size:22px;"><span class="emoji">🗂</span> Flashcards</h2><span class="mono" style="font-size:12px;color:var(--ink-faint);">tap a card to flip it</span></div>
    <div class="flash-wrap">
      <div class="flash-card" id="flashCard-${moduleId}">
        <div class="flash-inner">
          <div class="flash-face flash-front"><span class="lbl">Question</span><p id="flashFront-${moduleId}"></p></div>
          <div class="flash-face flash-back"><span class="lbl">Answer</span><p id="flashBack-${moduleId}"></p></div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="btn ghost" id="flashPrev-${moduleId}">← Prev</button>
        <div class="flash-dots" id="flashDots-${moduleId}"></div>
        <button class="btn ghost" id="flashNext-${moduleId}">Next →</button>
      </div>
      <p class="flash-hint" id="flashCount-${moduleId}"></p>
    </div>`;
  const cardEl = document.getElementById("flashCard-" + moduleId);
  const dotsEl = document.getElementById("flashDots-" + moduleId);
  cards.forEach((c, i) => {
    const d = document.createElement("span");
    d.className = "dot";
    d.id = "dot-" + moduleId + "-" + i;
    dotsEl.appendChild(d);
  });
  function render() {
    document.getElementById("flashFront-" + moduleId).textContent = cards[idx].f;
    document.getElementById("flashBack-" + moduleId).textContent = cards[idx].b;
    document.getElementById("flashCount-" + moduleId).textContent = (idx + 1) + " of " + cards.length;
    cardEl.classList.remove("flipped");
    document.querySelectorAll("#flashDots-" + moduleId + " .dot").forEach((d, i) => d.classList.toggle("active", i === idx));
  }
  cardEl.addEventListener("click", () => {
    cardEl.classList.toggle("flipped");
    document.getElementById("dot-" + moduleId + "-" + idx).classList.add("seen");
  });
  document.getElementById("flashPrev-" + moduleId).addEventListener("click", (ev) => { ev.stopPropagation(); idx = (idx - 1 + cards.length) % cards.length; render(); });
  document.getElementById("flashNext-" + moduleId).addEventListener("click", (ev) => { ev.stopPropagation(); idx = (idx + 1) % cards.length; render(); });
  render();
}

/* ================= QUIZ (skippable) ================= */
function buildQuiz(moduleId) {
  const container = document.querySelector('.quiz-section[data-module="' + moduleId + '"]');
  if (!container) return;
  const module = MODULE_INDEX[moduleId].module;
  const topic = MODULE_INDEX[moduleId].topic;
  const questions = module.quiz;
  let idx = 0, score = 0, answered = false;

  function renderIntro() {
    container.innerHTML = `
      <div class="section-head" style="margin-top:16px;"><h2 style="font-size:22px;"><span class="emoji">📝</span> Module quiz</h2><span class="mono" style="font-size:12px;color:var(--ink-faint);">${questions.length} questions &middot; optional</span></div>
      <div class="quiz-card">
        <div class="quiz-intro">
          <p>Check what stuck, or skip straight ahead if you'd rather come back later. Skipping still marks this module as visited, just without a score.</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            <button class="btn" id="quizStart-${moduleId}">Take the quiz</button>
            <button class="btn ghost" id="quizSkip-${moduleId}">Skip for now</button>
          </div>
        </div>
      </div>`;
    document.getElementById("quizStart-" + moduleId).addEventListener("click", () => { idx = 0; score = 0; renderQuestion(); });
    document.getElementById("quizSkip-" + moduleId).addEventListener("click", () => {
      progress[moduleId].quizSkipped = true;
      saveProgress();
      renderSkipped();
    });
  }

  function renderSkipped() {
    container.querySelector(".quiz-card").innerHTML = `
      <div class="quiz-result">
        <h3>Module marked as visited</h3>
        <p class="score">You skipped the quiz for now. You can come back and take it any time.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn ghost" id="quizRetry-${moduleId}">Take the quiz now</button>
          <button class="btn" data-nav="#/topic/${topic.id}">Back to topic</button>
        </div>
      </div>`;
    bindNavButtons(container);
    document.getElementById("quizRetry-" + moduleId).addEventListener("click", () => { idx = 0; score = 0; renderQuestion(); });
  }

  const card = () => container.querySelector(".quiz-card");

  function renderQuestion() {
    answered = false;
    const q = questions[idx];
    container.innerHTML = `
      <div class="section-head" style="margin-top:16px;"><h2 style="font-size:22px;"><span class="emoji">📝</span> Module quiz</h2><span class="mono" style="font-size:12px;color:var(--ink-faint);">${questions.length} questions</span></div>
      <div class="quiz-card">
        <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${(idx / questions.length) * 100}%"></div></div>
        <div class="q-title"><span>Question ${idx + 1} of ${questions.length}</span><button id="qSkipAll-${moduleId}">skip quiz</button></div>
        <div class="q-text">${escapeHtml(q.q)}</div>
        <div class="q-options">${q.o.map((opt, i) => `<button class="q-option" data-i="${i}">${escapeHtml(opt)}</button>`).join("")}</div>
        <div class="q-explain" id="explain-${moduleId}"></div>
        <div class="q-nav"><span></span><button class="btn" id="qNextBtn-${moduleId}" style="display:none;">Next →</button></div>
      </div>`;
    document.getElementById("qSkipAll-" + moduleId).addEventListener("click", () => {
      progress[moduleId].quizSkipped = true;
      saveProgress();
      renderIntro();
      renderSkipped();
    });
    card().querySelectorAll(".q-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = parseInt(btn.getAttribute("data-i"));
        card().querySelectorAll(".q-option").forEach((b, i) => {
          b.classList.add("disabled");
          if (i === q.a) b.classList.add("correct");
          else if (i === chosen) b.classList.add("wrong");
        });
        if (chosen === q.a) score++;
        const ex = document.getElementById("explain-" + moduleId);
        ex.textContent = q.e;
        ex.classList.add("show");
        document.getElementById("qNextBtn-" + moduleId).style.display = "inline-flex";
      });
    });
    document.getElementById("qNextBtn-" + moduleId).addEventListener("click", () => {
      idx++;
      if (idx < questions.length) renderQuestion();
      else renderResult();
    });
  }

  function renderResult() {
    const pct = Math.round((score / questions.length) * 100);
    const pass = pct >= 70;
    progress[moduleId].quizDone = progress[moduleId].quizDone || pass;
    progress[moduleId].quizSkipped = false;
    progress[moduleId].best = Math.max(progress[moduleId].best || 0, pct);
    saveProgress();
    container.innerHTML = `
      <div class="section-head" style="margin-top:16px;"><h2 style="font-size:22px;"><span class="emoji">📝</span> Module quiz</h2><span class="mono" style="font-size:12px;color:var(--ink-faint);">${questions.length} questions</span></div>
      <div class="quiz-card">
        <div class="quiz-result">
          <svg class="stamp-badge" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" class="svg-fill-soft svg-stroke" stroke-width="3"/>
            <circle cx="60" cy="60" r="42" class="svg-stroke" stroke-width="1.5" stroke-dasharray="3 4"/>
            <text x="60" y="55" text-anchor="middle" class="mono svg-fill-ink" font-size="13" font-weight="700">${pass ? "PASSED" : pct + "%"}</text>
            <text x="60" y="72" text-anchor="middle" class="mono svg-fill-ink" font-size="8">${escapeHtml(module.title.slice(0, 16))}</text>
          </svg>
          <h3>${pass ? "Well done, module complete" : "Good effort, try again any time"}</h3>
          <div class="score">Score: ${score} of ${questions.length} (${pct}%)</div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            <button class="btn ghost" id="retryBtn-${moduleId}">Retake quiz</button>
            <button class="btn" data-nav="#/topic/${topic.id}">Back to topic</button>
          </div>
        </div>
      </div>`;
    bindNavButtons(container);
    document.getElementById("retryBtn-" + moduleId).addEventListener("click", () => { idx = 0; score = 0; renderQuestion(); });
  }

  if (progress[moduleId] && progress[moduleId].quizDone) {
    idx = 0; score = Math.round((progress[moduleId].best / 100) * questions.length);
    renderIntro();
  } else {
    renderIntro();
  }
}

/* ================= CHART ANIMATION ================= */
function animateChartsIn(root) {
  (root || document).querySelectorAll(".bar-rect").forEach((r) => {
    const h = parseFloat(r.getAttribute("data-h"));
    const y = parseFloat(r.getAttribute("data-y"));
    requestAnimationFrame(() => { r.setAttribute("height", h); r.setAttribute("y", y); });
  });
}

/* ================= SETTINGS VIEW ================= */
function renderSettings() {
  const user = getCurrentUser();
  return `
    <div class="wrap" style="max-width:760px;">
      <span class="eyebrow"><span class="emoji">⚙</span> Settings</span>
      <h1 style="font-size:30px;">Settings</h1>
      <div class="settings-tabs">
        <button class="settings-tab active" data-tab="about">About</button>
        <button class="settings-tab" data-tab="howto">How it works</button>
        <button class="settings-tab" data-tab="general">General</button>
      </div>

      <div class="settings-pane active" id="settings-about">
        <h2>What AflaLearn is</h2>
        <p>AflaLearn is a free, self-paced course about aflatoxin, a natural toxin that affects food safety, farm income and trade across large parts of the world, and especially across Africa. It covers what aflatoxin is, why it is dangerous, its economic cost, the regional picture in Africa, and what prevention and collaborative efforts, including FS4Africa, are doing about it.</p>
        <h2>Where the content comes from</h2>
        <p>The course draws on established public food safety science (from bodies such as WHO, FAO, IARC and Codex Alimentarius), publicly documented research programmes such as Aflasafe (led by IITA and USDA's Agricultural Research Service), and the FS4Africa project's own published materials, including its Applicants' Guide and public project record. AflaLearn is an independent educational resource. It is not produced by, affiliated with, or endorsed by FS4Africa, IITA, PACA or any other organisation referenced in these materials.</p>
        <h2>Built by</h2>
        <p>AflaLearn was built by <strong>NG44</strong>.</p>
      </div>

      <div class="settings-pane" id="settings-howto">
        <h2>How to use this course</h2>
        <ol class="steps-list">
          <li><strong>Create or select a username on the login screen.</strong> No password, no email, just a name to keep your progress separate from anyone else using the same device.</li>
          <li><strong>Pick a topic from the home screen.</strong> Topics are grouped by theme; there's no required order, though the topics roughly build on each other.</li>
          <li><strong>Open a module and read through it.</strong> Each one is short on purpose: the idea, why it matters, and what to actually do about it.</li>
          <li><strong>Flip through the flashcards.</strong> Tap or click a card to flip it and check the answer, then use the arrows to move on.</li>
          <li><strong>Take the quiz, or skip it.</strong> Quizzes are entirely optional. Skipping still marks a module as visited on your home screen.</li>
          <li><strong>Switch usernames any time</strong> from this Settings page, or from the login screen next time you open AflaLearn.</li>
          <li><strong>Your progress stays on this device</strong>, tied to your username. Nothing is sent anywhere, and nothing is shared between devices.</li>
        </ol>
      </div>

      <div class="settings-pane" id="settings-general">
        <h2>Display</h2>
        <div class="settings-row">
          <div>
            <div style="font-weight:600;">Dark mode</div>
            <div style="font-size:13px;color:var(--ink-faint);">Switch between light and dark appearance</div>
          </div>
          <div class="toggle" id="toggleDark"></div>
        </div>
        <h2>Account</h2>
        <div class="settings-row">
          <div>
            <div style="font-weight:600;">Signed in as ${escapeHtml(user || "")}</div>
            <div style="font-size:13px;color:var(--ink-faint);">Switch to a different username, or log out</div>
          </div>
          <button class="btn ghost" id="settingsLogout">Log out</button>
        </div>
        <h2>Your data</h2>
        <div class="settings-row">
          <div>
            <div style="font-weight:600;">Reset all progress</div>
            <div style="font-size:13px;color:var(--ink-faint);">Clears saved quiz scores and completion badges for this username, on this device</div>
          </div>
          <button class="danger-btn" id="settingsReset">Reset progress</button>
        </div>
      </div>
    </div>`;
}

function bindSettingsEvents(pendingTab) {
  document.querySelectorAll(".settings-tab").forEach((btn) => {
    btn.addEventListener("click", () => openSettingsTab(btn.getAttribute("data-tab")));
  });
  const toggle = document.getElementById("toggleDark");
  if (toggle) toggle.addEventListener("click", toggleTheme);
  const logoutBtn = document.getElementById("settingsLogout");
  if (logoutBtn) logoutBtn.addEventListener("click", () => { logoutUser(); navigate("#/"); renderLogin(); });
  const resetBtn = document.getElementById("settingsReset");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    if (confirm("This clears all quiz scores and completion badges for this username on this device. Continue?")) {
      resetProgress();
      render();
    }
  });
  if (pendingTab) openSettingsTab(pendingTab);
}
function openSettingsTab(name) {
  document.querySelectorAll(".settings-tab").forEach((t) => t.classList.toggle("active", t.getAttribute("data-tab") === name));
  document.querySelectorAll(".settings-pane").forEach((p) => p.classList.remove("active"));
  const pane = document.getElementById("settings-" + name);
  if (pane) pane.classList.add("active");
}

/* ================= NAV BUTTON BINDING (delegated) ================= */
function bindNavButtons(root) {
  (root || document).querySelectorAll("[data-nav]").forEach((el) => {
    if (el.dataset.navBound) return;
    el.dataset.navBound = "1";
    el.addEventListener("click", () => {
      const settingsTab = el.getAttribute("data-settings-tab");
      navigate(el.getAttribute("data-nav"));
      if (settingsTab) setTimeout(() => openSettingsTab(settingsTab), 30);
    });
  });
}

/* ================= MAIN RENDER ================= */
function refreshProgressUI() {
  const route = currentRoute();
  if (route.view === "home" || route.view === "topic") render();
}

function render() {
  if (!getCurrentUser()) { renderLogin(); return; }
  loadProgress();
  const app = document.getElementById("app");
  const route = currentRoute();
  document.getElementById("loginShell").style.display = "none";
  document.querySelector("header.topbar").style.display = "";
  document.querySelector("footer").style.display = "";
  document.querySelector("main").style.display = "";
  app.style.display = "";

  let html = "";
  if (route.view === "home") html = renderHome();
  else if (route.view === "topic") html = renderTopic(route.topicId);
  else if (route.view === "module") html = renderModule(route.topicId, route.moduleId);
  else if (route.view === "settings") html = renderSettings();

  app.innerHTML = html;
  updateHeaderNav(route);
  bindNavButtons(app);

  if (route.view === "module") {
    buildFlashcards(route.moduleId);
    buildQuiz(route.moduleId);
    animateChartsIn(app);
  }
  if (route.view === "settings") bindSettingsEvents();

  document.getElementById("mobileNav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================= LOGIN VIEW ================= */
function renderLogin() {
  document.getElementById("loginShell").style.display = "flex";
  document.querySelector("header.topbar").style.display = "none";
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";

  const shell = document.getElementById("loginShell");
  const users = getUsers();

  shell.innerHTML = `
    <div class="login-card">
      <div class="login-brand">
        <img src="aflalearnlogo.png" alt="AflaLearn logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="brand-text-fallback" style="display:none;">A</div>
      </div>
      <h1>Welcome to AflaLearn</h1>
      <p class="sub">A plain-language course on aflatoxin and food safety.</p>
      <div id="loginBody"></div>
    </div>`;

  const body = document.getElementById("loginBody");

  function renderFullForm() {
    body.innerHTML = `
      ${users.length ? `
        <div style="font-size:13px;color:var(--ink-soft);margin-bottom:8px;">Select your username to load your progress</div>
        <div class="user-list">${users.map((u) => `<div class="user-pill" data-user="${escapeHtml(u)}"><span class="avatar">${escapeHtml(initials(u))}</span>${escapeHtml(u)}</div>`).join("")}</div>
        <div class="divider">or</div>` : ""}
      <div style="font-size:13px;color:var(--ink-soft);margin:${users.length ? "14px" : "0"} 0 4px;">Create a new username</div>
      <div class="field-row">
        <input type="text" id="newUserInput" placeholder="e.g. amara" maxlength="24" autocomplete="off"/>
        <button class="btn" id="newUserBtn">Continue</button>
      </div>`;
    document.querySelectorAll(".user-pill").forEach((p) => {
      p.addEventListener("click", () => {
        createOrSelectUser(p.getAttribute("data-user"));
        navigate("#/");
        render();
      });
    });
    const input = document.getElementById("newUserInput");
    const go = () => {
      if (createOrSelectUser(input.value)) { navigate("#/"); render(); }
    };
    document.getElementById("newUserBtn").addEventListener("click", go);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  }

  const stillCurrent = getCurrentUser();
  if (stillCurrent) {
    body.innerHTML = `
      <div class="already-box">
        <div class="who"><span class="emoji">👋</span> You're logged in as ${escapeHtml(stillCurrent)}</div>
        <button class="btn full" id="continueBtn">Continue</button>
        <div class="switch-line">Not ${escapeHtml(stillCurrent)}? <button id="switchUserBtn">Log out and log in with your username</button></div>
      </div>`;
    document.getElementById("continueBtn").addEventListener("click", () => { navigate("#/"); render(); });
    document.getElementById("switchUserBtn").addEventListener("click", () => {
      clearCurrentUser();
      renderFullForm();
    });
  } else {
    renderFullForm();
  }
}

/* ================= INIT ================= */
function initHeader() {
  document.querySelectorAll(".navlink").forEach((btn) => {
    btn.addEventListener("click", () => navigate("#/" + (btn.getAttribute("data-view") === "home" ? "" : btn.getAttribute("data-view"))));
  });
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("open");
  });
  const chip = document.getElementById("userChip");
  if (chip) chip.addEventListener("click", () => navigate("#/settings"));
}

initTheme();
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  renderLogin();
});
