// Дані гравців
const PLAYERS = {
  p1: { id: 'p1', name: 'NEBULA_9', region: 'UA-KYIV', color: '#ff2e8c' },
  p2: { id: 'p2', name: 'GLITCHKID', region: 'PL-WAW', color: '#00f0ff' },
  p3: { id: 'p3', name: 'VOLT.EXE', region: 'DE-BER', color: '#9d4edd' },
  p4: { id: 'p4', name: 'PIXELWRAITH', region: 'UA-LVIV', color: '#ffe066' },
  p5: { id: 'p5', name: 'RETROX', region: 'NA-EAST', color: '#00f0ff' },
  p6: { id: 'p6', name: 'SYNTH_ZERO', region: 'EU-WEST', color: '#ff2e8c' },
  p7: { id: 'p7', name: 'TURBOKAT', region: 'ASIA-TKY', color: '#9d4edd' },
  p8: { id: 'p8', name: 'CHRONO_JEN', region: 'UA-ODS', color: '#ffe066' },
  lb1: { id: 'lb1', name: 'AXIOM_R', region: 'EU-WEST', color: '#00f0ff' },
  lb2: { id: 'lb2', name: 'MEGABYTE.Q', region: 'NA-WEST', color: '#ff2e8c' }
};

const ROUNDS = [
  [
    { id: 'm0', ids: ['p1', 'p8'], scores: [3, 1], winnerId: 'p1' },
    { id: 'm1', ids: ['p2', 'p7'], scores: [3, 2], winnerId: 'p2' },
    { id: 'm2', ids: ['p3', 'p6'], scores: [3, 0], winnerId: 'p3' },
    { id: 'm3', ids: ['p4', 'p5'], scores: [2, 3], winnerId: 'p5' },
  ],
  [
    { id: 'm4', ids: ['p1', 'p2'], scores: [3, 2], winnerId: 'p1' },
    { id: 'm5', ids: ['p3', 'p5'], scores: [3, 1], winnerId: 'p3' },
  ],
  [
    { id: 'm6', ids: ['p1', 'p3'], scores: [3, 2], winnerId: 'p1' },
  ]
];

const LEADERBOARD_STATS = [
  { id: 'p1', score: 9820, wins: 20, losses: 6 },
  { id: 'p3', score: 9540, wins: 22, losses: 6 },
  { id: 'p2', score: 9310, wins: 17, losses: 9 },
  { id: 'p5', score: 9105, wins: 19, losses: 8 },
  { id: 'lb1', score: 8890, wins: 14, losses: 5 },
  { id: 'p7', score: 8640, wins: 16, losses: 4 },
  { id: 'p6', score: 8420, wins: 13, losses: 10 },
  { id: 'lb2', score: 8110, wins: 9, losses: 12 },
  { id: 'p4', score: 7860, wins: 12, losses: 2 },
  { id: 'p8', score: 7520, wins: 7, losses: 17 },
];

const TRACKS = [
  { id: 0, ua: 'Неоновий Контур', en: 'Neon Circuit', wave: 'square', tempo: 148, notes: [440, 554, 659, 554, 440, 659, 880, 659] },
  { id: 1, ua: 'Піксельний Дощ', en: 'Pixel Rain', wave: 'triangle', tempo: 112, notes: [523, 659, 784, 659, 523, 392, 523, 659] },
  { id: 2, ua: 'Турбо Сітка', en: 'Turbo Grid', wave: 'sawtooth', tempo: 168, notes: [330, 392, 440, 392, 330, 262, 330, 392] },
  { id: 3, ua: '8-бітний Захід', en: '8-Bit Sunset', wave: 'square', tempo: 92, notes: [392, 440, 494, 440, 392, 330, 294, 330] },
];

