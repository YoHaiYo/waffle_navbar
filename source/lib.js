// AOS 이벤트
function aosEvent(){
  AOS.init({
    // offset:300,
    duration:800,
    once: true,
  });
}

// 상단 메뉴 이벤트
function menuEvent(){
  // 기본 변하지않는 변수
  const html = document.querySelector('html');
  const header = document.querySelector('header');

  let menuWrap = document.querySelector('.h_main__wrap');
  let burgerBtn = document.querySelector('.h_mobile__btn');

  menuWrap.addEventListener('mouseover', function(){
    header.setAttribute('data-menu','on');
  });

  menuWrap.addEventListener('mouseout', function(){
    header.removeAttribute('data-menu');
  });

  
  // 상단 메뉴 이벤트 - 모바일
  function mobileEvent(){
    let linkToggle;

    function hideSubMenu() {
      linkToggle = document.querySelectorAll('.h_mo .h_menu__link');
      for (let i = 0; i < linkToggle.length; i++) {
        linkToggle[i].setAttribute('aria-toggle', 'false');
      }
    }
  
    function clickSubMenu() {
      hideSubMenu();
      for (let i = 0; i < linkToggle.length; i++) {
        linkToggle[i].addEventListener('click', function () {
          if (this.getAttribute('aria-toggle') === 'true') {
            hideSubMenu();
          } else {
            hideSubMenu();
            this.setAttribute('aria-toggle', 'true');
          }
        });
      }
    }
  
    clickSubMenu();

    function burgerMaker(event){
      if(event === undefined || event.getAttribute('aria-pressed') === "true"){
        header.setAttribute('data-header-mobile','off');
        burgerBtn.setAttribute('aria-pressed','false');
        hideSubMenu();
      } else {
        burgerBtn.setAttribute('aria-pressed','true');
        header.setAttribute('data-header-mobile','on');
        linkToggle.forEach((link) => {
          link.addEventListener('click', function (event) {
            event.preventDefault();
          });
        });
      }
    }
  
    burgerBtn.addEventListener('click', function(){
      burgerMaker(this);
    });
  }

  mobileEvent();

}

menuEvent();