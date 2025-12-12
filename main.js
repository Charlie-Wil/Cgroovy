$(document).ready(function() {

  const navbar = $('#navbar');
  const mobileToggle = $('#mobileToggle');
  const navLinks = $('#navLinks');
  const body = $('body');
  
  let overlay = $('.nav-overlay');
  if (overlay.length === 0) {
    overlay = $('<div class="nav-overlay"></div>').appendTo(body);
  }

  function closeMenu() {
    mobileToggle.removeClass('active');
    navLinks.removeClass('active');
    overlay.removeClass('active');
    body.css('overflow', ''); 
    navLinks.find('.dropdown-container').removeClass('open'); 
  }

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });

  mobileToggle.on('click', function() {
    const isActive = navLinks.hasClass('active');
    if (isActive) {
      closeMenu();
    } else {
      mobileToggle.addClass('active');
      navLinks.addClass('active');
      overlay.addClass('active');
      body.css('overflow', 'hidden'); 
    }
  });

  navLinks.on('click', '.dropdown-container > a', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); 
      $(this).parent().toggleClass('open'); 
    }
  });

  overlay.on('click', closeMenu);
  
  navLinks.find('a').on('click', function(e) {
    const isDropdownToggle = $(this).parent().hasClass('dropdown-container') && window.innerWidth <= 768;
    if (!isDropdownToggle) {
        closeMenu();
    }
  });

  $(window).on('resize', function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });


  let currentlyPlaying = null;
  window.playPause = function(button) {
    if (currentlyPlaying && currentlyPlaying !== button) {
      currentlyPlaying.innerHTML = '▶';
      currentlyPlaying.classList.remove('pulse');
    }

    if (button.innerHTML === '▶') {
      button.innerHTML = '⏸';
      button.classList.add('pulse');
      currentlyPlaying = button;
    } else {
      button.innerHTML = '▶';
      button.classList.remove('pulse');
      currentlyPlaying = null;
    }
  }


  const slider = $('#slider');
  if (slider.length) {
    let slideIndex = 0;

    function slideTo(index) {
        const slideWidth = slider.children().first().outerWidth(true);
        if (!slideWidth) return; 
        const visibleSlides = Math.floor(slider.width() / slideWidth);
        const maxSlides = slider.children().length - visibleSlides;
        slideIndex = Math.max(0, Math.min(index, maxSlides));
        slider.scrollLeft(slideIndex * slideWidth);
    }

    window.slideLeft = function() {
        slideTo(slideIndex - 1);
    }

    window.slideRight = function() {
        slideTo(slideIndex + 1);
    }
    
  
    setInterval(() => {
        const slideWidth = slider.children().first().outerWidth(true);
        if (!slideWidth) return;
        const visibleSlides = Math.floor(slider.width() / slideWidth);
        const maxSlides = slider.children().length - (visibleSlides > 0 ? visibleSlides : 1);
        
        let nextIndex = slideIndex + 1;
        if (nextIndex > maxSlides) {
            nextIndex = 0;
        }
        slideTo(nextIndex);
    }, 5000);

    let touchStartX = 0;
    slider.on('touchstart', (e) => {
        touchStartX = e.touches[0].screenX;
    });

    slider.on('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                slideRight();
            } else {
                slideLeft();
            }
        }
    });
  }
 
  $(document).on('keydown', (e) => {
 
    if (slider.length) {
        if (e.key === 'ArrowLeft') {
          slideLeft();
        } else if (e.key === 'ArrowRight') {
          slideRight();
        }
    }
 
    if (e.key === ' ' && currentlyPlaying) {
      e.preventDefault();
      playPause(currentlyPlaying);
    }
  });

});