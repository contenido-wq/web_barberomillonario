(() => {
  const WA_NUMBER = '573242824201';

  const header = document.getElementById('header');
  const dock = document.getElementById('dock');
  const hero = document.getElementById('inicio');
  const booking = document.getElementById('agendar');

  // Header con fondo al hacer scroll
  const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Barra móvil: aparece tras el hero y se oculta sobre la reserva
  const dockState = { hero: true, booking: false };
  const updateDock = () => dock.classList.toggle('is-on', !dockState.hero && !dockState.booking);
  new IntersectionObserver(([e]) => { dockState.hero = e.isIntersecting; updateDock(); }, { threshold: 0.25 }).observe(hero);
  new IntersectionObserver(([e]) => { dockState.booking = e.isIntersecting; updateDock(); }, { threshold: 0.2 }).observe(booking);

  // Reveal al entrar en pantalla
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 70}ms`;
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // Días: hoy + los próximos 6
  const daysEl = document.getElementById('days');
  const fmtWeek = new Intl.DateTimeFormat('es-CO', { weekday: 'short' });
  const fmtMonth = new Intl.DateTimeFormat('es-CO', { month: 'short' });
  const fmtLong = new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    const label = document.createElement('label');
    label.className = 'day';
    label.innerHTML =
      `<input type="radio" name="dia" value="${fmtLong.format(d)}" />` +
      `<span><small>${i === 0 ? 'Hoy' : fmtWeek.format(d).replace('.', '')}</small><b>${d.getDate()}</b><em>${fmtMonth.format(d).replace('.', '')}</em></span>`;
    daysEl.appendChild(label);
  }

  // Elegir servicio desde la lista → marca en la reserva y baja
  const form = document.getElementById('bookForm');
  document.querySelectorAll('.menu__row').forEach((row) => {
    row.addEventListener('click', () => {
      const box = form.querySelector(`input[name="servicio"][value="${row.dataset.service}"]`);
      if (box) box.checked = true;
      booking.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Enviar → WhatsApp con el mensaje armado
  const errorEl = document.getElementById('bookError');
  const showError = (msg) => { errorEl.textContent = msg; errorEl.hidden = false; };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.hidden = true;

    const data = new FormData(form);
    const servicios = data.getAll('servicio');
    const dia = data.get('dia');
    const franja = data.get('franja');
    const nombre = (data.get('nombre') || '').trim();
    const zona = (data.get('zona') || '').trim();

    if (!servicios.length) return showError('Elige al menos un servicio.');
    if (!dia || !franja) return showError('Elige un día y una franja horaria.');
    if (!zona) return showError('Cuéntanos tu ciudad y barrio para saber a dónde ir.');

    const lines = [
      `Hola, soy ${nombre || 'un cliente nuevo'} y quiero agendar una cita a domicilio.`,
      '',
      `Servicio: ${servicios.join(', ')}`,
      `Día: ${dia}`,
      `Franja: ${franja}`,
      `Zona: ${zona}`,
      '',
      '¿Me confirman hora y valor? Gracias.'
    ];
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
})();
