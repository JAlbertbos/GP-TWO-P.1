
//Funcion de arrastrar
function allowDrop(event) {
  event.preventDefault();
}
//Funcion de soltar
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var element = document.getElementById(data);
  event.target.appendChild(element);
}

let selectedDay;

// Los botones tienen data-day diferente, y asi puede diferenciar los botones para cuando se clicka.
var buttons = document.querySelectorAll('[data-day]');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    selectedDay = this.getAttribute('data-day');
  });
}
// Obtener info del formulario
const form = document.querySelector('#formtask form');
const nombreTarea = document.querySelector('#nombreTarea');
const descripcion = document.querySelector('#descripcion');
const horaInicio = document.querySelector('#horaInicio');
const horaFinal = document.querySelector('#horaFinal');
const participantes = document.querySelector('#participantes');
const ubicacion = document.querySelector('#ubicacion');
const tareaTerminada = document.querySelector('#tareaTerminada');
const iconoPapelera = document.createElement('i');
iconoPapelera.classList.add('bi', 'bi-trash-fill', 'ms-2', 'eliminar-tarea', 'text-danger');

// Se dispara cuando se le da al boto de submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); //evitar que se refresque la pagina

  // Crea una tarjeta(card, ella bilingüe) con la info del form
  const tarjeta = document.createElement('div');
  const idTarjeta = Date.now().toString(); // Generar un ID único para la tarjeta
  tarjeta.id = `tarjeta-${idTarjeta}`;
  tarjeta.classList.add('card', 'my-3'); //Le da las clases que necesita
  tarjeta.innerHTML = `
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <h5 class="card-title">${nombreTarea.value}</h5>
      <button type="button" data-bs-toggle="modal" data-bs-target="#eliminarTareaModal" class="btn btn-link p-0">${iconoPapelera.outerHTML}</button>
    </div>
    <p class="card-text">${descripcion.value}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Hora de inicio:</strong> ${horaInicio.value}</li>
      <li class="list-group-item"><strong>Hora de final:</strong> ${horaFinal.value}</li>
      <li class="list-group-item"><strong>Participantes:</strong> ${participantes.value}</li>
      <li class="list-group-item"><strong>Ubicación:</strong> ${ubicacion.value}</li>
    </ul>
    <div class="form-check mt-3">
      <input class="form-check-input" type="checkbox" id="tarea-${nombreTarea.value}">
      <label class="form-check-label" for="tarea-${nombreTarea.value}">Tarea terminada</label>
    </div>
  </div>
`;
  tarjeta.setAttribute('draggable', true); //Que se pueda agarrar y mover
  currentSelectedDay = selectedDay;

  //  Hace que las tarjetas puedan ser arrastrables y hace posible moverlas por la página utilizando su ID
  tarjeta.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', this.id);
  });


//Aqui vamos a hacer que diferencie las dropzones mediante los botones  y ponga las cards bien

  let dropzone;
  if (selectedDay) {
    dropzone = document.querySelector(`.contenedor-dia[data-day="${selectedDay}"] .dropzone`);
  }
  if (!dropzone) {
    dropzone = document.querySelector('.zone-bottom');
  }
  dropzone.appendChild(tarjeta);
  //REINICIAR LA VARIABLE!
  selectedDay = undefined;
  //Cuando se pulsa el check box el borde se pone verde
  const checkbox = tarjeta.querySelector('.form-check-input');
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      tarjeta.classList.add('borde-verde');
    } else {
      tarjeta.classList.remove('borde-verde');
    }
  });
  // Cerrar el modal y resetear el formulario
  const modal = bootstrap.Modal.getInstance(document.querySelector('#formtask'));
  modal.hide();
  form.reset();

  // Lapiz edicion
  const botonEditar = tarjeta.querySelector('.editar-tarea');
botonEditar.addEventListener('click', function () {
  // Obtener los elementos del formulario
  const nombreTareaEdit = document.querySelector('#nombreTarea');
  const descripcionEdit = document.querySelector('#descripcion');
  const horaInicioEdit = document.querySelector('#horaInicio');
  const horaFinalEdit = document.querySelector('#horaFinal');
  const participantesEdit = document.querySelector('#participantes');
  const ubicacionEdit = document.querySelector('#ubicacion');
  const tareaTerminadaEdit = document.querySelector('#tareaTerminada');
  

// Seleccionar el botón de la papelera de la tarjeta recién creada
const eliminarTareaBtn = tarjeta.querySelector('.eliminar-tarea');

// Agregar un event listener al botón
eliminarTareaBtn.addEventListener('click', function() {
  // Abrir el modal de eliminación
  const eliminarTareaModal = document.getElementById('eliminarTareaModal');
  eliminarTareaModal.addEventListener('shown.bs.modal', function () {
    // Agregar un event listener al botón de confirmación del modal
    const confirmarEliminacionBtn = document.getElementById('eliminarTareaBotn');
    confirmarEliminacionBtn.addEventListener('click', function() {
      // Eliminar la tarjeta
      tarjeta.remove();

      // Ocultar el modal de eliminación
      const modal = bootstrap.Modal.getInstance(eliminarTareaModal);
      modal.hide();
    });
  });
  bootstrap.Modal.getInstance(eliminarTareaModal).show();
});

});



  // Generar el mensaje de error por falta de campos requeridos
  function mostrarModal(mensaje) {
    const modal = new bootstrap.Modal(document.getElementById("genericModal"));
    const mensajeModal = document.getElementById("genericModalMessage");
    mensajeModal.innerText = mensaje;
    modal.show();
  }

  confirmBtn.addEventListener("click", (e) => {
    var formulario = document.getElementById("taskForm");
    var inputsRequeridos = formulario.querySelectorAll("[required]");
  
    var valido = true;
  
    for (var i = 0; i < inputsRequeridos.length; i++) {
      if (!inputsRequeridos[i].value) {
        valido = false;
        break;
      }
    }
 
    if (valido) {
      e.preventDefault();
      let name = document.getElementById("nombreTarea").value;
      let initTime = document.getElementById("horaInicio").value;
      let description = document.getElementById("descripcion").value;
      
      // validar  Nombre
        const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
        if (!nameRegex.test(name)) {
          mostrarModal("Por favor rellene el campo.");
          return;
        }
    
      // validar Hora de Inicio
      const initTimeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (!initTimeRegex.test(initTime)) {
        mostrarModal("Por favor ingrese una hora de inicio válida en formato HH:MM.");
        return;
      }
   
      // validar Descripcion
      const descriptionRegex = /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]+$/;
      if (!descriptionRegex.test(description)) {
        mostrarModal("Por favor ingrese una descripción válida (solo letras, números y espacios).");
        return;
      }
 


      const id = generateRandomId();

      createCard(name, initTime, description);

      // Cerrar el modal
      const nuevaTareaModal = document.getElementById("nuevaTareaModal");
      const modal = bootstrap.Modal.getInstance(nuevaTareaModal);
      modal.hide();

      // Limpiar el formulario
      cardForm.reset();
    } else {
      mostrarModal("Faltan campos por completar");
    }
  });
