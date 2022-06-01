// const toggleButton = document.getElementsByClassName("toggle_button")[0];
// const navBarLinks = document.getElementsByClassName("navbar_links")[0];

const toggleButton = document.querySelector(".toggle_button");
const navBarLinks = document.querySelector(".navbar_links");

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
