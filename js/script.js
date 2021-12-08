const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    //  dynamicMainBullets: ?
    /*  type: 'fraction', 
        renderFraction: function(currentClass, totalClass) {
           return 'Photo <span class = "' + currentClass +'"></span>' + ' from ' + '<span class = "' + totalClass +'"></span>';
      } */
    // type: 'progressbar',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Klaviaturani o'ng va chap tugamalarini bossak slider ishlaydi
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    speed: 1500,
    // effect: 'fadeIn',
    // fadeEffect: {
    //     crossFade: true,
    // }
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
  });