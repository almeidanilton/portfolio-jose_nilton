/**
 * CYBER CORE — Interactive 3D Digital Nucleus
 * Three.js scene featuring a glowing core, orbital rings,
 * particles, connection lines, and labeled orbital elements.
 * 
 * Responds to mouse movement and provides hover tooltips.
 */

(function () {
  'use strict';

  // --- WebGL Detection ---
  function webglSupported() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  const container = document.getElementById('hero-3d-container');
  const canvas = document.getElementById('cyber-core-canvas');

  if (!container || !canvas) return;

  // Fallback if WebGL is not available
  if (!webglSupported()) {
    container.classList.add('fallback-active');
    return;
  }

  // --- Configuration ---
  const CONFIG = {
    particleCount: 160,
    connectionDistance: 2.2,
    coreRadius: 0.8,
    ringCount: 3,
    orbitRadius: 3.2,
    mouseInfluence: 0.3,
    rotationSpeed: 0.0004,
    particleSpeed: 0.001,
    colors: {
      blue: 0x3b82f6,
      blueDim: 0x1e40af,
      purple: 0x8b5cf6,
      purpleDim: 0x6d28d9,
      white: 0xe8eaf0,
      coreGlow: 0x3b82f6,
    },
  };

  // --- Orbital Element Data ---
  const ORBITAL_ELEMENTS = [
    { label: 'CYBERSECURITY', icon: '🔐', desc: 'My main area of professional interest.', angle: 0 },
    { label: 'NETWORKING', icon: '🌐', desc: 'Exploring networks, protocols and security.', angle: Math.PI / 2 },
    { label: 'LINUX', icon: '🐧', desc: 'Learning systems, terminal and security fundamentals.', angle: Math.PI },
    { label: 'CLOUD', icon: '☁️', desc: 'Exploring cloud technologies and security.', angle: (3 * Math.PI) / 2 },
  ];

  // --- Scene Setup ---
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 7);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // --- Mouse Tracking ---
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  document.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // --- Core Nucleus ---
  const coreGroup = new THREE.Group();
  scene.add(coreGroup);

  // Core wireframe icosahedron
  const coreGeometry = new THREE.IcosahedronGeometry(CONFIG.coreRadius, 1);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.colors.blue,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
  coreGroup.add(coreMesh);

  // Inner solid glow sphere
  const innerGlowGeometry = new THREE.SphereGeometry(CONFIG.coreRadius * 0.5, 16, 16);
  const innerGlowMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.colors.coreGlow,
    transparent: true,
    opacity: 0.15,
  });
  const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
  coreGroup.add(innerGlow);

  // Outer glow halo
  const haloGeometry = new THREE.SphereGeometry(CONFIG.coreRadius * 1.5, 16, 16);
  const haloMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.colors.blue,
    transparent: true,
    opacity: 0.04,
    side: THREE.BackSide,
  });
  const halo = new THREE.Mesh(haloGeometry, haloMaterial);
  coreGroup.add(halo);

  // --- Orbital Rings ---
  const rings = [];
  const ringTilts = [
    { x: 0.5, y: 0.3 },
    { x: -0.3, y: 0.8 },
    { x: 0.8, y: -0.2 },
  ];

  for (let i = 0; i < CONFIG.ringCount; i++) {
    const radius = 2.0 + i * 0.8;
    const ringGeometry = new THREE.RingGeometry(radius - 0.01, radius + 0.01, 128);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: i === 1 ? CONFIG.colors.purple : CONFIG.colors.blue,
      transparent: true,
      opacity: 0.12 - i * 0.02,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = ringTilts[i].x;
    ring.rotation.y = ringTilts[i].y;
    coreGroup.add(ring);
    rings.push(ring);
  }

  // --- Particles ---
  const particlePositions = new Float32Array(CONFIG.particleCount * 3);
  const particleVelocities = [];

  for (let i = 0; i < CONFIG.particleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1.0 + Math.random() * 3.0;

    particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePositions[i * 3 + 2] = r * Math.cos(phi);

    particleVelocities.push({
      x: (Math.random() - 0.5) * CONFIG.particleSpeed,
      y: (Math.random() - 0.5) * CONFIG.particleSpeed,
      z: (Math.random() - 0.5) * CONFIG.particleSpeed,
    });
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: CONFIG.colors.blue,
    size: 0.04,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  coreGroup.add(particles);

  // --- Connection Lines ---
  const linesMaterial = new THREE.LineBasicMaterial({
    color: CONFIG.colors.blue,
    transparent: true,
    opacity: 0.08,
  });

  let linesGroup = new THREE.Group();
  coreGroup.add(linesGroup);

  function updateConnections() {
    // Remove old lines
    while (linesGroup.children.length > 0) {
      const child = linesGroup.children[0];
      if (child.geometry) child.geometry.dispose();
      linesGroup.remove(child);
    }

    const positions = particleGeometry.attributes.position.array;
    let lineCount = 0;
    const maxLines = 80; // Limit for performance

    for (let i = 0; i < CONFIG.particleCount && lineCount < maxLines; i++) {
      for (let j = i + 1; j < CONFIG.particleCount && lineCount < maxLines; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONFIG.connectionDistance) {
          const lineGeometry = new THREE.BufferGeometry();
          const linePositions = new Float32Array([
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
          ]);
          lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

          const lineMat = linesMaterial.clone();
          lineMat.opacity = 0.08 * (1 - dist / CONFIG.connectionDistance);

          const line = new THREE.Line(lineGeometry, lineMat);
          linesGroup.add(line);
          lineCount++;
        }
      }
    }
  }

  // --- Orbital Label Sprites ---
  const orbitalSprites = [];
  const raycaster = new THREE.Raycaster();
  const mouseVec = new THREE.Vector2();

  function createTextSprite(text, color) {
    const canvasEl = document.createElement('canvas');
    const ctx = canvasEl.getContext('2d');
    canvasEl.width = 256;
    canvasEl.height = 64;

    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // Background pill
    ctx.fillStyle = 'rgba(13, 18, 32, 0.85)';
    const pillWidth = 220;
    const pillHeight = 40;
    const pillX = (canvasEl.width - pillWidth) / 2;
    const pillY = (canvasEl.height - pillHeight) / 2;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 20);
    ctx.fill();

    // Border
    ctx.strokeStyle = color || 'rgba(59, 130, 246, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Text
    ctx.fillStyle = '#e8eaf0';
    ctx.font = '600 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvasEl.width / 2, canvasEl.height / 2);

    const texture = new THREE.CanvasTexture(canvasEl);
    texture.needsUpdate = true;

    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9,
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(2.0, 0.5, 1);

    return sprite;
  }

  ORBITAL_ELEMENTS.forEach((elem, index) => {
    const text = `${elem.icon} ${elem.label}`;
    const color = index % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)';
    const sprite = createTextSprite(text, color);

    // Position on a circle around the core
    sprite.userData = {
      baseAngle: elem.angle,
      label: elem.label,
      desc: elem.desc,
      orbitRadius: CONFIG.orbitRadius,
      orbitSpeed: 0.15 + index * 0.03,
      yOffset: (index - 1.5) * 0.5,
    };

    coreGroup.add(sprite);
    orbitalSprites.push(sprite);
  });

  // --- Small Glowing Nodes on Ring ---
  const nodeGeometry = new THREE.SphereGeometry(0.06, 8, 8);
  const nodeMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.colors.blue,
    transparent: true,
    opacity: 0.7,
  });

  const pulseNodes = [];
  for (let i = 0; i < 12; i++) {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
    node.userData = {
      ringIndex: i % CONFIG.ringCount,
      angle: (i / 12) * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.3,
    };
    coreGroup.add(node);
    pulseNodes.push(node);
  }

  // --- Tooltip ---
  const tooltip = document.getElementById('orbit-tooltip');
  const tooltipTitle = document.getElementById('tooltip-title');
  const tooltipDesc = document.getElementById('tooltip-desc');
  let hoveredSprite = null;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouseVec, camera);
    const intersects = raycaster.intersectObjects(orbitalSprites);

    if (intersects.length > 0) {
      const sprite = intersects[0].object;
      if (sprite.userData.label) {
        hoveredSprite = sprite;
        tooltipTitle.textContent = sprite.userData.label;
        tooltipDesc.textContent = sprite.userData.desc;
        tooltip.classList.add('visible');
        tooltip.style.left = e.clientX + 16 + 'px';
        tooltip.style.top = e.clientY - 10 + 'px';

        sprite.material.opacity = 1;
        canvas.style.cursor = 'pointer';
      }
    } else {
      if (hoveredSprite) {
        hoveredSprite.material.opacity = 0.9;
        hoveredSprite = null;
      }
      tooltip.classList.remove('visible');
      canvas.style.cursor = 'default';
    }
  });

  canvas.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
    canvas.style.cursor = 'default';
    if (hoveredSprite) {
      hoveredSprite.material.opacity = 0.9;
      hoveredSprite = null;
    }
  });

  // --- Animation Loop ---
  let frameCount = 0;
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();
    frameCount++;

    // Smooth mouse follow
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Core rotation + mouse influence
    coreGroup.rotation.y = elapsed * CONFIG.rotationSpeed * 50 + mouse.x * CONFIG.mouseInfluence;
    coreGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.1 + mouse.y * CONFIG.mouseInfluence * 0.5;

    // Core wireframe subtle rotation
    coreMesh.rotation.x = elapsed * 0.15;
    coreMesh.rotation.z = elapsed * 0.1;

    // Inner glow pulse
    const glowScale = 1 + Math.sin(elapsed * 1.5) * 0.1;
    innerGlow.scale.set(glowScale, glowScale, glowScale);
    innerGlow.material.opacity = 0.12 + Math.sin(elapsed * 2) * 0.05;

    // Halo pulse
    const haloScale = 1 + Math.sin(elapsed * 0.8) * 0.05;
    halo.scale.set(haloScale, haloScale, haloScale);

    // Ring rotation
    rings.forEach((ring, i) => {
      ring.rotation.z = elapsed * (0.05 + i * 0.02) * (i % 2 === 0 ? 1 : -1);
    });

    // Particle movement
    const positions = particleGeometry.attributes.position.array;
    for (let i = 0; i < CONFIG.particleCount; i++) {
      positions[i * 3] += particleVelocities[i].x;
      positions[i * 3 + 1] += particleVelocities[i].y;
      positions[i * 3 + 2] += particleVelocities[i].z;

      // Keep particles within bounds
      const dist = Math.sqrt(
        positions[i * 3] ** 2 + positions[i * 3 + 1] ** 2 + positions[i * 3 + 2] ** 2
      );

      if (dist > 4.0 || dist < 0.8) {
        particleVelocities[i].x *= -1;
        particleVelocities[i].y *= -1;
        particleVelocities[i].z *= -1;
      }
    }
    particleGeometry.attributes.position.needsUpdate = true;

    // Update connections every 30 frames for performance
    if (frameCount % 30 === 0) {
      updateConnections();
    }

    // Orbital element positions
    orbitalSprites.forEach((sprite) => {
      const d = sprite.userData;
      const angle = d.baseAngle + elapsed * 0.15;
      sprite.position.x = Math.cos(angle) * d.orbitRadius;
      sprite.position.z = Math.sin(angle) * d.orbitRadius * 0.4;
      sprite.position.y = d.yOffset + Math.sin(elapsed * 0.5 + d.baseAngle) * 0.2;
    });

    // Pulse nodes on rings
    pulseNodes.forEach((node) => {
      const d = node.userData;
      const ring = rings[d.ringIndex];
      const angle = d.angle + elapsed * d.speed;
      const r = 2.0 + d.ringIndex * 0.8;

      // Rotate on the ring plane
      const localX = Math.cos(angle) * r;
      const localY = Math.sin(angle) * r;

      node.position.set(localX, localY, 0);
      node.position.applyEuler(ring.rotation);

      // Pulse opacity
      node.material.opacity = 0.3 + Math.sin(elapsed * 2 + d.angle) * 0.4;
    });

    renderer.render(scene, camera);
  }

  // Initial connection build
  updateConnections();

  // Start animation
  animate();

  // --- Resize ---
  function onResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', onResize);

  // --- Reduced Motion ---
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Stop animation, render single frame
    renderer.render(scene, camera);
  }

})();