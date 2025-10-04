// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 100px
window.onscroll = function () {
  scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "flex" : "none";
};

// Scroll to top smoothly when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
