function menu() {
    const menu = document.getElementById('menu-lateral');
    const fondo = document.getElementById('overlay');
    const boton = document.querySelector('.boton-menu');
  
    boton.classList.add('tocado');
  
    setTimeout(() => {
      menu.classList.toggle('abierto');
      fondo.classList.toggle('activo');
      boton.classList.toggle('oculto');
    }, 100);
  
    setTimeout(() => {
      boton.classList.remove('tocado');
    }, 200);
  }

const botonMenu = document.querySelector('.boton-menu');

botonMenu.addEventListener('touchstart', () => {
  botonMenu.classList.add('tocado');
});

botonMenu.addEventListener('touchend', () => {
  setTimeout(() => {
    botonMenu.classList.remove('tocado');
  }, 150);
});

const enlacesMenu = document.querySelectorAll('.menu-lateral a');

enlacesMenu.forEach(enlace => {
  enlace.addEventListener('touchstart', () => {
    enlace.classList.add('activo');  
  });

  enlace.addEventListener('touchend', () => {
    setTimeout(() => {
      enlace.classList.remove('activo');
    }, 150); 
  });
});

