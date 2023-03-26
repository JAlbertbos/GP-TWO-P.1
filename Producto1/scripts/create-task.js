function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var element = document.getElementById(data);
  event.target.appendChild(element);
}
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
form.addEventListener('submit', function(event) {
  event.preventDefault();

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
    tarjeta.remove();

  });
});