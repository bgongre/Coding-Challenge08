let navbar = document.getElementById("nav-color-change");


const addScrollingClass = () => {
  navbar.classList.add("navbar-color-on-scroll");
}

window.addEventListener("scroll", addScrollingClass);
