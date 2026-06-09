# Barbero Millonario — Landing Page

## Resumen
Landing page de una sola página (HTML + CSS + JS vanilla) para el barbero a domicilio "Barbero Millonario". Sin frameworks, sin build tools. Desplegable directamente en cualquier hosting estático.

---

## Paleta de Colores
| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#0D0D0D` | Fondo principal |
| `--gold` | `#C8962C` | Acento principal, botones, iconos |
| `--gold-light` | `#F5D06A` | Highlights, hover |
| `--white` | `#FFFFFF` | Texto principal |
| `--surface` | `#1A1A1A` | Tarjetas y superficies |
| `--surface-2` | `#222222` | Tarjetas secundarias |

---

## Tipografía
- **Display / Headings:** `Montserrat` (700, 900) — Google Fonts
- **Body:** `Montserrat` (400, 500)

---

## Datos del Cliente
- **Nombre:** Barbero Millonario
- **Logo:** BM monograma dorado metálico (imagen proporcionada)
- **WhatsApp:** +573242824201
- **Google Maps:** https://maps.app.goo.gl/4Wvz4KMFiDf2YwYk8
- **Servicio:** Todo a domicilio
- **Fotos:** Stock por ahora (reemplazables)

---

## Estructura de Secciones

### 1. Navbar
- Logo BM a la izquierda
- Links de navegación: Servicios · ¿Por qué nosotros? · Reseñas · Contacto
- Botón dorado "Agendar cita" que abre WhatsApp
- Sticky con fondo semitransparente al hacer scroll

### 2. Hero
- Imagen de stock de barbero profesional de fondo con overlay oscuro
- Texto principal: `BARBERO` / `MILLONARIO` en bold enorme
- Subtítulo: *"El lujo de una barbería premium, en tu casa."*
- Botón CTA dorado: `Agendar por WhatsApp` → abre `https://wa.me/573242824201`
- Decoración: línea dorada horizontal

### 3. Servicios
- Título de sección: `NUESTROS SERVICIOS`
- Grid de 6 tarjetas (3x2 en desktop, 1 columna en móvil)
- Cada tarjeta: icono SVG dorado + nombre + descripción corta + badge `A domicilio`
- Servicios:
  1. Corte de Cabello
  2. Arreglo de Barba
  3. Afeitado Clásico
  4. Diseño de Cejas
  5. Limpieza Facial
  6. (tarjeta CTA: "¿Otro servicio? Consúltanos")

### 4. ¿Por qué Barbero Millonario?
- Título: `¿POR QUÉ ELEGIRNOS?`
- 3 pilares en tarjetas horizontales con icono dorado:
  1. **Servicio a domicilio** — Vamos donde estés, sin que muevas un dedo
  2. **Calidad premium** — Técnicas profesionales y productos de alto nivel
  3. **A tu hora** — Agenda el horario que más te convenga

### 5. Reseñas de Google
- Título: `LO QUE DICEN NUESTROS CLIENTES`
- 4 tarjetas de reseña estáticas con: avatar (inicial), nombre, estrellas (⭐), fecha, texto
- Datos copiados manualmente del perfil de Google
- Botón dorado al final: `Ver todas las reseñas en Google` → abre Google Maps profile
- Diseño tipo carrusel en móvil (CSS scroll snap)

### 6. CTA Final
- Franja oscura con fondo sutil texturizado
- Texto: `¿LISTO PARA EL CAMBIO?`
- Subtexto: *"Agenda tu cita ahora y recibe atención premium donde estés."*
- Botón grande dorado con icono WhatsApp: `Agendar mi cita`

### 7. Footer
- Logo BM pequeño
- Texto: `© 2026 Barbero Millonario. Todos los derechos reservados.`
- Íconos sociales (placeholders: Instagram, TikTok)
- Link a Google Maps
- Número de WhatsApp

### Botón Flotante WhatsApp
- Fijo en esquina inferior derecha en toda la página
- Ícono WhatsApp verde con pulso de animación
- `z-index` alto para siempre visible
- Enlace: `https://wa.me/573242824201`

---

## Comportamiento Responsive
- **Desktop:** Layout completo, grid 3 columnas en servicios
- **Tablet:** Grid 2 columnas en servicios
- **Móvil:** Todo a 1 columna, navbar colapsa a hamburger, reseñas con scroll horizontal

---

## Archivos
```
web_barberomillonario/
├── index.html        # Todo el HTML
├── styles.css        # Estilos separados
├── script.js         # JS mínimo (navbar scroll, hamburger menu)
└── assets/
    └── logo-bm.jpg   # Logo proporcionado por el cliente
```

---

## Notas Técnicas
- Imágenes de stock desde Unsplash (URLs directas, sin descarga)
- Reseñas de Google: estáticas, actualizables editando el HTML
- Sin dependencias externas excepto Google Fonts
- Accesible: atributos `alt`, contraste WCAG AA en textos principales
