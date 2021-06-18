const toggleButton = document.querySelector(".toggle-menu");
const menuMob = document.querySelector("ul");
toggleButton.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-bars");
  e.target.classList.toggle("fa-times");
  menuMob.classList.toggle("menu-mob");
});

document.addEventListener("click", (e) => {
  if (!menuMob.contains(e.target) && e.target != toggleButton) {
    menuMob.classList.remove("menu-mob");
    toggleButton.classList.remove("fa-times");
    toggleButton.classList.add("fa-bars");
  }
});

const scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

const searchButton = document.querySelector(".search-button");
const searchClose = document.querySelector("button.close");
const searchModal = document.querySelector(".search");

searchClose.addEventListener("click", () => {
  searchModal.style.display = "none";
});
searchButton.addEventListener("click", () => {
  searchModal.style.display = "flex";
});
