class EngineeringCollege {
  constructor() {
    try {
      this.departments = [
        {
          name: "Computer Science Engineering",
          image: "./images/departments/cse.jpg",
          description: "Advanced computing and software development",
          features: ["AI & ML", "Cloud Computing", "Cybersecurity"]
        },
        {
          name: "Mechanical Engineering",
          image: "./images/departments/mech.jpg",
          description: "Modern manufacturing and design",
          features: ["CAD/CAM", "Robotics", "Industrial Automation"]
        },
        {
          name: "Electronics & Communication",
          image: "./images/departments/ece.jpg",
          description: "Next-gen communication systems",
          features: ["VLSI Design", "Embedded Systems", "IoT"]
        },
        {
          name: "Electrical Engineering",
          image: "./images/departments/eee.jpg",
          description: "Power systems and control",
          features: ["Power Electronics", "Smart Grid", "Electric Vehicles"]
        }
      ];

      this.recruiters = [
        { name: "TCS", logo: "./images/companies/tcs.png" },
        { name: "Infosys", logo: "./images/companies/infosys.png" },
        { name: "Wipro", logo: "./images/companies/wipro.png" },
        // Add more companies
      ];

      this.facilities = [
        {
          name: "Central Library",
          icon: "📚",
          description: "Digital library with 50,000+ volumes",
          features: ["24/7 Access", "Digital Catalogs", "Research Journals"]
        },
        {
          name: "Research Labs",
          icon: "🔬",
          description: "State-of-the-art laboratories",
          features: ["AI Lab", "IoT Lab", "Robotics Lab"]
        },
        {
          name: "Innovation Center",
          icon: "💡",
          description: "Startup and innovation hub",
          features: ["Incubation Center", "Mentorship", "Industry Connect"]
        }
      ];

      this.achievements = [
        { title: "NAAC A+ Grade", year: "2023" },
        { title: "NBA Accredited", year: "2022" },
        { title: "Best Engineering College Award", year: "2023" }
      ];

      this.init();
    } catch (error) {
      console.error('Error initializing EngineeringCollege:', error);
    }
  }

  init() {
    // Initialize only if methods exist
    const methods = [
      'initializeMenu',
      'loadDepartments',
      'loadRecruiters',
      'loadFacilities',
      'initializeAnimations',
      'handleFormSubmissions',
      'initializeResponsiveMenu',
      'handleScrollEffects',
      'initializeSlideshow',
      'initializeInfrastructureSlider',
      'initializeAcademicsSlider',
      'initializeAdmissionForm',
      'initializeGallery',
      'initializeRecruitersSlider',
      'initializeGallerySlideshow'
    ];

    methods.forEach(method => {
      if (typeof this[method] === 'function') {
        try {
          this[method]();
        } catch (error) {
          console.error(`Error in ${method}:`, error);
        }
      }
    });
  }

  initializeMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.mobile-overlay');

    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });

      // Close menu when clicking outside
      if (overlay) {
        overlay.addEventListener('click', () => {
          menuBtn.classList.remove('active');
          nav.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
      }
    }
  }

  loadFacilities() {
    const grid = document.querySelector('.facilities-grid');
    if (!grid) return;

    this.facilities.forEach(facility => {
      const card = document.createElement('div');
      card.className = 'facility-card animate-on-scroll';
      card.innerHTML = `
        <div class="facility-icon">${facility.icon}</div>
        <h3>${facility.name}</h3>
        <p>${facility.description}</p>
        <ul class="facility-features">
          ${facility.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      `;
      grid.appendChild(card);
    });
  }

  loadRecruiters() {
    const container = document.querySelector('.company-logos');
    if (!container) return;

    this.recruiters.forEach(company => {
      const logo = document.createElement('div');
      logo.className = 'company-logo animate-on-scroll';
      logo.innerHTML = `
        <img src="${company.logo}" alt="${company.name}" 
             loading="lazy" 
             onerror="this.src='./images/companies/default.png'">
      `;
      container.appendChild(logo);
    });
  }

  handleFormSubmissions() {
    const form = document.getElementById('enquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = 'Sent Successfully!';
        form.reset();
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Enquiry';
        }, 2000);
      }, 1500);
    });
  }

  initializeAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  initializeResponsiveMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.mobile-overlay');
    const links = document.querySelectorAll('.nav-link');

    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu on overlay click
    overlay?.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  }

  handleScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add/remove header shadow
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hide/show header on scroll
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  initializeSlideshow() {
    const slideContainer = document.querySelector('.slideshow .slide-container');
    const slides = document.querySelectorAll('.slideshow .slide');
    const dots = document.querySelector('.slideshow .slide-dots');
    const prevBtn = document.querySelector('.slideshow .slide-btn.prev');
    const nextBtn = document.querySelector('.slideshow .slide-btn.next');
    
    if (!slideContainer || !slides.length || !dots || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    let slideInterval;

    // Clear existing dots first
    dots.innerHTML = '';

    const updateSlides = () => {
      slides.forEach(slide => slide.classList.remove('active'));
      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      
      slides[currentSlide].classList.add('active');
      document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    };

    const goToSlide = (index) => {
      currentSlide = index;
      updateSlides();
      resetInterval();
    };

    const resetInterval = () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    };

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dots.appendChild(dot);
    });

    // Event Listeners
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    // Start slideshow
    resetInterval();
  }

  initializeInfrastructureSlider() {
    const slider = document.querySelector('.infrastructure-slider');
    if (!slider) return;

    const wrapper = slider.querySelector('.slider-wrapper');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Preload images for smoother transitions
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (img) {
        const preloadImg = new Image();
        preloadImg.src = img.src;
      }
    });

    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 3000);
    }

    // Event Listeners
    prevBtn?.addEventListener('click', () => {
      prevSlide();
      clearInterval(slideInterval);
      startSlideshow();
    });

    nextBtn?.addEventListener('click', () => {
      nextSlide();
      clearInterval(slideInterval);
      startSlideshow();
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(slideInterval);
    }, { passive: true });

    slider.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;

      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startSlideshow();
    }, { passive: true });

    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startSlideshow);

    // Start slideshow
    startSlideshow();
  }

  initializeAcademicsSlider() {
    $('.owl-carousel-3col').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
      ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  initializeAdmissionForm() {
    const form = document.getElementById('admissionForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Basic validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');
        } else {
          field.classList.remove('is-invalid');
        }
      });

      // Phone number validation
      const phoneFields = ['p_mob_no', 'whatsapp_No'];
      phoneFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !/^\d{10}$/.test(field.value)) {
          isValid = false;
          field.classList.add('is-invalid');
        }
      });

      // Email validation
      const emailField = document.getElementById('email');
      if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        isValid = false;
        emailField.classList.add('is-invalid');
      }

      if (!isValid) {
        formStatus.innerHTML = '<div class="alert alert-danger">Please fill all required fields correctly.</div>';
        return;
      }

      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Submitting...';

        const formData = new FormData(form);
        
        // Submit to Google Forms
        await fetch(form.action, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        });

        // Show success message
        formStatus.innerHTML = '<div class="alert alert-success">Application submitted successfully!</div>';
        form.reset();

      } catch (error) {
        formStatus.innerHTML = '<div class="alert alert-danger">Error submitting form. Please try again.</div>';
        console.error('Form submission error:', error);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Application';
      }
    });

    // Real-time validation
    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        if (input.value.trim()) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }

  initializeGallery() {
    const slider = document.querySelector('.gallery-slider');
    if (!slider) {
      console.log('Gallery slider not found');
      return;
    }

    const wrapper = slider.querySelector('.slider-wrapper');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    
    if (slides.length === 0) {
      console.log('No slides found');
      return;
    }

    console.log(`Found ${slides.length} slides`);
    
    let currentSlide = 0;
    let slideInterval;

    // Preload and verify images
    slides.forEach((slide, index) => {
      const img = slide.querySelector('img');
      if (img) {
        console.log(`Loading image ${index + 1}: ${img.src}`);
        img.onerror = function() {
          console.error(`Failed to load image: ${img.src}`);
          this.style.backgroundColor = '#f0f0f0';
          this.alt = 'Image not found';
        };
        img.onload = function() {
          console.log(`Successfully loaded image: ${img.src}`);
        };
      }
    });

    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function startSlideshow() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 1000);
    }

    // Event Listeners
    prevBtn?.addEventListener('click', () => {
      prevSlide();
      clearInterval(slideInterval);
      startSlideshow();
    });

    nextBtn?.addEventListener('click', () => {
      nextSlide();
      clearInterval(slideInterval);
      startSlideshow();
    });

    // Initialize
    updateSlider();
    startSlideshow();
  }

  initializeRecruitersSlider() {
    $('.recruiters-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ],
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 3
        },
        768: {
          items: 4
        },
        992: {
          items: 6
        }
      }
    });
  }

  initializeGallerySlideshow() {
    const container = document.querySelector('.gallery-container');
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');
    
    if (!container || !slides.length || !dots || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    let slideInterval;

    // Clear existing dots
    dots.innerHTML = '';

    const updateSlides = () => {
      slides.forEach(slide => slide.classList.remove('active'));
      document.querySelectorAll('.gallery-dot').forEach(dot => dot.classList.remove('active'));
      
      slides[currentSlide].classList.add('active');
      document.querySelectorAll('.gallery-dot')[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    };

    const goToSlide = (index) => {
      currentSlide = index;
      updateSlides();
      resetInterval();
    };

    const resetInterval = () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    };

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('gallery-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dots.appendChild(dot);
    });

    // Event Listeners
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    // Start slideshow
    resetInterval();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    new EngineeringCollege();
  } catch (error) {
    console.error('Error creating EngineeringCollege instance:', error);
  }
});

function updateDateTime() {
  const dateTimeElement = document.getElementById('date_time');
  if (dateTimeElement) {
    const now = new Date();
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
  }
}

// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Department page enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Smooth tab transitions
  const tabs = document.querySelectorAll('.tab-switch');
  tabs.forEach(tab => {
    tab.addEventListener('change', function() {
      const content = this.parentElement.querySelector('.tab-content');
      content.style.maxHeight = content.scrollHeight + 'px';
    });
  });

  // Table responsiveness
  const tables = document.querySelectorAll('.table-bordered');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Handle research link
      if(href === './research.html') {
        return; // Let the default behavior handle this
      }
      
      // Handle all other links
      e.preventDefault();
      
      if(href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if(targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}); 