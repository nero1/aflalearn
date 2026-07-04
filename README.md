# AflaLearn

A free, plain-language course on aflatoxin: what it is, why it matters for health, income and trade, and what prevention efforts, including FS4Africa, are doing about it. Built for non-technical learners.

Static site, no build step, no backend. Accounts are just a username, stored in `localStorage`, so multiple people can use the same browser and keep separate progress.

## Structure

- `index.html` — app shell (header, nav, login screen, footer)
- `css/styles.css` — all styling, light and dark themes
- `js/data.js` — course content: topics, modules, flashcards, quizzes
- `js/app.js` — routing, accounts, progress tracking, rendering
- `aflalearnlogo.png` — add your logo here at the repo root (falls back to a plain "A" mark if missing)

## Running locally

Any static file server works, e.g.:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploying

This is a fully static site with hash-based routing, so no server rewrites or build step are needed.

**Vercel:** import the repo, framework preset "Other", no build command, output directory `.`.

**Cloudflare Pages:** connect the repo, no build command, output directory `/`.

## Notes on content

Course content is written to be conservative and checkable: general aflatoxin science reflects established public food safety literature. AflaLearn is an independent educational resource and is not produced by, affiliated with, or endorsed by FS4Africa, IITA, PACA, or any other organisation referenced in the course.
