$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      center: true,
      onTranslate: function(event) {
        // Чередование уровней для каждого элемента
        $('.owl-carousel .owl-item').each(function(index) {
          if ($(this).find('.gallery-block').hasClass('level-1')) {
            $(this).find('.gallery-block').removeClass('level-1').addClass('level-2');
          } else {
            $(this).find('.gallery-block').removeClass('level-2').addClass('level-1');
          }
        });
      }
    });
  });
  
//   EVENTS
let events = document.querySelectorAll('.events-block')

events.forEach(event => {
    event.addEventListener('click', ()=>{
        let isActive = event.classList.contains('events-block--active')

        events.forEach(el =>{
            el.classList.remove('events-block--active')
        });

        if(!isActive){
            event.classList.add('events-block--active')
            document.querySelector('.events-bg').style.height = '880px'
        }else if(isActive){
            document.querySelector('.events-bg').style.height = '784px'
        }

        if (!isActive && window.innerWidth < 1680 && window.innerWidth > 1450) {
          document.querySelector('.events-bg').style.height = '800px';
      } else if (isActive && window.innerWidth < 1680 && window.innerWidth > 1450) {
          document.querySelector('.events-bg').style.height = '700px';
      } else if (!isActive && window.innerWidth < 1450) {
          document.querySelector('.events-bg').style.height = '700px';
      } else if (isActive && window.innerWidth < 1450) {
          document.querySelector('.events-bg').style.height = '620px';
      }

        
    })
});

// Menu
let content = document.querySelector('.content');
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let menuLineOne = document.querySelector('.menu-btn__line1')
let menuLineTwo = document.querySelector('.menu-btn__line2')
let menuLineThree = document.querySelector('.menu-btn__line3')
let menuActive = false;

// Клик по кнопке меню
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  content.classList.toggle('content--active');
  menuLineOne.classList.toggle('menu-btn__line1--active');
  menuLineTwo.classList.toggle('menu-btn__line2--active');
  menuLineThree.classList.toggle('menu-btn__line3--active');
  setTimeout(() => {
    menuActive = menu.classList.contains('menu--active');
  }, 10);
});


// Клик по контенту
content.addEventListener('click', () => {
  if (menuActive) {
    menu.classList.remove('menu--active');
    content.classList.remove('content--active');
    menuLineOne.classList.remove('menu-btn__line1--active')
    menuLineTwo.classList.remove('menu-btn__line2--active')
    menuLineThree.classList.remove('menu-btn__line3--active')
    menuActive = false;
  }
});


// GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline();
  
  document.body.style.overflow = 'hidden';


  timeline.to(".title", {
    duration: 1,
    opacity: 1,
    rotateX: 0,
    ease: "power2.out",
  });

  timeline.to(".title", {
    duration: 1,
    opacity: 0,
    rotateX: -90,
    delay: .5,
    ease: "power2.in",
    onComplete: () => {
      gsap.to(".intro", {
        duration:1,
        opacity: 0,
        onComplete: () => {
          document.querySelector(".intro").style.display = "none";
          document.body.style.overflow = 'auto';
        },
      });
      gsap.from('.start-circle__text',{
        top: 300,
        duration:  1.2,
      });
      gsap.from('.start-circle',{
        top: -1000,
        duration: .8,
      });

      gsap.from('.start-block--left',{
        left: -100,
        duration: .8,
        delay: .2 ,
        opacity:0,
      });
      gsap.from('.start-miniblock--first',{
        right: -100,
        duration: .8,
        delay:.2,
        opacity:0,
      });
      gsap.from('.start-miniblock--second',{
        right: -100,
        duration: .8,
        delay:.4,
        opacity:0,
      });
      gsap.from('.header',{
        top:-100,
        duration: .6,
      });      
    },
  });

  gsap.from(".about-block__title", {
    scrollTrigger: {
      trigger: ".about-info",
      start: "top center",   
      end: "top top",
      once: true,
    },
    top:60,     
    stagger: .2,
    delay:.2,
    ease: "power2.out",
  });
  gsap.from(".about-link", {
    scrollTrigger: {
      trigger: ".about-info",
      start: "top center",  
      end: "top top",
      once: true,
    },
    delay:.6,
    x:-60,     
    duration:.8,    
    stagger: .2,
    ease: "power2.out",
  });

  // gsap.from(".information-title__first", {
  //   scrollTrigger: {
  //     trigger: ".information-title",
  //     start: "top center",   // Когда верх элемента будет на уровне центра экрана
  //     end: "top top",
  //     once: true,
  //   },
  //   opacity:0,
  //   x:-200,  
  //   duration:1,    
  //   delay:.2,
  //   ease: "power2.out",
  // });
  // gsap.from(".information-title__second", {
  //   scrollTrigger: {
  //     trigger: ".information-title",
  //     start: "top center",   // Когда верх элемента будет на уровне центра экрана
  //     end: "top top",
  //     once: true,
  //   },
  //   opacity:0,
  //   x:-600,  
  //   duration:1.5,    
  //   delay:.4,
  //   ease: "power2.out",
  // });
  // gsap.from(".information-title__third", {
  //   scrollTrigger: {
  //     trigger: ".information-title",
  //     start: "top center",   // Когда верх элемента будет на уровне центра экрана
  //     end: "top top",
  //     once: true,
  //   },
  //   opacity:0,
  //   rotateX:900,
  //   x:-200,  
  //   duration:1.5,    
  //   delay:.6,
  //   ease: "power2.out",
  // });
  // gsap.from(".information-text__desc--center", {
  //   duration: 1.5,
  //   opacity: 0,
  //   delay:.8,
  //   x: -100,  
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".information-title",
  //     start: "top center",  
  //     end: "top top",
  //     once: true,
  //   }
  // });
  // gsap.from(".information-text__desc--right", {
  //   duration: 1.5,
  //   delay:1.2,
  //   opacity: 0,
  //   x: 100, 
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".information-title",
  //     start: "top center",  
  //     end: "top top",
  //     once: true,
  //   }
  // });
  // gsap.from(".information-text__desc--bold", {
  //   duration: 1.5,
  //   opacity: 0,
  //   y: 50,  
  //   delay:1.8,
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".information-title",
  //     start: "top center", 
  //     end: "top top",
  //     once: true,
  //   }
  // });

  gsap.to(".section-line", {
    duration: 1.5,
    width: "100%",
    ease: "power2.out",
    delay: .2,
    scrollTrigger: {
      trigger: ".section-title--news",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });
  gsap.to(".news-line", {
    duration: 1.5,
    width: "100%",
    ease: "power2.out",
    delay: .2,
    scrollTrigger: {
      trigger: ".section-title--news",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });

  gsap.to(".subscribe-line", {
    duration: 1.5,
    height:"100%",
    ease: "power2.out",
    delay: .2,
    scrollTrigger: {
      trigger: ".subscribe",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });
  gsap.from(".subscribe-photo--top", {
    duration: 1.5,
    y:200,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".subscribe",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });
  gsap.from(".subscribe-photo--bottom", {
    duration: 1.5,
    y:-200,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".subscribe",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });

  gsap.from(".owl-carousel", {
    duration: 1.5,
    y: 300,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });

  // gsap.from(".footer-social", {
  //   duration: 1.5,
  //   delay:.2,
  //   height:"0px",
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".footer-social",
  //     start: "top center", 
  //     end: "top top",
  //     once: true,
  //   }
  // });
  gsap.from(".footer-img", {
    duration: 1.5,
    delay:.2,
    height:"0px",
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer-img",
      start: "top center", 
      end: "top top",
      once: true,
    }
  });


});
