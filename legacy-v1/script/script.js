document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Iniciar cambio automático
    function startInterval() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    // EVENTO DE CLICK EN PUNTOS
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            // Reiniciamos el tiempo para que no cambie justo después de clickear
            clearInterval(slideInterval);
            startInterval();
        });
    });

    startInterval();
});







document.addEventListener('DOMContentLoaded', () => {
    const swiperTestimonios = new Swiper('.testimonial-carousel', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        speed: 900,
        
        // Configuración para que pasen solas
        autoplay: {
            delay: 5000, // 5 segundos
            disableOnInteraction: false, // Sigue funcionando después de usar las flechas
            pauseOnMouseEnter: true, // Se detiene si el usuario pone el mouse encima para leer mejor
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});










const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  speed: 700,

  navigation: {
    nextEl: '.testimonial-next',
    prevEl: '.testimonial-prev',
  },

  pagination: {
    el: '.testimonials-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 40,
    },
  },
});
