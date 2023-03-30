const modalElement = document.getElementById("genericModal");
const mensajeModal = document.getElementById("genericModalMessage");

function mostrarModal(mensaje) {
    const modal = new bootstrap.Modal(document.getElementById("genericModal"));
    const mensajeModal = document.getElementById("genericModalMessage");
    mensajeModal.innerText = mensaje;
    modal.show();
}

// Escuchar el evento click en el botón de confirmación
const confirmBtn = document.getElementById("saveButton");
confirmBtn.addEventListener("click", (e) => {
    const formulario = document.getElementById("formtask");
    const inputsRequeridos = formulario.querySelectorAll("[required]");
    let valido = true;

    for (let i = 0; i < inputsRequeridos.length; i++) {
        if (!inputsRequeridos[i].value) {
            valido = false;
            break;
        }
    }

    if (valido) {
        e.preventDefault();
        const name = document.getElementById("nombreTarea").value;
        const initTime = document.getElementById("horaInicio").value;
        const description = document.getElementById("descripcion").value;

        // Expresión regular para validar el nombre de tarea
        const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
        if (!nameRegex.test(name)) {
            mostrarModal("Por favor ingrese solo letras.");
            return;
        }

        // Expresión regular para validar la hora de inicio
        const initTimeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!initTimeRegex.test(initTime)) {
            mostrarModal("Por favor ingrese una hora de inicio válida en formato de 24 horas (por ejemplo, 09:30).");
            return;
        }

        // Expresión regular para validar la descripción
        const descriptionRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
        if (!descriptionRegex.test(description)) {
            mostrarModal("Por favor ingrese solo letras.");
            return;
        }

        // Aquí puedes agregar el código para guardar la tarea

    } else {
        mostrarModal("Faltan campos por completar");
    }
});

