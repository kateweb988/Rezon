document.addEventListener("DOMContentLoaded", () => {
      
    //   let popupBg = document.querySelector('.popup__bg');
    //   let popup = document.querySelector('.popup');
    //   let openPopupButtons = document.querySelectorAll('.open-popup');
    //   let closePopupButton = document.querySelector('.close-popup');
      
    //   openPopupButtons.forEach((button) => {
    //       button.addEventListener('click', (e) => {
    //           e.preventDefault();
    //           popupBg.classList.add('active');
    //           popup.classList.add('active');
    //       })
    //   });
      
    //   closePopupButton.addEventListener('click',() => {
    //       popupBg.classList.remove('active');
    //       popup.classList.remove('active');
    //   });
      
    //   document.addEventListener('click', (e) => {
    //       if(e.target === popupBg) {
    //           popupBg.classList.remove('active');
    //           popup.classList.remove('active');
    //       }
    //   });
    //   let popupBg2 = document.querySelector('.popup__bg2');
    //   let popup2 = document.querySelector('.popup2');
    //   let openPopupButtons2 = document.querySelectorAll('.open-popup2');
    //   let closePopupButton2 = document.querySelector('.close-popup2');
      
    //   openPopupButtons2.forEach((button) => {
    //       button.addEventListener('click', (e) => {
    //           e.preventDefault();
    //           popupBg2.classList.add('active');
    //           popup2.classList.add('active');
    //       })
    //   });
      
    //   closePopupButton2.addEventListener('click',() => {
    //       popupBg2.classList.remove('active');
    //       popup2.classList.remove('active');
    //   });
      
    //   document.addEventListener('click', (e) => {
    //       if(e.target === popupBg2) {
    //           popupBg2.classList.remove('active');
    //           popup2.classList.remove('active');
    //       }
    //   });
      
    //   let popupBg3 = document.querySelector('.popup__bg3');
    //   let popup3 = document.querySelector('.popup3');
    //   let openPopupButtons3 = document.querySelectorAll('.open-popup3');
    //   let closePopupButton3 = document.querySelector('.close-popup3');
      
    //   openPopupButtons3.forEach((button) => {
    //       button.addEventListener('click', (e) => {
    //           e.preventDefault();
    //           popupBg3.classList.add('active');
    //           popup3.classList.add('active');
    //       })
    //   });
      
    //   closePopupButton3.addEventListener('click',() => {
    //       popupBg3.classList.remove('active');
    //       popup3.classList.remove('active');
    //   });
      
    //   document.addEventListener('click', (e) => {
    //       if(e.target === popupBg3) {
    //           popupBg3.classList.remove('active');
    //           popup3.classList.remove('active');
    //       }
    //   });
      
    //   let popupBg4 = document.querySelector('.popup__bg4');
    //   let popup4 = document.querySelector('.popup4');
    //   let openPopupButtons4 = document.querySelectorAll('.open-popup4');
    //   let closePopupButton4 = document.querySelector('.close-popup4');
      
    //   openPopupButtons4.forEach((button) => {
    //       button.addEventListener('click', (e) => {
    //           e.preventDefault();
    //           popupBg4.classList.add('active');
    //           popup4.classList.add('active');
    //       })
    //   });
      
    //   closePopupButton4.addEventListener('click',() => {
    //       popupBg4.classList.remove('active');
    //       popup4.classList.remove('active');
    //   });
      
    //   document.addEventListener('click', (e) => {
    //       if(e.target === popupBg4) {
    //           popupBg4.classList.remove('active');
    //           popup4.classList.remove('active');
    //       }
    //   });
      
    //   let popupBg5 = document.querySelector('.popup__bg5');
    //   let popup5 = document.querySelector('.popup5');
    //   let openPopupButtons5 = document.querySelectorAll('.open-popup5');
    //   let closePopupButton5 = document.querySelector('.close-popup5');
      
    //   openPopupButtons5.forEach((button) => {
    //       button.addEventListener('click', (e) => {
    //           e.preventDefault();
    //           popupBg5.classList.add('active');
    //           popup5.classList.add('active');
    //       })
    //   });
      
    //   closePopupButton5.addEventListener('click',() => {
    //       popupBg5.classList.remove('active');
    //       popup5.classList.remove('active');
    //   });
      
    //   document.addEventListener('click', (e) => {
    //       if(e.target === popupBg5) {
    //           popupBg5.classList.remove('active');
    //           popup5.classList.remove('active');
    //       }
    //   });
});
let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   let arrow = document.querySelectorAll('.arrow');
   for (i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      });
   }
} else {
   body.classList.add('mouse');
}
$('.about__slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/img/svg-sprite.svg#left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/img/svg-sprite.svg#right-arrow"></use></svg></button>',
    responsive: [
       {
          breakpoint: 992,
          settings: {
             infinite: false,
             slidesToShow: 2,
             slidesToScroll: 1,
             arrows: false, 
             dots: true
          }
       },
       {
         breakpoint: 767,
         settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false, 
            dots: true
         }
      },
      {
         breakpoint: 576,
         settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false, 
            dots: true
         }
      }
    ]
 });
 $('.header__slider').slick({
   dots: false,
   infinite: true,
   arrows: true,
   slidesToShow: 1,
   autoplay: true,
   autoplaySpeed: 4500,
   slidesToScroll: 1,
   prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/img/svg-sprite.svg#left-arrow"></use></svg></button>',
   nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/img/svg-sprite.svg#right-arrow"></use></svg></button>',
   responsive: [
      {
         breakpoint: 992,
         settings: {
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4500,
            slidesToScroll: 1,
            arrows: false, 
            dots: true
         }
      }
   ]
});
 // Burger
 $('.menu .button').click(function (event) {
    $(this).toggleClass('active');
    $('.burger').toggleClass('active');
    return false;
 });
 $('.burger li a').click(function(event) {
   $('.menu .button').toggleClass('active');
   $('.burger').toggleClass('active');
   return false;
 });
//  jQuery(function ($) {
//    $(document).mouseup(function (e) { // событие клика по веб-документу
//       var div = $(".burger"); // тут указываем ID элемента
//       if (!div.is(e.target) // если клик был не по нашему блоку
//          && div.has(e.target).length === 0) { // и не по его дочерним элементам
//          div.removeClass("active"); // скрываем его
//       }
//    });
// });
// jQuery(function ($) {
//    $(document).mouseup(function (e) { // событие клика по веб-документу
//       var div = $(".button"); // тут указываем ID элемента
//       if (!div.is(e.target) // если клик был не по нашему блоку
//          && div.has(e.target).length === 0) { // и не по его дочерним элементам
//          div.removeClass("active"); // скрываем его
//       }
//    });
// });