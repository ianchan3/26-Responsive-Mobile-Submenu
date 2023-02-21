const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll)
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  closeMenu();
}

const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
}

const closeMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
  subMenuThree.style.transform = "translateX(-100%)";
}

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
menuWrapper.addEventListener("click", closeMenu)


const thirdLink = document.querySelector(".third-link");
const backMenu = document.querySelector(".back-to-menu");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
  menu.style.transform = "translateX(-200%)";
  subMenuThree.style.transform = "translateX(0)";
})

backMenu.addEventListener("click", () => {
  subMenuThree.style.transform = "translateX(-100%)";
  menu.style.transform = "translateX(0)";
})