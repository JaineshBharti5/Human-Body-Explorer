// ═══════════════════════════════════════════
// HUMAN BODY EXPLORER — MAIN APPLICATION
// ═══════════════════════════════════════════

'use strict';

// ─── STATE ──────────────────────────────────────────────────────────────────
let currentOrgan    = 'heart';
let currentSystem   = 'all';
let currentGender   = 'both';
let currentFlow     = 'blood-systemic';
let currentOrganTab = 'what';
let currentModalTab = 'overview';
let isBioMode       = false;
let flowAnimFrame   = null;
let flowParticles   = [];
let activeFlowStep  = 0;
let diseaseFilter   = 'all';
let diseaseSearchQ  = '';
let hoveredOrganId  = null;

// ─── SVG VECTOR ICON GENERATORS ──────────────────────────────────────────────
function getOrganIconSVG(organId, color = 'currentColor', size = 24) {
  const paths = {
    brain: `<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />`,
    eyes: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`,
    thyroid: `<path d="M12 4v16M5 7c-2 0-3 2-3 5s1 5 3 6c2 1 3-1 3-3V10c0-2-1-3-3-3zm14 0c2 0 3 2 3 5s-1 5-3 6c-2 1-3-1-3-3V10c0-2 1-3 3-3z" />`,
    heart: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />`,
    lungs: `<path d="M7 3c-2.5 0-5 3.5-5 8.5S5.5 21 8 21h1v-9.5c0-1.5-1-2-1-3V3H7zM17 3c2.5 0 5 3.5 5 8.5S18.5 21 16 21h-1v-9.5c0-1.5 1-2 1-3V3h1zM12 9v12" />`,
    liver: `<path d="M12 3L3 9v6c0 3 4 5 9 6c5-1 9-3 9-6V9l-9-6z" />`,
    stomach: `<path d="M12 3c-4.5 0-8 3.5-8 8s2.5 7.5 6 9.5c2 .5 4 .5 6 0 3.5-2 6-5 6-9.5v-3c0-1.5-1-2-2.5-2s-3 1.5-3.5 3c-.5-1.5-2-3-4-3z" />`,
    gallbladder: `<path d="M12 3c-1.5 0-3 3-3 6.5s1 5.5 3 5.5c1.5 0 3-2 3-5.5S13.5 3 12 3zM12 15v6" />`,
    spleen: `<path d="M18 10c0-4.5-3.5-7-7-7a8 8 0 0 0-8 8c0 4 3.5 7 7 7s8-3.5 8-8z" />`,
    pancreas: `<path d="M3 12c0-2 4-3 9-3s9 1 9 3-4 3-9 3-9-1-9-3zM8 12h8" />`,
    kidneys: `<path d="M8 6c0-1.5-1.5-3-3.5-3S1 4.5 1 6c0 4 3.5 6.5 3.5 12 0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3V6zm8 0c0-1.5 1.5-3 3.5-3s3.5 1.5 3.5 3c0 4-3.5 6.5-3.5 12 0 1.5-1.5 3-3.5 3s-3.5-1.5-3.5-3V6z" />`,
    smallIntestine: `<path d="M3 12c3-4 6 4 9 0s6-4 9 0M3 8c3-4 6 4 9 0s6-4 9 0M3 16c3-4 6 4 9 0s6-4 9 0" />`,
    largeIntestine: `<path d="M5 20V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12M9 20h6" />`,
    uterus: `<path d="M12 9c-1.5 0-3.5 2.5-3.5 6s1.5 6 3.5 6 3.5-2.5 3.5-6-2-6-3.5-6zM3 7c2 1 4 2 5.5 2m12.5-2c-2 1-4 2-5.5 2" />`,
    prostate: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21" />`,
    skin: `<path d="M3 6h18M3 12h18M3 18h18M8 6v12M16 6v12" />`,
  };

  const path = paths[organId] || `<circle cx="12" cy="12" r="9"/>`;
  return `
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
      ${path}
    </svg>
  `;
}

function getSystemIconSVG(sysKey, color = 'currentColor', size = 16) {
  const paths = {
    nervous: `<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />`,
    circulatory: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />`,
    respiratory: `<path d="M7 3c-2.5 0-5 3.5-5 8.5S5.5 21 8 21h1v-9.5c0-1.5-1-2-1-3V3H7zM17 3c2.5 0 5 3.5 5 8.5S18.5 21 16 21h-1v-9.5c0-1.5 1-2 1-3V3h1zM12 9v12" />`,
    digestive: `<path d="M3 12c3-4 6 4 9 0s6-4 9 0M3 8c3-4 6 4 9 0s6-4 9 0M3 16c3-4 6 4 9 0s6-4 9 0" />`,
    urinary: `<path d="M8 6c0-1.5-1.5-3-3.5-3S1 4.5 1 6c0 4 3.5 6.5 3.5 12 0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3V6zm8 0c0-1.5 1.5-3 3.5-3s3.5 1.5 3.5 3c0 4-3.5 6.5-3.5 12 0 1.5-1.5 3-3.5 3s-3.5-1.5-3.5-3V6z" />`,
    endocrine: `<path d="M12 4v16M5 7c-2 0-3 2-3 5s1 5 3 6c2 1 3-1 3-3V10c0-2-1-3-3-3zm14 0c2 0 3 2 3 5s-1 5-3 6c-2 1-3-1-3-3V10c0-2 1-3 3-3z" />`,
    lymphatic: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    sensory: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`,
    integumentary: `<path d="M3 6h18M3 12h18M3 18h18M8 6v12M16 6v12" />`,
    reproductive: `<path d="M12 9c-1.5 0-3.5 2.5-3.5 6s1.5 6 3.5 6 3.5-2.5 3.5-6-2-6-3.5-6zM3 7c2 1 4 2 5.5 2m12.5-2c-2 1-4 2-5.5 2" />`,
  };

  const path = paths[sysKey] || `<circle cx="12" cy="12" r="9"/>`;
  return `
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
      ${path}
    </svg>
  `;
}

function getFlowIconSVG(flowId, color = 'currentColor', size = 20) {
  const paths = {
    'blood-systemic': `<path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"/>`,
    'blood-pulmonary': `<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
    'lymphatic': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    'digestive': `<path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>`,
    'urinary': `<path d="M12 22V2M8 5h8"/>`,
    'csf': `<path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v12M6 12h12"/>`,
    'hormonal': `<path d="M12 4v16M5 7c-2 0-3 2-3 5s1 5 3 6c2 1 3-1 3-3V10c0-2-1-3-3-3zm14 0c2 0 3 2 3 5s-1 5-3 6c-2 1-3-1-3-3V10c0-2 1-3 3-3z"/>`,
  };

  const path = paths[flowId] || `<circle cx="12" cy="12" r="9"/>`;
  return `
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
      ${path}
    </svg>
  `;
}

// ─── INIT ────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSystemButtons();
  initBodyMap();
  initOrganGrid();
  initFlowSection();
  initDiseaseSection();
  initAnatomySection();
  initBioSection();
  initScrollAnimations();
  initBioModeToggle();
  initScrollTop();

  // Load default organ
  loadOrganPanel('heart');

  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
  }, 2200);
});

// ════════════════════════════════════════════
// 1. PARTICLES BACKGROUND
// ════════════════════════════════════════════
function initParticles() {
  const container = document.getElementById('particlesBg');
  const count = 40;
  const colors = ['#00d4ff', '#a855f7', '#ff006e', '#00ff9f', '#ffd60a'];

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left   = `${Math.random() * 100}%`;
    p.style.setProperty('--duration', `${6 + Math.random() * 10}s`);
    p.style.setProperty('--delay', `${Math.random() * -10}s`);
    p.style.width  = p.style.height = `${1 + Math.random() * 3}px`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(p);
  }
}

