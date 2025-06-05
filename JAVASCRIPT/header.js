// scroll de header
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("encabezado-principal");
  
    function aplicarScrollHeader() {
      if (window.innerWidth > 900) {
        if (window.scrollY > 0) {
          header.classList.add("header-scroll");
        } else {
          header.classList.remove("header-scroll");
        }
      } else {
        // Limpiar el estilo si baja a móvil o tablet
        header.classList.remove("header-scroll");
      }
    }
  
    window.addEventListener("scroll", aplicarScrollHeader);
    window.addEventListener("resize", aplicarScrollHeader);
  });