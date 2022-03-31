let tabNavs = document.querySelectorAll(".tablinks");
let tabPanes = document.querySelectorAll(".main-menu__tabcontent");
let openBtn = document.querySelectorAll(".header-menu__button");
let closeBtn = document.querySelectorAll(".menu-header__close");
let menuHeader = document.querySelector(".menu-header");
let body = document.querySelector("body");

window.onload = function () {
  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");
        if (activeTabAttr === contentAttr) {
          console.log(contentAttr);
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      };
    });
  };
  if (window.innerWidth < 547) {
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