// ═══════════════════════════════════════════
// COMPREHENSIVE ORGAN DATABASE
// ═══════════════════════════════════════════

const ORGANS_DATA = {

  // ─── BRAIN & NERVOUS SYSTEM ──────────────
  brain: {
    id: 'brain',
    name: 'Brain',
    system: 'nervous',
    emoji: '🧠',
    color: '#a855f7',
    colorGlow: 'rgba(168,85,247,0.4)',
    weight: '1.4 kg (avg adult)',
    location: 'Skull (Cranium)',
    gender: 'both',
    position: { x: 50, y: 8 },

    simple: {
      whatItIs: 'Your brain is the command center of your entire body — like the most powerful computer ever made, running 24/7 without ever needing to reboot.',
      howItWorks: 'Billions of tiny cells called neurons send electrical signals to each other at lightning speed. When you think, feel, move, or dream — your brain is firing these signals in complex patterns.',
      funFacts: [
        '🔋 Uses 20% of your body\'s energy despite being only 2% of body weight',
        '⚡ Can process information faster than the fastest supercomputer',
        '🌙 Never actually "turns off" — stays active even while you sleep',
        '💭 Generates about 70,000 thoughts per day',
        '🧊 Contains about 86 billion neurons'
      ]
    },

    bio: {
      anatomy: 'Divided into cerebrum (frontal, parietal, temporal, occipital lobes), cerebellum, and brainstem (midbrain, pons, medulla oblongata). Protected by meninges (dura mater, arachnoid mater, pia mater) and bathed in cerebrospinal fluid (CSF).',
      function: 'Higher cognitive functions (cerebral cortex), motor coordination (cerebellum), autonomic regulation (brainstem/hypothalamus), memory consolidation (hippocampus), emotional processing (amygdala), endocrine regulation (hypothalamus-pituitary axis).',
      physiology: 'Action potentials propagate via voltage-gated Na⁺/K⁺ channels. Neurotransmitters (dopamine, serotonin, GABA, glutamate, acetylcholine, norepinephrine) mediate synaptic transmission. BBB (Blood-Brain Barrier) formed by tight junctions of astrocytes and endothelium.',
      bloodSupply: 'Internal carotid arteries (anterior circulation) + vertebrobasilar system (posterior circulation). Circle of Willis provides collateral anastomosis.',
    },

    flows: [
      { type: 'blood', description: 'Receives 750ml blood per minute via carotid and vertebral arteries', color: '#ff2d55' },
      { type: 'csf', description: 'CSF circulates through ventricles, protecting and nourishing brain tissue', color: '#00d4ff' },
    ],

    diseases: [
      { name: 'Stroke', severity: 'critical', description: 'Blood supply to brain interrupted, causing cell death', symptoms: 'Sudden numbness, confusion, vision problems, severe headache', prevention: 'Control BP, no smoking, exercise' },
      { name: 'Alzheimer\'s Disease', severity: 'critical', description: 'Progressive neurodegeneration causing memory loss', symptoms: 'Memory loss, confusion, personality changes', prevention: 'Mental activity, social engagement, healthy diet' },
      { name: 'Epilepsy', severity: 'serious', description: 'Abnormal electrical discharges causing seizures', symptoms: 'Seizures, loss of consciousness, muscle spasms', prevention: 'Medication management, avoid triggers' },
      { name: 'Parkinson\'s Disease', severity: 'serious', description: 'Dopamine-producing neuron loss in substantia nigra', symptoms: 'Tremors, stiffness, slow movement', prevention: 'Regular exercise, no pesticide exposure' },
      { name: 'Migraine', severity: 'mild', description: 'Recurring severe headaches with sensory changes', symptoms: 'Intense throbbing headache, nausea, light sensitivity', prevention: 'Identify and avoid triggers' },
    ]
  },

  // ─── HEART ──────────────────────────────
  heart: {
    id: 'heart',
    name: 'Heart',
    system: 'circulatory',
    emoji: '🫀',
    color: '#ff2d55',
    colorGlow: 'rgba(255,45,85,0.4)',
    weight: '300g (avg adult)',
    location: 'Chest (mediastinum), slightly left of center',
    gender: 'both',
    position: { x: 46, y: 28 },

    simple: {
      whatItIs: 'Your heart is a powerful pump the size of your fist that never takes a break. It beats about 100,000 times every single day!',
      howItWorks: 'Think of it as a double pump. The right side collects "used" blood and sends it to the lungs to get fresh oxygen. The left side takes that fresh blood and pumps it to every part of your body.',
      funFacts: [
        '💓 Beats ~100,000 times per day, 40 million times per year',
        '🩸 Pumps about 5 liters of blood per minute at rest',
        '📏 Size of your closed fist',
        '⚡ Has its own electrical system — the SA node',
        '🏃 Can beat up to 200 times/min during exercise'
      ]
    },

    bio: {
      anatomy: '4-chambered: right atrium, right ventricle, left atrium, left ventricle. Valves: tricuspid (RA→RV), pulmonary (RV→PA), mitral/bicuspid (LA→LV), aortic (LV→Aorta). Wall layers: endocardium, myocardium, epicardium. Pericardium surrounds heart.',
      function: 'Dual circulation pump. Right side: pulmonary circulation (deoxygenated blood → lungs). Left side: systemic circulation (oxygenated blood → body). Cardiac output = Heart rate × Stroke volume (~5L/min at rest).',
      physiology: 'Intrinsic conduction system: SA node (pacemaker, 60-100 bpm) → AV node (0.1s delay) → Bundle of His → Purkinje fibers. Action potential via fast Na⁺ channels (phase 0), plateau via Ca²⁺ channels (phase 2). Frank-Starling law governs stroke volume.',
      bloodSupply: 'Left coronary artery (LAD + circumflex) and right coronary artery. Venous drainage via coronary sinus.',
    },

    flows: [
      { type: 'blood', description: 'Deoxygenated blood IN from body → Right heart → Lungs for O₂', color: '#6b7db3' },
      { type: 'blood', description: 'Oxygenated blood IN from lungs → Left heart → OUT to body', color: '#ff2d55' },
    ],

    diseases: [
      { name: 'Heart Attack (MI)', severity: 'critical', description: 'Coronary artery blocked, heart muscle dies', symptoms: 'Chest pain, shortness of breath, left arm pain, sweating', prevention: 'Healthy diet, exercise, no smoking, control cholesterol' },
      { name: 'Heart Failure', severity: 'critical', description: 'Heart cannot pump blood efficiently', symptoms: 'Shortness of breath, swollen legs, fatigue', prevention: 'Manage BP and diabetes, heart-healthy lifestyle' },
      { name: 'Arrhythmia', severity: 'serious', description: 'Irregular heart rhythm', symptoms: 'Palpitations, dizziness, fainting', prevention: 'Avoid stimulants, manage stress' },
      { name: 'Hypertension', severity: 'serious', description: 'Chronically high blood pressure strains heart', symptoms: 'Often no symptoms — "silent killer"', prevention: 'Low sodium diet, exercise, stress management' },
    ]
  },

  // ─── LUNGS ──────────────────────────────
  lungs: {
    id: 'lungs',
    name: 'Lungs',
    system: 'respiratory',
    emoji: '🫁',
    color: '#00d4ff',
    colorGlow: 'rgba(0,212,255,0.4)',
    weight: '1.3 kg combined',
    location: 'Chest cavity, either side of heart',
    gender: 'both',
    position: { x: 50, y: 28 },

    simple: {
      whatItIs: 'Your lungs are like two giant sponges that pull oxygen from the air and swap it for carbon dioxide — the waste gas your body needs to throw out.',
      howItWorks: 'When you breathe in, air travels down your windpipe into millions of tiny air sacs called alveoli. Oxygen seeps through their thin walls into your blood. Carbon dioxide seeps the other way and leaves when you breathe out.',
      funFacts: [
        '🌬️ You breathe about 22,000 times per day',
        '🎈 Surface area of both lungs = size of a tennis court!',
        '🫧 600 million alveoli (tiny air sacs)',
        '🫁 Right lung has 3 lobes, left has 2 (to make room for heart)',
        '💨 Move about 500ml of air per breath'
      ]
    },

    bio: {
      anatomy: 'Right lung: 3 lobes (upper, middle, lower). Left lung: 2 lobes (upper, lower) + cardiac notch. Pleural membranes (parietal + visceral). Bronchi → bronchioles → terminal bronchioles → respiratory bronchioles → alveolar ducts → alveoli. Surfactant (DPPC) produced by Type II pneumocytes.',
      function: 'Gas exchange: O₂ diffuses from alveoli → pulmonary capillaries. CO₂ diffuses pulmonary capillaries → alveoli. Driven by partial pressure gradients (Dalton\'s law, Fick\'s law). Also: pH regulation via CO₂, immune defense, blood reservoir.',
      physiology: 'Tidal volume 500ml, IRV 3000ml, ERV 1200ml, RV 1200ml. Compliance = ΔV/ΔP. Surfactant reduces surface tension (LaPlace law). V/Q ratio ideally 0.8. Oxygen carried by Hb (97%) + dissolved (3%). CO₂ as bicarbonate (70%), carbaminohemoglobin (23%), dissolved (7%).',
      bloodSupply: 'Pulmonary arteries (deoxygenated blood IN), pulmonary veins (oxygenated blood OUT). Bronchial arteries supply lung tissue itself.',
    },

    flows: [
      { type: 'air', description: 'Air flows: Nose/Mouth → Pharynx → Larynx → Trachea → Bronchi → Alveoli', color: '#00d4ff' },
      { type: 'blood', description: 'Deoxygenated blood IN via pulmonary artery, oxygenated OUT via pulmonary vein', color: '#ff2d55' },
    ],

    diseases: [
      { name: 'Asthma', severity: 'serious', description: 'Airway inflammation causes breathing difficulty', symptoms: 'Wheezing, shortness of breath, chest tightness, coughing', prevention: 'Avoid triggers, use inhalers, air quality control' },
      { name: 'COPD', severity: 'critical', description: 'Progressive destruction of alveoli, usually from smoking', symptoms: 'Chronic cough, breathlessness, excess mucus', prevention: 'Never smoke, avoid air pollution' },
      { name: 'Pneumonia', severity: 'serious', description: 'Infection fills alveoli with fluid/pus', symptoms: 'High fever, cough with phlegm, chest pain', prevention: 'Vaccination, good hygiene, avoid smoking' },
      { name: 'Lung Cancer', severity: 'critical', description: 'Malignant cell growth in lungs', symptoms: 'Persistent cough, blood in phlegm, weight loss', prevention: 'No smoking, radon testing, reduce pollution exposure' },
    ]
  },

  // ─── LIVER ──────────────────────────────
  liver: {
    id: 'liver',
    name: 'Liver',
    system: 'digestive',
    emoji: '🟤',
    color: '#ff6b35',
    colorGlow: 'rgba(255,107,53,0.4)',
    weight: '1.5 kg (largest internal organ)',
    location: 'Upper right abdomen, below diaphragm',
    gender: 'both',
    position: { x: 60, y: 40 },

    simple: {
      whatItIs: 'Your liver is the ultimate multi-tasker of your body — it does over 500 different jobs! It\'s like a giant chemical factory, filter, and storage warehouse all in one.',
      howItWorks: 'Blood from your intestines passes through the liver first. The liver grabs nutrients, processes them, detoxifies harmful substances (like alcohol and drugs), produces bile to digest fat, and stores energy as glycogen.',
      funFacts: [
        '🔄 Only organ that can completely regenerate itself',
        '⚗️ Performs 500+ functions daily',
        '🩸 Receives 25% of heart\'s output every minute',
        '💛 Produces 1 liter of bile per day',
        '🍬 Stores glucose as glycogen for energy reserves'
      ]
    },

    bio: {
      anatomy: 'Divided into right and left lobes (+ caudate and quadrate lobes). Functional units: hepatic lobules (hexagonal, portal triads at corners). Hepatocytes = main cells. Kupffer cells = resident macrophages. Sinusoids lined by fenestrated endothelium. Space of Disse between hepatocytes and sinusoids.',
      function: 'Metabolism: glucose homeostasis (glycogenesis, glycogenolysis, gluconeogenesis), lipid metabolism (beta-oxidation, ketogenesis, cholesterol synthesis), protein metabolism (transamination, deamination, urea cycle). Detoxification: cytochrome P450 enzymes. Bile synthesis: cholesterol → bile acids + bilirubin conjugation.',
      physiology: 'Dual blood supply: portal vein (75%, nutrient-rich) + hepatic artery (25%, oxygenated). Enterohepatic circulation recycles bile salts. Albumin synthesis ~12g/day. Clotting factors II, V, VII, IX, X, XI, fibrinogen synthesis.',
      bloodSupply: 'Portal vein + hepatic artery IN. Hepatic veins → inferior vena cava OUT.',
    },

    flows: [
      { type: 'blood', description: 'Portal blood: nutrients from intestines → liver for processing', color: '#ff6b35' },
      { type: 'bile', description: 'Bile flows: Liver → Gallbladder (stored) → Small intestine (used for fat digestion)', color: '#ffd60a' },
    ],

    diseases: [
      { name: 'Hepatitis', severity: 'serious', description: 'Viral inflammation of liver (A, B, C, D, E)', symptoms: 'Jaundice, fatigue, abdominal pain, dark urine', prevention: 'Vaccination (A, B), safe sex, avoid needle sharing' },
      { name: 'Cirrhosis', severity: 'critical', description: 'Scar tissue replaces healthy liver tissue', symptoms: 'Jaundice, swelling, confusion, bleeding', prevention: 'Limit alcohol, treat hepatitis, healthy weight' },
      { name: 'Fatty Liver Disease', severity: 'serious', description: 'Fat builds up in liver cells', symptoms: 'Fatigue, discomfort in upper right abdomen', prevention: 'Healthy diet, exercise, limit alcohol' },
      { name: 'Liver Cancer', severity: 'critical', description: 'Malignant tumor in liver', symptoms: 'Weight loss, yellow skin, swollen abdomen', prevention: 'Treat chronic hepatitis, limit alcohol' },
    ]
  },

  // ─── STOMACH ────────────────────────────
  stomach: {
    id: 'stomach',
    name: 'Stomach',
    system: 'digestive',
    emoji: '🫃',
    color: '#ffd60a',
    colorGlow: 'rgba(255,214,10,0.4)',
    weight: 'Empty: ~150g; Full: ~1kg',
    location: 'Upper left abdomen, between esophagus and small intestine',
    gender: 'both',
    position: { x: 48, y: 42 },

    simple: {
      whatItIs: 'Your stomach is a muscular bag that acts like a blender and acid bath. It breaks food into a smooth paste and starts the chemical digestion process.',
      howItWorks: 'When food enters, your stomach muscles churn it while pumping out powerful acid (strong enough to dissolve metal!). This turns food into a semi-liquid called chyme, which slowly passes to your small intestine.',
      funFacts: [
        '⚗️ Stomach acid (pH 1-2) is as acidic as car battery acid',
        '🔄 Replaces its own lining every 3-5 days to avoid self-digestion',
        '📏 Can expand to hold 1-1.5 liters of food',
        '⏱️ Keeps food for 4-5 hours before sending to intestines',
        '🔊 That growling sound = muscles contracting on empty stomach'
      ]
    },

    bio: {
      anatomy: 'Regions: cardia, fundus, body (corpus), antrum, pylorus. Wall layers (inside out): mucosa (rugae folds), submucosa, muscularis (inner oblique, middle circular, outer longitudinal), serosa. Gastric pits contain: parietal cells (HCl + intrinsic factor), chief cells (pepsinogen), G cells (gastrin), mucous cells.',
      function: 'Mechanical digestion (churning). Chemical digestion: HCl (pH 1.5-3.5) activates pepsinogen → pepsin (protein digestion). Intrinsic factor for vitamin B12 absorption. Gastric lipase (minor fat digestion). Secretin/CCK regulation.',
      physiology: 'Gastric emptying regulated by pyloric sphincter. CCK slows emptying when fat/protein detected. Gastric phase: distension stimulates gastrin → more HCl. Protein denaturation at low pH optimizes pepsin activity (optimum pH 1.5-2.5).',
    },

    flows: [
      { type: 'digestive', description: 'Food: Mouth → Esophagus → Stomach → Chyme released into Duodenum', color: '#ffd60a' },
      { type: 'acid', description: 'Gastric acid secreted by parietal cells into stomach lumen', color: '#ff6b35' },
    ],

    diseases: [
      { name: 'Peptic Ulcer', severity: 'serious', description: 'H. pylori bacteria or NSAIDs erode stomach lining', symptoms: 'Burning stomach pain, bloating, nausea', prevention: 'Treat H. pylori, limit NSAIDs, reduce stress' },
      { name: 'Gastritis', severity: 'mild', description: 'Inflammation of stomach lining', symptoms: 'Stomach pain, nausea, vomiting, indigestion', prevention: 'Avoid irritants, healthy diet, limit alcohol' },
      { name: 'Stomach Cancer', severity: 'critical', description: 'Malignant cells in stomach tissue', symptoms: 'Persistent indigestion, weight loss, blood in stool', prevention: 'Treat H. pylori, avoid smoked/salty foods, no smoking' },
      { name: 'GERD', severity: 'mild', description: 'Acid reflux into esophagus', symptoms: 'Heartburn, regurgitation, chest pain', prevention: 'Avoid trigger foods, don\'t lie down after eating, healthy weight' },
    ]
  },

  // ─── KIDNEYS ────────────────────────────
  kidneys: {
    id: 'kidneys',
    name: 'Kidneys',
    system: 'urinary',
    emoji: '🫘',
    color: '#ff006e',
    colorGlow: 'rgba(255,0,110,0.4)',
    weight: '150g each',
    location: 'Posterior abdomen, either side of spine (T12-L3)',
    gender: 'both',
    position: { x: 50, y: 48 },

    simple: {
      whatItIs: 'Your kidneys are two bean-shaped filters that clean your blood constantly. They remove waste products and extra water, turning it into urine.',
      howItWorks: 'Every hour your kidneys filter ALL your blood about 30 times. They keep the stuff your body needs and kick out the waste. The waste + extra water becomes urine that flows to your bladder.',
      funFacts: [
        '🔄 Filter all blood every 30 minutes (180L/day filtered!)',
        '💧 Produce 1-2 liters of urine daily',
        '🫘 Each kidney has ~1 million filtration units (nephrons)',
        '⚖️ Balance sodium, potassium, calcium levels',
        '🩺 Can donate one kidney and live healthily with one'
      ]
    },

    bio: {
      anatomy: 'Outer cortex + inner medulla (pyramids + columns). Renal pelvis → ureter. Nephron = functional unit: Bowman\'s capsule + glomerulus (filtration) → PCT → Loop of Henle (descending thin, ascending thin, thick) → DCT → collecting duct.',
      function: 'Filtration: GFR ~125ml/min (180L/day). Reabsorption: PCT reabsorbs 65% Na⁺, all glucose, amino acids. Loop of Henle: concentration gradient. DCT + CD: aldosterone (Na⁺/K⁺) and ADH (water). Erythropoietin (RBC production), Calcitriol (Vit D activation), Renin (RAAS).',
      physiology: 'RAAS axis: Renin → Angiotensinogen → Angiotensin I → ACE → Angiotensin II → aldosterone. Starling forces govern GFR. Tubuloglomerular feedback at macula densa. Countercurrent multiplier concentrates urine up to 1200 mOsm.',
    },

    flows: [
      { type: 'blood', description: 'Blood: Renal artery → Glomerulus (filter) → Clean blood back via renal vein', color: '#ff2d55' },
      { type: 'urine', description: 'Filtrate: Nephron → Renal pelvis → Ureter → Bladder → Urethra', color: '#ffd60a' },
    ],

    diseases: [
      { name: 'Kidney Stones', severity: 'serious', description: 'Mineral crystals form in kidney or ureter', symptoms: 'Severe back/side pain, blood in urine, nausea', prevention: 'Drink lots of water, reduce sodium/oxalate foods' },
      { name: 'Chronic Kidney Disease', severity: 'critical', description: 'Gradual loss of kidney function', symptoms: 'Fatigue, swelling, changes in urination, nausea', prevention: 'Control diabetes and BP, avoid nephrotoxic drugs' },
      { name: 'Urinary Tract Infection', severity: 'mild', description: 'Bacterial infection of urinary system', symptoms: 'Burning urination, frequent urge, cloudy urine', prevention: 'Stay hydrated, proper hygiene, urinate after sex' },
      { name: 'Kidney Failure (Acute)', severity: 'critical', description: 'Sudden loss of kidney function', symptoms: 'Little/no urine, swelling, confusion', prevention: 'Treat infections promptly, avoid nephrotoxins' },
    ]
  },

  // ─── SMALL INTESTINE ────────────────────
  smallIntestine: {
    id: 'smallIntestine',
    name: 'Small Intestine',
    system: 'digestive',
    emoji: '🌀',
    color: '#00ff9f',
    colorGlow: 'rgba(0,255,159,0.4)',
    weight: '~1 kg',
    location: 'Central abdomen, coiled within peritoneal cavity',
    gender: 'both',
    position: { x: 50, y: 52 },

    simple: {
      whatItIs: 'Despite being called "small," this is the longest organ in your body! It\'s where the real magic of digestion happens — almost all nutrients from your food are absorbed here.',
      howItWorks: 'Chyme from your stomach enters here and gets mixed with digestive juices from the pancreas and bile from the liver. The inner walls have tiny finger-like projections that absorb nutrients directly into your blood.',
      funFacts: [
        '📏 6 meters (20 feet) long — much longer than you are tall!',
        '🔬 Inner surface area = size of a studio apartment (250 m²)',
        '⏱️ Food spends 2-6 hours here',
        '💊 90% of all nutrient absorption happens here',
        '🦠 Contains trillions of beneficial bacteria'
      ]
    },

    bio: {
      anatomy: 'Three segments: duodenum (25cm, C-shaped), jejunum (2.5m), ileum (3.5m). Mucosa has plicae circulares (circular folds) → villi → microvilli (brush border). Goblet cells secrete mucus. Enterocytes = absorptive cells. Peyer\'s patches (MALT) in ileum. Crypts of Lieberkühn.',
      function: 'Duodenum: neutralizes chyme (bicarbonate), receives bile + pancreatic enzymes. Jejunum: major absorption site (sugars, AAs, fats, vitamins). Ileum: B12 + bile salt reabsorption. Enzymes: maltase, sucrase, lactase, peptidases, enterokinase (activates trypsinogen).',
      physiology: 'Segmentation contractions mix contents. Peristalsis propels chyme. Lacteals absorb fats (chylomicrons → lymph). Glucose/AAs via Na⁺ cotransport (SGLT1). Microvilli increase surface area 600-fold. CCK secreted → gallbladder contraction + pancreatic enzyme release.',
    },

    flows: [
      { type: 'digestive', description: 'Chyme flows: Stomach → Duodenum → Jejunum → Ileum → Large Intestine', color: '#00ff9f' },
      { type: 'lymph', description: 'Fat absorbed into lacteals → lymphatic vessels → blood', color: '#a855f7' },
    ],

    diseases: [
      { name: 'Celiac Disease', severity: 'serious', description: 'Gluten triggers immune attack on intestinal villi', symptoms: 'Diarrhea, bloating, weight loss, nutrient deficiency', prevention: 'Strict gluten-free diet' },
      { name: 'Crohn\'s Disease', severity: 'serious', description: 'Chronic inflammation of any GI tract segment', symptoms: 'Diarrhea, abdominal pain, fatigue, weight loss', prevention: 'No smoking, healthy diet, stress management' },
    ]
  },

  // ─── PANCREAS ───────────────────────────
  pancreas: {
    id: 'pancreas',
    name: 'Pancreas',
    system: 'digestive',
    emoji: '🫓',
    color: '#ffd60a',
    colorGlow: 'rgba(255,214,10,0.4)',
    weight: '80-100g',
    location: 'Behind stomach, between duodenum and spleen',
    gender: 'both',
    position: { x: 54, y: 44 },

    simple: {
      whatItIs: 'The pancreas is a double-duty organ that works as both a digestive helper and a blood sugar controller. It\'s crucial for keeping your energy levels stable all day.',
      howItWorks: 'It squirts digestive enzymes into your small intestine to break down food. It also releases insulin (to lower blood sugar after eating) and glucagon (to raise blood sugar when it drops too low) directly into your blood.',
      funFacts: [
        '🔄 Has two completely separate jobs (exocrine + endocrine)',
        '💉 Makes insulin that billions of diabetics need daily',
        '⚗️ Produces 1.5 liters of digestive juice per day',
        '🧪 Enzymes are so powerful they\'re kept inactive until they reach intestine',
        '🩸 Islets of Langerhans = insulin-making cells (only 2% of pancreas)'
      ]
    },

    bio: {
      anatomy: 'Head (in duodenal C-loop), neck, body, tail (near spleen). Exocrine (98%): acinar cells → pancreatic duct → duodenum. Endocrine (2%): Islets of Langerhans: α cells (glucagon), β cells (insulin), δ cells (somatostatin), PP cells (pancreatic polypeptide).',
      function: 'Exocrine: amylase (starch), lipase (fats), proteases (trypsinogen, chymotrypsinogen, proelastase, procarboxypeptidase — activated by enterokinase). Endocrine: Insulin (GLUT4 upregulation, glycogenesis, inhibits lipolysis). Glucagon (glycogenolysis, gluconeogenesis). Somatostatin inhibits both.',
    },

    flows: [
      { type: 'digestive', description: 'Pancreatic juice → pancreatic duct → duodenum (enzymes + bicarbonate)', color: '#ffd60a' },
      { type: 'blood', description: 'Insulin/Glucagon secreted directly into portal bloodstream', color: '#ff2d55' },
    ],

    diseases: [
      { name: 'Type 1 Diabetes', severity: 'critical', description: 'Autoimmune destruction of β cells, no insulin', symptoms: 'Excessive thirst, frequent urination, weight loss, fatigue', prevention: 'No known prevention; managed with insulin therapy' },
      { name: 'Type 2 Diabetes', severity: 'serious', description: 'Insulin resistance + β cell dysfunction', symptoms: 'Fatigue, blurred vision, slow-healing wounds', prevention: 'Healthy diet, exercise, maintain healthy weight' },
      { name: 'Pancreatitis', severity: 'serious', description: 'Enzymes activate inside pancreas, self-digestion', symptoms: 'Severe upper abdominal pain radiating to back, nausea', prevention: 'Limit alcohol, treat gallstones, low-fat diet' },
      { name: 'Pancreatic Cancer', severity: 'critical', description: 'Most deadly GI cancer with late presentation', symptoms: 'Jaundice, weight loss, back pain, new diabetes', prevention: 'No smoking, healthy weight, limit alcohol' },
    ]
  },

  // ─── SPLEEN ─────────────────────────────
  spleen: {
    id: 'spleen',
    name: 'Spleen',
    system: 'lymphatic',
    emoji: '🫗',
    color: '#a855f7',
    colorGlow: 'rgba(168,85,247,0.4)',
    weight: '150-200g',
    location: 'Upper left abdomen, below diaphragm, next to stomach',
    gender: 'both',
    position: { x: 38, y: 40 },

    simple: {
      whatItIs: 'The spleen is your body\'s blood filter and immune headquarters. It cleans old blood cells and stores immune cells ready to fight infections.',
      howItWorks: 'Blood flows through the spleen slowly. The spleen picks out old, worn-out red blood cells and destroys them (then recycles the iron). It also produces and stores white blood cells to fight germs.',
      funFacts: [
        '🩸 Filters 200 liters of blood per day',
        '🔄 Recycles iron from old red blood cells',
        '💪 Largest lymphatic organ in the body',
        '⚠️ Can be removed and you can still survive (liver takes over)',
        '🦠 Stores ~25% of all lymphocytes'
      ]
    },

    bio: {
      anatomy: 'White pulp (lymphoid tissue: lymphocytes + macrophages around central arterioles, PALS). Red pulp (blood-filled sinusoids + splenic cords of Billroth). Marginal zone between them. Capsule + trabeculae provide structure.',
      function: 'Red pulp: phagocytosis of old/damaged RBCs + platelets, hemoglobin → bilirubin + iron recycling. White pulp: immune response to blood-borne antigens, B-cell activation, antibody production. Opsonization + complement activation. Hematopoiesis in fetal life (+ extramedullary in disease).',
    },

    flows: [
      { type: 'blood', description: 'Splenic artery → white/red pulp → sinusoids → splenic vein → portal vein', color: '#ff2d55' },
      { type: 'lymph', description: 'Lymphocytes circulate through white pulp, activated by antigens', color: '#a855f7' },
    ],

    diseases: [
      { name: 'Splenomegaly', severity: 'serious', description: 'Enlarged spleen from infection, liver disease or blood disorders', symptoms: 'Left upper abdominal pain, early satiety', prevention: 'Treat underlying conditions' },
      { name: 'Splenic Rupture', severity: 'critical', description: 'Spleen tears, causing life-threatening internal bleeding', symptoms: 'Severe abdominal pain, lightheadedness, shock', prevention: 'Avoid contact sports if spleen is enlarged (mono)' },
    ]
  },

  // ─── GALLBLADDER ────────────────────────
  gallbladder: {
    id: 'gallbladder',
    name: 'Gallbladder',
    system: 'digestive',
    emoji: '🫙',
    color: '#ffd60a',
    colorGlow: 'rgba(255,214,10,0.4)',
    weight: '~45g (empty)',
    location: 'Underside of liver, right side of abdomen',
    gender: 'both',
    position: { x: 62, y: 41 },

    simple: {
      whatItIs: 'The gallbladder is a small storage pouch for bile — the green-yellow liquid your liver makes to help digest fatty foods.',
      howItWorks: 'Your liver makes bile constantly and drips it into the gallbladder. When you eat a fatty meal, your gallbladder squeezes and pushes concentrated bile into your small intestine to help break down the fat.',
      funFacts: [
        '💛 Stores and concentrates bile 5-10× stronger than liver bile',
        '🫙 Holds about 30-50ml of bile',
        '🍕 Squeezes out when you eat fatty foods',
        '✂️ Can be removed without major issues (liver takes over)',
        '🪨 1 in 10 people develop gallstones'
      ]
    },

    bio: {
      anatomy: 'Pear-shaped sac: fundus, body, neck (Hartmann\'s pouch) → cystic duct → common bile duct → duodenum (ampulla of Vater with sphincter of Oddi). Wall: mucosa, smooth muscle, serosa. Mucosa concentrates bile via Na⁺/Cl⁻/water absorption.',
      function: 'Bile storage and concentration. CCK (from duodenum) triggers contraction. Bile emulsifies dietary fats (increases surface area for lipase action). Bile salts form micelles with fatty acids for mucosal absorption.',
    },

    flows: [
      { type: 'bile', description: 'Bile: Liver → Hepatic duct → Cystic duct → Gallbladder (stored) → Common bile duct → Duodenum', color: '#ffd60a' },
    ],

    diseases: [
      { name: 'Gallstones', severity: 'serious', description: 'Cholesterol or bilirubin crystals form in gallbladder', symptoms: 'Sudden intense right upper abdominal pain after fatty meal', prevention: 'Healthy weight, low-fat diet, avoid rapid weight loss' },
      { name: 'Cholecystitis', severity: 'serious', description: 'Gallbladder inflammation, usually from gallstones', symptoms: 'Severe right upper pain, fever, nausea, vomiting', prevention: 'Treat gallstones promptly' },
    ]
  },

  // ─── LARGE INTESTINE ────────────────────
  largeIntestine: {
    id: 'largeIntestine',
    name: 'Large Intestine',
    system: 'digestive',
    emoji: '🔄',
    color: '#ff6b35',
    colorGlow: 'rgba(255,107,53,0.4)',
    weight: '~200g (empty)',
    location: 'Peripheral abdomen, framing the small intestine',
    gender: 'both',
    position: { x: 50, y: 56 },

    simple: {
      whatItIs: 'Your large intestine is where water gets reclaimed from digested food and your gut bacteria do their thing. It compacts waste into stool for removal.',
      howItWorks: 'After the small intestine absorbs nutrients, the leftovers pass into the large intestine. Here, water and salts are absorbed back into the body, and trillions of bacteria ferment remaining food. The result is formed stool.',
      funFacts: [
        '📏 1.5 meters long but much wider than small intestine',
        '🦠 Houses 100 trillion bacteria — 10× more than body cells!',
        '💧 Absorbs 1-2 liters of water daily',
        '⏱️ Food residue takes 12-48 hours to travel through',
        '💨 Bacteria produce vitamins K and B12 here'
      ]
    },

    bio: {
      anatomy: 'Cecum (+ appendix) → ascending colon → transverse colon → descending colon → sigmoid colon → rectum → anal canal. Haustrations (pouches). Teniae coli (3 longitudinal muscle bands). Epiploic appendages (fat tags). Mucosa: absorptive cells + goblet cells. No villi.',
      function: 'Water absorption (colonocytes). Electrolyte balance. Fermentation by gut microbiome (SCFA production: acetate, propionate, butyrate — colonocyte energy). Mass peristalsis 1-3×/day → defecation reflex. Microbiome: immune modulation, vitamin synthesis, pathogen exclusion.',
    },

    diseases: [
      { name: 'Colorectal Cancer', severity: 'critical', description: 'Malignant tumors of colon/rectum', symptoms: 'Blood in stool, change in bowel habits, weight loss', prevention: 'Colonoscopy screening, high-fiber diet, limit red meat, no smoking' },
      { name: 'Irritable Bowel Syndrome', severity: 'mild', description: 'Functional bowel disorder with pain and altered habits', symptoms: 'Abdominal cramping, diarrhea and/or constipation, bloating', prevention: 'Identify triggers, stress management, dietary fiber' },
      { name: 'Diverticulitis', severity: 'serious', description: 'Pouches in colon wall become inflamed/infected', symptoms: 'Left lower abdominal pain, fever, change in bowel habits', prevention: 'High-fiber diet, stay hydrated, exercise' },
    ]
  },

  // ─── THYROID ────────────────────────────
  thyroid: {
    id: 'thyroid',
    name: 'Thyroid Gland',
    system: 'endocrine',
    emoji: '🦋',
    color: '#00d4ff',
    colorGlow: 'rgba(0,212,255,0.4)',
    weight: '20-30g',
    location: 'Neck, in front of trachea, below Adam\'s apple',
    gender: 'both',
    position: { x: 50, y: 18 },

    simple: {
      whatItIs: 'Your thyroid is a butterfly-shaped gland in your neck that acts like the thermostat of your body — it sets the speed for almost every body function.',
      howItWorks: 'It makes hormones (T3 and T4) that travel through your blood and tell every cell how fast to work — metabolism, heart rate, temperature, mood, and growth all depend on thyroid hormones.',
      funFacts: [
        '🦋 Butterfly shape perfectly describes it',
        '⚡ Controls metabolism of EVERY cell in the body',
        '🥱 Too little hormone = feel cold, sluggish, depressed (hypothyroid)',
        '😰 Too much hormone = feel hot, anxious, heart racing (hyperthyroid)',
        '🧂 Needs iodine from food to make its hormones'
      ]
    },

    bio: {
      anatomy: 'Two lobes connected by isthmus. Follicles (functional units): colloid (thyroglobulin) surrounded by follicular cells. Parafollicular (C) cells between follicles. Richly vascularized.',
      function: 'T3 (triiodothyronine, more active) and T4 (thyroxine): increase BMR, thermogenesis, protein synthesis, enhance sympathetic effects, fetal neurodevelopment, bone growth. Calcitonin (C cells): lowers blood Ca²⁺ (opposes PTH). HPT axis: TRH → TSH → T3/T4 (negative feedback).',
    },

    flows: [
      { type: 'blood', description: 'T3/T4 hormones released into blood → distributed to every body cell', color: '#00d4ff' },
    ],

    diseases: [
      { name: 'Hypothyroidism', severity: 'serious', description: 'Too little thyroid hormone; metabolism slows', symptoms: 'Fatigue, weight gain, cold intolerance, depression, dry skin', prevention: 'Adequate iodine intake, regular screening' },
      { name: 'Hyperthyroidism', severity: 'serious', description: 'Too much thyroid hormone; overactive metabolism', symptoms: 'Weight loss, rapid heartbeat, anxiety, heat intolerance, sweating', prevention: 'Screening, avoid excess iodine, regular check-ups' },
      { name: 'Thyroid Cancer', severity: 'serious', description: 'Malignant thyroid cells (usually well-treatable)', symptoms: 'Neck lump, hoarse voice, difficulty swallowing', prevention: 'Regular check-ups, reduce radiation exposure to neck' },
      { name: 'Goiter', severity: 'mild', description: 'Enlarged thyroid gland due to iodine deficiency or disorder', symptoms: 'Visible neck swelling, difficulty swallowing', prevention: 'Adequate iodine in diet (iodized salt)' },
    ]
  },

  // ─── EYES ───────────────────────────────
  eyes: {
    id: 'eyes',
    name: 'Eyes',
    system: 'sensory',
    emoji: '👁️',
    color: '#00d4ff',
    colorGlow: 'rgba(0,212,255,0.4)',
    weight: '~7.5g each',
    location: 'Orbital sockets of skull',
    gender: 'both',
    position: { x: 50, y: 6 },

    simple: {
      whatItIs: 'Your eyes are biological cameras that capture light and convert it into signals your brain turns into images. They process more visual information than any manmade camera.',
      howItWorks: 'Light enters through the cornea (clear front), passes through the pupil (the hole), is focused by the lens, and hits the retina at the back. Retina cells convert light to electrical signals sent to brain via optic nerve.',
      funFacts: [
        '📸 Can distinguish 10 million colors',
        '⚡ Process visual information in 13 milliseconds',
        '🎯 The fovea sees at 20/20; rest of retina is blurry',
        '🌙 Adapted to see in very low light (rods)',
        '🦅 Humans can see 200° field of view (peripherally)'
      ]
    },

    bio: {
      anatomy: 'Three layers: sclera (fibrous, white), choroid (vascular), retina (neural). Anterior: cornea, aqueous humor, iris, ciliary body, lens. Posterior: vitreous humor, retina (rods + cones), fovea, optic disc (blind spot). Rods (120M): dim light, b&w. Cones (6M): color, 3 types (S,M,L — blue,green,red).',
      function: 'Phototransduction: rhodopsin/photopsin absorbs photons → cis-retinal → all-trans-retinal → G-protein (transducin) cascade → ↓cGMP → Na⁺ channel closes → hyperpolarization → signal to optic nerve. Visual processing: V1 (primary cortex) → dorsal stream (where) + ventral stream (what).',
    },

    diseases: [
      { name: 'Cataract', severity: 'serious', description: 'Lens becomes cloudy, blurring vision', symptoms: 'Cloudy vision, glare sensitivity, faded colors', prevention: 'UV protection sunglasses, no smoking, control diabetes' },
      { name: 'Glaucoma', severity: 'critical', description: 'High intraocular pressure damages optic nerve', symptoms: 'Gradual peripheral vision loss, eye pain', prevention: 'Regular eye pressure checks, eye drops if needed' },
      { name: 'Macular Degeneration', severity: 'serious', description: 'Damage to fovea causing central vision loss', symptoms: 'Blurred central vision, distorted lines', prevention: 'No smoking, AREDS vitamins, eye exams after 50' },
    ]
  },

  // ─── SKIN ───────────────────────────────
  skin: {
    id: 'skin',
    name: 'Skin',
    system: 'integumentary',
    emoji: '🫶',
    color: '#ffd60a',
    colorGlow: 'rgba(255,214,10,0.4)',
    weight: '~4-5 kg (largest organ!)',
    location: 'Covers entire body surface',
    gender: 'both',
    position: { x: 50, y: 50 },

    simple: {
      whatItIs: 'Skin is your body\'s largest organ — it\'s a waterproof, self-repairing shield that covers and protects everything inside you. It also helps you feel the world around you.',
      howItWorks: 'Skin has three layers: the outer epidermis (dead cells forming a waterproof barrier), the middle dermis (containing nerves, hair follicles, and sweat glands), and the deep hypodermis (fat layer for insulation and cushioning).',
      funFacts: [
        '🗺️ 1.5-2 square meters — size of a small door!',
        '🔄 Completely replaces itself every 2-4 weeks',
        '🌡️ Has 4 types of sensory receptors (hot, cold, pressure, pain)',
        '☀️ Makes vitamin D from sunlight',
        '💧 Prevents you from losing over 95% of body\'s water'
      ]
    },

    bio: {
      anatomy: 'Epidermis (stratified squamous): stratum basale → spinosum → granulosum → lucidum (palms/soles) → corneum. Cells: keratinocytes (90%), melanocytes (pigment), Langerhans cells (immune), Merkel cells (touch). Dermis: papillary (areolar CT) + reticular (dense irregular CT). Hypodermis: adipocytes + connective tissue.',
      function: 'Barrier (physical, chemical, microbial). Thermoregulation (eccrine sweat glands, cutaneous vasodilation/vasoconstriction). Vitamin D₃ synthesis (7-dehydrocholesterol + UV-B → cholecalciferol). Sensation (Meissner\'s, Pacinian, Ruffini, Merkel corpuscles). Immune defense (Langerhans cells, β-defensins).',
    },

    diseases: [
      { name: 'Skin Cancer (Melanoma)', severity: 'critical', description: 'Malignant melanocytes, most dangerous skin cancer', symptoms: 'Changing mole: asymmetry, border irregularity, multiple colors, diameter >6mm', prevention: 'Sunscreen SPF 30+, avoid tanning beds, annual skin checks' },
      { name: 'Eczema (Atopic Dermatitis)', severity: 'mild', description: 'Chronic inflammatory skin condition', symptoms: 'Itchy, red, dry, cracked skin', prevention: 'Moisturize daily, identify triggers, avoid harsh soaps' },
      { name: 'Psoriasis', severity: 'serious', description: 'Autoimmune condition causing rapid skin cell buildup', symptoms: 'Red scaly patches, itching, burning', prevention: 'Manage stress, no smoking, moisturize, avoid skin injury' },
    ]
  },

  // ─── REPRODUCTIVE (FEMALE) ──────────────
  uterus: {
    id: 'uterus',
    name: 'Uterus',
    system: 'reproductive',
    emoji: '🌸',
    color: '#ff006e',
    colorGlow: 'rgba(255,0,110,0.4)',
    weight: '60-100g (non-pregnant)',
    location: 'Pelvis, between bladder and rectum',
    gender: 'female',
    position: { x: 50, y: 62 },

    simple: {
      whatItIs: 'The uterus (womb) is the organ where a baby grows during pregnancy. When not pregnant, it sheds its lining monthly (menstruation). It\'s one of the most muscular organs in the body.',
      howItWorks: 'Each month, the uterus prepares a thick, blood-rich lining for a possible pregnancy. If an egg is fertilized, it implants here and grows over 9 months. If not, the lining is shed (period). During birth, powerful muscles push the baby out.',
      funFacts: [
        '📏 Size of a pear — but stretches to hold a full-term baby!',
        '💪 Has some of the strongest muscles in the body (myometrium)',
        '🔄 Lining (endometrium) rebuilds monthly',
        '🤰 Can stretch from 7cm to 40cm during pregnancy',
        '🌡️ Slightly warmer than rest of body during pregnancy'
      ]
    },

    bio: {
      anatomy: 'Fundus (top), corpus (body), isthmus, cervix (neck). Layers: perimetrium (outer), myometrium (thick smooth muscle), endometrium (functional + basal layers). Fallopian tubes open at uterine horns. Blood supply: uterine arteries (branches of internal iliac).',
      function: 'Menstrual cycle: Proliferative phase (estrogen → endometrial growth), Secretory phase (progesterone → glandular development), Menstruation (↓hormones → lining shed). Implantation (day 6-10 post-fertilization). Parturition: oxytocin + prostaglandins trigger myometrial contractions. Cervical dilation.',
    },

    diseases: [
      { name: 'Endometriosis', severity: 'serious', description: 'Endometrial tissue grows outside uterus', symptoms: 'Severe menstrual cramps, pelvic pain, infertility', prevention: 'No proven prevention; early diagnosis important' },
      { name: 'Uterine Fibroids', severity: 'serious', description: 'Non-cancerous muscle growths in/on uterus', symptoms: 'Heavy periods, pelvic pressure, frequent urination', prevention: 'Healthy weight, limit red meat, increase fruit intake' },
      { name: 'Cervical Cancer', severity: 'critical', description: 'HPV-caused cancer of cervix (very preventable)', symptoms: 'Unusual vaginal bleeding, pelvic pain, discharge', prevention: 'HPV vaccine, regular Pap smear, safe sex' },
    ]
  },

  // ─── REPRODUCTIVE (MALE) ────────────────
  prostate: {
    id: 'prostate',
    name: 'Prostate Gland',
    system: 'reproductive',
    emoji: '⚙️',
    color: '#00d4ff',
    colorGlow: 'rgba(0,212,255,0.4)',
    weight: '20-30g',
    location: 'Pelvis, below bladder, surrounding urethra',
    gender: 'male',
    position: { x: 50, y: 62 },

    simple: {
      whatItIs: 'The prostate is a walnut-sized gland that makes fluid to nourish and protect sperm. It surrounds part of the urethra (the tube you urinate through).',
      howItWorks: 'During ejaculation, the prostate squeezes its fluid into the urethra where it mixes with sperm from the testes to form semen. The prostate fluid makes up about 30% of semen and helps sperm survive and swim.',
      funFacts: [
        '🥜 Size of a walnut in young men',
        '📈 Grows throughout life — why older men have urinary issues',
        '🧪 PSA (Prostate-Specific Antigen) is a cancer screening marker',
        '⚙️ Fluid is slightly alkaline to neutralize vaginal acidity',
        '🚽 Located where it can press on urethra when enlarged'
      ]
    },

    bio: {
      anatomy: 'Zones: peripheral zone (70%, most cancers here), central zone (25%), transition zone (5%, BPH occurs here). Fibromuscular stroma. Prostatic urethra passes through. Surrounded by prostatic plexus of veins. Seminal vesicles + ejaculatory ducts enter at base.',
      function: 'Secretes prostatic fluid: PSA (liquefies semen), zinc (antibacterial), acid phosphatase, citrate, proteolytic enzymes. Smooth muscle: contracts during ejaculation. DHT (from testosterone via 5α-reductase) drives prostate growth. α1 receptors regulate tone (α-blockers relieve BPH symptoms).',
    },

    diseases: [
      { name: 'Benign Prostatic Hyperplasia (BPH)', severity: 'serious', description: 'Age-related non-cancerous prostate enlargement', symptoms: 'Weak urine stream, frequent urination, incomplete emptying', prevention: 'Exercise, healthy diet, maintain healthy weight' },
      { name: 'Prostate Cancer', severity: 'critical', description: 'Most common cancer in men; usually slow-growing', symptoms: 'Urinary problems, blood in urine/semen, bone pain (advanced)', prevention: 'Regular PSA screening after 50, healthy diet, exercise' },
      { name: 'Prostatitis', severity: 'serious', description: 'Inflammation of prostate (bacterial or non-bacterial)', symptoms: 'Pelvic pain, painful urination, fever (if bacterial)', prevention: 'Prompt treatment of UTIs, safe sex practices' },
    ]
  },

};