const TRANSLATIONS = {
  ua: {
    nav_bracket: 'Сітка', nav_jukebox: 'Джукбокс', nav_board: 'Лідери', nav_cta: 'Створити турнір',
    hero_eyebrow: 'ІНДИВІДУАЛЬНІ РЕТРО-ТУРНІРИ · СЕЗОН 20XX', hero_title1: 'ARCADE', hero_title2: '20XX',
    hero_sub: 'Постав кредит, обери автомат, стань легендою. Платформа персональних турнірів у світі неону, растрів і восьми бітів.',
    hero_cta1: 'Створити турнір', hero_cta2: 'Дивитись сітку',
    stat_players: 'ГРАВЦІВ У РЕЙТИНГУ', stat_matches: 'ЗІГРАНО МАТЧІВ', stat_cabinets: 'РЕТРО-АВТОМАТІВ',
    br_eyebrow: 'ТУРНІРНА СІТКА', br_title: 'Neon Bracket', br_sub: 'Наведи курсор на гравця — підсвітиться його шлях до фіналу',
    r1: '1/4 ФІНАЛУ', r2: '1/2 ФІНАЛУ', r3: 'ФІНАЛ',
    jb_eyebrow: 'ЗВУКОВИЙ РЯД', jb_title: 'Chiptune Jukebox', jb_sub: 'Живий 8-бітний саунд, згенерований прямо у браузері',
    jb_now: 'ЗАРАЗ ГРАЄ',
    lb_eyebrow: 'РЕЙТИНГ', lb_title: 'Live Leaderboard', lb_sub: 'Обери сортування — рядки плавно поміняються місцями',
    th_rank: '#', th_player: 'ГРАВЕЦЬ', th_region: 'РЕГІОН', th_score: 'РАХУНОК', th_wins: 'ПЕРЕМОГИ', th_wr: '% ПЕРЕМОГ',
    sort_score: 'За рахунком', sort_wins: 'За перемогами', sort_wr: 'За % перемог',
    foot_text: 'Створено для героїв аркадних залів.', foot_coin: 'INSERT COIN TO CONTINUE',
  },
  en: {
    nav_bracket: 'Bracket', nav_jukebox: 'Jukebox', nav_board: 'Leaderboard', nav_cta: 'Start Tournament',
    hero_eyebrow: 'SOLO RETRO TOURNAMENTS · SEASON 20XX', hero_title1: 'ARCADE', hero_title2: '20XX',
    hero_sub: 'Drop a credit, pick your cabinet, become a legend. Personal tournament platform in a world of neon, scanlines, and 8-bit.',
    hero_cta1: 'Create Tournament', hero_cta2: 'View Bracket',
    stat_players: 'RANKED PLAYERS', stat_matches: 'MATCHES PLAYED', stat_cabinets: 'RETRO CABINETS',
    br_eyebrow: 'TOURNAMENT TREE', br_title: 'Neon Bracket', br_sub: 'Hover over a player to trace their path to the final',
    r1: 'QUARTERFINALS', r2: 'SEMIFINALS', r3: 'FINAL',
    jb_eyebrow: 'SOUNDTRACK', jb_title: 'Chiptune Jukebox', jb_sub: 'Live 8-bit audio generated directly in your browser',
    jb_now: 'NOW PLAYING',
    lb_eyebrow: 'RANKINGS', lb_title: 'Live Leaderboard', lb_sub: 'Select sorting — rows will reorder dynamically',
    th_rank: '#', th_player: 'PLAYER', th_region: 'REGION', th_score: 'SCORE', th_wins: 'WINS', th_wr: 'WIN %',
    sort_score: 'By score', sort_wins: 'By wins', sort_wr: 'By win %',
    foot_text: 'Built for arcade hall heroes.', foot_coin: 'INSERT COIN TO CONTINUE',
  }
};

let currentLang = 'ua';
let activePlayerHover = null;
let currentTrackIdx = 3; // Починаємо з 4-го треку, як на фото
let isPlaying = false;
let currentSort = 'score';

let audioCtx = null;
let audioAnalyser = null;
let frequencyData = null;
let noteInterval = null;
let beatPulse = 0;

// Старт додатку
function init() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  renderBracket();
  updateJukeboxUI();
  renderLeaderboard();
  startCanvasVisualizer();
}

window.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'interactive' || document.readyState === 'complete') init();

// 0. Мова
function toggleLang() {
  currentLang = currentLang === 'ua' ? 'en' : 'ua';
  document.getElementById('lang-btn').textContent = currentLang === 'ua' ? 'ENG' : 'UA';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });

  renderBracket();
  updateJukeboxUI();
  renderLeaderboard();
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// 1. Сітка (Bracket)
function renderBracket() {
  const container = document.getElementById('bracket-container');
  if (!container) return;
  const roundTitles = [TRANSLATIONS[currentLang].r1, TRANSLATIONS[currentLang].r2, TRANSLATIONS[currentLang].r3];
  
  let html = '<div class="bracket-stage"><svg class="bracket-lines" aria-hidden="true"></svg>';
  ROUNDS.forEach((round, rIdx) => {
    html += `<div class="round-col round-${rIdx}">`;
    html += `<div class="round-title pixel">${roundTitles[rIdx]}</div>`;
    
    round.forEach(match => {
      html += `<div class="match-card">`;
      match.ids.forEach((pId, pIdx) => {
        const player = PLAYERS[pId] || { name: 'UNKNOWN', color: '#fff' };
        const isWinner = match.winnerId === pId;
        const isHighlighted = activePlayerHover === pId;
        
        html += `
          <div class="player-row ${isWinner ? 'winner' : ''} ${isHighlighted ? 'highlight' : ''}"
            data-player="${pId}"
               onmouseenter="hoverPlayer('${pId}')" 
               onmouseleave="hoverPlayer(null)">
            <span style="color: ${player.color}">■</span>
            <span style="flex: 1; margin-left: 8px;">${player.name}</span>
            <span class="score-tag">${match.scores[pIdx]}</span>
          </div>
        `;
      });
      html += `</div>`;
    });
    html += `</div>`;
  });
  html += '</div>';

  container.innerHTML = html;
  drawBracketLines();
}

