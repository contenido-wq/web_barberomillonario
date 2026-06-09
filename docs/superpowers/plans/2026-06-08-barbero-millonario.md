# Barbero Millonario Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una landing page estática de una sola página para el barbero a domicilio "Barbero Millonario" con botón flotante de WhatsApp, sección de reseñas de Google y diseño premium oscuro/dorado.

**Architecture:** Un solo `index.html` con `styles.css` y `script.js` separados. Sin frameworks ni build tools. Imágenes de Unsplash vía URL directa. Desplegable en cualquier hosting estático.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, scroll-snap), JavaScript vanilla ES6+, Google Fonts (Montserrat)

---

## File Structure

```
web_barberomillonario/
├── index.html          # Toda la estructura HTML de la página
├── styles.css          # Variables CSS, reset, componentes, responsive
├── script.js           # Navbar scroll, hamburger menu
└── assets/
    └── logo-bm.jpg     # Logo proporcionado por el cliente
```

---

## Task 1: Setup del Proyecto

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `assets/` (directorio)

- [ ] **Step 1: Copiar el logo al proyecto**

```bash
mkdir -p assets
cp /tmp/brand.jpg assets/logo-bm.jpg
```

- [ ] **Step 2: Crear `index.html` con estructura base**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Barbero Millonario — El lujo de una barbería premium, en tu casa. Servicio a domicilio en Colombia." />
  <title>Barbero Millonario</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <!-- Contenido se agrega en tasks siguientes -->
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Crear `styles.css` con variables y reset**

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0D0D0D;
  --bg-surface: #1A1A1A;
  --bg-surface-2: #222222;
  --gold: #C8962C;
  --gold-light: #F5D06A;
  --gold-dark: #9A6E18;
  --white: #FFFFFF;
  --text-muted: #999999;
  --font: 'Montserrat', sans-serif;
  --radius: 12px;
  --transition: 0.3s ease;
  --max-width: 1200px;
  --section-padding: 100px 24px;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--white);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--white);
  margin-bottom: 16px;
}

.section-title span {
  color: var(--gold);
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 64px;
  max-width: 500px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: var(--radius);
  font-family: var(--font);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  text-decoration: none;
}

.btn-gold {
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #0D0D0D;
}

.btn-gold:hover {
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(200, 150, 44, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 2px solid var(--gold);
}

.btn-outline:hover {
  background: var(--gold);
  color: #0D0D0D;
}
```

- [ ] **Step 4: Crear `script.js` vacío con estructura**

```js
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll behavior — se implementa en Task 2
  // Hamburger menu — se implementa en Task 2
});
```

- [ ] **Step 5: Crear el directorio assets y verificar el logo**

```bash
ls assets/
# Debe mostrar: logo-bm.jpg
```

- [ ] **Step 6: Commit inicial**

```bash
git add .
git commit -m "feat: setup inicial del proyecto Barbero Millonario"
```

---

## Task 2: Navbar

**Files:**
- Modify: `index.html` — agregar `<nav>`
- Modify: `styles.css` — agregar estilos de navbar
- Modify: `script.js` — agregar lógica de scroll y hamburger

- [ ] **Step 1: Agregar HTML del navbar dentro de `<body>` antes del script**

```html
<nav class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="#hero" class="navbar__logo">
      <img src="assets/logo-bm.jpg" alt="Barbero Millonario" width="52" height="52" />
    </a>

    <ul class="navbar__links" id="navLinks">
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#por-que">¿Por qué nosotros?</a></li>
      <li><a href="#resenas">Reseñas</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>

    <a href="https://wa.me/573242824201?text=Hola%2C%20quiero%20agendar%20una%20cita" 
       class="btn btn-gold navbar__cta" 
       target="_blank" 
       rel="noopener noreferrer">
      Agendar cita
    </a>

    <button class="navbar__hamburger" id="hamburger" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
```

- [ ] **Step 2: Agregar CSS del navbar en `styles.css`**

```css
/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: background var(--transition), padding var(--transition);
}