// ─── BODY SYSTEMS ───────────────────────────────────────────────────────────
const BODY_SYSTEMS = {
  nervous:       { name: 'Nervous System',       color: '#a855f7', icon: '🧠', organs: ['brain'] },
  circulatory:   { name: 'Circulatory System',   color: '#ff2d55', icon: '🫀', organs: ['heart'] },
  respiratory:   { name: 'Respiratory System',   color: '#00d4ff', icon: '🫁', organs: ['lungs'] },
  digestive:     { name: 'Digestive System',     color: '#ffd60a', icon: '🔄', organs: ['stomach','liver','gallbladder','pancreas','smallIntestine','largeIntestine'] },
  urinary:       { name: 'Urinary System',       color: '#ff006e', icon: '🫘', organs: ['kidneys'] },
  endocrine:     { name: 'Endocrine System',     color: '#00d4ff', icon: '🦋', organs: ['thyroid','pancreas'] },
  lymphatic:     { name: 'Lymphatic System',     color: '#a855f7', icon: '🛡️', organs: ['spleen'] },
  sensory:       { name: 'Sensory System',       color: '#00d4ff', icon: '👁️', organs: ['eyes'] },
  integumentary: { name: 'Integumentary System', color: '#ffd60a', icon: '🫶', organs: ['skin'] },
  reproductive:  { name: 'Reproductive System',  color: '#ff006e', icon: '🌸', organs: ['uterus','prostate'] },
};

// Export
if (typeof module !== 'undefined') { module.exports = { ORGANS_DATA, BODY_SYSTEMS }; }