function drawBracketLines() {
  const stage = document.querySelector('.bracket-stage');
  const svg = document.querySelector('.bracket-lines');
  if (!stage || !svg) return;

  const stageRect = stage.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${stageRect.width} ${stageRect.height}`);
  svg.innerHTML = '';

  const rounds = [...stage.querySelectorAll('.round-col')];
  rounds.slice(0, -1).forEach((round, roundIndex) => {
    const nextRound = rounds[roundIndex + 1];
    const sourceMatches = [...round.querySelectorAll('.match-card')];
    const targetMatches = [...nextRound.querySelectorAll('.match-card')];

    targetMatches.forEach((targetMatch, targetIndex) => {
      const targetRect = targetMatch.getBoundingClientRect();
      const targetX = targetRect.left - stageRect.left;
      const targetY = targetRect.top + targetRect.height / 2 - stageRect.top;
      const sourceIndexes = [targetIndex * 2, targetIndex * 2 + 1];
      const sourcePoints = sourceIndexes
        .map(index => sourceMatches[index]?.querySelector('.player-row.winner'))
        .filter(Boolean)
        .map(winner => {
          const winnerRect = winner.getBoundingClientRect();
          return {
            x: winnerRect.right - stageRect.left,
            y: winnerRect.top + winnerRect.height / 2 - stageRect.top
          };
        });

      sourcePoints.forEach(point => {
        const laneX = point.x + (targetX - point.x) / 2;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${point.x} ${point.y} H ${laneX} V ${targetY} H ${targetX}`);
        path.setAttribute('class', 'bracket-line');
        svg.appendChild(path);
      });
    });
  });
}

window.addEventListener('resize', drawBracketLines);

function hoverPlayer(playerId) {
  activePlayerHover = playerId;
  renderBracket();
}