.navbar.scrolled {
  background: rgba(13, 13, 13, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  border-bottom: 1px solid rgba(200, 150, 44, 0.2);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.navbar__logo img {
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--gold);
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.navbar__links a {
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--white);
  transition: color var(--transition);
  position: relative;
}

.navbar__links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: width var(--transition);
}

.navbar__links a:hover {
  color: var(--gold);
}

.navbar__links a:hover::after {
  width: 100%;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__hamburger span {
  display: block;
  width: 26px;
  height: 2px;
  background: var(--white);
  transition: var(--transition);
}

/* Hamburger open state */
.navbar__hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger.open span:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
@media (max-width: 768px) {
  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition);
    z-index: 999;
  }

  .navbar__links.open {
    opacity: 1;
    pointer-events: all;
  }

  .navbar__links a {
    font-size: 1.5rem;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
    z-index: 1001;
  }
}
```

- [ ] **Step 3: Agregar lógica JS en `script.js`**

```js
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Navbar scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Cerrar menu al hacer click en un link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});
```

- [ ] **Step 4: Verificar en el navegador**

Abrir `index.html` en el navegador. Verificar:
- El navbar se ve fijo arriba
- Al hacer scroll, toma fondo oscuro
- En móvil (DevTools < 768px), aparece el ícono hamburger y el menú se abre/cierra

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: navbar con scroll behavior y hamburger responsive"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` — agregar sección `#hero`
- Modify: `styles.css` — agregar estilos del hero

- [ ] **Step 1: Agregar HTML del hero en `index.html` (después del `<nav>`)**

```html
<section class="hero" id="hero">
  <div class="hero__bg"></div>
  <div class="hero__overlay"></div>
  <div class="container hero__content">
    <div class="hero__text">
      <p class="hero__eyebrow">Servicio a domicilio</p>
      <h1 class="hero__title">
        BARBERO<br />
        <span>MILLONARIO</span>
      </h1>
      <p class="hero__subtitle">
        El lujo de una barbería premium, en tu casa.<br />
        Agenda tu cita y nosotros llegamos donde estés.
      </p>
      <div class="hero__actions">
        <a href="https://wa.me/573242824201?text=Hola%2C%20quiero%20agendar%20una%20cita"
           class="btn btn-gold"
           target="_blank"
           rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.529 5.847L0 24l6.302-1.499A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.18-1.355l-.37-.217-3.742.89.924-3.65-.24-.383A9.96 9.96 0 012 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
          </svg>
          Agendar por WhatsApp
        </a>
        <a href="#servicios" class="btn btn-outline">
          Ver servicios
        </a>
      </div>
    </div>
    <div class="hero__image-wrap">
      <img 
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop" 
        alt="Barbero profesional realizando un corte de cabello"
        class="hero__image"
      />
    </div>
  </div>
  <div class="hero__scroll-indicator">
    <span></span>
  </div>
</section>
```

- [ ] **Step 2: Agregar CSS del hero en `styles.css`**

```css
/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 70% 50%, rgba(200, 150, 44, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 10% 80%, rgba(200, 150, 44, 0.06) 0%, transparent 50%),
    var(--bg);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8962C' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero__content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  z-index: 1;
}

.hero__eyebrow {
  display: inline-block;
  background: rgba(200, 150, 44, 0.15);
  border: 1px solid rgba(200, 150, 44, 0.4);
  color: var(--gold);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.hero__title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-bottom: 24px;
}

.hero__title span {
  color: var(--gold);
  display: block;
  -webkit-text-stroke: 2px var(--gold);
}

.hero__subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 420px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero__image-wrap {
  position: relative;
}

.hero__image-wrap::before {
  content: '';
  position: absolute;
  inset: -20px;
  border: 2px solid rgba(200, 150, 44, 0.2);
  border-radius: var(--radius);
  transform: rotate(3deg);
}

.hero__image-wrap::after {
  content: '';
  position: absolute;
  bottom: -12px;
  right: -12px;
  width: 60%;
  height: 60%;
  background: linear-gradient(135deg, var(--gold), transparent);
  opacity: 0.15;
  border-radius: var(--radius);
}

.hero__image {
  width: 100%;
  height: 540px;
  object-fit: cover;
  border-radius: var(--radius);
  position: relative;
  z-index: 1;
  filter: grayscale(20%);
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__scroll-indicator span {
  display: block;
  width: 2px;
  height: 48px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollPulse 2s ease infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.3; transform: scaleY(0.5); }
}

@media (max-width: 768px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__subtitle {
    margin: 0 auto 40px;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__image-wrap {
    display: none;
  }

  .hero__bg {
    background:
      radial-gradient(ellipse at 50% 30%, rgba(200, 150, 44, 0.15) 0%, transparent 60%),
      var(--bg);
  }
}
```

