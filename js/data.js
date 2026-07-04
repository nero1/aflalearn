/* AflaLearn content data
   All facts here are written to be conservative and checkable:
   general food-safety science (aflatoxin biology, health effects, regulatory limits)
   reflects long-established public health and food-safety literature (WHO, FAO, IARC, Codex Alimentarius).
   FS4Africa-specific details are drawn directly from the FS4Africa Applicants' Guide (Annex 4, foodsafety4africa.eu)
   and the project's public CORDIS record (EU Horizon project 101136916). AflaLearn is an independent
   educational resource and is not produced by, affiliated with, or endorsed by FS4Africa, IITA, PACA or any
   other organisation named in these materials. */

const TOPICS = [
  {
    id: "t1",
    icon: "kernel",
    title: "What Is Aflatoxin?",
    summary: "The basics: what this poison is, how it gets into food, and which crops carry the most risk.",
    tags: ["Fundamentals"],
    modules: [
      {
        id: "t1m1",
        title: "A Poison You Cannot See",
        lede: "Start here. Aflatoxin is not dirt and not a chemical spill, it is a natural poison made by a common mould, and it hides in plain sight.",
        heroIcon: "kernel",
        sections: [
          {
            heading: "A mould, not a man-made chemical",
            paragraphs: [
              "Aflatoxin is produced by two closely related fungi, <strong>Aspergillus flavus</strong> and <strong>Aspergillus parasiticus</strong>. Both live naturally in soil almost everywhere in the world, and both can grow on crops in the field or after harvest whenever conditions turn warm and humid.",
              "The fungus itself is sometimes visible as a greenish-yellow or grey-green mould. The toxin it produces is not. That is the part people usually get wrong: seeing no mould does not mean a food is safe, and a small amount of visible mould does not tell you how much toxin is actually present."
            ],
            callout: { type: "rust", text: "Key point: aflatoxin has no smell, no taste and often no visible sign at all. Contaminated maize or groundnut can look completely normal on the plate or at the market stall." },
            visual: { type: "icon", key: "kernel" }
          },
          {
            heading: "Why warmth and moisture matter so much",
            paragraphs: [
              "These fungi thrive in warm temperatures, roughly between 25 and 35 degrees Celsius, and in damp conditions. That combination is common across large parts of Africa, Asia and Latin America, especially where crops are dried slowly or stored without full protection from humidity.",
              "This is also why aflatoxin is described as a food safety problem rather than a hygiene problem in the everyday sense. Careful handling still matters, but the underlying driver is a fungus responding to heat and moisture, not simply dirt or carelessness."
            ],
            visual: { type: "icon", key: "molecule" }
          }
        ],
        flashcards: [
          { f: "What produces aflatoxin?", b: "Two related fungi, Aspergillus flavus and Aspergillus parasiticus, which grow naturally in soil and on crops." },
          { f: "Can you see aflatoxin itself?", b: "No. The fungus may sometimes be visible as mould, but the toxin it produces has no colour, smell or taste." },
          { f: "What two conditions let the fungus grow and produce toxin?", b: "Warmth (roughly 25 to 35 degrees Celsius) and moisture. Dry, cool storage slows it down significantly." },
          { f: "Is aflatoxin a man-made chemical?", b: "No. It is a naturally occurring toxin, produced by a living organism, not something manufactured or sprayed on." },
          { f: "Does visible mould always mean high aflatoxin?", b: "Not necessarily, and the reverse is also true: food can carry high aflatoxin with no visible mould at all. Visual inspection alone cannot confirm safety." }
        ],
        quiz: [
          { q: "Aflatoxin is produced by which type of organism?", o: ["A bacterium", "A fungus", "A virus", "An insect"], a: 1, e: "Aspergillus flavus and Aspergillus parasiticus are fungi (moulds)." },
          { q: "Which conditions most encourage aflatoxin-producing fungi to grow?", o: ["Cold and dry", "Warm and humid", "Cold and humid", "Warm and dry"], a: 1, e: "These fungi thrive in warm, humid conditions, both in the field and in storage." },
          { q: "Can aflatoxin usually be detected by smell or taste?", o: ["Yes, it smells sour", "Yes, it tastes bitter", "No, it is typically undetectable this way", "Only in raw food"], a: 2, e: "It has no reliable smell or taste, which is exactly why it is dangerous." },
          { q: "Which statement is most accurate?", o: ["No visible mould always means the food is safe", "Visible mould always means high aflatoxin", "Neither visible mould nor its absence reliably tells you the aflatoxin level", "Mould and aflatoxin are unrelated"], a: 2, e: "Visual inspection is a useful early screen but cannot confirm the actual toxin level." },
          { q: "Where do Aspergillus flavus and Aspergillus parasiticus naturally live?", o: ["Only inside sealed grain silos", "In soil almost everywhere", "Only in tropical rainforests", "Only in animal digestive systems"], a: 1, e: "These fungi are common soil organisms found across most regions of the world." }
        ]
      },
      {
        id: "t1m2",
        title: "How Contamination Happens",
        lede: "Aflatoxin does not appear at one single moment. It can take hold at almost any point between the field and the kitchen, which is why prevention has to cover the whole chain.",
        heroIcon: "pathway",
        sections: [
          {
            heading: "Four points along the chain",
            paragraphs: [
              "Contamination risk builds at four broad stages: while the crop is still growing in the field (especially under drought stress followed by rain, which weakens the plant), during harvest if pods or cobs are damaged or left too long before collection, during drying if moisture is not brought down quickly, and during storage if grain is kept damp, poorly sealed or in contact with damp floors and walls.",
              "None of these stages is guaranteed to cause contamination, and none can be ignored either. A crop that was well grown but poorly dried, or well dried but stored badly, can still end up unsafe."
            ],
            visual: { type: "icon", key: "pathway" }
          },
          {
            heading: "Why storage tends to be the riskiest single stage",
            paragraphs: [
              "Field contamination often depends on weather that farmers cannot fully control, such as drought followed by unexpected rain near harvest. Storage, by contrast, is the stage where simple, low-cost human decisions, how quickly grain is dried, how it is sealed, where sacks are placed, make the biggest measurable difference.",
              "This is one reason prevention programmes across Africa put so much weight on drying speed and storage conditions: they are the levers ordinary farmers and traders can actually pull, batch by batch, season by season."
            ],
            callout: { type: "accent", text: "A simple rule of thumb used by extension workers: if grain has been warm and damp for an extended period, at any stage, treat the risk as higher, even if it still looks fine." }
          }
        ],
        flashcards: [
          { f: "Name the four broad stages where aflatoxin risk builds up.", b: "In the field, at harvest, during drying, and during storage." },
          { f: "What field condition is particularly linked to higher aflatoxin risk?", b: "Drought stress on the plant followed by rain near harvest time, which weakens the crop's natural defences." },
          { f: "Why is storage often called the highest-leverage stage for prevention?", b: "Because drying speed, sealing and storage conditions are things farmers and traders can directly control, unlike weather in the field." },
          { f: "Does contamination require just one bad stage to become a problem?", b: "No single stage guarantees contamination, but weakness at any one stage, even after good practice elsewhere, can still lead to an unsafe batch." },
          { f: "What should be assumed about grain that has stayed warm and damp for a long period?", b: "That its aflatoxin risk has likely increased, even if it still looks and smells normal." }
        ],
        quiz: [
          { q: "At how many broad stages can aflatoxin contamination take hold?", o: ["One", "Two", "Four", "Ten"], a: 2, e: "Field growth, harvest, drying and storage are the four broad risk stages." },
          { q: "Which field condition is linked to raising aflatoxin risk?", o: ["Steady rainfall throughout the season", "Drought followed by rain near harvest", "Cool, cloudy weather", "Early planting"], a: 1, e: "Drought stress followed by rain near harvest weakens the plant and favours fungal growth." },
          { q: "Why do many prevention programmes focus heavily on storage?", o: ["It is the only stage that matters", "It is where farmers have the most direct control", "It is the cheapest stage to ignore", "Weather cannot affect storage"], a: 1, e: "Drying and storage decisions are largely in farmers' and traders' hands, unlike field weather." },
          { q: "If grain has been warm and damp for a long time, what should be assumed?", o: ["It is definitely safe if it looks fine", "Risk has likely increased, regardless of appearance", "Only smell can confirm safety", "Nothing, appearance is reliable"], a: 1, e: "Appearance is not a reliable safety check; prolonged warmth and damp should raise concern." },
          { q: "Is good practice at only one stage of the chain enough to guarantee safety?", o: ["Yes, harvest timing alone is enough", "Yes, drying alone is enough", "No, weakness at any stage can still cause contamination", "No, only storage matters"], a: 2, e: "Every stage contributes to overall risk; none can be safely ignored." }
        ]
      },
      {
        id: "t1m3",
        title: "Which Foods Carry the Risk",
        lede: "Some crops are far more prone to aflatoxin than others. Knowing which ones matters most helps target limited testing, drying and storage resources where they count.",
        heroIcon: "crops",
        sections: [
          {
            heading: "The two crops to watch most closely",
            paragraphs: [
              "Maize (corn) and groundnut (peanut) are consistently the two staple crops most associated with aflatoxin contamination worldwide, and especially across much of Africa, where both are dietary staples grown and stored at household and community scale.",
              "Tree nuts, dried chillies, dried figs, spices and cassava chips can also carry aflatoxin, generally at lower average rates than maize and groundnut, but still enough that many national and international food safety limits cover them specifically."
            ],
            visual: { type: "chart-bar", title: "Illustrative relative risk by crop group (not measured levels)", data: [
              { label: "Maize", value: 100 },
              { label: "Groundnut", value: 92 },
              { label: "Tree nuts", value: 48 },
              { label: "Dried chilli / spice", value: 40 },
              { label: "Cassava chips", value: 30 }
            ] }
          },
          {
            heading: "Feed, milk, and why animals matter to human safety",
            paragraphs: [
              "Animal feed made from contaminated maize or groundnut cake carries the risk forward. Dairy cattle that eat contaminated feed can pass a related toxin, aflatoxin M1, into their milk, which is why milk is also covered by food safety limits in most countries.",
              "This means aflatoxin safety is not only about what people eat directly. Feed quality for poultry, pigs and dairy cattle is part of the same chain, and testing feed is just as relevant as testing food destined straight for people."
            ],
            callout: { type: "leaf", text: "Practical takeaway: if resources for testing or careful drying are limited, prioritising maize and groundnut, and the feed made from them, covers the largest share of real-world risk." }
          }
        ],
        flashcards: [
          { f: "Which two crops carry the highest aflatoxin risk overall?", b: "Maize and groundnut." },
          { f: "Name three other foods that can carry meaningful aflatoxin risk.", b: "Tree nuts, dried chillies or spices, and cassava chips (among others)." },
          { f: "What is aflatoxin M1?", b: "A related toxin that can appear in milk when dairy animals eat feed contaminated with aflatoxin." },
          { f: "Why does animal feed matter for human aflatoxin safety?", b: "Because contaminated feed can pass the toxin, or the related M1 form, into meat, eggs and especially milk that people then consume." },
          { f: "If testing resources are limited, which crops should be prioritised?", b: "Maize and groundnut, along with the feed products made from them, since they carry the largest share of overall risk." }
        ],
        quiz: [
          { q: "Which two staple crops are most associated with aflatoxin worldwide?", o: ["Rice and wheat", "Maize and groundnut", "Cassava and yam", "Millet and sorghum"], a: 1, e: "Maize and groundnut consistently show the highest aflatoxin risk among staple crops." },
          { q: "What is aflatoxin M1?", o: ["A pesticide", "A toxin found in milk from animals fed contaminated feed", "A type of fertiliser", "A vitamin"], a: 1, e: "M1 is the form of aflatoxin that can appear in milk after animals eat contaminated feed." },
          { q: "Besides maize and groundnut, which of these can also carry aflatoxin risk?", o: ["Tree nuts and dried chillies", "Fresh fish", "Clean drinking water", "Table salt"], a: 0, e: "Tree nuts, dried chillies, spices and cassava chips are also commonly covered by aflatoxin limits." },
          { q: "Why does contaminated animal feed matter for people who don't eat maize directly?", o: ["It doesn't matter at all", "It can pass toxins into milk, meat and eggs", "Feed contamination only affects animals", "Animals destroy all aflatoxin naturally"], a: 1, e: "Contaminated feed can carry the risk into animal products that people consume." },
          { q: "If resources for prevention are limited, where should they be focused first?", o: ["Spices only", "Maize, groundnut and the feed made from them", "Fresh vegetables", "Rice"], a: 1, e: "These carry the largest share of real-world aflatoxin risk, so focusing there has the most impact." }
        ]
      },
      {
        id: "t1m4",
        title: "The Aflatoxin Family",
        lede: "Aflatoxin is not one single substance. A handful of closely related chemical forms matter most for food safety, and they show up in slightly different places.",
        heroIcon: "molecule",
        sections: [
          {
            heading: "B1, B2, G1, G2 and M1",
            paragraphs: [
              "Scientists group the main aflatoxins as B1, B2, G1 and G2, named originally from how they appear under ultraviolet light (blue or green fluorescence). Of these, <strong>aflatoxin B1</strong> is usually both the most common in contaminated crops and the most toxic, and it is the one most food safety limits are built around.",
              "<strong>Aflatoxin M1</strong> is a modified form that appears in milk, produced when a dairy animal metabolises B1 from contaminated feed. It is generally regulated at a stricter limit than B1 itself, since milk is a staple food for infants and young children."
            ],
            visual: { type: "icon", key: "molecule" }
          },
          {
            heading: "Why this distinction matters in practice",
            paragraphs: [
              "For someone working in the field, the exact chemistry rarely needs to be memorised. What matters is that laboratory tests and regulatory limits usually refer to <strong>total aflatoxins</strong> (the sum of B1, B2, G1 and G2) and to <strong>aflatoxin B1</strong> specifically, since B1 alone is classified by the World Health Organization's International Agency for Research on Cancer (IARC) as a Group 1 human carcinogen, its highest-risk category.",
              "That classification is one of the clearest signals in food safety science that this is not a minor contaminant to be managed loosely. It sits in the same IARC risk category as substances like tobacco smoke and asbestos, based on the strength of evidence linking it to cancer, not on how commonly it is encountered."
            ],
            callout: { type: "rust", text: "IARC Group 1 means \"carcinogenic to humans\", the strongest level of evidence the agency assigns, reserved for substances with well-established, consistent evidence of causing cancer in people." }
          }
        ],
        flashcards: [
          { f: "What are the four main natural aflatoxins called?", b: "B1, B2, G1 and G2." },
          { f: "Which single aflatoxin is usually the most common and most toxic?", b: "Aflatoxin B1." },
          { f: "What is aflatoxin M1 and where does it show up?", b: "A metabolised form of B1 that appears in the milk of dairy animals fed contaminated feed." },
          { f: "How does IARC classify aflatoxin B1?", b: "As a Group 1 human carcinogen, its highest classification, meaning there is strong, consistent evidence it causes cancer in people." },
          { f: "What do food safety limits usually measure?", b: "Total aflatoxins (B1+B2+G1+G2 combined) and aflatoxin B1 specifically, since B1 carries the greatest documented risk." }
        ],
        quiz: [
          { q: "How many main natural forms of aflatoxin are typically named in food safety science?", o: ["Two", "Four (B1, B2, G1, G2)", "Six", "Ten"], a: 1, e: "B1, B2, G1 and G2 are the four principal naturally occurring forms." },
          { q: "Which aflatoxin form is generally the most toxic and most common in crops?", o: ["G2", "B2", "B1", "M1"], a: 2, e: "Aflatoxin B1 is typically both the most prevalent and the most potent of the group." },
          { q: "Where does aflatoxin M1 typically appear?", o: ["In dry maize kernels", "In milk from animals fed contaminated feed", "In soil samples", "In rainwater"], a: 1, e: "M1 is the metabolised form of B1 that shows up in milk." },
          { q: "How does IARC classify aflatoxin B1?", o: ["Not classifiable", "Probably not carcinogenic", "Group 1: carcinogenic to humans", "Group 3: unclassifiable"], a: 2, e: "B1 is in IARC's Group 1, the category for substances with the strongest evidence of causing human cancer." },
          { q: "What do most regulatory food safety limits actually measure?", o: ["Only aflatoxin G2", "Total aflatoxins and/or aflatoxin B1 specifically", "The colour of the mould", "The crop's moisture content only"], a: 1, e: "Limits are typically set on total aflatoxins and on B1 specifically, given its dominant risk contribution." }
        ]
      }
    ]
  },

  {
    id: "t2",
    icon: "liver",
    title: "Why It Is Dangerous",
    summary: "The real health consequences, for people and for the animals that feed into the food chain.",
    tags: ["Health"],
    modules: [
      {
        id: "t2m1",
        title: "The Liver Connection",
        lede: "Aflatoxin's most serious long-term threat is to the liver. Understanding why helps explain why this problem is taken so seriously by health authorities worldwide.",
        heroIcon: "liver",
        sections: [
          {
            heading: "One of the strongest known natural liver carcinogens",
            paragraphs: [
              "When aflatoxin B1 is eaten, the liver processes it, and in doing so converts it into a reactive form that can damage the DNA inside liver cells. Repeated exposure over months and years increases the chance that this damage leads to liver cancer, technically called hepatocellular carcinoma.",
              "This is why aflatoxin B1 is classified by IARC (the World Health Organization's cancer research agency) as a Group 1 human carcinogen: the evidence linking long-term dietary exposure to liver cancer is considered strong and consistent, based on decades of research across multiple countries."
            ],
            callout: { type: "rust", text: "This risk grows with hepatitis B infection. People who carry chronic hepatitis B and are also regularly exposed to aflatoxin face a substantially higher combined risk of liver cancer than either factor alone, which is one reason aflatoxin control is treated as a public health priority in regions where hepatitis B is also common." },
            visual: { type: "icon", key: "liver" }
          },
          {
            heading: "It is usually about repeated small exposures, not one bad meal",
            paragraphs: [
              "For most people, the danger is not a single contaminated meal but repeated, low-level exposure over a long period, from a diet where maize or groundnut products are eaten often and aflatoxin levels are chronically higher than they should be.",
              "This is precisely why prevention at the farm, storage and market level matters so much: it is not about catching one bad batch, it is about keeping average exposure low across an entire population, year after year."
            ]
          }
        ],
        flashcards: [
          { f: "Which organ does aflatoxin B1 primarily damage over the long term?", b: "The liver." },
          { f: "What is the medical term for the liver cancer linked to aflatoxin?", b: "Hepatocellular carcinoma." },
          { f: "What infection increases the combined risk of liver cancer alongside aflatoxin exposure?", b: "Chronic hepatitis B infection." },
          { f: "Is liver cancer risk usually linked to one contaminated meal or repeated exposure?", b: "Repeated, low-level exposure over months and years is the more significant driver for most people." },
          { f: "How does IARC classify aflatoxin B1's cancer risk?", b: "Group 1: carcinogenic to humans, the agency's strongest classification." }
        ],
        quiz: [
          { q: "Aflatoxin B1's most serious long-term health effect targets which organ?", o: ["Kidneys", "Liver", "Lungs", "Skin"], a: 1, e: "The liver is the primary organ affected by chronic aflatoxin exposure." },
          { q: "What is the medical name for aflatoxin-linked liver cancer?", o: ["Hepatocellular carcinoma", "Pancreatic carcinoma", "Colorectal carcinoma", "Melanoma"], a: 0, e: "Hepatocellular carcinoma is the liver cancer type most strongly linked to aflatoxin exposure." },
          { q: "What condition increases combined liver cancer risk alongside aflatoxin exposure?", o: ["Seasonal allergies", "Chronic hepatitis B infection", "Common cold", "Lactose intolerance"], a: 1, e: "Hepatitis B and aflatoxin exposure combined raise liver cancer risk more than either alone." },
          { q: "Is a single contaminated meal usually the main driver of aflatoxin-linked cancer risk?", o: ["Yes, always", "No, repeated low-level exposure over time matters more", "Only if eaten raw", "Cancer risk is unrelated to exposure pattern"], a: 1, e: "Chronic, repeated exposure is the more significant long-term risk factor." },
          { q: "What does an IARC Group 1 classification mean?", o: ["No evidence of harm", "Possibly carcinogenic", "Carcinogenic to humans, the strongest evidence category", "Banned worldwide"], a: 2, e: "Group 1 is reserved for substances with strong, consistent evidence of causing cancer in humans." }
        ]
      },
      {
        id: "t2m2",
        title: "Acute Poisoning: When Exposure Is Severe",
        lede: "Most aflatoxin harm builds up slowly, but very high, short-term exposure can cause sudden, severe illness. This has happened in real, documented outbreaks.",
        heroIcon: "hospital",
        sections: [
          {
            heading: "What acute aflatoxicosis looks like",
            paragraphs: [
              "When people eat food with very high aflatoxin levels over a short period, the liver can be overwhelmed quickly, a condition called acute aflatoxicosis. Symptoms can include vomiting, abdominal pain, and in severe cases, rapid liver failure, jaundice and death.",
              "This is rare compared to the slower, chronic form of exposure, but it is not merely theoretical. It has happened in real outbreaks tied to specific, heavily contaminated harvests."
            ],
            callout: { type: "rust", text: "The best-documented example: in 2004, an outbreak of acute aflatoxin poisoning in Kenya's Eastern Province, linked to badly contaminated, home-grown maize eaten during a period of food shortage, was investigated by Kenyan health authorities together with international public health agencies. It was recorded as the largest acute aflatoxicosis outbreak documented at the time, with more than 100 confirmed deaths. Smaller, related outbreaks have been reported in the same general region in subsequent years." }
          },
          {
            heading: "Why outbreaks like this happen",
            paragraphs: [
              "These events tend to share a pattern: a poor harvest or food shortage forces households to eat maize that would normally be rejected or sold off cheaply, storage conditions were already compromised by unusual rainfall, and there was limited access to testing or alternative food at the time it mattered most.",
              "This is why aflatoxin prevention programmes treat drought years and food shortages as higher-alert periods, when the incentive to eat visibly poor-quality grain, out of necessity, is at its highest."
            ]
          }
        ],
        flashcards: [
          { f: "What is acute aflatoxicosis?", b: "Sudden, severe illness, including possible liver failure, caused by eating very high levels of aflatoxin over a short period." },
          { f: "What real event is the best-documented example of a large acute aflatoxicosis outbreak?", b: "The 2004 outbreak in Kenya's Eastern Province, linked to badly contaminated home-grown maize, with more than 100 confirmed deaths." },
          { f: "What situation commonly precedes these outbreaks?", b: "A poor harvest or food shortage that forces households to eat maize that would normally be rejected, combined with storage conditions already compromised by unusual rain." },
          { f: "Why are drought years treated as higher-alert periods for prevention programmes?", b: "Because food shortage increases the pressure to eat poor-quality grain out of necessity, raising acute exposure risk." },
          { f: "Is acute aflatoxicosis more or less common than chronic, long-term exposure effects?", b: "Much less common. Most aflatoxin-related harm globally comes from repeated, lower-level chronic exposure, not acute poisoning events." }
        ],
        quiz: [
          { q: "What is acute aflatoxicosis?", o: ["A mild seasonal allergy", "Sudden, severe illness from very high short-term aflatoxin exposure", "A chronic skin condition", "A type of crop disease"], a: 1, e: "It refers to rapid, severe poisoning, including possible liver failure, from very high exposure." },
          { q: "Which documented event is widely cited as the largest recorded acute aflatoxicosis outbreak?", o: ["A 2004 outbreak in Kenya's Eastern Province", "A 1990 outbreak in Brazil", "A 2015 outbreak in France", "A 1980 outbreak in Canada"], a: 0, e: "The 2004 Kenya outbreak, linked to contaminated home-grown maize, is the best-documented large-scale case." },
          { q: "What situation commonly precedes acute aflatoxicosis outbreaks?", o: ["Abundant harvests and surplus food", "Food shortage forcing consumption of poor-quality grain", "Excess refrigeration", "Overuse of pesticides"], a: 1, e: "Shortage-driven consumption of grain that would normally be rejected is a common precondition." },
          { q: "Which form of aflatoxin exposure causes most global health harm overall?", o: ["Acute, short-term exposure", "Chronic, repeated low-level exposure", "Exposure through skin contact", "Exposure through inhalation"], a: 1, e: "Chronic exposure, building liver cancer risk over years, accounts for most of the global health burden." },
          { q: "Why do prevention programmes pay special attention to drought years?", o: ["Drought has no effect on aflatoxin risk", "Food shortage increases pressure to eat poor-quality grain", "Drought always kills the fungus", "Drought only affects livestock"], a: 1, e: "Shortage during drought years raises the odds that heavily contaminated grain gets eaten anyway." }
        ]
      },
      {
        id: "t2m3",
        title: "Children and Growth",
        lede: "Some of the most concerning aflatoxin research in recent decades has focused not on adults, but on what regular exposure does to young children.",
        heroIcon: "child",
        sections: [
          {
            heading: "A link to stunted growth",
            paragraphs: [
              "Multiple studies conducted in parts of Africa have found an association between regular aflatoxin exposure in early childhood, often through contaminated weaning foods made from maize or groundnut, and stunted growth, meaning a child is significantly shorter than expected for their age.",
              "Researchers believe this may work partly through effects on gut health and nutrient absorption, and partly through more direct effects on the immune system and protein production in the body, though the exact biological pathway is still an active area of research."
            ],
            callout: { type: "accent", text: "Researchers describe this as an association backed by a growing body of evidence, not a single settled proof of direct cause. It is treated seriously precisely because stunting has lifelong consequences for health, learning and earning potential, and because the exposure route, weaning foods, is hard for a young child to avoid if the household's staple grain is contaminated." }
          },
          {
            heading: "Why this age group is especially vulnerable",
            paragraphs: [
              "Young children eat relatively more food per unit of body weight than adults, and in many households, maize- or groundnut-based porridge is introduced early and eaten daily. That combination means a child's exposure, relative to body size, can be considerably higher than an adult eating the very same food.",
              "It is also a stage of rapid physical development, when the body has the least capacity to absorb repeated insults to growth and immune function without a visible effect later."
            ]
          }
        ],
        flashcards: [
          { f: "What childhood health outcome has been linked to regular aflatoxin exposure in several African studies?", b: "Stunted growth, where a child is significantly shorter than expected for their age." },
          { f: "Through what kind of food are young children commonly exposed to aflatoxin?", b: "Weaning foods made from maize or groundnut, such as porridge." },
          { f: "Why are young children potentially more exposed, relative to body size, than adults eating the same food?", b: "They eat more food per unit of body weight, and staple porridge is often eaten daily from an early age." },
          { f: "Is the link between aflatoxin and childhood stunting described as fully proven or as an association?", b: "As an association backed by a growing body of evidence; researchers are still studying the exact biological pathway." },
          { f: "Why does developmental stage make young children more vulnerable?", b: "It is a period of rapid growth and immune development, giving the body less capacity to absorb repeated harm without lasting effects." }
        ],
        quiz: [
          { q: "What growth-related outcome has research linked to regular childhood aflatoxin exposure?", o: ["Faster growth", "Stunted growth", "No measurable effect", "Improved immunity"], a: 1, e: "Multiple studies have found an association with stunted growth in young children." },
          { q: "Through what food route are children commonly exposed?", o: ["Bottled water", "Weaning foods made from maize or groundnut", "Imported sweets", "Fortified milk formula only"], a: 1, e: "Maize- or groundnut-based weaning foods are a common early exposure route." },
          { q: "Why might children be more exposed, relative to their size, than adults eating the same diet?", o: ["Children eat less food overall", "Children eat more food per unit of body weight", "Children have stronger livers", "Exposure is unrelated to diet"], a: 1, e: "Higher food intake relative to body weight increases relative exposure in children." },
          { q: "How is the aflatoxin-stunting link best described scientifically?", o: ["A fully proven direct cause with no further questions", "An association supported by growing evidence, still being studied", "A discredited theory", "Unrelated to nutrition research"], a: 1, e: "It is a well-supported association, though the precise biological mechanism is still being researched." },
          { q: "Why is early childhood considered an especially vulnerable period?", o: ["It is a period of rapid growth and immune development", "Children are less exposed to food overall", "Aflatoxin cannot affect children", "Children's livers are unaffected by toxins"], a: 0, e: "Rapid development leaves less capacity to absorb repeated harm without lasting effects." }
        ]
      },
      {
        id: "t2m4",
        title: "Livestock, Milk and the Feed Chain",
        lede: "Aflatoxin does not stop with the crop that was directly contaminated. It travels forward through animal feed, with consequences for farm income and for the food people eat next.",
        heroIcon: "livestock",
        sections: [
          {
            heading: "What contaminated feed does to farm animals",
            paragraphs: [
              "Poultry, pigs and cattle fed grain or groundnut cake with high aflatoxin levels commonly show reduced growth rates, poorer feed conversion (meaning they need more feed to gain the same weight), weakened immune response, and in dairy cattle, reduced milk yield.",
              "For a smallholder or commercial farmer, these effects translate directly into lost income, even when no single animal becomes visibly sick: production quietly underperforms, and the underlying cause is often not identified without specific feed testing."
            ],
            visual: { type: "icon", key: "livestock" }
          },
          {
            heading: "The milk connection",
            paragraphs: [
              "When a dairy animal eats feed contaminated with aflatoxin B1, its body converts some of that toxin into aflatoxin M1, which then appears in the milk. Because milk is often a primary food for infants and young children, most countries set a stricter legal limit for aflatoxin M1 in milk than for aflatoxin B1 in the original grain or feed.",
              "This is one of the clearest illustrations of why aflatoxin management has to cover the entire chain, not just food crops eaten directly by people: a problem that starts in a feed sack can end up in a cup of milk given to a baby."
            ],
            callout: { type: "leaf", text: "Practical implication: testing and controlling aflatoxin in animal feed protects farm profitability and protects the safety of milk, meat and eggs further down the chain." }
          }
        ],
        flashcards: [
          { f: "Name three effects of aflatoxin-contaminated feed on farm animals.", b: "Reduced growth rate, poorer feed conversion, and weakened immune response (with reduced milk yield in dairy cattle)." },
          { f: "How does aflatoxin B1 in feed end up as aflatoxin M1 in milk?", b: "The dairy animal's body metabolises B1 from contaminated feed, converting some of it into M1, which is then excreted in milk." },
          { f: "Why is the legal limit for aflatoxin M1 in milk usually stricter than the limit for B1 in feed?", b: "Because milk is a primary food for infants and young children, who are especially vulnerable." },
          { f: "Can aflatoxin harm a farm's income even if no animal appears visibly sick?", b: "Yes. Reduced growth and feed efficiency can quietly reduce profitability without an obvious health crisis." },
          { f: "Why does aflatoxin management need to include animal feed, not just food crops?", b: "Because contamination in feed can travel forward into milk, meat and eggs that people consume." }
        ],
        quiz: [
          { q: "What effect does aflatoxin-contaminated feed commonly have on farm animals?", o: ["Faster growth", "Reduced growth and poorer feed conversion", "No measurable effect", "Improved milk yield"], a: 1, e: "Contaminated feed typically reduces growth rate and feed efficiency, and can lower milk yield." },
          { q: "How does aflatoxin M1 end up in milk?", o: ["Added directly by farmers", "Metabolised from B1 by dairy animals that ate contaminated feed", "Formed by pasteurisation", "It cannot appear in milk"], a: 1, e: "M1 is produced when a dairy animal's body processes aflatoxin B1 from its feed." },
          { q: "Why is the legal limit for aflatoxin M1 in milk often stricter than for B1 in grain?", o: ["Milk is less regulated", "Milk is a primary food for infants and young children", "M1 is less toxic", "There is no difference in limits"], a: 1, e: "Because milk feeds vulnerable infants and children, regulators apply tighter limits." },
          { q: "Can contaminated feed hurt farm income without any animal looking visibly sick?", o: ["No, harm is always visible", "Yes, through quietly reduced growth and feed efficiency", "Only in poultry", "Only in cold climates"], a: 1, e: "Subclinical effects on growth and feed conversion can reduce profit without obvious illness." },
          { q: "Why must aflatoxin control extend to animal feed, not just crops eaten directly?", o: ["Feed contamination cannot affect people", "Contamination in feed can pass into milk, meat and eggs", "Feed is never contaminated", "Animals destroy all toxins"], a: 1, e: "Feed-borne aflatoxin can travel into animal products that people later consume." }
        ]
      }
    ]
  },

  {
    id: "t3",
    icon: "coins",
    title: "The Economic Toll",
    summary: "Aflatoxin is a livelihood problem as much as a health problem, from a single farmer's harvest to whole national export markets.",
    tags: ["Economics", "Trade"],
    modules: [
      {
        id: "t3m1",
        title: "What a Contaminated Harvest Costs a Farmer",
        lede: "For an individual farming household, aflatoxin contamination usually shows up first as a price problem, not a health problem, and it can be sudden and severe.",
        heroIcon: "coins",
        sections: [
          {
            heading: "Rejected or discounted at the point of sale",
            paragraphs: [
              "Buyers along the value chain, local traders, mills, feed companies and exporters, increasingly test incoming grain for aflatoxin before agreeing a price. A batch that fails the test can be rejected outright, or accepted only at a steep discount to whoever is still willing to take the risk.",
              "For a smallholder household, where one harvest may represent most of a year's cash income from farming, a single contaminated batch can erase the season's profit margin entirely, even though the crop still exists physically and could otherwise have been sold at full price."
            ],
            visual: { type: "chart-line", title: "Illustrative price received as contamination level rises", data: [
              { label: "Clean", value: 100 },
              { label: "Slightly elevated", value: 85 },
              { label: "Above limit", value: 45 },
              { label: "Heavily contaminated", value: 15 }
            ] }
          },
          {
            heading: "Why prevention pays for itself",
            paragraphs: [
              "Because the price drop-off is steep rather than gradual once a legal limit is crossed, even a modest improvement in drying speed or storage practice, cheap relative to the value of a harvest, can be the difference between a full-price sale and a rejected batch.",
              "This is the economic argument underlying most aflatoxin extension programmes: prevention is framed not only as a health message but as a direct, calculable way to protect income that a farming household has already earned through the season's labour."
            ],
            callout: { type: "accent", text: "This is also why many programmes teach simple, low-cost moisture checks and hermetic (sealed) storage rather than only laboratory testing: prevention at the farm is usually far cheaper than the value lost to a single rejected batch." }
          }
        ],
        flashcards: [
          { f: "What typically happens to a grain batch that fails an aflatoxin test at sale?", b: "It can be rejected outright, or accepted only at a steep discount." },
          { f: "Why can one contaminated batch be so damaging to a smallholder household?", b: "Because that harvest may represent most of the household's yearly cash income from farming." },
          { f: "Is the price drop-off from contamination usually gradual or steep?", b: "Steep, especially once a legal limit is crossed, rather than a smooth, gradual decline." },
          { f: "Why is prevention often described as paying for itself?", b: "Because low-cost steps like faster drying or hermetic storage are cheap relative to the value lost when a batch is rejected." },
          { f: "Name one low-cost prevention practice commonly taught in extension programmes.", b: "Simple moisture checks before storage, and use of hermetic (sealed) storage bags." }
        ],
        quiz: [
          { q: "What commonly happens to grain that fails an aflatoxin test before sale?", o: ["It is always accepted at full price", "It may be rejected or bought only at a steep discount", "It is destroyed by law everywhere", "Nothing changes"], a: 1, e: "Buyers routinely reject or heavily discount contaminated batches." },
          { q: "Why can a single contaminated batch be so damaging to a smallholder?", o: ["It has no real effect on income", "It may represent most of the year's farming income", "Farmers are insured against this loss", "Buyers always pay full price regardless"], a: 1, e: "One harvest is often a household's main cash income source for the year." },
          { q: "How does price typically change as contamination rises past the legal limit?", o: ["It increases", "It drops steeply rather than gradually", "It stays exactly the same", "It has no relation to contamination"], a: 1, e: "There is usually a sharp price drop once contamination crosses regulatory thresholds." },
          { q: "Why is prevention often considered cost-effective compared to loss from rejection?", o: ["Prevention is more expensive than the loss", "Low-cost practices like faster drying are cheap relative to a rejected batch's value", "Prevention has no effect on outcomes", "Testing is always free"], a: 1, e: "Simple, low-cost prevention steps are typically far cheaper than the income lost to rejection." },
          { q: "What is one commonly taught low-cost prevention practice?", o: ["Ignoring moisture levels", "Simple moisture checks and hermetic storage", "Storing grain in open, uncovered piles", "Skipping drying entirely"], a: 1, e: "Checking moisture and using sealed, hermetic storage are widely promoted low-cost measures." }
        ]
      },
      {
        id: "t3m2",
        title: "Trade, Export and the Global Rulebook",
        lede: "Aflatoxin is one of the most heavily regulated food contaminants in international trade, and the rules genuinely shape which markets a country's grain or nuts can reach.",
        heroIcon: "globe",
        sections: [
          {
            heading: "Legal limits vary, but they are strict almost everywhere",
            paragraphs: [
              "Most countries and trading blocs set maximum legal limits for aflatoxin in food and feed, guided in part by the international reference standards published by the Codex Alimentarius Commission, the joint FAO and World Health Organization body that sets global food safety guidelines.",
              "In practice, some markets apply notably strict limits. The European Union, for example, applies some of the tightest limits in the world for nuts, dried fruit and spices intended for direct human consumption, well below limits used in some other markets. Any consignment that fails testing on arrival can be turned away or destroyed, regardless of how it was priced when it left the country of origin."
            ]
          },
          {
            heading: "What this means for exporting countries",
            paragraphs: [
              "Consignments of groundnuts, tree nuts, dried fruit and spices from a range of countries, including several in Africa, are periodically flagged and rejected at ports of entry into strict markets through official food safety alert and monitoring systems that track contaminant findings across borders.",
              "For exporting countries, this creates a direct link between farm-level and warehouse-level aflatoxin control and access to the most valuable international markets. Consistent, verifiable safety at the production end is increasingly a requirement for market access, not simply a quality preference."
            ],
            callout: { type: "rust", text: "The takeaway for policy and industry: investment in aflatoxin control is not only a domestic food safety measure, it is increasingly a trade competitiveness issue, deciding which markets a country's agricultural exports can actually reach." }
          }
        ],
        flashcards: [
          { f: "What international body publishes reference food safety standards that many countries' aflatoxin limits are guided by?", b: "The Codex Alimentarius Commission, a joint FAO and World Health Organization body." },
          { f: "Which major market is known for applying some of the strictest aflatoxin limits in the world?", b: "The European Union, particularly for nuts, dried fruit and spices meant for direct human consumption." },
          { f: "What can happen to an export consignment that fails an aflatoxin test on arrival?", b: "It can be turned away or destroyed at the port of entry, regardless of its original price." },
          { f: "How do official monitoring systems affect exporting countries?", b: "They periodically flag and track rejected consignments across borders, creating pressure for consistent, verifiable safety at the production end." },
          { f: "Why is aflatoxin control increasingly described as a trade competitiveness issue?", b: "Because consistent safety at the farm and warehouse level increasingly determines which international markets a country's exports can access." }
        ],
        quiz: [
          { q: "Which body publishes widely used international reference food safety standards?", o: ["The World Trade Organization", "The Codex Alimentarius Commission", "The International Monetary Fund", "UNESCO"], a: 1, e: "Codex Alimentarius, run jointly by FAO and WHO, sets internationally referenced food safety standards." },
          { q: "Which market is often cited for applying particularly strict aflatoxin limits?", o: ["The European Union", "No market regulates aflatoxin", "Only landlocked countries", "Only countries that grow no maize"], a: 0, e: "The EU applies some of the strictest aflatoxin limits globally, especially for nuts and dried fruit." },
          { q: "What can happen to a consignment that fails an aflatoxin check at a port of entry?", o: ["It is always allowed through with a warning", "It can be rejected or destroyed", "It receives a discount but is sold anyway", "Nothing happens"], a: 1, e: "Failed consignments can be turned away or destroyed outright." },
          { q: "Why is aflatoxin control increasingly framed as a trade issue, not just a health issue?", o: ["It has no link to trade at all", "Consistent safety increasingly determines market access for exports", "Trade rules ignore contamination", "Only domestic sales are affected"], a: 1, e: "Market access for exports increasingly depends on verifiable, consistent aflatoxin control." },
          { q: "What kind of products are most often flagged for aflatoxin at international borders?", o: ["Fresh fish", "Groundnuts, tree nuts, dried fruit and spices", "Bottled water", "Fresh flowers"], a: 1, e: "These dried, stored commodities are the ones most commonly flagged in international monitoring." }
        ]
      },
      {
        id: "t3m3",
        title: "Food Security and Post-Harvest Loss",
        lede: "Aflatoxin does not just affect income, it can make otherwise edible food unusable, adding a hidden layer to the wider problem of post-harvest food loss.",
        heroIcon: "warehouse",
        sections: [
          {
            heading: "A hidden multiplier on food loss",
            paragraphs: [
              "Post-harvest loss, food that is produced but never safely eaten or sold, is already a major food security concern in many regions, caused by pests, poor storage infrastructure and weak market access. Aflatoxin adds another dimension: grain that survived pests and physical damage can still become unfit for consumption or sale because of invisible toxin buildup.",
              "In households that rely heavily on a single staple like maize, this can mean choosing between eating grain that may be unsafe or losing food that took a full season to grow, a genuinely difficult trade-off in places where alternatives are limited."
            ]
          },
          {
            heading: "Why this connects prevention to broader development goals",
            paragraphs: [
              "Because of this link, aflatoxin control is often discussed alongside broader food security and nutrition goals, not treated as a narrow technical food-safety issue. Reducing aflatoxin contamination effectively increases the amount of a harvest that can be safely eaten or sold, without needing to grow any additional food.",
              "This framing, protecting the value of food that already exists rather than only producing more, is part of why prevention investment is often considered highly cost-effective at a national level."
            ],
            callout: { type: "leaf", text: "In short: preventing aflatoxin contamination is one of the more efficient ways to increase the effective food supply, since it protects harvests that have already been grown rather than requiring new land, water or labour." }
          }
        ],
        flashcards: [
          { f: "What is post-harvest loss?", b: "Food that is produced but never safely eaten or sold, due to pests, poor storage, spoilage or weak market access." },
          { f: "How does aflatoxin add a hidden layer to post-harvest loss?", b: "Grain that survives pests and physical damage can still become unsafe due to invisible toxin buildup." },
          { f: "Why can aflatoxin create a difficult trade-off for households reliant on one staple crop?", b: "They may have to choose between eating grain that could be unsafe or losing food that took a full season to grow, with few alternatives available." },
          { f: "Why is aflatoxin control often linked to broader food security goals?", b: "Because reducing contamination increases the amount of an existing harvest that can be safely eaten or sold, without needing more land or labour." },
          { f: "Why is preventing aflatoxin considered a cost-effective way to boost food supply?", b: "It protects the value of food already grown, rather than requiring additional resources to produce more." }
        ],
        quiz: [
          { q: "What is post-harvest loss?", o: ["Food lost before it is planted", "Food produced but never safely eaten or sold", "A type of fertiliser", "A farming technique"], a: 1, e: "It refers to food that is grown but lost to spoilage, pests, poor storage or weak markets before use." },
          { q: "How does aflatoxin add to post-harvest loss beyond pests and physical damage?", o: ["It has no additional effect", "It can make grain unsafe even if it looks physically fine", "It always destroys the crop visibly", "It only affects packaging"], a: 1, e: "Invisible toxin buildup can render otherwise intact-looking grain unsafe." },
          { q: "Why can aflatoxin create a hard trade-off for staple-reliant households?", o: ["They have unlimited alternative food", "They may have to choose between unsafe food and losing a season's harvest", "Aflatoxin never affects staple crops", "There is no trade-off involved"], a: 1, e: "Limited alternatives can force a difficult choice between risk and loss." },
          { q: "Why is aflatoxin control linked to food security policy, not just food safety policy?", o: ["It reduces the effective usable food supply from existing harvests", "It has nothing to do with food supply", "It only matters for export crops", "Food security is unrelated to safety"], a: 0, e: "Preventing contamination protects the usable portion of harvests already produced." },
          { q: "Why is aflatoxin prevention considered efficient for boosting food supply?", o: ["It requires new land and water", "It protects existing harvests rather than requiring new production", "It only works for animal feed", "It has no measurable benefit"], a: 1, e: "Protecting what is already grown is more resource-efficient than producing additional food." }
        ]
      },
      {
        id: "t3m4",
        title: "The Hidden Cost of Testing and Compliance",
        lede: "Meeting aflatoxin safety standards is not free. Testing, certification and compliance carry real costs that fall unevenly across the value chain.",
        heroIcon: "microscope",
        sections: [
          {
            heading: "Testing is not automatically accessible to everyone",
            paragraphs: [
              "Reliable aflatoxin testing typically requires laboratory equipment, trained technicians and consistent sample handling. In many regions, especially where small and medium enterprises and informal-sector traders dominate the value chain, access to affordable, nearby testing remains limited.",
              "Simpler field-level screening tools exist and are improving, but they generally serve as a first filter rather than a full replacement for laboratory confirmation, particularly for consignments intended for export or for stricter markets."
            ]
          },
          {
            heading: "Who bears the cost, and why it matters for the informal sector",
            paragraphs: [
              "Larger, formal exporters and processors can usually absorb testing and certification costs as a normal part of doing business. Smaller, informal-sector actors, including many smallholders, local processors and street-level food vendors, often cannot, which can quietly exclude them from higher-value, safety-verified supply chains even when their actual product quality is comparable.",
              "This is part of why recent food safety initiatives across Africa put particular emphasis on the informal sector specifically: without support, the cost of proving safety can become a barrier to market access in its own right, separate from the underlying safety of the food itself."
            ],
            callout: { type: "accent", text: "This is precisely the gap that projects like FS4Africa are designed to address: lowering the practical cost and difficulty of achieving verified food safety for smaller, informal-sector actors, covered in detail in the Prevention and Solutions topic." }
          }
        ],
        flashcards: [
          { f: "What is required for reliable aflatoxin testing?", b: "Laboratory equipment, trained technicians, and consistent sample handling." },
          { f: "How do simpler field-level screening tools typically function relative to lab testing?", b: "As a first filter, not usually a full replacement for laboratory confirmation, especially for export markets." },
          { f: "Who can usually absorb testing and certification costs most easily?", b: "Larger, formal exporters and processors, as a normal cost of doing business." },
          { f: "How can testing costs affect informal-sector actors even when their product quality is fine?", b: "The cost of proving safety can exclude them from higher-value, safety-verified supply chains, separate from actual product quality." },
          { f: "Why do recent African food safety initiatives emphasise the informal sector specifically?", b: "Because without support, the cost of compliance can become its own barrier to market access, unrelated to real food safety." }
        ],
        quiz: [
          { q: "What is typically required for reliable aflatoxin testing?", o: ["Only visual inspection", "Laboratory equipment, trained staff and consistent sampling", "A simple smell test", "Nothing, testing isn't needed"], a: 1, e: "Reliable testing depends on proper lab infrastructure and consistent procedures." },
          { q: "How do simple field-level screening tools usually function?", o: ["As a complete replacement for lab testing", "As a first filter, not usually a full replacement", "They are never used", "They are more accurate than lab tests"], a: 1, e: "Field tools help with early screening but generally don't replace lab confirmation for critical decisions." },
          { q: "Who can most easily absorb the cost of testing and certification?", o: ["Small informal traders", "Larger, formal exporters and processors", "No one can afford it", "Only consumers"], a: 1, e: "Larger formal businesses typically have more capacity to absorb these costs." },
          { q: "How can compliance costs unfairly affect informal-sector actors?", o: ["They have no effect on market access", "They can exclude good-quality producers from safety-verified markets due to cost alone", "They only affect large exporters", "They always lower prices for everyone"], a: 1, e: "Cost barriers can exclude otherwise good producers from higher-value markets." },
          { q: "Why do initiatives like FS4Africa focus on the informal sector?", o: ["The informal sector has no food safety challenges", "To lower the practical cost and difficulty of achieving verified safety for smaller actors", "To replace formal food safety systems entirely", "Because the informal sector is unaffected by trade rules"], a: 1, e: "These initiatives aim to make safety verification more accessible for smaller, informal-sector participants." }
        ]
      }
    ]
  },

  {
    id: "t4",
    icon: "map",
    title: "Aflatoxin in Africa",
    summary: "Why the risk is often higher on the continent, and how researchers, regulators and farmers are responding at scale.",
    tags: ["Africa", "Context"],
    modules: [
      {
        id: "t4m1",
        title: "Why the Risk Is Higher Here",
        lede: "Aflatoxin is a global problem, but several factors combine to make it a particularly persistent challenge across much of Africa.",
        heroIcon: "map",
        sections: [
          {
            heading: "Climate, staple crops and storage, together",
            paragraphs: [
              "Large parts of Africa share the warm, humid climate conditions that favour Aspergillus flavus and Aspergillus parasiticus growth for much of the year. That alone would raise background risk, but it combines with two other factors: heavy dietary reliance on maize and groundnut as daily staples, and, in many areas, storage infrastructure that has not kept pace with the volumes farmers need to protect.",
              "None of these three factors is unique to Africa individually. It is the combination, favourable climate, staple-crop dependence and storage gaps occurring together across a wide area, that makes aflatoxin a persistent, structural challenge here rather than an occasional problem."
            ],
            visual: { type: "icon", key: "map" }
          },
          {
            heading: "Not a fixed condition, a solvable combination",
            paragraphs: [
              "It is worth being precise about what this does and does not mean. It does not mean African food is inherently less safe, and it does not mean the problem cannot be substantially reduced. Countries with similarly warm, humid climates elsewhere in the world have measurably lowered aflatoxin exposure through investment in drying technology, storage infrastructure and monitoring.",
              "The rest of this topic, and the following topic on prevention, look at what a serious, sustained response actually looks like, and what is already underway across the continent."
            ]
          }
        ],
        flashcards: [
          { f: "Name three factors that combine to make aflatoxin risk higher across much of Africa.", b: "Warm, humid climate favouring the fungus; heavy dietary reliance on maize and groundnut; and storage infrastructure gaps in many areas." },
          { f: "Is any one of these three factors unique to Africa?", b: "No, individually none is unique. It is the combination occurring together across a wide area that makes the challenge persistent." },
          { f: "Does this mean African food is inherently less safe?", b: "No. It means underlying structural conditions raise background risk, not that safety cannot be substantially improved." },
          { f: "Has any region successfully reduced aflatoxin risk despite a similarly warm, humid climate?", b: "Yes, various countries with comparable climates have measurably lowered exposure through drying technology, storage investment and monitoring." },
          { f: "What is the overall framing of this challenge in Africa?", b: "A serious but solvable, structural combination of factors, being actively addressed through research, breeding and storage improvements." }
        ],
        quiz: [
          { q: "Which combination of factors raises aflatoxin risk across much of Africa?", o: ["Cold climate and low staple crop use", "Warm humid climate, staple crop reliance, and storage gaps", "High rainfall only", "Low population density"], a: 1, e: "It's the combination of climate, staple crop dependence and storage infrastructure that drives persistent risk." },
          { q: "Is any single one of these risk factors unique to the African continent?", o: ["Yes, all three are unique to Africa", "No, none are unique individually, but their combination is widespread here", "Yes, only the climate factor is unique", "The factors are unrelated to geography"], a: 1, e: "Each factor exists elsewhere too; it's their combination across a wide area that matters." },
          { q: "Does higher background risk mean African food is inherently unsafe?", o: ["Yes, permanently", "No, it reflects structural conditions that can be substantially improved", "Yes, and nothing can be done", "The question is meaningless"], a: 1, e: "Structural risk factors can be addressed through investment and better practice." },
          { q: "Have other warm, humid regions of the world reduced aflatoxin exposure successfully?", o: ["No, it is impossible everywhere", "Yes, through drying technology, storage investment and monitoring", "Only by changing climate", "Only by abandoning maize farming"], a: 1, e: "Investment in infrastructure and monitoring has measurably reduced exposure elsewhere." },
          { q: "How should this topic's framing of Africa's aflatoxin challenge be understood?", o: ["As an unsolvable permanent condition", "As a serious but solvable, structural combination of factors", "As irrelevant to policy", "As purely a marketing narrative"], a: 1, e: "It's presented as serious and structural, but addressable through sustained effort." }
        ]
      },
      {
        id: "t4m2",
        title: "A Continental Response: PACA and Beyond",
        lede: "Aflatoxin control in Africa is not left to individual farmers alone. Continental and national institutions have built coordinated responses over more than a decade.",
        heroIcon: "shield",
        sections: [
          {
            heading: "The Partnership for Aflatoxin Control in Africa",
            paragraphs: [
              "The Partnership for Aflatoxin Control in Africa, generally known as PACA, was established under the African Union Commission to coordinate aflatoxin control efforts across the continent. Its role is largely coordinating: connecting national governments, researchers, development partners and the private sector around shared strategies, rather than running programmes directly on the ground everywhere itself.",
              "This kind of continental coordination matters because aflatoxin does not respect borders. Grain, groundnut and animal feed are traded regionally, and inconsistent standards or enforcement in one country can undermine progress made in a neighbouring one."
            ]
          },
          {
            heading: "National regulators and research institutes do the groundwork",
            paragraphs: [
              "Underneath continental coordination, individual countries maintain their own food safety authorities responsible for setting and enforcing national aflatoxin limits, alongside national agricultural research institutes that run crop breeding and extension programmes described elsewhere in this course.",
              "The combination, continental coordination plus national implementation plus locally grounded research, is the model most aflatoxin control strategies across Africa are built around today, rather than any single organisation acting alone."
            ],
            callout: { type: "leaf", text: "The practical lesson: aflatoxin control works best as a layered system, continental coordination, national regulation, and local research and extension, each doing a different part of the job." }
          }
        ],
        flashcards: [
          { f: "What is PACA?", b: "The Partnership for Aflatoxin Control in Africa, established under the African Union Commission to coordinate aflatoxin control efforts continent-wide." },
          { f: "Does PACA generally run ground-level programmes directly, or coordinate?", b: "It primarily coordinates, connecting governments, researchers, development partners and the private sector around shared strategies." },
          { f: "Why does continental-level coordination matter for a problem like aflatoxin?", b: "Because grain, groundnut and feed are traded regionally, so inconsistent standards in one country can undermine progress in a neighbouring one." },
          { f: "What role do national food safety authorities play?", b: "Setting and enforcing national aflatoxin limits within their own countries." },
          { f: "What is the general model most African aflatoxin strategies are built around?", b: "A layered system: continental coordination, national regulation, and local research and extension working together." }
        ],
        quiz: [
          { q: "What does PACA stand for?", o: ["Pan-African Cocoa Authority", "Partnership for Aflatoxin Control in Africa", "Programme for Agricultural Chemical Analysis", "Pesticide and Aflatoxin Control Agency"], a: 1, e: "PACA is the Partnership for Aflatoxin Control in Africa, established under the African Union Commission." },
          { q: "What is PACA's primary role?", o: ["Running every ground-level programme directly", "Coordinating national and continental aflatoxin control efforts", "Manufacturing pesticides", "Setting global trade tariffs"], a: 1, e: "PACA mainly coordinates strategy and partnerships rather than implementing every programme itself." },
          { q: "Why does aflatoxin control benefit from continental coordination?", o: ["Aflatoxin only affects one country at a time", "Grain and feed are traded regionally, so inconsistent standards spill across borders", "Coordination has no practical benefit", "Countries never trade agricultural products"], a: 1, e: "Regional trade means weak controls in one country can affect neighbours." },
          { q: "Who is typically responsible for setting and enforcing a country's own aflatoxin limits?", o: ["Only PACA directly", "National food safety authorities", "Individual consumers", "International trade unions"], a: 1, e: "National regulatory bodies handle domestic enforcement of food safety limits." },
          { q: "What model do most African aflatoxin strategies follow today?", o: ["A single global authority acting alone", "A layered system of continental coordination, national regulation and local research", "No coordination at all", "Only private company initiatives"], a: 1, e: "Effective control combines coordination at multiple levels rather than relying on one actor." }
        ]
      },
      {
        id: "t4m3",
        title: "Research and Breeding Across Borders",
        lede: "Some of the most promising long-term solutions come from agricultural research that spans several African countries at once, sharing findings rather than working in isolation.",
        heroIcon: "seedling",
        sections: [
          {
            heading: "Aflasafe: biocontrol developed for African conditions",
            paragraphs: [
              "One of the best-known aflatoxin biocontrol products used in Africa is Aflasafe, developed through research led by the International Institute of Tropical Agriculture (IITA) together with the United States Department of Agriculture's Agricultural Research Service. It works by spreading harmless, native strains of Aspergillus flavus across a field before or during crop growth, which then outcompete the toxin-producing strains already present in the soil.",
              "Aflasafe products are formulated separately for different countries, since the specific friendly fungal strains used are selected from each country's own soil to suit local conditions, and the product is now registered and used in more than a dozen African countries."
            ],
            visual: { type: "icon", key: "seedling" }
          },
          {
            heading: "Breeding resistance directly into the crop",
            paragraphs: [
              "A separate, complementary line of research focuses on plant breeding: developing maize and groundnut varieties that are naturally harder for Aspergillus fungi to infect in the first place, reducing the need for other interventions. Some of this breeding work, including efforts connected to Kenya, has also aimed to combine aflatoxin resistance with improved vitamin E content in the crop, adding a nutritional benefit alongside the safety improvement.",
              "Because these breeding programmes are research-intensive and slow by nature, seed varieties typically take years to develop and release. This is precisely why they are treated as a long-term complement to biocontrol and good storage practice, not a fast, stand-alone fix."
            ],
            callout: { type: "accent", text: "These are genuinely separate, independent efforts, biocontrol, breeding, and the storage and extension work covered elsewhere in this course. The next topic looks specifically at how newer initiatives are trying to connect this kind of research more tightly with farmers and value chain actors on the ground." }
          }
        ],
        flashcards: [
          { f: "What is Aflasafe and how does it work?", b: "A biocontrol product that spreads harmless, native strains of Aspergillus flavus across a field, which outcompete toxin-producing strains already present." },
          { f: "Which institutions led the development of Aflasafe?", b: "The International Institute of Tropical Agriculture (IITA), together with the USDA's Agricultural Research Service." },
          { f: "Why are Aflasafe products formulated differently for different countries?", b: "Because the friendly fungal strains used are selected from each country's own local soil to suit local conditions." },
          { f: "What is the goal of crop breeding research for aflatoxin, separate from biocontrol?", b: "Developing maize and groundnut varieties that are naturally harder for the fungus to infect, sometimes with added nutritional benefits like vitamin E." },
          { f: "Why is breeding considered a long-term complement rather than a fast fix?", b: "Because breeding new, stable crop varieties is research-intensive and typically takes years to develop and release." }
        ],
        quiz: [
          { q: "How does Aflasafe reduce aflatoxin contamination?", o: ["By killing all fungi in the soil", "By spreading harmless native fungal strains that outcompete toxin-producing ones", "By coating grain in a chemical layer", "By changing soil pH"], a: 1, e: "Aflasafe uses competitive exclusion: friendly strains crowd out the toxin producers." },
          { q: "Which institutions were central to developing Aflasafe?", o: ["IITA and USDA's Agricultural Research Service", "A single private pesticide company", "The World Trade Organization", "A university with no agricultural research focus"], a: 0, e: "IITA led the work together with USDA-ARS." },
          { q: "Why do Aflasafe products differ from country to country?", o: ["They don't differ at all", "Locally selected friendly fungal strains suit local soil conditions", "Marketing preferences alone", "Random variation with no scientific basis"], a: 1, e: "Each country's product uses strains sourced from its own local environment." },
          { q: "What is the aim of breeding aflatoxin-resistant maize and groundnut varieties?", o: ["To make crops taste different", "To make crops naturally harder for the fungus to infect", "To eliminate the need for water", "To increase fungal growth"], a: 1, e: "Resistant breeding reduces the crop's susceptibility to infection in the first place." },
          { q: "Why is breeding treated as a long-term complement rather than a quick fix?", o: ["Breeding happens instantly", "Developing and releasing new varieties takes years of research", "Breeding is unrelated to aflatoxin", "It replaces all other prevention methods immediately"], a: 1, e: "Plant breeding is a slow, research-intensive process by nature." }
        ]
      },
      {
        id: "t4m4",
        title: "Lessons from Real Outbreaks",
        lede: "The clearest evidence for why aflatoxin control matters comes from documented, real-world events, not hypothetical risk. What changed afterward is just as instructive as the events themselves.",
        heroIcon: "warning",
        sections: [
          {
            heading: "What the 2004 Kenya outbreak changed",
            paragraphs: [
              "The 2004 acute aflatoxicosis outbreak in Kenya's Eastern Province, discussed earlier in this course, prompted a significant shift in how the country approached aflatoxin monitoring, including strengthened surveillance of maize markets and clearer public guidance during periods of food shortage, when contaminated grain is most likely to be eaten out of necessity.",
              "Smaller, related outbreaks reported in the same general region in later years were generally detected and responded to faster than in 2004, which public health researchers have pointed to as evidence that stronger monitoring systems were making a measurable difference, even though the underlying climate and storage risk factors had not disappeared."
            ],
            callout: { type: "rust", text: "It's worth being careful here: better detection is genuine progress, but it is not the same as eliminating the underlying risk. The climate and storage conditions that make outbreaks possible are still present, which is exactly why prevention, not just faster response, remains the priority." }
          },
          {
            heading: "The broader pattern across documented cases",
            paragraphs: [
              "Across the documented cases from different countries and years, a consistent pattern emerges: outbreaks cluster around food shortage periods, when normally rejected grain gets eaten anyway, and around specific regions where storage conditions and crop reliance combine unfavourably in a given season.",
              "This pattern is precisely why modern prevention strategies target the whole system, drying and storage practice, biocontrol, breeding, market-level testing, and monitoring during high-risk periods, rather than relying on any single intervention to prevent every possible outbreak."
            ]
          }
        ],
        flashcards: [
          { f: "What change did the 2004 Kenya outbreak prompt in the country's approach to aflatoxin?", b: "Strengthened surveillance of maize markets and clearer public guidance during food shortage periods." },
          { f: "How did later, smaller outbreaks in the same region compare to 2004 in terms of response?", b: "They were generally detected and responded to faster, suggesting stronger monitoring systems were having an effect." },
          { f: "Does faster detection mean the underlying aflatoxin risk has been eliminated?", b: "No. Better detection is real progress, but the underlying climate and storage risk factors are still present." },
          { f: "What common pattern appears across documented aflatoxin outbreaks?", b: "They cluster around food shortage periods and specific regions where storage conditions and crop reliance combine unfavourably." },
          { f: "Why do modern prevention strategies target the whole system rather than one single fix?", b: "Because the pattern of real outbreaks shows multiple contributing factors, so no single intervention can prevent every case alone." }
        ],
        quiz: [
          { q: "What did the 2004 Kenya outbreak prompt in national aflatoxin policy?", o: ["No changes were made", "Strengthened market surveillance and clearer guidance during shortages", "A ban on all maize farming", "Reduced monitoring efforts"], a: 1, e: "The outbreak led to strengthened surveillance and public guidance, particularly during food shortage periods." },
          { q: "How did response to later, smaller outbreaks in the same region compare to 2004?", o: ["Slower and less organised", "Generally faster, suggesting improved monitoring", "Identical in every way", "There were no later outbreaks"], a: 1, e: "Later outbreaks were generally detected and responded to more quickly." },
          { q: "Does faster outbreak detection mean the underlying risk has disappeared?", o: ["Yes, completely", "No, underlying climate and storage risk factors remain", "Yes, but only in Kenya", "The question doesn't apply"], a: 1, e: "Detection improvements are progress, but they don't remove the structural risk factors." },
          { q: "What common pattern do documented aflatoxin outbreaks share?", o: ["They happen randomly with no pattern", "They cluster around food shortage periods and unfavourable regional conditions", "They only ever happen in wealthy countries", "They are unrelated to storage conditions"], a: 1, e: "Shortage-driven consumption and adverse local conditions are recurring features." },
          { q: "Why do modern strategies combine multiple approaches rather than relying on one fix?", o: ["Because one approach is always sufficient", "Because outbreaks stem from multiple contributing factors", "Because variety looks better on paper", "Because single interventions are illegal"], a: 1, e: "Multiple contributing factors mean a layered strategy is more effective than any single measure." }
        ]
      }
    ]
  },

  {
    id: "t5",
    icon: "shield-check",
    title: "Prevention and Solutions",
    summary: "What actually works, from field-level habits to biocontrol, breeding, and the collaborative networks that FS4Africa and similar efforts are building.",
    tags: ["Prevention", "FS4Africa", "Featured"],
    modules: [
      {
        id: "t5m1",
        title: "Good Practice from Field to Store",
        lede: "Before any advanced technology, most aflatoxin prevention comes down to a short list of practical habits that farmers and traders can apply directly.",
        heroIcon: "pathway",
        sections: [
          {
            heading: "The core habits that matter most",
            paragraphs: [
              "Harvesting on time matters, since crops left too long in the field, especially after a dry spell followed by rain, face higher risk. Drying quickly to a safe moisture level is often described as the single most controllable step, since moisture is what lets the fungus grow in the first place.",
              "Sorting before storage, removing shrivelled, discoloured, insect-damaged or visibly mouldy kernels, removes a disproportionate share of the risk, since damaged kernels are far more likely to carry high toxin levels than intact ones."
            ],
            visual: { type: "checklist", items: [
              "Harvest promptly, avoid leaving crop in wet field conditions",
              "Dry to a safe moisture level quickly, using a moisture meter where available",
              "Sort out damaged, discoloured or mouldy kernels before storage",
              "Use sealed, hermetic storage bags rather than open sacks",
              "Keep storage areas raised off the ground and away from damp walls"
            ] }
          },
          {
            heading: "Hermetic storage: a simple, chemical-free barrier",
            paragraphs: [
              "Hermetic storage bags, commonly known by the brand name PICS (Purdue Improved Crop Storage) bags, work by creating an airtight seal that starves both insects and fungi of the oxygen they need to remain active, without requiring any chemical treatment.",
              "This kind of storage is popular precisely because it is low-cost, reusable, and does not require electricity, refrigeration or ongoing chemical purchases, making it practical for smallholder households working with limited infrastructure."
            ],
            callout: { type: "leaf", text: "None of these steps require expensive equipment. That is part of why they form the foundation of most extension training on aflatoxin, before any biocontrol or breeding technology enters the picture." }
          }
        ],
        flashcards: [
          { f: "What is often described as the single most controllable prevention step after harvest?", b: "Drying the crop quickly to a safe moisture level." },
          { f: "Why does sorting kernels before storage matter so much?", b: "Damaged, discoloured or mouldy kernels are far more likely to carry high toxin levels than intact ones." },
          { f: "What are PICS bags and how do they work?", b: "Purdue Improved Crop Storage bags: airtight, hermetic bags that starve insects and fungi of oxygen without any chemical treatment." },
          { f: "Why is hermetic storage particularly practical for smallholder households?", b: "It is low-cost, reusable, and needs no electricity, refrigeration or ongoing chemical purchases." },
          { f: "Do these core prevention habits require expensive equipment?", b: "No, they form a low-cost foundation of good practice, before any advanced biocontrol or breeding technology is applied." }
        ],
        quiz: [
          { q: "What is considered the single most controllable prevention step after harvest?", o: ["Painting the storage building", "Drying the crop quickly to a safe moisture level", "Adding more fertiliser", "Increasing planting density"], a: 1, e: "Fast, thorough drying is the most directly controllable lever most farmers have." },
          { q: "Why does sorting kernels before storage reduce risk significantly?", o: ["It has no real effect", "Damaged or discoloured kernels carry disproportionately higher toxin levels", "It only improves appearance", "It increases moisture content"], a: 1, e: "Removing visibly damaged kernels removes a disproportionate share of the overall risk." },
          { q: "What does PICS stand for?", o: ["Pest Insect Control System", "Purdue Improved Crop Storage", "Primary Insect Chemical Spray", "Post-harvest Inspection Certification Standard"], a: 1, e: "PICS bags were developed as Purdue Improved Crop Storage." },
          { q: "How do hermetic (PICS) storage bags work?", o: ["By adding chemical pesticide", "By sealing out oxygen, starving insects and fungi", "By keeping grain wet", "By using refrigeration"], a: 1, e: "Airtight sealing removes the oxygen insects and fungi need to remain active." },
          { q: "Do the core prevention habits described here require expensive technology?", o: ["Yes, always", "No, they are low-cost and form the foundation before advanced technology", "Only in wealthy countries", "They require electricity"], a: 1, e: "These basic habits are deliberately low-cost and widely applicable." }
        ]
      },
      {
        id: "t5m2",
        title: "Biocontrol: Aflasafe and Friendly Fungi",
        lede: "One of the more elegant solutions to aflatoxin fights fungus with fungus, using nature's own competition to crowd out the harmful strains.",
        heroIcon: "biocontrol",
        sections: [
          {
            heading: "Competitive exclusion, explained simply",
            paragraphs: [
              "Aspergillus flavus exists in many different strains in any given field's soil, and not all of them produce aflatoxin. Biocontrol products like Aflasafe are made by identifying which locally occurring strains are harmless (non-toxin-producing), then multiplying them and spreading them across a field, typically once, early in the growing season.",
              "Once established, these harmless strains compete with toxin-producing strains for the same space and resources on the crop, substantially reducing the share of the fungal population capable of producing aflatoxin by the time the crop is harvested."
            ],
            visual: { type: "video", videoId: "L-ZBWLYGSuY", title: "The story of aflatoxin and the effective solution, Aflasafe (external video)" }
          },
          {
            heading: "Scale and adoption across the continent",
            paragraphs: [
              "Aflasafe, developed through research led by IITA with the USDA's Agricultural Research Service, is now registered and used in more than a dozen African countries, applied to staple crops including maize and groundnut. Adoption has grown steadily as national registration processes, local manufacturing and farmer training have expanded.",
              "Biocontrol is generally used alongside, not instead of, good drying and storage practice. A field treated with a biocontrol product can still end up with contaminated grain if it is then dried too slowly or stored damp, since biocontrol addresses field-stage risk specifically, not the later stages of the chain."
            ],
            callout: { type: "accent", text: "This video is an independent, publicly available resource and is included here as supplementary background, not produced by AflaLearn." }
          }
        ],
        flashcards: [
          { f: "What is the core idea behind biocontrol products like Aflasafe?", b: "Spreading harmless, non-toxin-producing native fungal strains that outcompete toxin-producing strains in the field." },
          { f: "When in the growing season is Aflasafe typically applied?", b: "Once, early in the growing season, before or during crop development." },
          { f: "How widely is Aflasafe currently used across Africa?", b: "It is registered and used in more than a dozen African countries, on crops including maize and groundnut." },
          { f: "Does using biocontrol remove the need for good drying and storage practice?", b: "No. Biocontrol addresses field-stage risk specifically; poor drying or storage afterward can still lead to contamination." },
          { f: "Why can two harmless and harmful fungal strains compete for the same resources matter?", b: "Because reducing the toxin-producing strain's share of the population lowers the overall aflatoxin risk in the harvested crop." }
        ],
        quiz: [
          { q: "What is the core mechanism behind biocontrol products like Aflasafe?", o: ["Killing all soil fungi with chemicals", "Spreading harmless native strains that outcompete toxin-producing ones", "Adding synthetic preservatives to soil", "Genetically modifying the crop directly"], a: 1, e: "Biocontrol relies on competitive exclusion by harmless native fungal strains." },
          { q: "When is Aflasafe typically applied during the growing season?", o: ["After the crop is already in storage", "Once, early in the growing season", "Only after harvest", "Continuously throughout the year"], a: 1, e: "A single early-season application is the typical approach." },
          { q: "Roughly how widely is Aflasafe used across Africa today?", o: ["In only one country", "In more than a dozen African countries", "Nowhere yet, it's still experimental", "Worldwide on every continent"], a: 1, e: "It has been registered and adopted in more than a dozen African countries." },
          { q: "Does biocontrol replace the need for good drying and storage?", o: ["Yes, entirely", "No, poor drying or storage afterward can still cause contamination", "Yes, but only for groundnut", "Biocontrol and storage are unrelated"], a: 1, e: "Biocontrol addresses field-stage risk; later-stage practices are still essential." },
          { q: "Which two institutions led the research behind Aflasafe?", o: ["IITA and USDA's Agricultural Research Service", "A single private seed company", "The World Health Organization alone", "A national ministry of trade"], a: 0, e: "IITA led the work in partnership with USDA-ARS." }
        ]
      },
      {
        id: "t5m3",
        title: "Breeding Crops That Resist Aflatoxin",
        lede: "If a maize or groundnut variety is naturally harder for the fungus to infect, part of the risk is reduced before any human intervention is even needed.",
        heroIcon: "seedling",
        sections: [
          {
            heading: "What resistance breeding is trying to achieve",
            paragraphs: [
              "Plant breeders work to identify and combine natural genetic traits that make a crop variety less hospitable to Aspergillus infection in the first place, whether through physical characteristics of the kernel, husk or pod, or through the plant's own biochemical defences.",
              "This work is typically carried out by national and regional agricultural research institutes, often testing candidate varieties across multiple growing seasons and locations to confirm that resistance holds up under real field conditions, not just in controlled trials."
            ]
          },
          {
            heading: "A concrete example: maize and groundnut breeding tied to Kenya",
            paragraphs: [
              "One documented strand of this work, referenced in materials published by the FS4Africa research initiative, focuses on breeding maize and groundnut varieties in Kenya for aflatoxin resistance, with the added aim of higher vitamin E content in the resulting crop, combining a food safety benefit with a nutritional one.",
              "Breeding programmes like this typically take multiple growing seasons, sometimes several years, to move from initial candidate varieties to seed that is ready for wider release to farmers, which is why breeding is treated as a long-term, complementary strategy alongside biocontrol and storage improvements rather than an immediate fix."
            ],
            callout: { type: "accent", text: "This is one strand of the wider FS4Africa initiative, explored in more detail in the next module." }
          }
        ],
        flashcards: [
          { f: "What is the general goal of aflatoxin-resistance breeding?", b: "To identify and combine natural genetic traits that make a crop variety less hospitable to Aspergillus infection in the first place." },
          { f: "Who typically carries out this kind of breeding research?", b: "National and regional agricultural research institutes, testing candidate varieties across multiple seasons and locations." },
          { f: "What specific breeding effort tied to Kenya is referenced in FS4Africa materials?", b: "Breeding maize and groundnut varieties for aflatoxin resistance, with an added aim of higher vitamin E content." },
          { f: "Why does breeding combine a food safety benefit with a nutritional one in this example?", b: "Because the same breeding effort targets both aflatoxin resistance and improved vitamin E content in the resulting crop." },
          { f: "Why is breeding treated as a long-term, complementary strategy rather than a quick fix?", b: "Because moving from candidate varieties to widely released seed typically takes multiple growing seasons or years." }
        ],
        quiz: [
          { q: "What is the general aim of aflatoxin-resistance crop breeding?", o: ["Making crops taste sweeter", "Making crop varieties naturally less hospitable to fungal infection", "Increasing crop height only", "Reducing crop yield intentionally"], a: 1, e: "Resistance breeding targets the plant's natural susceptibility to infection." },
          { q: "Who typically conducts this kind of breeding research?", o: ["Individual consumers", "National and regional agricultural research institutes", "International trade organisations", "Retail supermarkets"], a: 1, e: "Agricultural research institutes carry out multi-season breeding and testing work." },
          { q: "What additional nutritional trait is targeted alongside aflatoxin resistance in the Kenya-linked breeding work referenced here?", o: ["Higher sugar content", "Higher vitamin E content", "Higher caffeine content", "Higher salt tolerance only"], a: 1, e: "This breeding strand aims to combine aflatoxin resistance with improved vitamin E content." },
          { q: "How long does it typically take to move from candidate breeding lines to released seed varieties?", o: ["A few days", "Multiple growing seasons, sometimes several years", "Instantly, within one harvest", "It never happens"], a: 1, e: "Breeding and field validation is a multi-season, often multi-year process." },
          { q: "Why is breeding treated as complementary to biocontrol and storage improvements, rather than a stand-alone fix?", o: ["Because it works faster than other methods", "Because it takes years to develop and doesn't address later-stage storage risk", "Because breeding has no real benefit", "Because it replaces the need for storage entirely"], a: 1, e: "Its slow development timeline and field-stage focus make it one part of a layered strategy." }
        ]
      },
      {
        id: "t5m4",
        title: "Inside FS4Africa: Networks, Not Just Products",
        lede: "Some of the newest thinking on aflatoxin control focuses less on a single new product, and more on connecting the people and institutions who already hold useful knowledge.",
        heroIcon: "network",
        sections: [
          {
            heading: "What FS4Africa is",
            paragraphs: [
              "FoodSafety4Africa, known as FS4Africa, is a research and innovation project, funded through the European Union's Horizon programme, focused on strengthening food safety in Africa's informal food sector: local processors, street vendors and small and medium-sized enterprises operating along food value chains that often fall outside formal regulatory oversight.",
              "Rather than promoting one single fix, FS4Africa's stated approach centres on co-creation: bringing together researchers, businesses, farmers, civil society organisations and government regulators to design and test solutions together in real working conditions, an approach the project describes using the term \"use cases\", meaning real-life, multi-stakeholder pilot efforts rather than laboratory-only research."
            ],
            visual: { type: "icon", key: "network" }
          },
          {
            heading: "Use Case 1: sustainable aflatoxin management across three countries",
            paragraphs: [
              "The aflatoxin-focused use case within FS4Africa spans Nigeria, Ghana and Kenya, and combines two complementary strands: breeding maize and groundnut for aflatoxin resistance (with the added vitamin E benefit noted in the previous module) in Kenya, and strengthening collaborative networks among value chain actors in Nigeria and Ghana through what the project calls a food convergence innovation approach.",
              "According to the project's own published materials, the stated aim is to improve the flow and traceability of crops that are safe from hazardous aflatoxin levels, in part through a shared digital interface connecting stakeholders, and to assess and rank existing aflatoxin control practices so the most cost-effective ones can be packaged into training modules for value chain actors."
            ],
            callout: { type: "accent", text: "Institutions named in FS4Africa's own published materials as involved in this use case include Nigeria's Food Convergence Innovation platform members and national food regulators, Obafemi Awolowo University and its teaching hospital complex, the Institute of Agricultural Research and Training, the Kenya Agricultural and Livestock Research Organization, Kwame Nkrumah University of Science and Technology, Ghana's Aflatoxin Management Innovation Platforms in the Upper West and Bono East regions, and Ghana's CSIR-Food Research Institute, among others." }
          },
          {
            heading: "How this connects to the rest of the picture",
            paragraphs: [
              "FS4Africa's aflatoxin work is a distinct, independent effort from long-running programmes like Aflasafe biocontrol, though both sit within the same broader landscape of African aflatoxin research described throughout this course. FS4Africa's particular contribution, based on its own published aims, is less about inventing a new standalone product and more about building durable, working connections between researchers, farmers, regulators and industry, so that good practice already developed in one place does not stay confined to a single lab, platform or district.",
              "The project also states a broader objective of embedding food safety solutions into national policy and research agendas over its multi-year timeline, alongside goals around financial inclusion and support for local innovation and start-ups in the informal food sector."
            ]
          }
        ],
        flashcards: [
          { f: "What is FS4Africa?", b: "FoodSafety4Africa, a European Union Horizon-funded research and innovation project focused on strengthening food safety in Africa's informal food sector." },
          { f: "What does FS4Africa mean by a 'use case'?", b: "A real-life, multi-stakeholder pilot effort co-created with researchers, businesses, farmers, civil society and government, rather than laboratory-only research." },
          { f: "Which three countries does FS4Africa's aflatoxin-focused use case span?", b: "Nigeria, Ghana and Kenya." },
          { f: "What are the two complementary strands of this use case?", b: "Breeding maize and groundnut for aflatoxin resistance in Kenya, and strengthening collaborative networks among value chain actors in Nigeria and Ghana." },
          { f: "What is FS4Africa's particular contribution to the aflatoxin landscape, according to its own stated aims?", b: "Building durable connections between researchers, farmers, regulators and industry, rather than primarily inventing one new standalone product." }
        ],
        quiz: [
          { q: "What is FS4Africa?", o: ["A private pesticide manufacturer", "An EU Horizon-funded research and innovation project on African food safety", "A single biocontrol product", "A national government ministry"], a: 1, e: "FS4Africa is a Horizon-funded EU research and innovation project targeting the informal food sector in Africa." },
          { q: "What does FS4Africa mean by a 'use case'?", o: ["A legal document", "A real-life, multi-stakeholder pilot effort", "A type of storage bag", "A laboratory-only experiment"], a: 1, e: "Use cases are described as real-world, co-created pilot efforts involving multiple stakeholder groups." },
          { q: "Which three countries does the aflatoxin-focused use case span?", o: ["South Africa, Egypt, Morocco", "Nigeria, Ghana and Kenya", "Senegal, Mali, Chad", "Only Kenya"], a: 1, e: "The project's own materials describe this use case as spanning Nigeria, Ghana and Kenya." },
          { q: "What are the two complementary strands of this use case?", o: ["Breeding in Kenya and network-building in Nigeria/Ghana", "Only pesticide distribution", "Only export certification", "Only consumer education"], a: 0, e: "Breeding for resistance in Kenya, and food convergence network-building in Nigeria and Ghana." },
          { q: "According to its own stated aims, what is FS4Africa's distinctive contribution?", o: ["Inventing a brand new standalone chemical treatment", "Building durable connections between researchers, farmers, regulators and industry", "Replacing all national food safety authorities", "Focusing exclusively on export markets"], a: 1, e: "FS4Africa emphasises collaboration and network-building over a single new product." }
        ]
      },
      {
        id: "t5m5",
        title: "Digital Tools and Multi-Stakeholder Platforms",
        lede: "Knowledge that stays locked in one research paper or one district rarely changes outcomes at scale. A growing part of aflatoxin prevention work focuses on how information actually reaches the people who need it.",
        heroIcon: "digital",
        sections: [
          {
            heading: "Why platforms and digital interfaces matter here",
            paragraphs: [
              "According to FS4Africa's published project materials, part of its aflatoxin use case involves a digital interface intended to support interconnection between multiple stakeholder groups, helping synchronise aflatoxin management approaches that already exist but have not always been well connected to each other across research institutions, regulators, and value chain actors.",
              "This reflects a wider pattern across food safety innovation in Africa: mobile and digital tools are increasingly used to put guidance, training content and, where available, testing or traceability information within reach of people working in the field, including smallholders who may rarely receive in-person extension visits."
            ]
          },
          {
            heading: "Existing platforms named in FS4Africa's materials",
            paragraphs: [
              "FS4Africa's own published materials name specific existing multi-stakeholder groups its aflatoxin use case connects with, including the Food Convergence Innovation Nigeria Platform, and the Ghana Aflatoxin Management Innovation Platforms operating in Ghana's Upper West and Bono East regions, alongside regulators and agricultural extension officers working in those same regions.",
              "The underlying logic is straightforward: rather than building an entirely new network from nothing, the project works with platforms that already bring together farmers, researchers and regulators in a given area, and focuses on strengthening the connections and information flow between them."
            ],
            visual: { type: "video", videoId: "N31RHnK3lWI", title: "FoodSafety4Africa: Addressing Food Safety Challenges in the African Informal Sector (external video)" }
          }
        ],
        flashcards: [
          { f: "What role does a digital interface play in FS4Africa's aflatoxin use case, per the project's own materials?", b: "Supporting interconnection between multiple stakeholder groups and helping synchronise aflatoxin management approaches that already exist." },
          { f: "Name one existing multi-stakeholder platform in Nigeria referenced in FS4Africa's materials.", b: "The Food Convergence Innovation Nigeria Platform." },
          { f: "Name the Ghanaian platforms referenced, and where they operate.", b: "The Ghana Aflatoxin Management Innovation Platforms, operating in the Upper West and Bono East regions." },
          { f: "Why do digital and mobile tools matter for smallholders specifically?", b: "They can put guidance and training content within reach of farmers who may rarely receive in-person extension visits." },
          { f: "Does FS4Africa aim to replace existing platforms with an entirely new network?", b: "No, its stated approach works with platforms that already exist, strengthening connections and information flow between them." }
        ],
        quiz: [
          { q: "What is the stated role of the digital interface in FS4Africa's aflatoxin use case?", o: ["Selling seeds directly to farmers", "Supporting interconnection and synchronising existing management approaches", "Replacing all national regulators", "Providing weather forecasts only"], a: 1, e: "The interface is intended to connect stakeholder groups and synchronise existing approaches." },
          { q: "Which platform in Nigeria is named in FS4Africa's published materials?", o: ["The Food Convergence Innovation Nigeria Platform", "The National Maize Exporters Union", "A private biotech startup", "A national lottery board"], a: 0, e: "This platform is specifically named as part of the use case's network." },
          { q: "In which two Ghanaian regions do the referenced Aflatoxin Management Innovation Platforms operate?", o: ["Greater Accra and Ashanti", "Upper West and Bono East", "Northern and Volta", "Central and Eastern"], a: 1, e: "The Upper West and Bono East regions are specifically named." },
          { q: "Why are digital and mobile tools particularly useful for smallholder farmers?", o: ["They replace the need for any food safety practice", "They can deliver guidance where in-person extension visits are rare", "They are required by international law", "They only work in urban areas"], a: 1, e: "These tools extend the reach of guidance to farmers with limited access to extension services." },
          { q: "Does FS4Africa aim to build an entirely new stakeholder network from scratch?", o: ["Yes, always starting fresh", "No, it works with and strengthens platforms that already exist", "It avoids working with any existing group", "It only works with private companies"], a: 1, e: "The stated approach connects with and strengthens already-existing multi-stakeholder platforms." }
        ]
      }
    ]
  },

  {
    id: "t6",
    icon: "people",
    title: "What You Can Do",
    summary: "Practical, role-specific steps for farmers, traders, consumers and policymakers, whoever you are in this picture.",
    tags: ["Action"],
    modules: [
      {
        id: "t6m1",
        title: "If You Are a Farmer or Cooperative",
        lede: "Most prevention starts at the farm, and most of it costs little beyond attention and timing.",
        heroIcon: "farmer",
        sections: [
          {
            heading: "A short, practical checklist",
            paragraphs: [
              "The habits with the strongest evidence behind them are also the most affordable: timely harvest, fast and thorough drying, careful sorting before storage, and sealed, hermetic storage rather than open sacks. None of these require imported technology or ongoing cash outlay beyond an initial storage bag purchase."
            ],
            visual: { type: "checklist", items: [
              "Harvest promptly, especially after a dry spell followed by rain",
              "Dry grain quickly to a safe moisture level before bagging",
              "Sort out shrivelled, discoloured or insect-damaged kernels",
              "Store in sealed, hermetic bags, raised off the ground",
              "Ask local extension officers about biocontrol products registered in your area",
              "Where possible, ask about cooperative or community access to moisture meters or testing"
            ] }
          },
          {
            heading: "Working together beats working alone",
            paragraphs: [
              "Cooperatives and farmer groups are often better positioned than individual households to access shared equipment like moisture meters, negotiate collective access to biocontrol products, or connect with the kind of multi-stakeholder platforms described in the Prevention topic. If a local aflatoxin management group or platform exists in your area, it is usually worth engaging with directly."
            ]
          }
        ],
        flashcards: [
          { f: "Name four low-cost farm-level habits with strong evidence behind them.", b: "Timely harvest, fast drying, careful sorting, and sealed hermetic storage." },
          { f: "Why might cooperatives be better positioned than individual farmers for some prevention steps?", b: "They can more easily access shared equipment like moisture meters and negotiate collective access to biocontrol products." },
          { f: "What should a farmer ask local extension officers about?", b: "Which biocontrol products, such as Aflasafe, are registered and available in their area." },
          { f: "Is expensive imported technology required for the core farm-level prevention steps?", b: "No, the core habits are low-cost and mostly require attention and timing rather than new equipment." },
          { f: "What is worth doing if a local aflatoxin management platform already exists in your area?", b: "Engaging with it directly, since these platforms connect farmers with researchers, regulators and training resources." }
        ],
        quiz: [
          { q: "Which of these is a low-cost, high-evidence farm-level prevention step?", o: ["Fast, thorough drying before storage", "Waiting as long as possible to harvest", "Storing grain in open sacks on bare ground", "Ignoring visibly damaged kernels"], a: 0, e: "Fast drying is one of the most effective, low-cost prevention steps available." },
          { q: "Why can cooperatives be more effective than individual households at prevention?", o: ["They cannot access any shared resources", "They can share equipment like moisture meters and negotiate collective access to biocontrol", "Cooperatives have no advantage", "They are legally required to test every batch"], a: 1, e: "Shared resources and collective bargaining give cooperatives practical advantages." },
          { q: "What should a farmer ask local extension services about?", o: ["Unrelated crop subsidies only", "Locally registered biocontrol products", "Only export licensing", "Weather forecasting apps"], a: 1, e: "Extension officers can advise on biocontrol products registered and available locally." },
          { q: "Do the main farm-level prevention habits require expensive imported technology?", o: ["Yes, always", "No, they are largely about timing, attention and low-cost storage", "Only in wealthy countries", "Yes, moisture meters are mandatory"], a: 1, e: "The core habits are low-cost and widely accessible." },
          { q: "What is a practical step if a local aflatoxin platform already exists nearby?", o: ["Avoid it to protect independence", "Engage with it directly for training and connections", "Wait for it to disband", "Report it to authorities"], a: 1, e: "Existing platforms are a practical resource worth engaging with directly." }
        ]
      },
      {
        id: "t6m2",
        title: "If You Trade, Process or Sell Food",
        lede: "Traders, millers and market vendors sit at a critical checkpoint between farm and household. Small procedural choices here have an outsized effect on what reaches consumers.",
        heroIcon: "trader",
        sections: [
          {
            heading: "Checkpoints that matter most",
            paragraphs: [
              "Visual sorting at intake, rejecting or separating visibly mouldy, discoloured or insect-damaged grain, remains a useful first filter even without laboratory access, since damaged kernels correlate strongly with higher toxin levels. Where affordable rapid test kits are available, using them at intake for higher-value or export-bound consignments adds a meaningful additional layer of assurance.",
              "Keeping incoming batches separated rather than mixing them together also matters: mixing a small contaminated batch into a large clean one does not remove the toxin, it simply spreads it across a much larger volume of otherwise safe food."
            ]
          },
          {
            heading: "Storage and record-keeping",
            paragraphs: [
              "Warehouses and market storage areas benefit from the same core principles as farm storage: keeping stock dry, off the ground, and away from damp walls, with good airflow and pest control. Basic record-keeping on the source and handling of each batch also supports traceability, which increasingly matters for buyers and regulators alike.",
              "Engaging with local platforms or associations focused on food safety, where they exist, can provide access to shared testing resources, training, and updated guidance on current regulatory limits."
            ],
            callout: { type: "leaf", text: "A simple principle to hold onto: never mix a suspect batch into a clean one to \"dilute\" the problem. It does not remove risk, it distributes it." }
          }
        ],
        flashcards: [
          { f: "What is a useful first filter at grain intake, even without lab access?", b: "Visual sorting: rejecting or separating visibly mouldy, discoloured or insect-damaged grain." },
          { f: "Why is mixing a small contaminated batch into a large clean one a bad idea?", b: "It does not remove the toxin, it simply spreads it across a much larger volume of otherwise safe food." },
          { f: "What core storage principles apply to warehouses, same as at farm level?", b: "Keeping stock dry, off the ground, away from damp walls, with good airflow and pest control." },
          { f: "Why does basic record-keeping on batch source and handling matter?", b: "It supports traceability, which increasingly matters to buyers and regulators." },
          { f: "What can engaging with local food safety platforms or associations provide traders and processors?", b: "Access to shared testing resources, training, and updated guidance on current regulatory limits." }
        ],
        quiz: [
          { q: "What is a useful first filter for traders even without laboratory access?", o: ["Ignoring appearance entirely", "Visual sorting of visibly damaged or mouldy grain", "Mixing all batches together", "Only checking price"], a: 1, e: "Visual sorting correlates with toxin risk and is a practical first-line filter." },
          { q: "Why is mixing a suspect batch into a clean one problematic?", o: ["It improves overall quality", "It spreads the risk rather than removing it", "It has no effect either way", "It is required by regulation"], a: 1, e: "Mixing dilutes concentration but does not eliminate the underlying toxin." },
          { q: "What storage principles should warehouses follow, similar to farm-level storage?", o: ["Keep stock damp for freshness", "Keep stock dry, off the ground, with good airflow and pest control", "Store everything directly on soil", "Avoid all pest control measures"], a: 1, e: "The same core dry, sealed, elevated storage principles apply at warehouse scale." },
          { q: "Why does record-keeping on batch source and handling matter for traders?", o: ["It has no practical benefit", "It supports traceability valued by buyers and regulators", "It is only useful for tax purposes", "Records are never checked"], a: 1, e: "Traceability information is increasingly expected by buyers and regulatory systems." },
          { q: "What can local food safety platforms offer traders and processors?", o: ["Nothing useful", "Shared testing resources, training and updated regulatory guidance", "Only marketing services", "Legal exemptions from testing"], a: 1, e: "These platforms can provide practical resources and up-to-date guidance." }
        ]
      },
      {
        id: "t6m3",
        title: "If You Are a Consumer",
        lede: "Households cannot test food for aflatoxin at home, but a handful of simple habits in buying, storing and preparing food can meaningfully reduce exposure.",
        heroIcon: "home",
        sections: [
          {
            heading: "At the point of buying",
            paragraphs: [
              "Where possible, avoid buying maize, groundnut or groundnut products that show visible mould, discolouration or an unusual, musty smell. This will not catch every contaminated batch, since aflatoxin is often invisible, but it does filter out some of the higher-risk portion of what is on offer.",
              "Buying from vendors known to store grain well, dry and off the ground, rather than in damp or exposed conditions, is a reasonable, practical preference where a choice is available."
            ]
          },
          {
            heading: "At home",
            paragraphs: [
              "Store maize, groundnut and similar staples in a cool, dry place, in sealed containers where possible, and avoid keeping them for extended periods in humid conditions. If stored grain shows visible mould after purchase, it is safer to discard the affected portion rather than simply removing the visible mould and using the rest, since toxin can spread beyond the visibly affected area.",
              "Varying the household diet, rather than relying almost exclusively on a single staple crop for the bulk of daily calories, also reduces the practical consequence of any single contaminated source, particularly for young children who are more vulnerable to aflatoxin's effects, as covered earlier in this course."
            ],
            callout: { type: "accent", text: "None of these household habits are a substitute for prevention further up the chain, at farm, storage and market level, but they are genuinely useful, low-cost additions available to any household." }
          }
        ],
        flashcards: [
          { f: "What should consumers look out for, where possible, when buying maize or groundnut?", b: "Visible mould, discolouration, or an unusual musty smell, as a partial (not complete) screening step." },
          { f: "Why doesn't checking for visible mould catch every contaminated batch?", b: "Aflatoxin is often invisible, with no reliable visual, smell or taste signs." },
          { f: "What is the safer response if stored grain shows visible mould after purchase?", b: "Discard the affected portion, since toxin can spread beyond the visibly mouldy area, rather than simply cutting off the mould and using the rest." },
          { f: "How can varying a household's diet help reduce aflatoxin-related risk?", b: "It reduces the practical consequence of any single contaminated staple source, especially benefiting young children." },
          { f: "Are household-level habits a replacement for prevention at farm and market level?", b: "No, they are a useful addition, not a substitute for prevention further up the chain." }
        ],
        quiz: [
          { q: "What can consumers reasonably check for when buying maize or groundnut?", o: ["Nothing, it's impossible to assess", "Visible mould, discolouration or unusual smell, as a partial screen", "The exact toxin level by taste", "Only the price"], a: 1, e: "This is a useful but incomplete screen, since aflatoxin is often invisible." },
          { q: "Why is checking appearance alone not fully reliable?", o: ["Aflatoxin is often invisible and undetectable by smell or taste", "Mould is always visible when present", "Appearance always matches toxin level", "It is completely reliable"], a: 0, e: "Aflatoxin frequently shows no visible or sensory signs at all." },
          { q: "What is the safer approach if stored grain develops visible mould?", o: ["Cut off the mould and eat the rest", "Discard the affected portion rather than just removing visible mould", "Cook it longer to destroy the toxin", "Feed it to animals instead"], a: 1, e: "Toxin can spread beyond the visibly affected area, so discarding the portion is safer." },
          { q: "How does dietary variety help reduce aflatoxin-related risk at the household level?", o: ["It increases risk", "It reduces reliance on any single potentially contaminated staple", "It has no effect", "It only matters for adults"], a: 1, e: "Spreading intake across different foods reduces the consequence of contamination in any one source." },
          { q: "Are household habits a full substitute for prevention at the farm and market level?", o: ["Yes, entirely", "No, they are a useful addition, not a substitute", "Household habits are irrelevant", "Only farm-level prevention matters"], a: 1, e: "Household practices help but don't replace upstream prevention efforts." }
        ]
      },
      {
        id: "t6m4",
        title: "If You Shape Policy or Fund Research",
        lede: "For policymakers, regulators and funders, the highest-leverage actions are often structural: building systems that make good practice easier for everyone else in this course.",
        heroIcon: "policy",
        sections: [
          {
            heading: "What tends to move the needle",
            paragraphs: [
              "Based on the patterns covered throughout this course, several structural investments repeatedly show up as high-leverage: funding accessible testing infrastructure, particularly for smaller and informal-sector actors who currently cannot easily absorb compliance costs; supporting registration and local manufacturing of biocontrol products; and sustaining long-term breeding programmes, which require patient, multi-year funding to reach farmers at all.",
              "Clear, consistently enforced regulatory limits, paired with realistic support for compliance rather than only penalties for failure, also appear repeatedly as a factor that improves outcomes without simply pushing informal-sector actors further out of visibility."
            ]
          },
          {
            heading: "Supporting collaboration, not just individual projects",
            paragraphs: [
              "The FS4Africa model discussed in the Prevention topic illustrates a broader lesson: funding that supports connection between existing researchers, regulators, farmer platforms and industry actors can be as valuable as funding a single new technical solution, since a great deal of prevention knowledge already exists but is unevenly shared or applied.",
              "Policies and funding structures that specifically account for the informal sector, rather than assuming all food moves through formal, easily regulated channels, are particularly important given how much of Africa's food value chain runs through informal markets and smallholder-scale operations, as covered in the Economic Toll topic."
            ],
            callout: { type: "leaf", text: "The recurring theme across this course: aflatoxin control works best as a layered, connected system. Policy that strengthens the connections between existing efforts is often as valuable as policy that funds an entirely new one." }
          }
        ],
        flashcards: [
          { f: "Name three structural investments that repeatedly show up as high-leverage for aflatoxin control.", b: "Accessible testing infrastructure, biocontrol registration/manufacturing support, and sustained long-term breeding programme funding." },
          { f: "Why should regulatory enforcement be paired with realistic compliance support?", b: "So that limits improve outcomes without simply pushing informal-sector actors further out of visibility." },
          { f: "What broader lesson does the FS4Africa model illustrate for policymakers and funders?", b: "That funding connection between existing researchers, regulators, farmer platforms and industry can be as valuable as funding a single new technical solution." },
          { f: "Why do policies need to specifically account for the informal sector?", b: "Because a large share of Africa's food value chain runs through informal markets and smallholder-scale operations." },
          { f: "What is the recurring theme across this whole course regarding effective aflatoxin control?", b: "It works best as a layered, connected system, where strengthening existing connections is often as valuable as funding something entirely new." }
        ],
        quiz: [
          { q: "Which structural investment repeatedly shows up as high-leverage for policymakers?", o: ["Ignoring informal-sector testing needs", "Funding accessible testing infrastructure for smaller and informal actors", "Banning all maize imports", "Removing all regulatory limits"], a: 1, e: "Accessible testing infrastructure for smaller actors is a recurring high-leverage investment." },
          { q: "Why should strict regulatory limits be paired with compliance support?", o: ["To increase penalties only", "So outcomes improve without pushing informal actors further out of visibility", "Compliance support is unnecessary", "Limits should never be enforced"], a: 1, e: "Support alongside enforcement helps improve real-world outcomes rather than just punishing failure." },
          { q: "What broader funding lesson does the FS4Africa model illustrate?", o: ["Only fund single new technical products", "Funding connections between existing actors can be as valuable as funding new solutions", "Avoid funding collaboration", "Research funding should ignore regulators entirely"], a: 1, e: "Connecting existing knowledge and actors is a recurring high-value strategy." },
          { q: "Why must policy specifically account for the informal food sector in much of Africa?", o: ["The informal sector is negligible in size", "A large share of the food value chain runs through informal markets", "Informal markets don't handle staple crops", "Formal channels cover all food movement"], a: 1, e: "Much of the value chain operates informally, making targeted policy design important." },
          { q: "What is the recurring theme of this entire course regarding effective aflatoxin control?", o: ["A single perfect fix exists", "It works best as a layered, connected system across many actors", "Only farmers are responsible", "Only policymakers are responsible"], a: 1, e: "The course repeatedly emphasises a layered system involving many roles working together." }
        ]
      }
    ]
  }
];

const MODULE_INDEX = {};
const TOPIC_INDEX = {};
TOPICS.forEach((t) => {
  TOPIC_INDEX[t.id] = t;
  t.modules.forEach((m, i) => {
    MODULE_INDEX[m.id] = { module: m, topic: t, position: i, total: t.modules.length };
  });
});
