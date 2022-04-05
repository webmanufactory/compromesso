let menuItemBtn = document.querySelectorAll(".main-menu__item-text");
let menuItemLink = document.querySelectorAll(".main-menu__item-link");
let menuSubnav = document.querySelectorAll(".main-menu__subnav");
let mainMenuNav = document.querySelector(".main-menu__nav");
let openBtn = document.querySelectorAll(".header-menu__button");
let closeBtn = document.querySelectorAll(".menu-header__close");
let menuHeader = document.querySelector(".menu-header");
let body = document.querySelector("body");
let sliderRow = document.querySelectorAll(".slider__row");
let swiperSlide = document.querySelectorAll(".swiper-slide");

window.onload = function () {
  for (let i = 0; i < menuItemLink.length; i++) {
    menuItemLink[i].addEventListener("click", function (e) {
      e.preventDefault();
    })
  }
  if (window.matchMedia("(min-width: 769px)").matches) {
    const mainBar = new SimpleBar(document.getElementById('main-menu'));

    for (let i = 0; i < menuItemBtn.length; i++) {
      menuItemBtn[i].setAttribute('data-tab', [i]);
    }
    for (let i = 0; i < menuSubnav.length; i++) {
      menuSubnav[i].setAttribute('data-tab-content', [i]);
    }

    for (let i = 0; i < menuItemBtn.length; i++) {
      menuItemBtn[i].addEventListener("click", function (e) {
        e.preventDefault();
        mainBar.getScrollElement().scrollTop = 0;
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (let j = 0; j < menuItemBtn.length; j++) {
          let contentAttr = menuSubnav[j].getAttribute("data-tab-content");
          if (activeTabAttr === contentAttr) {
            menuItemBtn[j].classList.add("active");
            menuSubnav[j].classList.add("active");
          } else {
            menuItemBtn[j].classList.remove("active");
            menuSubnav[j].classList.remove("active");
          }
        };
      });
    };
  }

  for (let i = 0; i < sliderRow.length; i++) {
    let row = sliderRow[i].querySelector(".row");
    row.classList.remove("row");
    row.classList.add("swiper-wrapper");
    new Swiper(".slider__row", {
      slidesPerView: "auto",
    });
  }

  if (window.matchMedia("(max-width: 769px)").matches) {
    for (let i = 0; i < menuItemLink.length; i++) {
      menuItemBtn[i].classList.remove("active");
    }
    for (let i = 0; i < menuItemLink.length; i++) {
      menuItemLink[i].setAttribute("data-toggle", "collapse");
      menuItemLink[i].setAttribute("data-target", "#subnav-" + [i]);
    }
    for (let i = 0; i < menuSubnav.length; i++) {
      menuSubnav[i].classList.add("collapse");
      menuSubnav[i].classList.remove("active");
      menuSubnav[i].setAttribute("id", "subnav-" + [i]);
    }
    for (let i = 0; i < openBtn.length; i++) {
      openBtn[i].addEventListener("click", function (e) {
        e.preventDefault();
        menuHeader.classList.add("active");
        body.classList.add("active");
      });
    }
    for (let i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener("click", function (e) {
        e.preventDefault();
        menuHeader.classList.remove("active");
        body.classList.remove("active");
      });
    }
  };
}
var oldWidth = window.innerWidth;
window.onresize = function () {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    location.reload()
  }
};
