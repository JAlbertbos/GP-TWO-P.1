function createCard(title, id) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-md-4", "mb-4");
  
    const card = `
      <div class="card shadow-sm card-square" data-id="${id}" style="border-color: ${selectedColor}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
        </div>
        <<div class="card-icons d-flex justify-content-between position-absolute bottom-0 start-0 end-0">
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
  
      // Mostrar el modal de confirmación
      const eliminarTarjetaModal = document.getElementById("eliminarTarjetaModal");
      const eliminarTarjetaBtn = document.getElementById("eliminarTarjetaBtn");
      eliminarTarjetaModal.addEventListener("shown.bs.modal", () => {
        eliminarTarjetaBtn.focus();
      });
      eliminarTarjetaBtn.addEventListener("click", () => {
        const cardContainer = e.target.closest(".col-md-4.mb-4");
        deleteCard(cardContainer);
        eliminarTarjetaModal.hide();
      });
      bootstrap.Modal.getInstance(eliminarTarjetaModal).show();
    });
  }
  