- [ ] **Step 3: Verificar en el navegador**

Abrir `index.html`. Verificar:
- El hero ocupa toda la pantalla
- El título "BARBERO MILLONARIO" con la segunda línea en dorado
- Los dos botones visibles
- La imagen de stock carga desde Unsplash
- En móvil, la imagen se oculta y el texto queda centrado

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: hero section con imagen de stock y CTA de WhatsApp"
```

---

## Task 4: Sección de Servicios

**Files:**
- Modify: `index.html` — agregar sección `#servicios`
- Modify: `styles.css` — agregar estilos de servicios

- [ ] **Step 1: Agregar HTML de servicios en `index.html` (después del hero)**

```html
<section class="services" id="servicios">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Nuestros <span>Servicios</span></h2>
      <p class="section-subtitle">Atención de nivel premium en la comodidad de tu hogar</p>
    </div>
    <div class="services__grid">

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/><path d="M14.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/><path d="M2 12s3-2 7-2 7 2 7 2"/><path d="M9 12v9"/><path d="M15 12v9"/>
          </svg>
        </div>
        <span class="service-card__badge">A domicilio</span>
        <h3 class="service-card__name">Corte de Cabello</h3>
        <p class="service-card__desc">Estilos modernos y clásicos con técnicas de precisión adaptadas a tu tipo de cabello.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
          </svg>
        </div>
        <span class="service-card__badge">A domicilio</span>
        <h3 class="service-card__name">Arreglo de Barba</h3>
        <p class="service-card__desc">Perfilado, degradado y definición de barba para un look impecable y profesional.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <span class="service-card__badge">A domicilio</span>
        <h3 class="service-card__name">Afeitado Clásico</h3>
        <p class="service-card__desc">Experiencia de barbería tradicional con navaja y toalla caliente para un acabado perfecto.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-3 6-3 6 3 9 3 3-3 6-3"/><path d="M2 12s3 3 6 3 6-3 9-3 3 3 6 3"/>
          </svg>
        </div>
        <span class="service-card__badge">A domicilio</span>
        <h3 class="service-card__name">Diseño de Cejas</h3>
        <p class="service-card__desc">Depilación y diseño preciso para enmarcar tu rostro y potenciar tu expresión natural.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </div>
        <span class="service-card__badge">A domicilio</span>
        <h3 class="service-card__name">Limpieza Facial</h3>
        <p class="service-card__desc">Tratamiento profundo para piel masculina. Limpieza, hidratación y cuidado completo.</p>
      </div>

      <div class="service-card service-card--cta">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        </div>
        <h3 class="service-card__name">¿Otro servicio?</h3>
        <p class="service-card__desc">Consúltanos por WhatsApp y te damos una solución personalizada.</p>
        <a href="https://wa.me/573242824201?text=Hola%2C%20quisiera%20consultar%20por%20un%20servicio"
           class="btn btn-gold"
           target="_blank"
           rel="noopener noreferrer"
           style="margin-top: 16px; font-size: 0.85rem; padding: 10px 20px;">
          Consultar
        </a>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Agregar CSS de servicios en `styles.css`**

```css
/* ===== SERVICIOS ===== */
.services {
  padding: var(--section-padding);
}

