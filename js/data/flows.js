// ═══════════════════════════════════════════
// FLUID FLOW ANIMATION DATA
// ═══════════════════════════════════════════

const FLOW_SYSTEMS = [
  {
    id: 'blood-systemic',
    name: 'Systemic Blood Circulation',
    icon: '🩸',
    color: '#ff2d55',
    colorDim: '#6b1a2d',
    description: 'Oxygenated blood travels from heart to every organ and tissue in the body',
    simpleDesc: 'Your heart pumps fresh, oxygen-rich blood (shown in red) through arteries to every part of your body — then collects used blood and sends it back.',
    bioDesc: 'Left ventricle → Aorta → Arteries → Arterioles → Capillaries (gas exchange) → Venules → Veins → Superior/Inferior Vena Cava → Right Atrium. Mean arterial pressure = DBP + 1/3(PP). ~5L/min cardiac output.',
    path: [
      'Left Ventricle', 'Aorta', 'Brachiocephalic', 'Brain / Head',
      'Subclavian → Arms', 'Celiac Trunk → Stomach/Liver',
      'Renal Arteries → Kidneys', 'Iliac Arteries → Legs',
      'Venous Return', 'Inferior Vena Cava', 'Right Atrium'
    ],
    particleCount: 40,
    speed: 1.5
  },
  {
    id: 'blood-pulmonary',
    name: 'Pulmonary Circulation',
    icon: '💨',
    color: '#6b7db3',
    colorOxy: '#ff2d55',
    description: 'Deoxygenated blood goes to lungs to get replenished with oxygen',
    simpleDesc: 'Your blood travels to the lungs, drops off carbon dioxide (waste), picks up fresh oxygen, and returns bright red to the heart.',
    bioDesc: 'Right ventricle → Pulmonary trunk → Left/Right pulmonary arteries → Pulmonary capillaries (alveoli — O₂/CO₂ exchange) → Pulmonary venules → 4 Pulmonary veins → Left atrium. Low pressure (25/8 mmHg).',
    path: ['Right Ventricle', 'Pulmonary Artery', 'Lungs (alveoli)', 'Gas Exchange', 'Pulmonary Vein', 'Left Atrium'],
    particleCount: 25,
    speed: 2.0
  },
  {
    id: 'lymphatic',
    name: 'Lymphatic Drainage',
    icon: '🛡️',
    color: '#a855f7',
    description: 'Lymph fluid collects interstitial waste and immune cells and drains back to blood',
    simpleDesc: 'A parallel drainage system that collects excess fluid from tissues, filters it through lymph nodes (where germs are destroyed), and returns it to the blood.',
    bioDesc: 'Interstitial fluid → Lymph capillaries → Lymphatic vessels (with valves) → Lymph nodes (macrophages + lymphocytes) → Lymph trunks → Thoracic duct (left) or Right lymphatic duct → Subclavian veins. Also absorbs chylomicrons from gut.',
    path: ['Tissues', 'Lymph Capillaries', 'Lymph Nodes (filter)', 'Lymph Trunks', 'Thoracic Duct', 'Left Subclavian Vein', 'Blood'],
    particleCount: 20,
    speed: 0.5
  },
  {
    id: 'digestive',
    name: 'Digestive Journey',
    icon: '🔄',
    color: '#ffd60a',
    description: 'Food travels through 9 meters of digestive tract, being broken down at each stage',
    simpleDesc: 'Follow a meal from your mouth all the way through! Each organ adds its own special sauce to break food into tiny nutrients your body can use.',
    bioDesc: 'Oral cavity (amylase) → Pharynx → Esophagus (peristalsis) → Stomach (HCl, pepsin, chyme) → Duodenum (bile + pancreatic enzymes) → Jejunum (absorption) → Ileum (B12, bile salts) → Cecum → Colon (water absorption, fermentation) → Rectum → Anus.',
    path: ['Mouth', 'Pharynx', 'Esophagus', 'Stomach', 'Duodenum', 'Jejunum', 'Ileum', 'Cecum', 'Ascending Colon', 'Transverse Colon', 'Descending Colon', 'Sigmoid', 'Rectum', 'Anus'],
    particleCount: 15,
    speed: 0.3
  },
  {
    id: 'urinary',
    name: 'Urine Formation & Flow',
    icon: '💧',
    color: '#ffd60a',
    colorDim: '#6b5800',
    description: 'Kidneys filter blood to produce urine, which flows to the bladder for elimination',
    simpleDesc: 'Your kidneys act like filters — they clean your blood and turn the waste + excess water into urine, which collects in your bladder until you empty it.',
    bioDesc: 'Renal artery → Glomerulus (filtration, 125ml/min) → Bowman\'s capsule → PCT (reabsorption 65%) → Loop of Henle (concentration) → DCT (fine-tuning) → Collecting duct (ADH-sensitive) → Renal pelvis → Ureter (peristalsis) → Bladder (detrusor muscle) → Urethra → External.',
    path: ['Renal Artery', 'Glomerulus', 'Bowman\'s Capsule', 'Proximal Tubule', 'Loop of Henle', 'Distal Tubule', 'Collecting Duct', 'Renal Pelvis', 'Ureter', 'Bladder', 'Urethra'],
    particleCount: 18,
    speed: 0.4
  },
  {
    id: 'csf',
    name: 'Cerebrospinal Fluid (CSF)',
    icon: '🧠',
    color: '#00d4ff',
    description: 'CSF cushions and nourishes the brain and spinal cord',
    simpleDesc: 'A clear liquid that floats and protects your brain like a cushion. It circulates through cavities in the brain and around the spinal cord, delivering nutrients and removing waste.',
    bioDesc: 'Choroid plexus (lateral ventricles) → Foramen of Monro → 3rd ventricle → Cerebral aqueduct (Sylvius) → 4th ventricle → Foramina of Luschka/Magendie → Subarachnoid space → Arachnoid granulations → Dural venous sinuses → Blood. 500ml/day produced; 150ml at any time.',
    path: ['Choroid Plexus', 'Lateral Ventricles', '3rd Ventricle', 'Aqueduct', '4th Ventricle', 'Subarachnoid Space', 'Spinal Column', 'Arachnoid Granulations', 'Venous Sinus'],
    particleCount: 12,
    speed: 0.2
  },
  {
    id: 'hormonal',
    name: 'Hormonal / Endocrine Flow',
    icon: '🦋',
    color: '#00ff9f',
    description: 'Glands release hormones into blood to communicate with distant organs',
    simpleDesc: 'Hormones are chemical messengers made by glands that travel in your blood to tell other organs what to do — like insulin telling cells to absorb sugar.',
    bioDesc: 'Hypothalamus → Pituitary (master gland: ACTH, TSH, LH, FSH, GH, ADH, Oxytocin) → Target glands (Thyroid, Adrenal, Gonads, Liver) → Target organs. Negative feedback loops maintain homeostasis.',
    path: ['Hypothalamus', 'Anterior Pituitary', 'Blood Stream', 'Target Gland', 'Target Organ', 'Negative Feedback → Hypothalamus'],
    particleCount: 15,
    speed: 0.8
  },
];

if (typeof module !== 'undefined') { module.exports = { FLOW_SYSTEMS }; }
