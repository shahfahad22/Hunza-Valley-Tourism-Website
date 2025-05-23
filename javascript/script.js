document.addEventListener('DOMContentLoaded', () => {
  // Hero Background Image Slider (Home Page)
  const hero = document.querySelector('.hero');
  if (hero) {
    const images = [
      'Images/bg-2.jpg',
      'Images/bg-3.jpg',
      'Images/bg-4.jpg',
      'Images/bg-5.jpg',
      'Images/bg-6.jpg',
      'Images/bg-7.jpg',
      'Images/bg-8.jpg',
    ];
    let current = 0;
    function changeBackground() {
      hero.style.backgroundImage = `url('${images[current]}')`;
      current = (current + 1) % images.length;
    }
    changeBackground();
    setInterval(changeBackground, 5000);
  }

  // Gallery Modal Logic
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  let currentIndex = 0;

  if (galleryItems.length && modal && modalImg && modalDesc) {
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => openModal(index));
    });

    function openModal(index) {
      currentIndex = index;
      const item = galleryItems[index];
      modalImg.src = item.querySelector('img').src;
      modalDesc.textContent = item.dataset.desc;
      modal.style.display = 'flex';
    }

    window.closeModal = function () {
      modal.style.display = 'none';
    }

    window.changeSlide = function (step) {
      currentIndex += step;
      if (currentIndex < 0) currentIndex = galleryItems.length - 1;
      if (currentIndex >= galleryItems.length) currentIndex = 0;
      openModal(currentIndex);
    }
  }

  // Hotel Card Toggle
  document.querySelectorAll('.hotel').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  // Hamburger Menu Toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Scroll Hide/Show Navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('hide'); // Hide on scroll down
      } else {
        navbar.classList.remove('hide'); // Show on scroll up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  // Animate on Scroll (AOS)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
});
