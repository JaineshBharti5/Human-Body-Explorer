// ═══════════════════════════════════════════
// EXTRA ANATOMY & BIOCHEMICAL DATABASE EXTENSION
// ═══════════════════════════════════════════
'use strict';

(function() {
  if (typeof ORGANS_DATA === 'undefined') {
    console.error('ORGANS_DATA is not defined. Ensure organs.js is loaded first.');
    return;
  }

  // 1. BRAIN
  ORGANS_DATA.brain.bio.chemicals = [
    { name: 'Glutamate', value: 'Primary excitatory neurotransmitter (80% of synapses). Crucial for cognitive function and neural plasticity.' },
    { name: 'GABA (gamma-aminobutyric acid)', value: 'Primary inhibitory neurotransmitter. Prevents over-excitation, promotes relaxation, and regulates muscle tone.' },
    { name: 'Dopamine', value: 'Involved in motor control, reward-motivated behavior, reinforcement, and executive function.' },
    { name: 'Serotonin (5-HT)', value: 'Regulates mood, sleep, appetite, and temperature. 90% produced in GI tract, but vital in CNS.' },
    { name: 'Cerebrospinal Fluid (CSF)', value: 'Produced at 500ml/day by choroid plexus. pH 7.33, low protein, high NaCl to cushion and wash metabolic waste.' }
  ];
  ORGANS_DATA.brain.bio.cells = [
    { name: 'Neurons', value: '86 billion signal-conducting cells using electrical action potentials and chemical synapses.' },
    { name: 'Astrocytes', value: 'Star-shaped glial cells that form the Blood-Brain Barrier (BBB), regulate extracellular K+, and support neurons.' },
    { name: 'Oligodendrocytes', value: 'Myelinating glial cells in the CNS that wrap axons in lipid-rich sheaths to speed up signal conduction.' },
    { name: 'Microglia', value: 'Resident macrophages of the CNS that phagocytose cellular debris and defend against pathogens.' }
  ];
  ORGANS_DATA.brain.pins = [
    { label: 'Cerebrum (Cortex)', dx: -5, dy: -18 },
    { label: 'Frontal Lobe', dx: -18, dy: -10 },
    { label: 'Cerebellum', dx: 14, dy: 10 },
    { label: 'Brainstem (Pons/Medulla)', dx: 2, dy: 18 }
  ];

  // 2. HEART
  ORGANS_DATA.heart.bio.chemicals = [
    { name: 'Calcium ions (Ca2+)', value: 'Vital for cardiac muscle cell depolarization, action potential plateau (phase 2), and muscular contraction.' },
    { name: 'Troponin I & T', value: 'Structural proteins; elevated blood levels serve as a primary clinical marker for myocardial infarction (heart attack).' },
    { name: 'ANP (Atrial Natriuretic Peptide)', value: 'Hormone secreted by atria in response to high blood volume; promotes renal sodium/water excretion to lower BP.' }
  ];
  ORGANS_DATA.heart.bio.cells = [
    { name: 'Cardiomyocytes', value: 'Branched, striated muscle cells connected by intercalated discs with gap junctions for synchronized contraction.' },
    { name: 'Pacemaker Cells', value: 'Self-excitatory cells in the SA/AV nodes that initiate action potentials without autonomic nerve input.' },
    { name: 'Purkinje Fibers', value: 'Specialized muscle fibers that rapidly conduct electrical depolarization from the AV bundle to ventricular walls.' }
  ];
  ORGANS_DATA.heart.pins = [
    { label: 'Aorta', dx: 2, dy: -20 },
    { label: 'Superior Vena Cava', dx: -12, dy: -16 },
    { label: 'Left Ventricle', dx: 8, dy: 10 },
    { label: 'Right Ventricle', dx: -8, dy: 8 }
  ];

  // 3. LUNGS
  ORGANS_DATA.lungs.bio.chemicals = [
    { name: 'Pulmonary Surfactant', value: 'Lipoprotein complex (primarily DPPC) secreted into alveoli to lower surface tension, preventing alveolar collapse.' },
    { name: 'Carbonic Anhydrase', value: 'Enzyme in RBCs within pulmonary capillaries; catalyzes CO2 hydration/dehydration to buffer blood pH.' }
  ];
  ORGANS_DATA.lungs.bio.cells = [
    { name: 'Type I Pneumocytes', value: 'Extremely thin squamous epithelial cells covering 95% of alveolar surface; optimized for gas diffusion.' },
    { name: 'Type II Pneumocytes', value: 'Cuboidal epithelial cells that synthesize surfactant and serve as progenitor stem cells for Type I repair.' },
    { name: 'Alveolar Macrophages', value: 'Resident phagocytic cells that clean the respiratory surface of dust, bacteria, and inhaled particles.' }
  ];
  ORGANS_DATA.lungs.pins = [
    { label: 'Trachea', dx: 0, dy: -22 },
    { label: 'Left Primary Bronchus', dx: 12, dy: -10 },
    { label: 'Right Primary Bronchus', dx: -12, dy: -10 },
    { label: 'Left Alveoli', dx: 18, dy: 8 },
    { label: 'Right Alveoli', dx: -18, dy: 8 }
  ];

  // 4. LIVER
  ORGANS_DATA.liver.bio.chemicals = [
    { name: 'Bile Acids & Salts', value: 'Synthesized from cholesterol; conjugated with taurine/glycine to emulsify lipids in the small intestine.' },
    { name: 'Conjugated Bilirubin', value: 'Yellow waste product of heme breakdown; rendered water-soluble in liver and excreted into bile.' },
    { name: 'Urea', value: 'Synthesized via the urea cycle from toxic ammonia, which is a byproduct of amino acid deamination.' },
    { name: 'Serum Albumin', value: 'Abundant plasma protein synthesized by liver; maintains colloid oncotic pressure and binds hydrophobic hormones.' }
  ];
  ORGANS_DATA.liver.bio.cells = [
    { name: 'Hepatocytes', value: 'Primary metabolic cells comprising 80% of liver mass; perform protein synthesis, detox, and gluconeogenesis.' },
    { name: 'Kupffer Cells', value: 'Stellate macrophages lining hepatic sinusoids; phagocytose pathogens, cell debris, and old RBCs.' },
    { name: 'Hepatic Stellate (Ito) Cells', value: 'Reside in Space of Disse; store Vitamin A; differentiate into collagen-producing myofibroblasts in cirrhosis.' }
  ];
  ORGANS_DATA.liver.pins = [
    { label: 'Right Lobe', dx: 12, dy: -2 },
    { label: 'Left Lobe', dx: -12, dy: -2 },
    { label: 'Gallbladder Connection', dx: 8, dy: 12 }
  ];

  // 5. STOMACH
  ORGANS_DATA.stomach.bio.chemicals = [
    { name: 'Hydrochloric Acid (HCl)', value: 'Secreted by parietal cells (pH 1.5-2.0). Kills pathogens, denatures proteins, and activates pepsinogen.' },
    { name: 'Pepsin', value: 'Proteolytic enzyme (active form of pepsinogen); hydrolyzes peptide bonds at optimal pH of 1.5-2.5.' },
    { name: 'Intrinsic Factor', value: 'Glycoprotein secreted by parietal cells; crucial for binding and absorption of Vitamin B12 in the ileum.' },
    { name: 'Gastrin', value: 'Endocrine peptide hormone; stimulates gastric mucosal growth and parietal cell HCl secretion.' }
  ];
  ORGANS_DATA.stomach.bio.cells = [
    { name: 'Parietal Cells', value: 'Highly specialized cells with intracellular canaliculi; secrete HCl via H+/K+ ATPase and Intrinsic Factor.' },
    { name: 'Chief Cells', value: 'Exocrine cells in gastric glands; store and secrete inactive pepsinogen and gastric lipase.' },
    { name: 'G Cells', value: 'Neuroendocrine cells located in the antrum; secrete the hormone gastrin into the bloodstream.' }
  ];
  ORGANS_DATA.stomach.pins = [
    { label: 'Esophageal Junction', dx: -5, dy: -16 },
    { label: 'Fundus', dx: -12, dy: -10 },
    { label: 'Body (Corpus)', dx: -4, dy: 2 },
    { label: 'Pyloric Sphincter', dx: 12, dy: 10 }
  ];

  // 6. KIDNEYS
  ORGANS_DATA.kidneys.bio.chemicals = [
    { name: 'Renin', value: 'Aspartyl protease secreted by JG cells; converts angiotensinogen to angiotensin I, initiating the blood-pressure regulating RAAS.' },
    { name: 'Erythropoietin (EPO)', value: 'Hormone synthesized by interstitial cells in response to hypoxia; stimulates erythropoiesis in bone marrow.' },
    { name: 'Calcitriol (1,25-(OH)2D3)', value: 'Active form of Vitamin D; synthesized via 1-alpha-hydroxylase; stimulates intestinal calcium absorption.' }
  ];
  ORGANS_DATA.kidneys.bio.cells = [
    { name: 'Podocytes', value: 'Visceral epithelial cells in Bowman\'s capsule; interdigitating pedicels form filtration slits.' },
    { name: 'Mesangial Cells', value: 'Contractile cells supporting glomerular capillaries; perform phagocytosis and regulate filtration surface area.' },
    { name: 'Juxtaglomerular Cells', value: 'Specialized smooth muscle cells in afferent arteriole; sense pressure and secrete renin.' }
  ];
  ORGANS_DATA.kidneys.pins = [
    { label: 'Renal Cortex', dx: -12, dy: -5 },
    { label: 'Renal Medulla', dx: -5, dy: 2 },
    { label: 'Renal Pelvis', dx: 10, dy: 2 },
    { label: 'Ureter', dx: 12, dy: 18 }
  ];

  // 7. SMALL INTESTINE
  ORGANS_DATA.smallIntestine.bio.chemicals = [
    { name: 'Cholecystokinin (CCK)', value: 'Duodenal hormone; triggers pancreatic enzyme release, gallbladder contraction, and slows gastric emptying.' },
    { name: 'Secretin', value: 'Duodenal hormone; senses low pH; triggers pancreatic duct release of watery bicarbonate fluid.' },
    { name: 'Brush Border Enzymes', value: 'Maltase, sucrase, lactase, and peptidases anchored to microvilli; perform terminal digestion of dimers.' }
  ];
  ORGANS_DATA.smallIntestine.bio.cells = [
    { name: 'Enterocytes', value: 'Columnar absorptive cells covered in microvilli, expanding surface area 600x for transcellular nutrient transport.' },
    { name: 'Goblet Cells', value: 'Mucus-secreting epithelial cells; lubricate intestinal contents and protect tissue from enzymatic shear.' },
    { name: 'Paneth Cells', value: 'Reside at crypt bases; secrete defensins, lysozyme, and TNF-alpha to defend the stem cell niche.' }
  ];
  ORGANS_DATA.smallIntestine.pins = [
    { label: 'Duodenum', dx: -12, dy: -12 },
    { label: 'Jejunum', dx: -5, dy: 0 },
    { label: 'Ileum', dx: 12, dy: 10 }
  ];

  // 8. LARGE INTESTINE
  ORGANS_DATA.largeIntestine.bio.chemicals = [
    { name: 'Short-Chain Fatty Acids (SCFAs)', value: 'Acetate, propionate, butyrate; produced by microbiome carbohydrate fermentation; serve as main energy source for colonocytes.' },
    { name: 'Bacterial Vitamins', value: 'Vitamins K and B12 synthesized by colonic microbiome and absorbed via active transport.' }
  ];
  ORGANS_DATA.largeIntestine.bio.cells = [
    { name: 'Colonocytes', value: 'Absorptive columnar cells lacking microvilli; specialize in active Na+ transport and passive water reabsorption.' },
    { name: 'Goblet Cells', value: 'Predominant in distal colon; secrete dense mucus layers to ease transit of dehydrated stool.' }
  ];
  ORGANS_DATA.largeIntestine.pins = [
    { label: 'Cecum', dx: -18, dy: 14 },
    { label: 'Ascending Colon', dx: -16, dy: -8 },
    { label: 'Transverse Colon', dx: 0, dy: -18 },
    { label: 'Descending Colon', dx: 16, dy: -2 },
    { label: 'Sigmoid Colon', dx: 10, dy: 16 }
  ];

  // 9. PANCREAS
  ORGANS_DATA.pancreas.bio.chemicals = [
    { name: 'Insulin', value: 'Anabolic peptide hormone; triggers GLUT4 channel translocation in muscle/fat to clear blood glucose.' },
    { name: 'Glucagon', value: 'Catabolic peptide hormone; activates hepatic phosphorylase to drive glycogenolysis and sustain blood sugar.' },
    { name: 'Bicarbonate (HCO3-)', value: 'High concentration buffer secreted by duct cells; neutralizes HCl in duodenum.' }
  ];
  ORGANS_DATA.pancreas.bio.cells = [
    { name: 'Acinar Cells', value: 'Exocrine cells organizing in grape-like clusters; synthesize digestive zymogens (trypsinogen, lipase, amylase).' },
    { name: 'Beta Cells', value: 'Endocrine cells in islet core; sense blood glucose via GLUT2/glucokinase and secrete insulin.' },
    { name: 'Alpha Cells', value: 'Endocrine cells in islet mantle; secrete glucagon in response to hypoglycemia.' }
  ];
  ORGANS_DATA.pancreas.pins = [
    { label: 'Pancreatic Head', dx: -12, dy: 4 },
    { label: 'Pancreatic Body', dx: 0, dy: 0 },
    { label: 'Pancreatic Tail', dx: 15, dy: -4 }
  ];

  // 10. SPLEEN
  ORGANS_DATA.spleen.bio.chemicals = [
    { name: 'Biliverdin & Heme Iron', value: 'Heme broken down to green biliverdin, then to bilirubin. Iron is bound to transferrin and recycled.' },
    { name: 'Opsonins', value: 'Tuftsin and properdin synthesized in spleen; enhance phagocytosis of encapsulated bacteria.' }
  ];
  ORGANS_DATA.spleen.bio.cells = [
    { name: 'Splenic Macrophages', value: 'Phagocytose old/deformed red blood cells (erythrophagocytosis) in cords of Billroth.' },
    { name: 'Lymphocytes', value: 'Populate the white pulp (PALS); survey blood-borne pathogens and initiate adaptive antibody production.' }
  ];
  ORGANS_DATA.spleen.pins = [
    { label: 'Red Pulp', dx: 8, dy: 8 },
    { label: 'White Pulp', dx: -8, dy: -8 },
    { label: 'Splenic Hilum', dx: -12, dy: 0 }
  ];

  // 11. GALLBLADDER
  ORGANS_DATA.gallbladder.bio.chemicals = [
    { name: 'Bile Salts', value: 'Sodium/potassium glycocholate and taurocholate; amphipathic molecules forming micelles around fat.' },
    { name: 'Cholesterol & Lecithin', value: 'Lipids secreted in bile; kept in solution by bile salts; excess cholesterol leads to crystallization (stones).' }
  ];
  ORGANS_DATA.gallbladder.bio.cells = [
    { name: 'Simple Columnar Mucosa', value: 'Epithelial cells with prominent microvilli that actively pump Na+, secondary water follow concentrates bile 10-fold.' }
  ];
  ORGANS_DATA.gallbladder.pins = [
    { label: 'Fundus', dx: 8, dy: 10 },
    { label: 'Neck', dx: -8, dy: -10 },
    { label: 'Cystic Duct', dx: -12, dy: -8 }
  ];

  // 12. THYROID
  ORGANS_DATA.thyroid.bio.chemicals = [
    { name: 'Thyroxine (T4) & T3', value: 'Iodinated tyrosine derivatives; regulate ATP production, oxygen consumption, and basal metabolic rate.' },
    { name: 'Calcitonin', value: 'Peptide; acts on osteoclast receptors to inhibit bone resorption, lowering plasma calcium.' }
  ];
  ORGANS_DATA.thyroid.bio.cells = [
    { name: 'Follicular Epithelial Cells', value: 'Simple cuboidal cells surrounding colloid; extract iodide and synthesize thyroglobulin.' },
    { name: 'Parafollicular (C) Cells', value: 'Neuroendocrine cells located in connective tissue between thyroid follicles; secrete calcitonin.' }
  ];
  ORGANS_DATA.thyroid.pins = [
    { label: 'Left Lobe', dx: -8, dy: 2 },
    { label: 'Right Lobe', dx: 8, dy: 2 },
    { label: 'Isthmus (Bridge)', dx: 0, dy: -4 }
  ];

  // 13. EYES
  ORGANS_DATA.eyes.bio.chemicals = [
    { name: 'Rhodopsin', value: 'G-protein coupled visual pigment in rods; undergoes photo-isomerization (11-cis to all-trans retinal) to trigger vision.' },
    { name: 'Aqueous Humor', value: 'Watery filtrate in anterior chamber; drains through canal of Schlemm; maintains 15 mmHg pressure.' }
  ];
  ORGANS_DATA.eyes.bio.cells = [
    { name: 'Photoreceptors (Rods/Cones)', value: 'Highly modified neurons; rods specialize in low-light vision; cones detect colors (red, green, blue).' },
    { name: 'Retinal Pigment Epithelium (RPE)', value: 'Monolayer phagocytosing shed photoreceptor discs; stores and recycles Vitamin A (retinoid cycle).' }
  ];
  ORGANS_DATA.eyes.pins = [
    { label: 'Cornea/Lens (Front)', dx: -8, dy: 0 },
    { label: 'Retina (Back)', dx: 8, dy: 0 },
    { label: 'Optic Nerve', dx: 12, dy: 4 }
  ];

  // 14. SKIN
  ORGANS_DATA.skin.bio.chemicals = [
    { name: 'Keratin', value: 'Insoluble intermediate filament protein providing structural strength and waterproofing to the epidermis.' },
    { name: 'Melanin', value: 'Polymeric pigment synthesized from tyrosine; absorbs ionizing UV radiation to prevent epidermal DNA damage.' },
    { name: 'Sebum', value: 'Slightly acidic lipid mixture (pH 4.5-6.2); lubricates hair and forms the protective acid mantle.' }
  ];
  ORGANS_DATA.skin.bio.cells = [
    { name: 'Keratinocytes', value: '90% of epidermis; proliferate in stratum basale and undergo desquamation to form the stratum corneum barrier.' },
    { name: 'Melanocytes', value: 'Neural-crest derived cells in basale; transfer protective melanin granules (melanosomes) to neighboring cells.' },
    { name: 'Langerhans Cells', value: 'Dendritic antigen-presenting immune cells in stratum spinosum; trigger T-cell cutaneous responses.' }
  ];
  ORGANS_DATA.skin.pins = [
    { label: 'Epidermis (Outer)', dx: 0, dy: -10 },
    { label: 'Dermis (Middle)', dx: 0, dy: 0 },
    { label: 'Hypodermis (Subcutaneous)', dx: 0, dy: 10 }
  ];

  // 15. UTERUS
  ORGANS_DATA.uterus.bio.chemicals = [
    { name: 'Progesterone', value: 'Steroid hormone secreted by corpus luteum; maintains endometrial vascularization and suppresses myometrial tone.' },
    { name: 'Oxytocin', value: 'Hypothalamic peptide; binds to myometrial GPCR receptors to drive rhythmic calcium entry and labor contractions.' }
  ];
  ORGANS_DATA.uterus.bio.cells = [
    { name: 'Endometrial Stromal Cells', value: 'Cells that undergo decidualization under progesterone control to direct blastocyst implantation and placenta development.' },
    { name: 'Myometrial Smooth Muscle Cells', value: 'Interlocking spindle-shaped cells that stretch 10x during pregnancy and contract strongly in labor.' }
  ];
  ORGANS_DATA.uterus.pins = [
    { label: 'Uterine Fundus', dx: 0, dy: -12 },
    { label: 'Endometrium', dx: -4, dy: 0 },
    { label: 'Cervix', dx: 0, dy: 15 }
  ];

  // 16. PROSTATE
  ORGANS_DATA.prostate.bio.chemicals = [
    { name: 'Prostate-Specific Antigen (PSA)', value: 'Chymotrypsin-like serine protease; cleaves semenogelins in seminal coagulum to liquefy semen.' },
    { name: 'Zinc & Citric Acid', value: 'Highly concentrated secretions; serve as metabolic substrates and provide antibacterial protection.' }
  ];
  ORGANS_DATA.prostate.bio.cells = [
    { name: 'Glandular Epithelium', value: 'Secretory cuboidal-to-columnar cells synthesizing seminal fluid components; depend on DHT stimulation.' },
    { name: 'Stroma Fibromyocytes', value: 'Smooth muscle cells providing support; express alpha-1 receptors that regulate urinary sphincter resistance.' }
  ];
  ORGANS_DATA.prostate.pins = [
    { label: 'Fibromuscular Stroma', dx: 0, dy: -10 },
    { label: 'Secretory Glands', dx: 6, dy: 4 },
    { label: 'Prostatic Urethra', dx: -4, dy: 0 }
  ];

  // Ensure extra blood supply labels are linked
  Object.values(ORGANS_DATA).forEach(organ => {
    if (organ.bio && !organ.bio.bloodSupply && organ.flows) {
      const bloodFlow = organ.flows.find(f => f.type === 'blood');
      if (bloodFlow) {
        organ.bio.bloodSupply = bloodFlow.description;
      }
    }
  });

  console.log('Extra clinical anatomy data loaded successfully.');
})();
