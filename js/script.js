$('.select').click(
    function(){
        $('.drop').toggleClass('on')
    }
);

$(".menu__list .menu__group").click(
  function(){
      var $sub = $(this).children(".sub").hasClass("on");
  
      if($sub){
          $(this).children(".sub").stop().slideUp();
          $(this).children(".sub").removeClass("on");
      }else{
          $(this).children(".sub").stop().slideDown();
          $(this).children(".sub").addClass("on");
          $(this).siblings().children(".sub").stop().slideUp();
          $(this).siblings().children(".sub").removeClass("on");
      }
  }
);


(function(){
    'use strict';
  
    class Menu {
      constructor(settings) {
        this.nodeMenu = settings.nodeMenu;
        settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
      }
  
      toggle() {
        return this.nodeMenu.classList.toggle('js-menu_activated');
      }
    }
  
    let nodeMenu = document.querySelector('body');
    
    new Menu({
      nodeMenu: nodeMenu,
      nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
    });
  })();