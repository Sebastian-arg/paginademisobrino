// Navegación suave
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Efecto adicional: Cambiar color de fondo al hacer hover en secciones (relacionado al fútbol)
document.querySelectorAll(".section").forEach((section) => {
  section.addEventListener("mouseenter", () => {
    section.style.backgroundColor = "#222"; // Más claro para simular césped
  });
  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = "#111";
  });
});

// Transiciones de scroll entre secciones
const sections = document.querySelectorAll(".section");
const observerOptions = {
  threshold: 0.5, // Activa cuando el 50% de la sección está visible
  rootMargin: "0px 0px -100px 0px", // Ajusta para activar antes de que salga completamente
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      entry.target.classList.remove("fade-out");
    } else {
      entry.target.classList.add("fade-out");
      entry.target.classList.remove("fade-in");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
