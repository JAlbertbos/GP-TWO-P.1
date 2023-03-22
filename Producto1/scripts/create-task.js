document.addEventListener("DOMContentLoaded", () => {
  const addCardBtn = document.getElementById("addCard");
  const confirmBtn = document.getElementById("confirmButton");
  const cardForm = document.getElementById("cardForm");

  function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  function createCard(title, id) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-md-4", "mb-4");

    const card = `
    <div class="card shadow-sm card-square" data-id="${id}" style="border-color: ${selectedColor || 'black'}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
    <div class="card-icons d-flex justify-content-between position-absolute bottom-0 start-0 end-0">
      <a href="#" class="card-link view-icon"><i class="bi bi-eye"></i></a>
      <a href="#" class="card-link delete-icon"><i class="bi bi-trash"></i></a>
    </div>
  </div>
    `;

    cardContainer.innerHTML = card;

    const mainRow = document.querySelector("main .row");
    mainRow.appendChild(cardContainer);

    const deleteIcon = cardContainer.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", (e) => {
      e.preventDefault();
      const cardContainer = e.target.closest(".col-md-4.mb-4");
      deleteCard(cardContainer);
    });
  }

  function deleteCard(cardContainer) {
    cardContainer.remove();
  }

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = cardForm.querySelector("input[type='text']").value;
    const id = generateRandomId();

    createCard(title, id);

    // Validar el formulario 
    function validarFormulario() {
      var campoNombre = document.forms["NuevaSemana"]["nombre"].value;
      if (campoNombre == "") {
          alert("Por favor, complete el campo Nombre.");
          return false;
      }
      // Verificar otros campos requeridos
      return true;

    // Cerrar el modal
    const nuevaSemanaModal = document.getElementById("nuevaSemanaModal");
    const modal = bootstrap.Modal.getInstance(nuevaSemanaModal);
    modal.hide();

    // Limpiar el formulario
    cardForm.reset();
  });

  document.querySelectorAll(".delete-icon").forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", (e) => {
      e.preventDefault();
      const cardContainer = e.target.closest(".col-md-4.mb-4");
      deleteCard(cardContainer);
    });
  });
});