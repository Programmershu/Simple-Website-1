const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");

navBtn.onclick = () => {
  navMenu.classList.toggle("active");
};

// click in window to close nav menu
window.addEventListener("click", function (e) {
  if (!navBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
