// Obtener el botón Eliminar y el modal Eliminar tarjeta
const eliminarTarjetaBtn = document.querySelector("#eliminarTarjetaBtn");
const eliminarTarjetaModal = document.querySelector("#eliminarTarjetaModal");

// Agregar un evento click al botón Eliminar
eliminarTarjetaBtn.addEventListener("click", eliminarTarjeta);

// Definir la función para eliminar la tarjeta y cerrar el modal
function eliminarTarjeta() {
  // Aquí va el código para eliminar la tarjeta

  // Cerrar el modal
  eliminarTarjetaModal.classList.remove("show");
  eliminarTarjetaModal.setAttribute("aria-hidden", "true");
  eliminarTarjetaModal.setAttribute("style", "display: none");
}