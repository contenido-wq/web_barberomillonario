document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  const servicesTrack = document.getElementById('servicesTrack');
  const prevArrow = document.querySelector('.services__arrow--prev');
  const nextArrow = document.querySelector('.services__arrow--next');

  if (servicesTrack && prevArrow && nextArrow) {
    const scrollStep = () => {
      const card = servicesTrack.querySelector('.service-card');
      const gap = parseFloat(getComputedStyle(servicesTrack).gap) || 24;
      return card ? card.getBoundingClientRect().width + gap : 300;
    };

    prevArrow.addEventListener('click', () => {
      servicesTrack.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });

    nextArrow.addEventListener('click', () => {
      servicesTrack.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });

    const updateArrows = () => {
      const maxScroll = servicesTrack.scrollWidth - servicesTrack.clientWidth - 2;
      prevArrow.classList.toggle('is-disabled', servicesTrack.scrollLeft <= 2);
      nextArrow.classList.toggle('is-disabled', servicesTrack.scrollLeft >= maxScroll);
    };

    servicesTrack.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }
});
