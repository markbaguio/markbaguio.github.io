const toggleButton = document.getElementsByClassName("toggle_button")[0];
const navBarLinks = document.getElementsByClassName("navbar_links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
