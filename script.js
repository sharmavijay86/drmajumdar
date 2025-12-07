const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const yearTarget = document.getElementById('year');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.setAttribute('aria-expanded', String(!expanded));
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (typeof Swiper !== 'undefined' && document.querySelector('.review-swiper')) {
  // Swiper instance for testimonial slider
  new Swiper('.review-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
}

if (window.AOS) {
  // Scroll-triggered animations
  AOS.init({
    duration: 700,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic',
  });
}

