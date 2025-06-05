document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        // Limpiar errores previos
        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        let valid = true;

        // Nombre
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre.length < 3) {
            document.getElementById("error-nombre").textContent = "El nombre debe tener al menos 3 caracteres.";
            valid = false;
        }

        // Teléfono
        const telefono = document.getElementById("telefono").value.trim();
        if (!/^\d{10}$/.test(telefono)) {
            document.getElementById("error-telefono").textContent = "Debe contener exactamente 10 dígitos numéricos.";
            valid = false;
        }

        // Correo
        const correo = document.getElementById("correo").value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            document.getElementById("error-correo").textContent = "Formato de correo no válido.";
            valid = false;
        }

        // Asunto
        const asunto = document.getElementById("asunto").value;
        if (!asunto) {
            document.getElementById("error-asunto").textContent = "Seleccione un asunto.";
            valid = false;
        }

        // Mensaje
        const mensaje = document.getElementById("mensaje").value.trim();
        if (mensaje.length < 10) {
            document.getElementById("error-mensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
            valid = false;
        }

        // Checkbox
        const acepta = document.getElementById("acepto").checked;
        if (!acepta) {
            document.getElementById("error-acepto").textContent = "Debes aceptar la política de privacidad.";
            valid = false;
        }

        if (valid) {
            // Mostrar mensaje
            alert("Formulario enviado correctamente");

            // Vaciar los campos del formulario
            formulario.reset();

            // También puedes limpiar los mensajes de error si deseas
            document.querySelectorAll(".error").forEach(el => el.textContent = "");
        }
    });
});