// ════════════════════════════════════════════
// 2. GENDER TOGGLE
// ════════════════════════════════════════════
function setGender(gender) {
  currentGender = gender;
  document.body.className = document.body.className
    .replace(/\b(male|female|both)\b/g, '').trim();

  if (gender === 'male')   document.body.classList.add('male');
  if (gender === 'female') document.body.classList.add('female');

  // Toggle active class on gender buttons
  ['maleBtn', 'femaleBtn', 'bothBtn'].forEach(id => {
    const btn = document.getElementById(id);
    btn.className = 'gender-btn';
    btn.style.cssText = ''; // clear custom inline styles
  });

  if (gender === 'male')   document.getElementById('maleBtn').className   = 'gender-btn active-male';
  if (gender === 'female') document.getElementById('femaleBtn').className = 'gender-btn active-female';
  if (gender === 'both') {
    document.getElementById('bothBtn').className = 'gender-btn active-male'; // Reuse active-male cyan style
    document.getElementById('bothBtn').style.cssText = 'border-color: rgba(0,229,255,0.6); color: var(--cyan); background: rgba(0,229,255,0.1);';
  }

  // Adjust canvas width based on comparison mode
  const canvas = document.getElementById('bodyMapCanvas');
  if (gender === 'both') {
    canvas.width = 540;
  } else {
    canvas.width = 280;
  }

  initOrganGrid(); // re-render with gender filter
  drawBodyMap();   // redraw map immediately
}

// ════════════════════════════════════════════
// 3. SYSTEM BUTTONS
// ════════════════════════════════════════════
function initSystemButtons() {
  const container = document.getElementById('systemButtons');
  Object.entries(BODY_SYSTEMS).forEach(([key, sys]) => {
    const btn = document.createElement('button');
    btn.className = 'system-btn';
    btn.id = `sys-${key}`;
    btn.innerHTML = `<span class="system-dot" style="background:${sys.color}"></span>${getSystemIconSVG(key, sys.color, 16)} ${sys.name}`;
    btn.onclick = () => filterSystem(key);
    container.appendChild(btn);
  });
}