.section-header {
  margin-bottom: 64px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 32px 28px;
  position: relative;
  transition: var(--transition);
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 0;
  transition: opacity var(--transition);
}

.service-card:hover {
  border-color: rgba(200, 150, 44, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card--cta {
  background: linear-gradient(135deg, rgba(200, 150, 44, 0.1), rgba(200, 150, 44, 0.05));
  border-color: rgba(200, 150, 44, 0.3);
}

.service-card__icon {
  width: 60px;
  height: 60px;
  background: rgba(200, 150, 44, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  margin-bottom: 20px;
}

.service-card__badge {
  display: inline-block;
  background: rgba(200, 150, 44, 0.15);
  color: var(--gold);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  margin-bottom: 12px;
}

.service-card__name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.service-card__desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Verificar en el navegador**

Verificar:
- Grid de 3 columnas en desktop
- Hover levanta las tarjetas con línea dorada arriba
- Badge "A domicilio" en cada servicio
- La tarjeta CTA tiene el botón de WhatsApp
- Responsive a 2 y 1 columna

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: sección de servicios con 5 servicios + tarjeta CTA"
```

---

## Task 5: Sección "¿Por Qué Nosotros?"

**Files:**
- Modify: `index.html` — agregar sección `#por-que`
- Modify: `styles.css` — agregar estilos

- [ ] **Step 1: Agregar HTML (después de servicios)**

```html
<section class="why-us" id="por-que">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">¿Por qué <span>elegirnos?</span></h2>
      <p class="section-subtitle">No somos una barbería más. Somos tu barbería.</p>
    </div>
    <div class="why-us__grid">

      <div class="why-card">
        <div class="why-card__number">01</div>
        <div class="why-card__icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h3 class="why-card__title">Servicio a Domicilio</h3>
        <p class="why-card__desc">Vamos donde estés — tu hogar, oficina o donde prefieras. Sin desplazamientos, sin esperas. El lujo llega a ti.</p>
      </div>

      <div class="why-card why-card--featured">
        <div class="why-card__number">02</div>
        <div class="why-card__icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <h3 class="why-card__title">Calidad Premium</h3>
        <p class="why-card__desc">Técnicas profesionales, productos de alto nivel y la experiencia de una barbería de lujo en cada servicio.</p>
      </div>

      <div class="why-card">
        <div class="why-card__number">03</div>
        <div class="why-card__icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h3 class="why-card__title">A Tu Hora</h3>
        <p class="why-card__desc">Agenda en el horario que más te convenga. Somos flexibles porque tu tiempo es valioso y lo respetamos.</p>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Agregar CSS en `styles.css`**

```css
/* ===== POR QUÉ NOSOTROS ===== */
.why-us {
  padding: var(--section-padding);
  background: var(--bg-surface);
  position: relative;
  overflow: hidden;
}

.why-us::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(200, 150, 44, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.why-us__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.why-card {
  background: var(--bg);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 40px 32px;
  position: relative;
  transition: var(--transition);
}

.why-card--featured {
  background: linear-gradient(135deg, #1C1400, #0D0D0D);
  border-color: rgba(200, 150, 44, 0.4);
  transform: scale(1.04);
  box-shadow: 0 20px 60px rgba(200, 150, 44, 0.15);
}

.why-card:hover {
  transform: translateY(-4px);
  border-color: rgba(200, 150, 44, 0.3);
}

.why-card--featured:hover {
  transform: scale(1.04) translateY(-4px);
}

.why-card__number {
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(200, 150, 44, 0.12);
  line-height: 1;
  margin-bottom: 16px;
  font-variant-numeric: tabular-nums;
}

.why-card__icon {
  color: var(--gold);
  margin-bottom: 20px;
}

.why-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.why-card__desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .why-us__grid {
    grid-template-columns: 1fr;
  }

  .why-card--featured {
    transform: none;
  }

  .why-card--featured:hover {
    transform: translateY(-4px);
  }
}
```

- [ ] **Step 3: Verificar en el navegador**

Verificar:
- 3 tarjetas en fila, la del centro destacada en dorado
- Números grandes en fondo translúcido
- Responsive a 1 columna en móvil

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: sección por qué elegirnos con 3 pilares"
```

---

## Task 6: Sección de Reseñas de Google

**Files:**
- Modify: `index.html` — agregar sección `#resenas`
- Modify: `styles.css` — agregar estilos de reseñas

- [ ] **Step 1: Agregar HTML (después de "por qué nosotros")**

```html
<section class="reviews" id="resenas">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Lo que dicen <span>nuestros clientes</span></h2>
      <p class="section-subtitle">Reseñas reales de clientes satisfechos en Google</p>
    </div>

    <div class="reviews__grid">

      <div class="review-card">
        <div class="review-card__header">
          <div class="review-card__avatar">C</div>
          <div>
            <div class="review-card__name">Carlos M.</div>
            <div class="review-card__stars">★★★★★</div>
          </div>
          <div class="review-card__google">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <p class="review-card__text">"Increíble experiencia. El barbero llegó puntual, con todos sus instrumentos y el resultado quedó perfecto. Definitivamente es lo mejor del servicio a domicilio."</p>
        <div class="review-card__date">Hace 2 semanas</div>
      </div>

      <div class="review-card">
        <div class="review-card__header">
          <div class="review-card__avatar">A</div>
          <div>
            <div class="review-card__name">Andrés R.</div>
            <div class="review-card__stars">★★★★★</div>
          </div>
          <div class="review-card__google">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <p class="review-card__text">"El afeitado clásico fue una experiencia de lujo. Toalla caliente, navaja precisa, productos de calidad. No esperaba menos del Barbero Millonario."</p>
        <div class="review-card__date">Hace 1 mes</div>
      </div>

      <div class="review-card">
        <div class="review-card__header">
          <div class="review-card__avatar">J</div>
          <div>
            <div class="review-card__name">Julián P.</div>
            <div class="review-card__stars">★★★★★</div>
          </div>
          <div class="review-card__google">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <p class="review-card__text">"El corte quedó espectacular. Me recomendó el estilo que mejor me iba según mi tipo de cara. Eso es profesionalismo de alto nivel. 100% recomendado."</p>
        <div class="review-card__date">Hace 3 semanas</div>
      </div>

      <div class="review-card">
        <div class="review-card__header">
          <div class="review-card__avatar">D</div>
          <div>
            <div class="review-card__name">Diego V.</div>
            <div class="review-card__stars">★★★★★</div>
          </div>
          <div class="review-card__google">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <p class="review-card__text">"La limpieza facial fue un antes y un después para mi piel. No sabía que los hombres también necesitamos esto. Servicio profesional y muy cómodo en casa."</p>
        <div class="review-card__date">Hace 2 meses</div>
      </div>

    </div>

    <div class="reviews__cta">
      <a href="https://maps.app.goo.gl/4Wvz4KMFiDf2YwYk8"
         class="btn btn-outline"
         target="_blank"
         rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Ver todas las reseñas en Google
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Agregar CSS en `styles.css`**

```css
/* ===== RESEÑAS ===== */
.reviews {
  padding: var(--section-padding);
  background: var(--bg);
}

.reviews__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

.review-card {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 28px;
  transition: var(--transition);
}

.review-card:hover {
  border-color: rgba(200, 150, 44, 0.2);
  transform: translateY(-2px);
}

.review-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.review-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: #0D0D0D;
  font-weight: 900;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.review-card__name {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.review-card__stars {
  color: var(--gold);
  font-size: 0.85rem;
  letter-spacing: 2px;
}

.review-card__google {
  margin-left: auto;
  opacity: 0.6;
}

.review-card__text {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 16px;
}

.review-card__date {
  font-size: 0.75rem;
  color: rgba(153,153,153,0.6);
}

.reviews__cta {
  text-align: center;
}

@media (max-width: 768px) {
  .reviews__grid {
    grid-template-columns: 1fr;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
```

- [ ] **Step 3: Verificar en el navegador**

Verificar:
- Grid de 2 columnas con 4 reseñas
- Avatar con inicial en dorado
- Estrellas doradas
- Logo de Google en cada tarjeta
- Botón "Ver todas en Google" con enlace correcto

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: sección de reseñas con 4 reseñas placeholder y link a Google"
```

---

## Task 7: CTA Final + Footer + Botón Flotante WhatsApp

**Files:**
- Modify: `index.html` — agregar CTA, footer y botón flotante
- Modify: `styles.css` — agregar estilos

- [ ] **Step 1: Agregar HTML del CTA final, footer y botón flotante**

```html
<!-- CTA Final -->
<section class="cta-final" id="contacto">
  <div class="cta-final__bg"></div>
  <div class="container cta-final__content">
    <div class="cta-final__text">
      <h2 class="cta-final__title">¿LISTO PARA<br /><span>EL CAMBIO?</span></h2>
      <p class="cta-final__subtitle">Agenda tu cita ahora y recibe atención premium donde estés. Sin salir de casa.</p>
    </div>
    <a href="https://wa.me/573242824201?text=Hola%2C%20quiero%20agendar%20una%20cita%20con%20Barbero%20Millonario"
       class="btn btn-gold cta-final__btn"
       target="_blank"
       rel="noopener noreferrer">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.529 5.847L0 24l6.302-1.499A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.18-1.355l-.37-.217-3.742.89.924-3.65-.24-.383A9.96 9.96 0 012 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
      </svg>
      Agendar mi cita
    </a>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <img src="assets/logo-bm.jpg" alt="Barbero Millonario" width="48" height="48" />
      <span class="footer__name">Barbero Millonario</span>
    </div>

    <div class="footer__links">
      <a href="#servicios">Servicios</a>
      <a href="#por-que">¿Por qué nosotros?</a>
      <a href="#resenas">Reseñas</a>
      <a href="https://maps.app.goo.gl/4Wvz4KMFiDf2YwYk8" target="_blank" rel="noopener noreferrer">Google Maps</a>
    </div>

    <div class="footer__social">
      <!-- Instagram placeholder -->
      <a href="#" class="footer__social-link" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </a>
      <!-- WhatsApp -->
      <a href="https://wa.me/573242824201" class="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.529 5.847L0 24l6.302-1.499A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.18-1.355l-.37-.217-3.742.89.924-3.65-.24-.383A9.96 9.96 0 012 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
        </svg>
      </a>
    </div>
  </div>
  <div class="footer__bottom">
    <p>© 2026 Barbero Millonario. Todos los derechos reservados.</p>
  </div>
</footer>

<!-- Botón flotante WhatsApp -->
<a href="https://wa.me/573242824201?text=Hola%2C%20quiero%20agendar%20una%20cita"
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Contactar por WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.529 5.847L0 24l6.302-1.499A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.18-1.355l-.37-.217-3.742.89.924-3.65-.24-.383A9.96 9.96 0 012 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
  </svg>
  <span class="whatsapp-float__pulse"></span>
</a>
```

- [ ] **Step 2: Agregar CSS en `styles.css`**

```css
/* ===== CTA FINAL ===== */
.cta-final {
  padding: var(--section-padding);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.cta-final__bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at center, rgba(200, 150, 44, 0.1) 0%, transparent 70%),
    var(--bg-surface);
}

.cta-final__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.cta-final__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.1;
}

.cta-final__title span {
  color: var(--gold);
}

.cta-final__subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 480px;
  line-height: 1.7;
}

.cta-final__btn {
  font-size: 1.1rem;
  padding: 18px 40px;
  border-radius: 100px;
}

/* ===== FOOTER ===== */
.footer {
  background: #080808;
  border-top: 1px solid rgba(200, 150, 44, 0.15);
  padding: 48px 0 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer__brand img {
  border-radius: 50%;
  border: 1px solid rgba(200, 150, 44, 0.4);
  object-fit: cover;
}

.footer__name {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
}

.footer__links {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.footer__links a {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color var(--transition);
}

.footer__links a:hover {
  color: var(--gold);
}

.footer__social {
  display: flex;
  gap: 16px;
}

.footer__social-link {
  width: 40px;
  height: 40px;
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: var(--transition);
}

.footer__social-link:hover {
  background: rgba(200, 150, 44, 0.1);
  border-color: var(--gold);
  color: var(--gold);
}

.footer__bottom {
  padding: 20px 24px;
  text-align: center;
}

.footer__bottom p {
  font-size: 0.8rem;
  color: rgba(153,153,153,0.5);
}

/* ===== BOTÓN FLOTANTE WHATSAPP ===== */
.whatsapp-float {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 9999;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: transform var(--transition), box-shadow var(--transition);
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.6);
}

.whatsapp-float__pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #25D366;
  animation: waPulse 2.5s ease infinite;
  z-index: -1;
}

@keyframes waPulse {
  0% { transform: scale(1); opacity: 0.7; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
}

@media (max-width: 600px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .whatsapp-float {
    bottom: 20px;
    right: 20px;
    width: 52px;
    height: 52px;
  }

  .cta-final__btn {
    width: 100%;
    justify-content: center;
  }
}
```

- [ ] **Step 3: Verificar en el navegador**

Verificar:
- CTA final con fondo degradado dorado
- Footer con logo, links y redes sociales
- Botón flotante WhatsApp verde con animación de pulso
- El botón flotante siempre visible en todas las secciones
- Al hacer clic en cualquier botón de WhatsApp, abre el chat correcto

- [ ] **Step 4: Commit final**

```bash
git add index.html styles.css
git commit -m "feat: CTA final, footer y botón flotante de WhatsApp"
```

---

## Task 8: Revisión Final y Entrega

**Files:**
- Review: `index.html`, `styles.css`, `script.js`

- [ ] **Step 1: Revisar todas las secciones en desktop (1280px+)**

Abrir `index.html` y verificar:
- Navbar sticky funciona con scroll
- Hero: imagen + texto + botones correctos
- Servicios: grid 3 columnas, tarjetas con hover
- Por qué nosotros: 3 tarjetas, la del centro destacada
- Reseñas: grid 2 columnas, 4 reseñas
- CTA final: centrado, botón grande dorado
- Footer: logo + links + redes
- Botón flotante WhatsApp: visible y con pulso

- [ ] **Step 2: Revisar en móvil (375px)**

En DevTools (F12 → Responsive, 375px):
- Navbar: solo hamburger visible, menú abre/cierra
- Hero: texto centrado, imagen oculta
- Servicios: 1 columna
- Por qué nosotros: 1 columna
- Reseñas: 1 columna
- Footer: columnas apiladas
- Botón flotante: visible

- [ ] **Step 3: Verificar todos los links de WhatsApp**

Los 4 botones de WhatsApp deben abrir: `https://wa.me/573242824201`
Los botones del navbar, hero, tarjeta CTA de servicios y CTA final.

- [ ] **Step 4: Verificar link de Google Maps**

El botón "Ver todas las reseñas en Google" debe abrir: `https://maps.app.goo.gl/4Wvz4KMFiDf2YwYk8`

- [ ] **Step 5: Commit final del proyecto**

```bash
git add .
git commit -m "feat: landing page Barbero Millonario completa y lista para despliegue"
```

---

## Resultado Esperado

Al finalizar todos los tasks, el directorio tendrá:
```
web_barberomillonario/
├── index.html          # Landing page completa
├── styles.css          # ~500 líneas de CSS
├── script.js           # ~25 líneas de JS
└── assets/
    └── logo-bm.jpg     # Logo del cliente
```

Para desplegar en Netlify: arrastrar la carpeta a [netlify.com/drop](https://app.netlify.com/drop).
Para GitHub Pages: subir al repositorio y activar Pages desde Settings.
