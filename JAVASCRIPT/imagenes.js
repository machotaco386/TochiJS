    // Detectar si el dispositivo es táctil
    const esTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (esTactil) {
        document.querySelectorAll('.imagen-texto').forEach(el => {
            el.addEventListener('click', () => {
                // Quitar clase activa de todas las imágenes
                document.querySelectorAll('.imagen-texto').forEach(e => e.classList.remove('activa'));
                // Activar la que se tocó
                el.classList.add('activa');
            });
        });

        // Cerrar texto si se toca fuera de las imágenes
        document.addEventListener('click', e => {
            if (!e.target.closest('.imagen-texto')) {
                document.querySelectorAll('.imagen-texto').forEach(el => el.classList.remove('activa'));
            }
        });
    }