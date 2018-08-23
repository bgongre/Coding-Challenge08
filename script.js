let navbar = document.getElementById("navbar");


const addScrollingClass = () => {
  navbar.classList.add("navbar-color-on-scroll");
}

window.addEventListener("scroll", addScrollingClass);;
