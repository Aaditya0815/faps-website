// FAPS Website JavaScript

// Smooth Page Transitions
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

  // Lazy Loading Images
  const lazyImages = document.querySelectorAll("img");
  lazyImages.forEach(img => {
    img.setAttribute("loading", "lazy");
  });

  // Theme Switcher
  const themeButton = document.getElementById("themeButton");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Switch to Dark Mode";
      } else {
        themeButton.textContent = "Switch to Light Mode";
      }
    });
  }
});
