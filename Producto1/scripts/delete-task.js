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

       // Mostrar el modal de confirmación de eliminación
       const eliminarTarjetModalEl = document.getElementById("eliminarTarjetModal");
       const eliminarTarjetModal = new bootstrap.Modal(eliminarTarjetModalEl);
       eliminarTarjetModal.show();
    });

  const deleteCardBotton = document.querySelector("#eliminarTarjetBotton");
  deleteCardBotton.addEventListener("click", () => {
    if (selectedCard) {
      selectedCard.closest('.my-3').remove();
      selectedCard.closest()
      selectedCard = null;
      const eliminarTarjetModalEl = document.getElementById("eliminarTarjetModal");
      const eliminarTarjetModal = bootstrap.Modal.getInstance(eliminarTarjetModalEl);
      eliminarTarjetModal.hide();
    }
});


