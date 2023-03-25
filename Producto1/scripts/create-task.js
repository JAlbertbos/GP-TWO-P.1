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

      // Expresión regular para validar el valor del campo de día
      const dayRegex = /^(0?[1-9]|[12][0-9]|3[01])$/;
      if (!dayRegex.test(day)) {
        alert("Por favor ingrese un día válido (entre 1 y 31).");
       return;
      }

      // Expresión regular para validar el valor del campo de mes
      const monthRegex = /^(0?[1-9]|1[0-2])$/;
      if (!monthRegex.test(month)) {
        alert("Por favor ingrese un mes válido (entre 1 y 12).");
        return;
      }

      // Expresión regular para validar el valor del campo de año
      const yearRegex = /^\d{4}$/;
      if (!yearRegex.test(year)) {
        alert("Por favor ingrese un año válido (formato: AAAA).");
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
      alert("Por favor complete todos los campos requeridos.");
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