// 2. Плеєр Jukebox
function renderJukeboxTrackList() {
  const container = document.getElementById('track-list');
  if (!container) return;

  container.innerHTML = TRACKS.map((trk, i) => {
    const isActive = i === currentTrackIdx;
    const trackNum = String(i + 1).padStart(2, '0');
    const name = currentLang === 'ua' ? trk.ua : trk.en;

    return `
      <div class="track-row ${isActive ? 'active' : ''} ${isActive && isPlaying ? 'playing' : ''}" onclick="selectTrack(${i})">
        <div class="track-left">
          <span class="track-idx">${trackNum}</span>
          <span class="track-name">${name}</span>
        </div>
        ${isActive ? `
          <div class="eq-bars">
            <div class="eq-bar"></div>
            <div class="eq-bar"></div>
            <div class="eq-bar"></div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function updateJukeboxUI() {
  const trk = TRACKS[currentTrackIdx];
  const num = String(trk.id + 1).padStart(2, '0');
  const title = currentLang === 'ua' ? trk.ua : trk.en;

  document.getElementById('track-title').textContent = `${num} ${title}`;
  document.getElementById('track-meta').textContent = `ТРЕК ${num}/04 · ${trk.tempo} BPM · ${trk.wave.toUpperCase()}`;
  renderJukeboxTrackList();
}

function selectTrack(idx) {
  currentTrackIdx = idx;
  updateJukeboxUI();
  if (isPlaying) play8BitSound();
}

function togglePlay() {
  isPlaying = !isPlaying;
  const playBtn = document.getElementById('play-btn');
  playBtn.innerHTML = isPlaying ? '<i data-lucide="pause"></i>' : '<i data-lucide="play"></i>';
  if (typeof lucide !== 'undefined') lucide.createIcons();

  if (isPlaying) {
    play8BitSound();
  } else {
    stop8BitSound();
  }
  renderJukeboxTrackList();
}

function prevTrack() {
  currentTrackIdx = (currentTrackIdx - 1 + TRACKS.length) % TRACKS.length;
  selectTrack(currentTrackIdx);
}

function nextTrack() {
  currentTrackIdx = (currentTrackIdx + 1) % TRACKS.length;
  selectTrack(currentTrackIdx);
}

function play8BitSound() {
  stop8BitSound();
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (!audioAnalyser) {
    audioAnalyser = audioCtx.createAnalyser();
    audioAnalyser.fftSize = 128;
    audioAnalyser.smoothingTimeConstant = 0.55;
    frequencyData = new Uint8Array(audioAnalyser.frequencyBinCount);
    audioAnalyser.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const trk = TRACKS[currentTrackIdx];
  let noteIndex = 0;
  const stepMs = (60 / trk.tempo) * 1000 / 2;
  
  noteInterval = setInterval(() => {
    if (!isPlaying) return;
    const freq = trk.notes[noteIndex];
    beatPulse = 1;
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = trk.wave;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    const sliderVal = parseFloat(document.getElementById('volume-slider').value || 0.3);
    gain.gain.setValueAtTime(sliderVal * 0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(audioAnalyser);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
    
    noteIndex = (noteIndex + 1) % trk.notes.length;
  }, stepMs);
}

function stop8BitSound() {
  if (noteInterval) clearInterval(noteInterval);
  noteInterval = null;
}

// Visualizer Canvas driven by the generated track's real audio spectrum.
function startCanvasVisualizer() {
  const canvas = document.getElementById('audio-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (audioAnalyser && frequencyData && isPlaying) {
      audioAnalyser.getByteFrequencyData(frequencyData);
    }
    beatPulse *= 0.88;
    
    const bars = 32;
    const barWidth = (canvas.width / bars) - 3;
    
    for (let i = 0; i < bars; i++) {
      const dataIndex = Math.min(
        frequencyData ? frequencyData.length - 1 : 0,
        Math.floor((i / bars) ** 1.7 * (frequencyData?.length || 1))
      );
      const spectrumLevel = isPlaying && frequencyData ? frequencyData[dataIndex] / 255 : 0;
      const profile = 1 - (i / bars) * 0.72;
      const baseHeight = Math.max(10, canvas.height * profile * 0.45);
      const height = Math.min(
        canvas.height - 8,
        baseHeight + spectrumLevel * canvas.height * 0.9 + beatPulse * (i < 10 ? 24 : 10)
      );
      
      const x = i * (barWidth + 3);
      const y = canvas.height - height;
      
      // Градієнт стовпчика
      const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
      const ratio = i / bars;
      if (ratio < 0.4) {
        grad.addColorStop(0, '#00f0ff');
        grad.addColorStop(1, '#00aaff');
      } else if (ratio < 0.8) {
        grad.addColorStop(0, '#7000ff');
        grad.addColorStop(1, '#a000ff');
      } else {
        grad.addColorStop(0, '#ff007f');
        grad.addColorStop(1, '#ff2e8c');
      }
      
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, barWidth, height);
    }
  }
  draw();
}

// 3. Таблиця лідерів (Live Leaderboard)
function sortLeaderboard(criterion) {
  currentSort = criterion;
  ['score', 'wins', 'wr'].forEach(c => {
    document.getElementById(`sort-${c}`)?.classList.toggle('active', c === criterion);
  });
  renderLeaderboard();
}

function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;
  
  const sorted = [...LEADERBOARD_STATS].sort((a, b) => {
    if (currentSort === 'score') return b.score - a.score;
    if (currentSort === 'wins') return b.wins - a.wins;
    if (currentSort === 'wr') {
      return (b.wins / (b.wins + b.losses)) - (a.wins / (a.wins + a.losses));
    }
    return 0;
  });

  tbody.innerHTML = sorted.map((stat, idx) => {
    const player = PLAYERS[stat.id] || { name: 'Player', region: 'GLOBAL', color: '#00f0ff' };
    const wr = Math.round((stat.wins / (stat.wins + stat.losses)) * 100);
    
    let rankClass = "rank-num";
    if (idx === 0) rankClass += " rank-1";
    else if (idx === 1) rankClass += " rank-2";
    else if (idx === 2) rankClass += " rank-3";

    return `
      <tr>
        <td class="${rankClass}">${idx + 1}</td>
        <td>
          <div class="row-player">
            <span style="color: ${player.color}">■</span> ${player.name}
          </div>
        </td>
        <td class="row-region">${player.region}</td>
        <td class="row-score">${stat.score.toLocaleString()}</td>
        <td class="mono">${stat.wins}</td>
        <td>
          <div class="wr-bar">
            <div class="wr-fill" style="width: ${wr}%"></div>
          </div>
          <div class="mono" style="font-size: 10px; margin-top: 4px; color: var(--dim);">${wr}%</div>
        </td>
      </tr>
    `;
  }).join('');
}