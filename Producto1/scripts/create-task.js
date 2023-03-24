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
      <a href="/Producto1/new-task.html" class="card-link"><i class="bi bi-eye"></i></a>
      <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#eliminarTarjetaModal" data-card-id="${id}"><i class="bi bi-trash"></i></a>

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

// Agrega el manejador de eventos click al botón de "+"
const addCardButtons = document.querySelectorAll(".add-card-button");
addCardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const carouselItemId = button.closest(".carousel-item").id;
    addNewCard(carouselItemId);
  });
});

function addNewCard(carouselItemId) {
  // Obtén los valores del formulario
  const cardTitle = document.getElementById("cardTitle").value;
  const cardContent = document.getElementById("cardContent").value;

  // Crea una nueva tarjeta con un ID aleatorio
  const card = document.createElement("div");
  card.className = "card my-3";
  card.draggable = "true";
  card.ondragstart = (event) => drag(event);
  card.id = generateRandomId();

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = cardTitle;

  const content = document.createElement("p");
  content.className = "card-text";
  content.innerText = cardContent;

  // Añade el contenido a la tarjeta
  cardBody.appendChild(title);
  cardBody.appendChild(content);
  card.appendChild(cardBody);

  // Añade la tarjeta a la diapositiva correspondiente del carrusel
  const carouselItem = document.getElementById(carouselItemId);
  const dropzone = carouselItem.querySelector(".dropzone");
  dropzone.appendChild(card);

}
