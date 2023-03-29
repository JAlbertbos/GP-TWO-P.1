document.addEventListener("DOMContentLoaded", () => {
  let selectedCard = null;

  // Escuchar eventos de click en los iconos de eliminar
  const deleteIcons = document.querySelectorAll(".bi-trash");
  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      selectedCard = card;
       // Mostrar el modal de confirmación de eliminación
       const eliminarTareaModalEl = document.getElementById("eliminarTareaModal");
       const eliminarTareaModal = new bootstrap.Modal(eliminarTareaModalEl);
       eliminarTareaModal.show();
    });
  });
  const deleteCardBtn = document.querySelector("#eliminarTareaBotn");
  deleteCardBtn.addEventListener("click", () => {
    if (selectedCard) {
      selectedCard.closest('.mb-3').remove();
      selectedCard.closest()
      selectedCard = null;
      const eliminarTareaModalEl = document.getElementById("eliminarTareaModal");
      const eliminarTareaModal = bootstrap.Modal.getInstance(eliminarTareaModalEl);
      eliminarTareaModal.hide();
  }
});
});


