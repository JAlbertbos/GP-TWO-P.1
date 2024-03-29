
const deleteCardBtn = document.querySelector("#eliminarTareaBotn");
deleteCardBtn.addEventListener("click", () => {
  if (selectedCard) {
    selectedCard.remove();
    selectedCard = null;
    const eliminarTareaModalEl = document.getElementById("eliminarTareaModal");
    const eliminarTareaModal = bootstrap.Modal.getInstance(eliminarTareaModalEl);
    eliminarTareaModal.hide();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.matches(".eliminar-tarea")) {
    const card = event.target.closest(".card");
    selectedCard = card;
    // Mostrar el modal de confirmación de eliminación
    const eliminarTareaModalEl = document.getElementById("eliminarTareaModal");
    const eliminarTareaModal = new bootstrap.Modal(eliminarTareaModalEl);
    eliminarTareaModal.show();
  }
});


