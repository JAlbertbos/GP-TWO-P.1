
document.addEventListener("DOMContentLoaded", () => {
  const addCardBtn = document.getElementById("addCard");
  const confirmBtn = document.getElementById("confirmButton");
  const cardForm = document.getElementById("cardForm");

  function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  function createCard(name, id, day, month, year, description) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-md-4", "mb-4");
  
    const card = `
      <div class="card shadow-sm card-square" data-id="${id}" style="border-color: ${selectedColor}">
        <div class="card-body">
          <h5 class="card-title"><b>${name}</b></h5>
          <p class ="card-text">Día: ${day}</p>
          <p class ="card-text">Mes: ${month}</p>
          <p class ="card-text">Año: ${year}</p>
          <p class ="card-text">Descripcion: ${description}</p>
        </div>
        <div class="card-icons d-flex justify-content-between position-absolute bottom-0 start-0 end-0">
          <a href="/Producto1/Weektasks.html" class="card-link"><i class="bi bi-eye"></i></a>
          <a href="#" class="card-link">
            <i class="bi bi-trash delete-icon" data-bs-toggle="modal" data-bs-target="#eliminarTarjetaModal" data-card="${id}"></i>
          </a>
        </div>
      </div>
    `;
  
    cardContainer.innerHTML = card;
  
    const mainRow = document.querySelector("main .row");
    mainRow.appendChild(cardContainer);
  
    // Escuchar eventos de click en los iconos de eliminar
const deleteIcons = document.querySelectorAll(".bi-trash");
deleteIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    const cardId = card.getAttribute("data-id");
    const deleteCardBtn = document.getElementById("eliminarTarjetaBtn");
    deleteCardBtn.setAttribute("data-card", cardId);
  });
});

// Escuchar evento de click en el botón de eliminar tarjeta
const deleteCardBtn = document.querySelector("#eliminarTarjetaBtn");
deleteCardBtn.addEventListener("click", () => {
  const cardId = deleteCardBtn.getAttribute("data-card");
  const card = document.querySelector(`[data-id="${cardId}"]`);
  if (card) {
    card.closest('.col-md-4.mb-4').remove();
    const eliminarTarjetaModalEl = document.getElementById("eliminarTarjetaModal");
    const eliminarTarjetaModal = bootstrap.Modal.getInstance(eliminarTarjetaModalEl);
    eliminarTarjetaModal.hide();
  }
});
    
  }

  function deleteCard(cardContainer) {
    cardContainer.remove();
  }
  

  function mostrarModal(mensaje) {
    const modal = new bootstrap.Modal(document.getElementById("genericModal"));
    const mensajeModal = document.getElementById("genericModalMessage");
    mensajeModal.innerText = mensaje;
    modal.show();
  }

  confirmBtn.addEventListener("click", (e) => {
    var formulario = document.getElementById("cardForm");
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
      let name = document.getElementById("name").value;
      let day = document.getElementById("day").value;
      let month = document.getElementById("month").value;
      let year = document.getElementById("year").value;
      let description = document.getElementById("description").value;

      // Expresión regular para validar el valor del campo numero de semana
      const nameRegex = /^Semana (0?[1-9]|[1-4][0-9]|5[0-3])$/;
      if (!nameRegex.test(name)) {
        mostrarModal("Por favor ingrese un nombre válido (Semana XX, donde XX es un número del 1 al 53).");
        return;
      }

      // Expresión regular para validar el valor del campo de día
      const dayRegex = /^(0?[1-9]|[12][0-9]|3[01])$/;
      if (!dayRegex.test(day)) {
        mostrarModal("Por favor ingrese un día válido (entre 1 y 31).");
        return;
      }

      // Expresión regular para validar el valor del campo de mes
      const monthRegex = /^(0?[1-9]|1[0-2])$/;
      if (!monthRegex.test(month)) {
        mostrarModal("Por favor ingrese un mes válido (entre 1 y 12).");
        return;
      }

      // Expresión regular para validar el valor del campo de año
      const yearRegex = /^\d{4}$/;
      if (!yearRegex.test(year)) {
        mostrarModal("Por favor ingrese un año válido (formato: AAAA).");
        return;
      }

      const id = generateRandomId();

      createCard(name, id, day, month, year, description);

      // Cerrar el modal
      const nuevaSemanaModal = document.getElementById("nuevaSemanaModal");
      const modal = bootstrap.Modal.getInstance(nuevaSemanaModal);
      modal.hide();

      // Limpiar el formulario
      cardForm.reset();
    } else {
      mostrarModal("Faltan campos por completar");
    }
  });

  document.querySelectorAll(".delete-icon").forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", (e) => {
      e.preventDefault();
      const cardContainer = e.target.closest(".col-md-4.mb-4");
      deleteCard(cardContainer);
    });
  });
});