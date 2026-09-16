/**
 * MAHESH AMBULANCE SERVICE - CORE JAVASCRIPT
 * Location: Hyderabad, Telangana, India
 * Phone: 7075918108
 * Email: madagonisrisailam353@gmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initFaqAccordion();
  initGallery();
  initTestimonialSlider();
  initForms();
  initBackToTop();
  updateCurrentYear();
  highlightActiveNav();
});

/* ==========================================================================
   1. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION & DRAWER ACCORDION
   ========================================================================== */
function initMobileNavigation() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const drawerClose = document.querySelector('.mobile-drawer-close');
  const accordionToggle = document.querySelector('.mobile-accordion-toggle');
  const accordionContent = document.querySelector('.mobile-accordion-content');

  if (!mobileToggle || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Mobile Dropdown Accordion
  if (accordionToggle && accordionContent) {
    accordionToggle.addEventListener('click', (e) => {
      e.preventDefault();
      accordionContent.classList.toggle('open');
      const arrow = accordionToggle.querySelector('.dropdown-arrow');
      if (arrow) {
        arrow.style.transform = accordionContent.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }
}

/* ==========================================================================
   3. ACTIVE NAVIGATION HIGHLIGHTING
   ========================================================================== */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .mega-item, .mobile-accordion-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordion items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBody = other.querySelector('.faq-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   5. GALLERY FILTER & LIGHTBOX
   ========================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox-modal');
  if (!galleryItems.length) return;

  // Filter Categories
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach((item) => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox functionality
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  let visibleItems = [];

  const updateVisibleItems = () => {
    visibleItems = Array.from(galleryItems).filter((item) => item.style.display !== 'none');
  };

  const showLightboxImage = (index) => {
    updateVisibleItems();
    if (!visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    currentIndex = index;
    const currentItem = visibleItems[currentIndex];
    const img = currentItem.querySelector('img');
    const caption = currentItem.querySelector('.gallery-caption');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Ambulance Photo';
    lightboxCaption.textContent = caption ? caption.textContent : img.alt;
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      updateVisibleItems();
      const index = visibleItems.indexOf(item);
      if (index !== -1) {
        showLightboxImage(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showLightboxImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showLightboxImage(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightboxImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showLightboxImage(currentIndex + 1);
  });
}

/* ==========================================================================
   6. TESTIMONIAL SLIDER
   ========================================================================== */
function initTestimonialSlider() {
  const track = document.querySelector('.testimonials-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!track || !slides.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  };

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideTimer = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
  };

  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

/* ==========================================================================
   7. FORM VALIDATION & MODAL CONFIRMATION
   ========================================================================== */
function initForms() {
  const forms = document.querySelectorAll('form[data-validate]');
  const modal = document.querySelector('.modal-backdrop');
  const modalClose = document.querySelector('.modal-close');

  if (modal && modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach((input) => {
        const val = input.value.trim();
        let fieldValid = true;

        if (!val) {
          fieldValid = false;
        } else if (input.type === 'tel') {
          // Indian phone regex: 10 digits
          const cleanPhone = val.replace(/[\s\-\+\(\)]/g, '');
          if (!/^\d{10,12}$/.test(cleanPhone)) {
            fieldValid = false;
          }
        } else if (input.type === 'email') {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            fieldValid = false;
          }
        }

        if (!fieldValid) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }

        input.addEventListener('input', () => input.classList.remove('is-invalid'), { once: true });
      });

      if (isValid) {
        // Show confirmation modal
        if (modal) {
          const formType = form.getAttribute('data-form-type') || 'request';
          const modalMsg = modal.querySelector('.modal-message');
          if (modalMsg) {
            modalMsg.innerHTML = `Your ${formType} has been received.<br><strong>For immediate assistance, please call <a href="tel:+917075918108" style="color:#E63946;font-weight:bold;">7075918108</a>.</strong>`;
          }
          modal.classList.add('active');
        } else {
          alert('Your request has been received. For immediate assistance, please call 7075918108.');
        }
        form.reset();
      }
    });
  });
}

/* ==========================================================================
   8. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   9. DYNAMIC COPYRIGHT YEAR
   ========================================================================== */
function updateCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear >= 2026 ? currentYear : '2026';
  });
}
