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
