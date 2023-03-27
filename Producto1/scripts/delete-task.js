

document.addEventListener("DOMContentLoaded", () => {
    let selectedCard = null;
  
    // Escuchar eventos de click en los iconos de eliminar
    const deleteIcons = document.querySelectorAll(".bi-trash");
    deleteIcons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        selectedCard = card;
      });
    });
    const deleteCardBtn = document.querySelector("#eliminarTareaBotn");
    deleteCardBtn.addEventListener("click", () => {
      if (selectedCard) {
        selectedCard.closest('.mb-3').remove();
        selectedCard = null;
        const eliminarTareaModalEl = document.getElementById("eliminarTareaModal");
        const eliminarTareaModal = bootstrap.Modal.getInstance(eliminarTareaModalEl);
        eliminarTareaModal.hide();
    }
});
});