function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var element = document.getElementById(data);
  event.target.appendChild(element);
}

let tarjetaAEditar;
let selectedDay;
// Controlador de eventos para los botones
document.querySelectorAll('[data-day]').forEach(button => {
  button.addEventListener('click', function () {
    selectedDay = this.getAttribute('data-day');
  });
});


// Obtener elementos del formulario
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


// Controlador de eventos para el formulario
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (tarjetaAEditar) {
    // Actualizar la tarjeta existente
    tarjetaAEditar.querySelector('.card-title').innerText = nombreTarea.value;
    tarjetaAEditar.querySelector('.card-text').innerText = descripcion.value;
    tarjetaAEditar.querySelector('.list-group-item:nth-child(1)').innerText = `Hora de inicio: ${horaInicio.value}`;
    tarjetaAEditar.querySelector('.list-group-item:nth-child(2)').innerText = `Hora de final: ${horaFinal.value}`;
    tarjetaAEditar.querySelector('.list-group-item:nth-child(3)').innerText = `Participantes: ${participantes.value}`;
    tarjetaAEditar.querySelector('.list-group-item:nth-child(4)').innerText = `Ubicación: ${ubicacion.value}`;
    tarjetaAEditar.querySelector('.form-check-input').checked = tareaTerminada.checked;

    // Reiniciar la variable tarjetaAEditar
    tarjetaAEditar = null;

    const modal = bootstrap.Modal.getInstance(document.querySelector('#formtask'));
    modal.hide();
    form.reset();
  } else {

  // Crear la tarjeta con los datos del formulario
  const tarjeta = document.createElement('div');
  const idTarjeta = Date.now().toString(); // Generar un ID único para la tarjeta
  tarjeta.id = `tarjeta-${idTarjeta}`; // Agregar el ID a la tarjeta
  tarjeta.classList.add('card', 'my-3', 'draggable');
  tarjeta.innerHTML = `
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <h5 class="card-title">${nombreTarea.value}</h5>
      <button type="button"  class="btn btn-link p-0 eliminar-tarea">${iconoPapelera.outerHTML}</button>
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
    <div class="mt-auto d-flex justify-content-end">
    <button type="button"><i class="bi bi-pencil-square text-primary"></i></button> 
    </div>
  </div>
`;

  tarjeta.setAttribute('draggable', true);
  tarjeta.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', this.id);
  });

  let dropzone;
  if (selectedDay) {
    dropzone = document.querySelector(`.contenedor-dia[data-day="${selectedDay}"] .dropzone`);
  }
  if (!dropzone) {
    dropzone = document.querySelector('.zone-bottom');
  }

  dropzone.appendChild(tarjeta);
  selectedDay = undefined;
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
  const botonEliminar = tarjeta.querySelector('.eliminar-tarea');
  botonEliminar.addEventListener('click', function () {
    const confirmacion = confirm('¿Estás seguro que deseas eliminar la tarjeta?');
    if (confirmacion) {
      tarjeta.remove();
    }
  });

   // Lapiz edicion
    const botonEditar = tarjeta.querySelector('.editar-tarea');
    botonEditar.addEventListener('click', function () {
    // Guardar la referencia a la tarjeta que se va a editar
   tarjetaAEditar = tarjeta;

    // Obtener la información de la tarjeta creada
    const titulo = tarjeta.querySelector('.card-title').innerText;
    const desc = tarjeta.querySelector('.card-text').innerText;
    const horaInicio = tarjeta.querySelector('.list-group-item:nth-child(1)').innerText.replace('Hora de inicio: ', '');
    const horaFinal = tarjeta.querySelector('.list-group-item:nth-child(2)').innerText.replace('Hora de final: ', '');
    const participantes = tarjeta.querySelector('.list-group-item:nth-child(3)').innerText.replace('Participantes: ', '');
    const ubicacion = tarjeta.querySelector('.list-group-item:nth-child(4)').innerText.replace('Ubicación: ', '');
    const tareaTerminada = tarjeta.querySelector('.form-check-input').checked;

    // Rellenar los campos del modal con la información de la tarjeta
    nombreTareaEdit.value = titulo;
    descripcionEdit.value = desc;
    horaInicioEdit.value = horaInicio;
    horaFinalEdit.value = horaFinal;
    participantesEdit.value = participantes;
    ubicacionEdit.value = ubicacion;
    tareaTerminadaEdit.checked = tareaTerminada;

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById("formtask"));
    modal.show();
  });

}
form.reset(); // Reiniciar formulario para edición sin bugs!
});