function filterSystem(system) {
  currentSystem = system;
  document.querySelectorAll('.system-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`sys-${system}`);
  if (btn) btn.classList.add('active');
  document.getElementById('sys-all').classList.toggle('active', system === 'all');
  initOrganGrid();
  drawBodyMap();
}

// ════════════════════════════════════════════
// 4. BODY MAP CANVAS
// ════════════════════════════════════════════
const ORGAN_POSITIONS = [
  { id: 'brain',          x: 140, y: 50,  r: 28, emoji: '🧠', color: '#a855f7' },
  { id: 'eyes',           x: 140, y: 28,  r: 12, emoji: '👁️', color: '#00d4ff' },
  { id: 'thyroid',        x: 140, y: 106, r: 12, emoji: '🦋', color: '#00d4ff' },
  { id: 'heart',          x: 122, y: 175, r: 18, emoji: '🫀', color: '#ff2d55' },
  { id: 'lungs',          x: 140, y: 175, r: 22, emoji: '🫁', color: '#00d4ff' },
  { id: 'liver',          x: 152, y: 220, r: 16, emoji: '🔶', color: '#ff6b35' },
  { id: 'stomach',        x: 128, y: 225, r: 13, emoji: '🫃', color: '#ffd60a' },
  { id: 'gallbladder',    x: 158, y: 238, r: 10, emoji: '🫙', color: '#ffd60a' },
  { id: 'spleen',         x: 110, y: 220, r: 12, emoji: '🫗', color: '#a855f7' },
  { id: 'pancreas',       x: 140, y: 240, r: 12, emoji: '🫓', color: '#ffd60a' },
  { id: 'kidneys',        x: 140, y: 268, r: 16, emoji: '🫘', color: '#ff006e' },
  { id: 'smallIntestine', x: 140, y: 295, r: 20, emoji: '🌀', color: '#00ff9f' },
  { id: 'largeIntestine', x: 140, y: 305, r: 25, emoji: '🔄', color: '#ff6b35' },
  { id: 'uterus',         x: 140, y: 340, r: 14, emoji: '🌸', color: '#ff006e' },
  { id: 'prostate',       x: 140, y: 340, r: 14, emoji: '⚙️', color: '#00d4ff' },
  { id: 'skin',           x: 140, y: 400, r: 15, emoji: '🫶', color: '#ffd60a' },
];

function initBodyMap() {
  const canvas = document.getElementById('bodyMapCanvas');
  canvas.addEventListener('click', handleBodyMapClick);
  canvas.addEventListener('mousemove', handleBodyMapHover);
  drawBodyMap();
}

function getOrganDrawPositions(organId) {
  const organPos = ORGAN_POSITIONS.find(o => o.id === organId);
  if (!organPos) return [];
  
  const organData = ORGANS_DATA[organId];
  if (!organData) return [];
  
  if (currentGender === 'both') {
    const positions = [];
    if (organData.gender === 'both') {
      positions.push({ x: organPos.x - 10, y: organPos.y });
      positions.push({ x: organPos.x + 270, y: organPos.y });
    } else if (organData.gender === 'male') {
      positions.push({ x: organPos.x - 10, y: organPos.y });
    } else if (organData.gender === 'female') {
      positions.push({ x: organPos.x + 270, y: organPos.y });
    }
    return positions;
  } else {
    if (organData.gender !== 'both' && organData.gender !== currentGender) {
      return [];
    }
    return [{ x: organPos.x, y: organPos.y }];
  }
}

function drawRadarTarget(ctx, cx, cy, r, color, isSelected, isHovered) {
  ctx.save();
  
  let drawR = r;
  if (isHovered) drawR *= 1.25;
  if (isSelected) drawR *= 1.1;
  
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, drawR * 1.8);
  grad.addColorStop(0, color.replace(')', ',0.25)').replace('rgb', 'rgba'));
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, drawR * 1.8, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(cx, cy, drawR, 0, Math.PI * 2);
  ctx.strokeStyle = isSelected ? color : color + '99';
  ctx.lineWidth = isSelected ? 2 : 1;
  ctx.setLineDash([3, 3]);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  
  ctx.strokeStyle = color + 'cc';
  ctx.lineWidth = 1;
  
  ctx.beginPath();
  ctx.moveTo(cx, cy - drawR - 4);
  ctx.lineTo(cx, cy - drawR + 2);
  ctx.moveTo(cx, cy + drawR + 4);
  ctx.lineTo(cx, cy + drawR - 2);
  ctx.moveTo(cx - drawR - 4, cy);
  ctx.lineTo(cx - drawR + 2, cy);
  ctx.moveTo(cx + drawR + 4, cy);
  ctx.lineTo(cx + drawR - 2, cy);
  ctx.stroke();
  
  if (isSelected || isHovered) {
    const pulseR = drawR * (1.1 + Math.abs(Math.sin(Date.now() / 250)) * 0.25);
    ctx.beginPath();
    ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
    ctx.strokeStyle = color + '44';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  
  ctx.restore();
}

function drawSingleSilhouette(ctx, centerX, gender) {
  ctx.save();
  
  const dx = centerX - 140;
  ctx.translate(dx, 0);
  
  ctx.fillStyle   = 'rgba(23, 26, 33, 0.9)';
  ctx.strokeStyle = 'rgba(0, 229, 255, 0.35)';
  ctx.lineWidth   = 1.5;

  // Head
  ctx.beginPath();
  ctx.ellipse(140, 50, 35, 44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Neck
  ctx.beginPath();
  ctx.roundRect(126, 90, 28, 24, 6);
  ctx.fill();
  ctx.stroke();

  // Torso
  if (gender === 'female') {
    // Curvy narrow shoulders, curvy waist, flared hips
    ctx.beginPath();
    ctx.moveTo(96, 115); // Left narrow shoulder
    ctx.bezierCurveTo(80, 130, 86, 190, 88, 240); // Curving in for narrow waist
    ctx.bezierCurveTo(70, 280, 72, 315, 140, 335); // Flaring out for hips
    ctx.bezierCurveTo(208, 315, 210, 280, 192, 240); // Right waist curving out to hips
    ctx.bezierCurveTo(194, 190, 200, 130, 184, 115); // Right waist to shoulder
    ctx.bezierCurveTo(165, 110, 115, 110, 96, 115); // Shoulder line
    ctx.fill();
    ctx.stroke();
    
    // Female Arms
    ctx.beginPath();
    ctx.moveTo(96, 125);
    ctx.bezierCurveTo(78, 145, 62, 195, 58, 265);
    ctx.bezierCurveTo(56, 290, 60, 310, 68, 312);
    ctx.bezierCurveTo(76, 314, 80, 295, 82, 265);
    ctx.bezierCurveTo(84, 205, 94, 155, 102, 132);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(184, 125);
    ctx.bezierCurveTo(202, 145, 218, 195, 222, 265);
    ctx.bezierCurveTo(224, 290, 220, 310, 212, 312);
    ctx.bezierCurveTo(204, 314, 200, 295, 198, 265);
    ctx.bezierCurveTo(196, 205, 186, 155, 178, 132);
    ctx.fill();
    ctx.stroke();
    
    // Female Legs
    ctx.beginPath();
    ctx.moveTo(108, 335);
    ctx.bezierCurveTo(102, 370, 99, 420, 100, 490);
    ctx.bezierCurveTo(100, 520, 104, 540, 112, 542);
    ctx.bezierCurveTo(120, 544, 124, 525, 125, 490);
    ctx.bezierCurveTo(126, 420, 129, 370, 134, 335);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(172, 335);
    ctx.bezierCurveTo(178, 370, 181, 420, 180, 490);
    ctx.bezierCurveTo(180, 520, 176, 540, 168, 542);
    ctx.bezierCurveTo(162, 544, 156, 525, 155, 490);
    ctx.bezierCurveTo(154, 420, 151, 370, 146, 335);
    ctx.fill();
    ctx.stroke();
  } else {
    // Masculine: broad shoulders, broad chest, straight waist
    ctx.beginPath();
    ctx.moveTo(84, 115); // Left broad shoulder
    ctx.bezierCurveTo(68, 130, 66, 190, 68, 250); // Left chest & waist
    ctx.bezierCurveTo(74, 295, 90, 330, 140, 335); // Left hip to pelvis
    ctx.bezierCurveTo(190, 330, 206, 295, 212, 250); // Right hip to waist
    ctx.bezierCurveTo(214, 190, 212, 130, 196, 115); // Right waist & chest to shoulder
    ctx.bezierCurveTo(175, 110, 105, 110, 84, 115); // Shoulder line
    ctx.fill();
    ctx.stroke();
    
    // Male Arms
    ctx.beginPath();
    ctx.moveTo(84, 125);
    ctx.bezierCurveTo(62, 145, 46, 195, 42, 265);
    ctx.bezierCurveTo(40, 290, 44, 310, 54, 312);
    ctx.bezierCurveTo(64, 314, 68, 295, 70, 265);
    ctx.bezierCurveTo(74, 205, 86, 155, 96, 132);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(196, 125);
    ctx.bezierCurveTo(218, 145, 234, 195, 238, 265);
    ctx.bezierCurveTo(240, 290, 236, 310, 226, 312);
    ctx.bezierCurveTo(216, 314, 212, 295, 210, 265);
    ctx.bezierCurveTo(206, 205, 194, 155, 184, 132);
    ctx.fill();
    ctx.stroke();
    
    // Male Legs
    ctx.beginPath();
    ctx.moveTo(104, 335);
    ctx.bezierCurveTo(98, 370, 95, 420, 96, 490);
    ctx.bezierCurveTo(96, 520, 100, 540, 108, 542);
    ctx.bezierCurveTo(116, 544, 121, 525, 122, 490);
    ctx.bezierCurveTo(124, 420, 128, 370, 134, 335);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(176, 335);
    ctx.bezierCurveTo(182, 370, 185, 420, 184, 490);
    ctx.bezierCurveTo(184, 520, 180, 540, 172, 542);
    ctx.bezierCurveTo(164, 544, 159, 525, 158, 490);
    ctx.bezierCurveTo(156, 420, 152, 370, 146, 335);
    ctx.fill();
    ctx.stroke();
  }

  // Hands and Feet
  ctx.beginPath();
  ctx.ellipse(gender === 'female' ? 68 : 54, 318, 14, 18, 0, 0, Math.PI * 2);
  ctx.ellipse(gender === 'female' ? 212 : 226, 318, 14, 18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(gender === 'female' ? 112 : 108, 556, 16, 10, 0, 0, Math.PI * 2);
  ctx.ellipse(gender === 'female' ? 168 : 172, 556, 16, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.restore();
}

function drawBodySilhouette(ctx, W, H) {
  if (currentGender === 'both') {
    drawSingleSilhouette(ctx, 130, 'male');
    drawSingleSilhouette(ctx, 410, 'female');
  } else {
    drawSingleSilhouette(ctx, 140, currentGender);
  }
}

function drawBodyMap() {
  const canvas = document.getElementById('bodyMapCanvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  ctx.clearRect(0, 0, W, H);

  // Background
  ctx.fillStyle = '#0f1115';
  ctx.fillRect(0, 0, W, H);

  // Draw body silhouette
  drawBodySilhouette(ctx, W, H);

  // Spine line
  ctx.save();
  ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
  ctx.lineWidth = 3;
  ctx.setLineDash([4, 6]);
  if (currentGender === 'both') {
    ctx.beginPath();
    ctx.moveTo(130, 110); ctx.lineTo(130, 340);
    ctx.moveTo(410, 110); ctx.lineTo(410, 340);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(140, 110); ctx.lineTo(140, 340);
    ctx.stroke();
  }
  ctx.restore();

  // Draw organs
  ORGAN_POSITIONS.forEach(pos => {
    const organData = ORGANS_DATA[pos.id];
    if (!organData) return;

    if (currentSystem !== 'all' && organData.system !== currentSystem) return;

    const drawPositions = getOrganDrawPositions(pos.id);
    drawPositions.forEach(pt => {
      const isSelected = pos.id === currentOrgan;
      const isHovered = pos.id === hoveredOrganId;
      drawRadarTarget(ctx, pt.x, pt.y, pos.r, pos.color, isSelected, isHovered);
    });
  });

  // Animated Scanline
  ctx.save();
  const scanlineY = (Date.now() / 8) % H;
  const grad = ctx.createLinearGradient(0, scanlineY - 4, 0, scanlineY + 4);
  grad.addColorStop(0, 'transparent');
  grad.addColorStop(0.5, 'rgba(0, 229, 255, 0.3)');
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.fillRect(0, scanlineY - 4, W, 8);
  
  ctx.beginPath();
  ctx.moveTo(0, scanlineY);
  ctx.lineTo(W, scanlineY);
  ctx.strokeStyle = 'rgba(0, 229, 255, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

function getOrganAtPoint(x, y) {
  const canvas = document.getElementById('bodyMapCanvas');
  if (!canvas) return null;
  const scale = canvas.width / canvas.offsetWidth;
  const sx = x * scale, sy = y * scale;

  return ORGAN_POSITIONS.find(o => {
    const drawPositions = getOrganDrawPositions(o.id);
    return drawPositions.some(pt => {
      const dx = sx - pt.x, dy = sy - pt.y;
      return Math.sqrt(dx*dx + dy*dy) <= o.r + 6;
    });
  });
}

function handleBodyMapClick(e) {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const organ = getOrganAtPoint(x, y);
  if (organ && ORGANS_DATA[organ.id]) {
    currentOrgan = organ.id;
    loadOrganPanel(organ.id);
    drawBodyMap();
  }
}

function handleBodyMapHover(e) {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const organ = getOrganAtPoint(x, y);
  e.target.style.cursor = organ ? 'pointer' : 'default';

  const oldHovered = hoveredOrganId;
  hoveredOrganId = organ ? organ.id : null;
  if (oldHovered !== hoveredOrganId) {
    drawBodyMap();
  }
}

// ════════════════════════════════════════════
// 5. ORGAN PANEL
// ════════════════════════════════════════════
function loadOrganPanel(organId) {
  const organ = ORGANS_DATA[organId];
  if (!organ) return;
  currentOrgan = organId;

  // Update header
  document.getElementById('organIcon').innerHTML = getOrganIconSVG(organId, organ.color, 32);
  document.getElementById('organIcon').style.background = `linear-gradient(135deg, ${organ.color}33, ${organ.color}11)`;
  document.getElementById('organIcon').style.border  = `1px solid ${organ.color}55`;
  document.getElementById('organName').textContent    = organ.name;
  document.getElementById('organSystem').textContent  = BODY_SYSTEMS[organ.system]?.name || organ.system;
  document.getElementById('organMeta').textContent    = `${organ.weight} · ${organ.location.split(',')[0]}`;

  // Update tabs
  const src = isBioMode ? (organ.bio || organ.simple) : organ.simple;
  document.getElementById('tab-what-text').textContent = src.whatItIs || organ.simple.whatItIs;
  document.getElementById('tab-how-text').textContent  = src.howItWorks || organ.simple.howItWorks;

  // Flows
  const flowsEl = document.getElementById('tab-flows-content');
  flowsEl.innerHTML = '';
  (organ.flows || []).forEach((flow, i) => {
    flowsEl.innerHTML += `
      <div class="flow-step">
        <span class="flow-dot" style="background: ${flow.color}"></span>
        <span style="font-size:0.82rem; color: var(--text-secondary)">${flow.description}</span>
      </div>
      ${i < organ.flows.length - 1 ? '<div class="flow-arrow">↓</div>' : ''}
    `;
  });
  if (!organ.flows?.length) flowsEl.innerHTML = '<p style="font-size:0.82rem; color: var(--text-muted)">No specific fluid flows for this organ.</p>';

  // Diseases (compact)
  const disEl = document.getElementById('tab-diseases-content');
  disEl.innerHTML = '';
  (organ.diseases || []).slice(0, 3).forEach(d => {
    disEl.innerHTML += `
      <div class="disease-item" onclick="openOrganModal('${organId}'); setTimeout(()=>switchModalTab('diseases'),100)">
        <div class="disease-name">${d.name}<span class="severity-badge severity-${d.severity}">${d.severity}</span></div>
        <div class="disease-desc">${d.description}</div>
      </div>
    `;
  });
  if (!organ.diseases?.length) disEl.innerHTML = '<p style="font-size:0.82rem; color: var(--text-muted)">Disease data not loaded.</p>';

  // Facts
  const factsEl = document.getElementById('tab-facts-content');
  factsEl.innerHTML = '';
  (organ.simple?.funFacts || []).forEach(f => {
    factsEl.innerHTML += `<div class="fact-item"><span>${f}</span></div>`;
  });

  // Reset to first tab
  switchOrganTab('what');
}

function switchOrganTab(tab) {
  document.querySelectorAll('.organ-tab-btn').forEach((b, i) => {
    const tabs = ['what', 'how', 'flows', 'diseases', 'facts'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.organ-tab-content').forEach(c => c.classList.remove('active'));
  const el = document.getElementById(`tab-${tab}`);
  if (el) el.classList.add('active');
}

// ════════════════════════════════════════════
// 6. ORGAN GRID
// ════════════════════════════════════════════
function initOrganGrid() {
  const grid = document.getElementById('organGrid');
  grid.innerHTML = '';

  Object.values(ORGANS_DATA).forEach((organ, idx) => {
    // Gender filter
    if (currentGender !== 'both') {
      if (organ.gender !== 'both' && organ.gender !== currentGender) return;
    }
    // System filter
    if (currentSystem !== 'all' && organ.system !== currentSystem) return;

    const sysColor = BODY_SYSTEMS[organ.system]?.color || '#00d4ff';
    const card = document.createElement('div');
    card.className = 'organ-grid-card animate-on-scroll';
    card.style.animationDelay = `${idx * 0.05}s`;
    card.style.setProperty('--hover-color', organ.color);
    card.innerHTML = `
      <style>
        #ogc-${organ.id}:hover { box-shadow: 0 0 30px ${organ.colorGlow || organ.color + '33'}; }
        #ogc-${organ.id}::before { background: radial-gradient(circle at 30% 30%, ${organ.color}08, transparent 70%); }
      </style>
      <div class="ogc-emoji" style="animation-delay:${Math.random()*2}s; display: flex; justify-content: center; align-items: center; height: 50px;">${getOrganIconSVG(organ.id, organ.color, 40)}</div>
      <div class="ogc-name">${organ.name}</div>
      <div class="ogc-system" style="color:${sysColor}; display: flex; align-items: center; gap: 4px;">${getSystemIconSVG(organ.system, sysColor, 14)} ${BODY_SYSTEMS[organ.system]?.name || organ.system}</div>
      <div class="ogc-desc">${organ.simple.whatItIs.slice(0, 90)}...</div>
      <div class="ogc-diseases">
        ${(organ.diseases || []).slice(0, 3).map(d =>
          `<span class="severity-badge severity-${d.severity}" style="font-size:0.65rem">${d.name}</span>`
        ).join('')}
      </div>
    `;
    card.id = `ogc-${organ.id}`;
    card.onclick = () => {
      currentOrgan = organ.id;
      loadOrganPanel(organ.id);
      drawBodyMap();
      openOrganModal(organ.id);
    };
    grid.appendChild(card);
  });

  // Re-trigger scroll animations
  setTimeout(() => observeScrollAnimations(), 100);
}

// ════════════════════════════════════════════
// 7. ORGAN MODAL
// ════════════════════════════════════════════
function openOrganModal(organId) {
  const organ = ORGANS_DATA[organId];
  if (!organ) return;
  currentOrgan = organId;

  const modal = document.getElementById('organModal');
  document.getElementById('modalIcon').innerHTML = getOrganIconSVG(organId, organ.color, 36);
  document.getElementById('modalIcon').style.background = `linear-gradient(135deg, ${organ.color}33, ${organ.color}11)`;
  document.getElementById('modalIcon').style.border  = `1px solid ${organ.color}66`;
  document.getElementById('modalTitle').textContent   = organ.name;
  document.getElementById('modalSystem').innerHTML = `${getSystemIconSVG(organ.system, 'currentColor', 14)} ${BODY_SYSTEMS[organ.system]?.name || organ.system}`;
  document.getElementById('modalGender').textContent  = organ.gender === 'both' ? '⚥ Both' : organ.gender === 'male' ? '♂ Male' : '♀ Female';
  document.getElementById('modalWeight').textContent  = organ.weight;
  document.getElementById('modalLocation').textContent = organ.location;

  // Overview
  document.getElementById('modalOverviewText').textContent = organ.simple.whatItIs;
  document.getElementById('modalHowText').textContent      = organ.simple.howItWorks;

  // Anatomy (bio)
  document.getElementById('modalAnatomyText').textContent  = organ.bio?.anatomy || 'Detailed anatomy information available in Bio Mode.';

  // Function (bio)
  document.getElementById('modalFunctionText').textContent = organ.bio?.function || 'Detailed function information available in Bio Mode.';

  // Flows
  const flowEl = document.getElementById('modalFlowsContent');
  flowEl.innerHTML = '';
  (organ.flows || []).forEach(flow => {
    flowEl.innerHTML += `
      <div style="background: var(--bg-glass); border: 1px solid ${flow.color}33; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span style="width:12px;height:12px;border-radius:50%;background:${flow.color};flex-shrink:0"></span>
          <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:${flow.color}; letter-spacing:0.08em">${flow.type}</span>
        </div>
        <p style="font-size:0.9rem; color: var(--text-secondary)">${flow.description}</p>
      </div>
    `;
  });
  if (!organ.flows?.length) flowEl.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem">No specific fluid flow data.</p>';

  // Diseases
  const disEl = document.getElementById('modalDiseasesContent');
  disEl.innerHTML = '';
  (organ.diseases || []).forEach(d => {
    disEl.innerHTML += `
      <div style="background: var(--bg-glass); border: 1px solid rgba(255,45,85,0.15); border-radius: 12px; padding: 18px; margin-bottom: 12px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 8px;">
          <h4 style="font-size:1rem; font-weight:700">${d.name}</h4>
          <span class="severity-badge severity-${d.severity}">${d.severity}</span>
        </div>
        <p style="font-size:0.88rem; color: var(--text-secondary); margin-bottom:10px">${d.description}</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:8px;">
          <div style="background: rgba(255,45,85,0.05); border-radius:8px; padding:10px;">
            <div style="font-size:0.72rem; color: var(--red); font-weight:700; margin-bottom:4px; text-transform:uppercase">⚠️ Symptoms</div>
            <p style="font-size:0.82rem; color:var(--text-secondary)">${d.symptoms}</p>
          </div>
          <div style="background: rgba(0,255,159,0.05); border-radius:8px; padding:10px;">
            <div style="font-size:0.72rem; color: var(--green); font-weight:700; margin-bottom:4px; text-transform:uppercase">🛡️ Prevention</div>
            <p style="font-size:0.82rem; color:var(--text-secondary)">${d.prevention}</p>
          </div>
        </div>
      </div>
    `;
  });

  // Fun Facts
  const factsEl = document.getElementById('modalFactsContent');
  factsEl.innerHTML = '';
  (organ.simple?.funFacts || []).forEach(f => {
    factsEl.innerHTML += `
      <div style="display:flex; align-items:flex-start; gap:12px; padding:12px; background: var(--bg-glass); border-radius:10px; margin-bottom:8px; border: var(--border-subtle);">
        <span style="font-size:1.1rem">${f.slice(0,2)}</span>
        <span style="font-size:0.9rem; color: var(--text-secondary)">${f.slice(2)}</span>
      </div>
    `;
  });

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchModalTab('overview');
}

function closeOrganModal() {
  document.getElementById('organModal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab-btn').forEach(b => {
    b.classList.toggle('active', b.onclick.toString().includes(`'${tab}'`));
  });
  document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
  const el = document.getElementById(`modal-tab-${tab}`);
  if (el) el.classList.add('active');
}

// Close modal on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOrganModal();
});

// ════════════════════════════════════════════
// 8. FLOW VISUALIZER
// ════════════════════════════════════════════
function initFlowSection() {
  const list = document.getElementById('flowList');
  list.innerHTML = '';

  FLOW_SYSTEMS.forEach((flow, idx) => {
    const item = document.createElement('li');
    item.className = `flow-list-item${idx === 0 ? ' active' : ''}`;
    item.id = `flow-item-${flow.id}`;
    item.innerHTML = `
      <span class="flow-icon">${getFlowIconSVG(flow.id, flow.color, 20)}</span>
      <div class="flow-info">
        <h4>${flow.name}</h4>
        <p>${flow.description.slice(0,55)}...</p>
      </div>
    `;
    item.onclick = () => selectFlow(flow.id);
    list.appendChild(item);
  });

  selectFlow('blood-systemic');
}

function selectFlow(flowId) {
  currentFlow = flowId;
  const flow = FLOW_SYSTEMS.find(f => f.id === flowId);
  if (!flow) return;

  // Update sidebar
  document.querySelectorAll('.flow-list-item').forEach(i => i.classList.remove('active'));
  const item = document.getElementById(`flow-item-${flowId}`);
  if (item) item.classList.add('active');

  // Update header
  document.getElementById('flowVizIcon').innerHTML = getFlowIconSVG(flow.id, flow.color, 24);
  document.getElementById('flowVizTitle').textContent  = flow.name;
  document.getElementById('flowVizSubtitle').textContent = `${flow.path.length} stages`;
  document.getElementById('flowSimpleDesc').textContent = flow.simpleDesc;
  const bioEl = document.getElementById('flowBioText');
  if (bioEl) bioEl.textContent = flow.bioDesc;

  // Path display
  renderFlowPath(flow);

  // Canvas animation
  startFlowAnimation(flow);
}

function renderFlowPath(flow) {
  const el = document.getElementById('flowPathDisplay');
  el.innerHTML = '';
  flow.path.forEach((step, i) => {
    const chip = document.createElement('span');
    chip.className = 'flow-step-chip';
    chip.id = `fchip-${i}`;
    chip.style.borderColor = flow.color + '44';
    chip.textContent = step;
    el.appendChild(chip);
    if (i < flow.path.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'flow-arrow-chip';
      arrow.textContent = '→';
      el.appendChild(arrow);
    }
  });
}

// Canvas Flow Animation
let flowCtx = null;
let flowCanvas = null;
let flowAnimColor = '#ff2d55';
let flowAnimTime = 0;
let activeFlow = null;

function startFlowAnimation(flow) {
  if (flowAnimFrame) cancelAnimationFrame(flowAnimFrame);
  flowCanvas = document.getElementById('flowCanvas');
  flowCanvas.width = flowCanvas.offsetWidth || 600;
  flowCanvas.height = 300;
  flowCtx = flowCanvas.getContext('2d');
  flowAnimColor = flow.color;
  activeFlow = flow;
  flowAnimTime = 0;
  flowParticles = [];

  // Spawn particles
  for (let i = 0; i < flow.particleCount; i++) {
    flowParticles.push({
      t: Math.random(), // position along path [0-1]
      speed: (flow.speed || 1) * (0.5 + Math.random() * 0.5) * 0.002,
      size: 3 + Math.random() * 4,
      opacity: 0.6 + Math.random() * 0.4,
    });
  }

  animateFlow();
}

function getFlowPath(flow, W, H) {
  const n = flow.path.length;
  const points = [];
  const padding = 60;
  const usableW = W - padding * 2;
  const usableH = H - 40;

  if (flow.id === 'blood-systemic' || flow.id === 'blood-pulmonary') {
    // Circular/oval loop
    flow.path.forEach((_, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      const rx = usableW * 0.36;
      const ry = usableH * 0.38;
      points.push({
        x: W/2 + Math.cos(angle) * rx,
        y: H/2 + Math.sin(angle) * ry,
      });
    });
  } else {
    // Sinusoidal / horizontal path
    flow.path.forEach((_, i) => {
      const t = i / (n - 1);
      points.push({
        x: padding + t * usableW,
        y: H/2 + Math.sin(t * Math.PI * 2) * usableH * 0.3,
      });
    });
  }
  return points;
}

function getPointOnPath(points, t, closed) {
  const n = points.length;
  if (closed) {
    const total = t * n;
    const i = Math.floor(total) % n;
    const j = (i + 1) % n;
    const u = total - Math.floor(total);
    return {
      x: points[i].x + (points[j].x - points[i].x) * u,
      y: points[i].y + (points[j].y - points[i].y) * u,
    };
  } else {
    const total = t * (n - 1);
    const i = Math.min(Math.floor(total), n - 2);
    const u = total - i;
    return {
      x: points[i].x + (points[i+1].x - points[i].x) * u,
      y: points[i].y + (points[i+1].y - points[i].y) * u,
    };
  }
}

function animateFlow() {
  if (!flowCtx || !activeFlow) return;
  const W = flowCanvas.width, H = flowCanvas.height;

  flowCtx.clearRect(0, 0, W, H);

  // Background
  flowCtx.fillStyle = '#04040f';
  flowCtx.fillRect(0, 0, W, H);

  const isClosed = ['blood-systemic', 'blood-pulmonary', 'csf'].includes(activeFlow.id);
  const pathPts = getFlowPath(activeFlow, W, H);

  // Draw path
  flowCtx.beginPath();
  pathPts.forEach((p, i) => i === 0 ? flowCtx.moveTo(p.x, p.y) : flowCtx.lineTo(p.x, p.y));
  if (isClosed) flowCtx.closePath();
  flowCtx.strokeStyle = flowAnimColor + '33';
  flowCtx.lineWidth = 12;
  flowCtx.lineCap = 'round';
  flowCtx.lineJoin = 'round';
  flowCtx.stroke();

  flowCtx.strokeStyle = flowAnimColor + '18';
  flowCtx.lineWidth = 22;
  flowCtx.stroke();

  // Draw nodes
  pathPts.forEach((p, i) => {
    const step = activeFlow.path[i];
    // Node circle
    flowCtx.beginPath();
    flowCtx.arc(p.x, p.y, 10, 0, Math.PI * 2);
    flowCtx.fillStyle = flowAnimColor + '44';
    flowCtx.fill();
    flowCtx.strokeStyle = flowAnimColor + 'aa';
    flowCtx.lineWidth = 1.5;
    flowCtx.stroke();

    // Label
    flowCtx.font = '10px Inter, sans-serif';
    flowCtx.fillStyle = 'rgba(255,255,255,0.7)';
    flowCtx.textAlign = 'center';
    const offsetY = p.y > H/2 ? 24 : -16;
    flowCtx.fillText(step.length > 18 ? step.slice(0,16)+'…' : step, p.x, p.y + offsetY);
  });

  // Draw particles
  flowAnimTime += 0.016;
  const activeIdx = Math.floor((flowAnimTime * 0.5) % pathPts.length);

  // Highlight active flow step chip
  document.querySelectorAll('.flow-step-chip').forEach((c, i) => {
    c.classList.toggle('active-chip', i === activeIdx);
    c.style.color = i === activeIdx ? flowAnimColor : '';
  });

  flowParticles.forEach(p => {
    p.t += p.speed;
    if (p.t > 1) {
      if (isClosed) p.t -= 1;
      else p.t = 0;
    }

    const pt = getPointOnPath(pathPts, p.t, isClosed);

    // Particle glow
    const grad = flowCtx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, p.size * 2.5);
    grad.addColorStop(0, flowAnimColor + Math.round(p.opacity * 255).toString(16).padStart(2,'0'));
    grad.addColorStop(1, 'transparent');
    flowCtx.beginPath();
    flowCtx.arc(pt.x, pt.y, p.size * 2.5, 0, Math.PI * 2);
    flowCtx.fillStyle = grad;
    flowCtx.fill();

    // Particle core
    flowCtx.beginPath();
    flowCtx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
    flowCtx.fillStyle = flowAnimColor;
    flowCtx.fill();
  });

  flowAnimFrame = requestAnimationFrame(animateFlow);
}

// ════════════════════════════════════════════
// 9. DISEASE SECTION
// ════════════════════════════════════════════
function initDiseaseSection() {
  renderDiseases();
}

function getAllDiseases() {
  const diseases = [];
  Object.values(ORGANS_DATA).forEach(organ => {
    (organ.diseases || []).forEach(d => {
      diseases.push({ ...d, organName: organ.name, organEmoji: organ.emoji, organId: organ.id });
    });
  });
  return diseases;
}

function renderDiseases() {
  const grid = document.getElementById('diseaseGrid');
  const all  = getAllDiseases();

  const filtered = all.filter(d => {
    const matchSeverity = diseaseFilter === 'all' || d.severity === diseaseFilter;
    const q = diseaseSearchQ.toLowerCase();
    const matchSearch = !q || d.name.toLowerCase().includes(q) ||
                        d.description.toLowerCase().includes(q) ||
                        d.organName.toLowerCase().includes(q) ||
                        (d.symptoms || '').toLowerCase().includes(q);
    return matchSeverity && matchSearch;
  });

  grid.innerHTML = '';
  filtered.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'disease-card animate-on-scroll';
    card.innerHTML = `
      <div class="disease-card-top">
        <div>
          <div class="disease-card-title">${d.name}</div>
          <div class="disease-organ-tag">${d.organEmoji} ${d.organName}</div>
        </div>
        <span class="severity-badge severity-${d.severity}">${d.severity}</span>
      </div>
      <p class="disease-card-desc">${d.description}</p>
      <div style="margin-bottom:10px;">
        <div style="font-size:0.72rem; color: var(--red); font-weight:700; margin-bottom:6px; text-transform:uppercase">⚠️ Symptoms</div>
        <div class="disease-symptom-list">
          ${d.symptoms.split(',').map(s => `<span class="symptom-chip">${s.trim()}</span>`).join('')}
        </div>
      </div>
      <div style="background: rgba(0,255,159,0.05); border-radius:8px; padding:10px; border: 1px solid rgba(0,255,159,0.1);">
        <div style="font-size:0.72rem; color: var(--green); font-weight:700; margin-bottom:4px; text-transform:uppercase">🛡️ Prevention</div>
        <p style="font-size:0.8rem; color: var(--text-secondary)">${d.prevention}</p>
      </div>
    `;
    card.onclick = () => { openOrganModal(d.organId); setTimeout(() => switchModalTab('diseases'), 100); };
    grid.appendChild(card);
  });

  if (!filtered.length) {
    grid.innerHTML = '<p style="color:var(--text-muted); text-align:center; grid-column:1/-1; padding:40px">No diseases found matching your search.</p>';
  }

  setTimeout(() => observeScrollAnimations(), 50);
}

function filterDiseases(filter, btn) {
  diseaseFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderDiseases();
}

function searchDiseases(q) {
  diseaseSearchQ = q;
  renderDiseases();
}

// ════════════════════════════════════════════
// 10. MALE/FEMALE ANATOMY
// ════════════════════════════════════════════
const MALE_ANATOMY = [
  { icon: '⚙️', name: 'Prostate Gland', desc: 'Walnut-sized gland producing seminal fluid, surrounding the urethra. Produces PSA (prostate-specific antigen) and alkaline fluid that constitutes 30% of semen.' },
  { icon: '🔵', name: 'Testes', desc: 'Paired gonads in scrotum. Produce testosterone (Leydig cells) and sperm (seminiferous tubules via spermatogenesis). Temperature is 2-3°C below body temperature for optimal sperm production.' },
  { icon: '🌡️', name: 'Testosterone', desc: 'Primary male sex hormone (700-1000 ng/dL normal range). Drives muscle mass, bone density, libido, body hair, deepened voice, and sperm production. Produced 95% by Leydig cells.' },
  { icon: '💪', name: 'Muscle Mass', desc: 'Men typically have 36-38% muscle mass vs 28-31% in women, due to testosterone\'s anabolic effects on muscle protein synthesis and satellite cell activation.' },
  { icon: '🦴', name: 'Bone Density', desc: 'Generally higher bone mineral density due to testosterone. Larger bone frames with thicker cortical bone. Lower risk of osteoporosis than women (though still significant in older men).' },
  { icon: '❤️', name: 'Heart Size', desc: 'Men\'s hearts are typically 10-15% larger by mass (~330g vs 250g in women). Higher stroke volume and lower resting heart rate (avg 70 bpm vs 78 bpm in women).' },
  { icon: '🫁', name: 'Lung Capacity', desc: 'Men have ~30-40% greater total lung capacity (6L vs 4.2L in women), higher VO₂ max, more alveoli, and larger airways — enabling greater athletic endurance.' },
];

const FEMALE_ANATOMY = [
  { icon: '🌸', name: 'Uterus (Womb)', desc: 'Pear-shaped muscular organ (7cm non-pregnant → 40cm pregnant). Site of menstruation, implantation, and fetal development. Myometrium is one of the body\'s strongest muscles.' },
  { icon: '🟣', name: 'Ovaries', desc: 'Paired gonads (almond-sized) that produce oocytes and hormones (estrogen, progesterone). Born with ~2 million follicles, ~400 ovulate across lifespan. Site of ovulation on ~day 14 of cycle.' },
  { icon: '🌊', name: 'Estrogen & Progesterone', desc: 'Primary female sex hormones. Estrogen (estradiol): breast development, uterine lining, bone protection, cardiovascular protection. Progesterone: pregnancy maintenance, uterine preparation.' },
  { icon: '🔄', name: 'Menstrual Cycle', desc: '~28-day cycle: Menstruation (days 1-5) → Follicular phase → Ovulation (day 14) → Luteal phase. Regulated by FSH, LH, estrogen, progesterone via HPO axis.' },
  { icon: '🤰', name: 'Pregnancy Adaptations', desc: 'Cardiac output increases 40-50%, blood volume up 45%, GFR increases 50%, uterus grows 500×, breasts develop lobuloalveolar system for lactation, relaxin loosens ligaments.' },
  { icon: '🦴', name: 'Bone Changes', desc: 'Estrogen protects bone density pre-menopause. Post-menopause estrogen drop accelerates bone loss — 4× higher osteoporosis risk than men. Narrower shoulders, wider pelvis for childbirth.' },
  { icon: '❤️', name: 'Cardiovascular', desc: 'Smaller heart, higher resting HR (~78 bpm), lower BP pre-menopause (estrogen protective). Post-menopause CV risk equalizes with men. Women experience atypical MI symptoms (nausea, jaw pain vs chest pain).' },
];

const SHARED_DIFFERENCES = [
  {
    organ: 'Brain',
    emoji: '🧠',
    male: 'Avg 10% larger by volume (1,450 ml vs 1,300 ml). Greater amygdala reactivity. More white matter connections. Higher spatial processing performance on average.',
    female: 'Higher density of neurons in some areas. Better verbal/language performance on average. More corpus callosum connectivity between hemispheres. Better multitasking circuitry.'
  },
  {
    organ: 'Liver',
    emoji: '🔶',
    male: 'Larger (1.5-1.8 kg). Metabolizes alcohol ~faster due to more alcohol dehydrogenase. Higher tendency for fatty liver with heavy alcohol use.',
    female: 'Smaller (1.3-1.5 kg). Less alcohol dehydrogenase → lower alcohol tolerance. Higher risk of autoimmune liver disease. Estrogen influences cholesterol metabolism.'
  },
  {
    organ: 'Kidneys',
    emoji: '🫘',
    male: 'Larger kidneys, higher GFR. Higher creatinine baseline (0.7-1.3 mg/dL). Higher risk of uric acid kidney stones (gout-related).',
    female: 'Shorter urethra (4cm vs 20cm) → much higher UTI risk (50× more common). Lower creatinine (0.5-1.1 mg/dL). Higher risk of autoimmune kidney diseases.'
  },
  {
    organ: 'Skin',
    emoji: '🫶',
    male: 'Thicker (by ~25%), more collagen, more sebaceous glands (oilier skin), rougher texture. Later-onset wrinkles but quicker decline after 70.',
    female: 'Thinner, less sebum, faster collagen loss post-menopause. More prone to melasma, rosacea, and autoimmune skin conditions. Better wound healing (estrogen effect).'
  },
];

function initAnatomySection() {
  const maleEl   = document.getElementById('maleAnatomyContent');
  const femaleEl = document.getElementById('femaleAnatomyContent');

  MALE_ANATOMY.forEach(item => {
    maleEl.innerHTML += `
      <div class="anatomy-item">
        <div class="anatomy-item-icon">${item.icon}</div>
        <div class="anatomy-item-info">
          <h5>${item.name}</h5>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  });

  FEMALE_ANATOMY.forEach(item => {
    femaleEl.innerHTML += `
      <div class="anatomy-item">
        <div class="anatomy-item-icon">${item.icon}</div>
        <div class="anatomy-item-info">
          <h5>${item.name}</h5>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  });

  const sharedEl = document.getElementById('sharedDifferences');
  SHARED_DIFFERENCES.forEach(item => {
    sharedEl.innerHTML += `
      <div class="bio-card animate-on-scroll">
        <h4 style="display:flex; align-items:center; gap:6px;">${getOrganIconSVG(item.organ.toLowerCase(), 'var(--cyan)', 18)} ${item.organ}</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div style="background: rgba(0,212,255,0.05); border-radius:8px; padding:12px; border: 1px solid rgba(0,212,255,0.15);">
            <div style="font-size:0.7rem; color:var(--cyan); font-weight:700; margin-bottom:6px; text-transform:uppercase">♂ Male</div>
            <p style="font-size:0.82rem; color:var(--text-secondary)">${item.male}</p>
          </div>
          <div style="background: rgba(255,0,110,0.05); border-radius:8px; padding:12px; border: 1px solid rgba(255,0,110,0.15);">
            <div style="font-size:0.7rem; color:var(--magenta); font-weight:700; margin-bottom:6px; text-transform:uppercase">♀ Female</div>
            <p style="font-size:0.82rem; color:var(--text-secondary)">${item.female}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// ════════════════════════════════════════════
// 11. BIO STUDENT SECTION
// ════════════════════════════════════════════
const BIO_TABLES = [
  {
    title: '🔬 Key Enzymes & Catalysts',
    headers: ['Enzyme', 'Location', 'Substrate', 'Product'],
    rows: [
      ['Amylase (salivary)', 'Mouth', 'Starch', 'Maltose'],
      ['Pepsin', 'Stomach (pH 1.5)', 'Proteins', 'Peptides'],
      ['Trypsin', 'Small intestine', 'Proteins', 'Amino acids'],
      ['Lipase (pancreatic)', 'Duodenum', 'Triglycerides', 'Fatty acids + glycerol'],
      ['Lactase', 'Brush border', 'Lactose', 'Glucose + Galactose'],
      ['Enterokinase', 'Duodenum', 'Trypsinogen', 'Trypsin (activator)'],
      ['Carbonic anhydrase', 'RBCs', 'CO₂ + H₂O', 'H₂CO₃'],
    ]
  },
  {
    title: '🧪 Key Hormones Reference',
    headers: ['Hormone', 'Source', 'Target', 'Function'],
    rows: [
      ['Insulin', 'β cells (pancreas)', 'Liver, muscle, fat', '↓ blood glucose, glycogenesis'],
      ['Glucagon', 'α cells (pancreas)', 'Liver', '↑ blood glucose, glycogenolysis'],
      ['Cortisol', 'Adrenal cortex', 'Systemic', 'Stress response, anti-inflammatory'],
      ['Aldosterone', 'Adrenal cortex', 'Kidneys (DCT)', 'Na⁺ retention, K⁺ excretion'],
      ['ADH (vasopressin)', 'Posterior pituitary', 'Kidney collecting duct', 'Water reabsorption'],
      ['TSH', 'Anterior pituitary', 'Thyroid', 'Stimulates T3/T4 release'],
      ['EPO', 'Kidneys', 'Bone marrow', 'Stimulates RBC production'],
      ['Oxytocin', 'Posterior pituitary', 'Uterus, breasts', 'Labor contractions, lactation'],
    ]
  },
  {
    title: '📊 Normal Lab Values (Adult)',
    headers: ['Parameter', 'Normal Range', 'Units', 'Clinical Note'],
    rows: [
      ['Blood pH', '7.35 – 7.45', 'pH units', 'Acidosis <7.35, Alkalosis >7.45'],
      ['pO₂', '75 – 100', 'mmHg', 'Hypoxia if <60 mmHg'],
      ['pCO₂', '35 – 45', 'mmHg', 'Resp acidosis if >45'],
      ['Glucose (fasting)', '70 – 100', 'mg/dL', 'Diabetes if ≥126 mg/dL'],
      ['Creatinine (M)', '0.7 – 1.3', 'mg/dL', 'Marker of kidney function'],
      ['Hemoglobin (M)', '13.5 – 17.5', 'g/dL', 'Anemia if below range'],
      ['Sodium', '135 – 145', 'mEq/L', 'Hyponatremia <135'],
      ['Potassium', '3.5 – 5.0', 'mEq/L', 'Dangerous if <3.0 or >6.0'],
      ['Calcium', '8.5 – 10.5', 'mg/dL', 'Hypocalcemia → tetany'],
      ['Total cholesterol', '<200', 'mg/dL', 'CVD risk ≥240 mg/dL'],
    ]
  },
  {
    title: '🫀 Cardiac Physiology',
    headers: ['Parameter', 'Value', 'Formula/Notes'],
    rows: [
      ['Cardiac Output', '~5 L/min', 'CO = HR × SV'],
      ['Heart Rate', '60–100 bpm', 'SA node pacemaker'],
      ['Stroke Volume', '70 mL', 'EDV − ESV (Frank-Starling)'],
      ['Ejection Fraction', '55–70%', 'SV/EDV × 100%'],
      ['Systolic BP', '120 mmHg', 'Ventricular contraction force'],
      ['Diastolic BP', '80 mmHg', 'Arterial wall resistance'],
      ['MAP', '93 mmHg', 'DBP + 1/3(PP); PP=SBP−DBP'],
      ['QRS duration', '80–100 ms', 'Ventricular depolarization'],
    ]
  },
  {
    title: '🫘 Renal Physiology',
    headers: ['Parameter', 'Value', 'Notes'],
    rows: [
      ['GFR', '125 mL/min', '180 L/day filtered'],
      ['Urine output', '1–2 L/day', '~1% of filtered load'],
      ['PCT reabsorption', '65%', 'Na⁺, glucose, H₂O, HCO₃⁻'],
      ['Loop of Henle', '25%', 'Concentration gradient'],
      ['Osmolarity range', '50–1200 mOsm/kg', 'ADH-dependent'],
      ['Urine pH', '4.5–8.0', 'Acid/base regulation'],
      ['Plasma creatinine', '0.7–1.3 mg/dL (M)', 'CKD marker'],
    ]
  },
  {
    title: '🧬 Cell Types Reference',
    headers: ['Cell', 'Location', 'Lifespan', 'Key Function'],
    rows: [
      ['Red blood cells', 'Blood', '120 days', 'O₂ transport (hemoglobin)'],
      ['Neutrophils', 'Blood/tissue', '6–8 hours', 'First-line phagocytosis'],
      ['B lymphocytes', 'Lymph/blood', 'Weeks–years', 'Antibody production'],
      ['T lymphocytes', 'Thymus/blood', 'Years', 'Cell-mediated immunity'],
      ['Hepatocytes', 'Liver', '150–400 days', 'Metabolism, detox, synthesis'],
      ['Neurons', 'Brain/nerves', 'Lifetime (most)', 'Electrical signaling'],
      ['Cardiomyocytes', 'Heart', 'Lifetime', 'Cardiac contraction'],
      ['Enterocytes', 'Small intestine', '2–5 days', 'Nutrient absorption'],
      ['Osteoblasts', 'Bone', 'Variable', 'Bone formation'],
      ['Osteoclasts', 'Bone', 'Variable', 'Bone resorption'],
    ]
  },
];

function initBioSection() {
  const grid = document.getElementById('bioGrid');
  BIO_TABLES.forEach(table => {
    const card = document.createElement('div');
    card.className = 'bio-card animate-on-scroll';
    card.innerHTML = `
      <h4>${table.title}</h4>
      <div style="overflow-x:auto">
        <table class="bio-table">
          <thead>
            <tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ════════════════════════════════════════════
// 12. BIO MODE TOGGLE
// ════════════════════════════════════════════
function initBioModeToggle() {
  const toggle = document.getElementById('bioModeToggle');
  toggle.addEventListener('change', () => {
    isBioMode = toggle.checked;
    document.body.classList.toggle('bio-mode', isBioMode);
    if (currentOrgan) loadOrganPanel(currentOrgan);
  });
}

// ════════════════════════════════════════════
// 13. SCROLL ANIMATIONS
// ════════════════════════════════════════════
function initScrollAnimations() {
  observeScrollAnimations();

  window.addEventListener('scroll', () => {
    drawBodyMap(); // keep map fresh with pulse
  }, { passive: true });
}

function observeScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ════════════════════════════════════════════
// 14. SCROLL TO TOP
// ════════════════════════════════════════════
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
}

// ════════════════════════════════════════════
// 15. CANVAS RESIZE HANDLER
// ════════════════════════════════════════════
window.addEventListener('resize', () => {
  if (flowCanvas && activeFlow) {
    flowCanvas.width = flowCanvas.offsetWidth || 600;
    flowCanvas.height = 300;
  }
  drawBodyMap();
});

// ════════════════════════════════════════════
// 16. HEARTBEAT BODY MAP ANIMATION
// ════════════════════════════════════════════
let mapPulsePhase = 0;
function animateBodyMap() {
  mapPulsePhase += 0.02;

  // Pulse the heart organ position
  const heartPos = ORGAN_POSITIONS.find(o => o.id === 'heart');
  if (heartPos) {
    heartPos.r = 18 + Math.abs(Math.sin(mapPulsePhase * 5)) * 4;
  }

  const lungsPos = ORGAN_POSITIONS.find(o => o.id === 'lungs');
  if (lungsPos) {
    lungsPos.r = 22 + Math.abs(Math.sin(mapPulsePhase * 0.5)) * 3;
  }

  drawBodyMap();
  requestAnimationFrame(animateBodyMap);
}

// Start body map animation after init
setTimeout(animateBodyMap, 2500);

console.log('%c🫀 Human Body Explorer Loaded', 'color:#00d4ff; font-size:1.2rem; font-weight:bold;');
console.log('%c78 organs · 50+ diseases · 7 fluid systems', 'color:#a855f7; font-size:0.9rem;');
