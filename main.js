/* ═══════════════════════════════════════════
   Global SP Solutions — Shared JS
   Particles, Cursor, Scroll Reveal
═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ── HAMBURGER MENU ──────────────────────
  var toggle = document.getElementById('nav-toggle');
  var navLinksSource = document.getElementById('nav-links');

  if (toggle && navLinksSource) {
    // Build a portal overlay directly on <body> — avoids nav's stacking context entirely
    var overlay = document.createElement('ul');
    overlay.id = 'mobile-nav-overlay';

    // Close button inside overlay
    var closeBtn = document.createElement('button');
    closeBtn.className = 'overlay-close';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.innerHTML = '<span></span><span></span><span></span>';
    overlay.appendChild(closeBtn);

    // Clone nav links into overlay
    var links = navLinksSource.querySelectorAll('a');
    links.forEach(function(a) {
      var li = document.createElement('li');
      var clone = a.cloneNode(true);
      li.appendChild(clone);
      overlay.appendChild(li);
    });

    document.body.appendChild(overlay);

    function openMenu() {
      overlay.classList.add('open');
      toggle.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      overlay.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function() {
      overlay.classList.contains('open') ? closeMenu() : openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);

    // Close on any link click
    overlay.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });
  }

  var isMobile = window.innerWidth <= 600;

  // ── CURSOR (desktop only) ───────────────
  if (!isMobile) {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
    });

    function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(animRing);
    }
    animRing();
  }

  // ── PARTICLES ───────────────────────────
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const mouse = { x: -9999, y: -9999 };
  const COLORS = ['#9b4dff', '#c97dff', '#f0c040', '#d4a017', '#7a28cc', '#e8b030'];
  // Reduce particles significantly on mobile to save battery/CPU
  const N = isMobile ? 30 : 110;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  if (!isMobile) {
    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  }

  function Particle() { this.reset(true); }
  Particle.prototype.reset = function (init) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -(Math.random() * 0.6 + 0.2);
    this.r  = Math.random() * 2 + 0.5;
    this.alpha   = Math.random() * 0.5 + 0.2;
    this.color   = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.life    = 0;
    this.maxLife = Math.random() * 400 + 200;
    if (Math.random() < 0.25) {
      this.x = Math.round(this.x / 60) * 60 + (Math.random() * 20 - 10);
      this.y = Math.round(this.y / 60) * 60 + (Math.random() * 20 - 10);
    }
  };
  Particle.prototype.update = function () {
    this.life++;
    if (this.life > this.maxLife) { this.reset(false); return; }
    if (!isMobile) {
      var dx = this.x - mouse.x, dy = this.y - mouse.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        var f = (120 - dist) / 120 * 0.8;
        this.vx += (dx / dist) * f;
        this.vy += (dy / dist) * f;
      }
    }
    this.vx *= 0.98; this.vy *= 0.98;
    this.x  += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < -20) this.reset(false);
  };
  Particle.prototype.draw = function () {
    var p = this.life / this.maxLife;
    var a = this.alpha * (p < 0.1 ? p / 0.1 : p > 0.8 ? (1 - p) / 0.2 : 1);
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle   = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur  = 8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  var particles = [];
  for (var i = 0; i < N; i++) particles.push(new Particle());

  function drawLines() {
    if (isMobile) return; // skip connecting lines on mobile
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - d / 100) * 0.13;
          ctx.strokeStyle = particles[i].color;
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    drawLines();
    particles.forEach(function (p) { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })();

  // ── SCROLL REVEAL ───────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // stagger siblings inside card-grid
        var parent = e.target.parentElement;
        if (parent && parent.classList.contains('card-grid')) {
          var siblings = Array.from(parent.children);
          var idx = siblings.indexOf(e.target);
          e.target.style.transitionDelay = (idx * 0.08) + 's';
        }
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { obs.observe(el); });

  // ── ACTIVE NAV LINK ─────────────────────
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });

})();
