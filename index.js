// Get all the navbar links
const navLinks = document.querySelectorAll("nav ul li a");

// Loop through each link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // First remove the active class from all links
    navLinks.forEach((nav) => nav.classList.remove("text-cyan-400"));

    // Add the active class to the clicked link
    link.classList.add("text-cyan-400");
  });
});
