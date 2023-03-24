document.getElementById("acceptButton").addEventListener("click", addNewCard);

function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  function addNewCard() {
    // Obtén los valores del formulario
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const taskLocation = document.getElementById("taskLocation").value;
    const participants = document.getElementById("participants").value;
  
    // Crea una nueva tarjeta con un ID aleatorio
    const card = document.createElement("div");
    card.className = "card my-3";
    card.draggable = "true";
    card.ondragstart = (event) => drag(event);
    card.id = generateRandomId();
  
    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex justify-content-between";
  
    const contentWrapper = document.createElement("div");
  
    const title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = taskName;
  
    const description = document.createElement("p");
    description.className = "card-text";
    description.innerText = `Descripción: ${taskDescription}`;
  
    const time = document.createElement("p");
    time.className = "card-text";
    time.innerText = `Hora de inicio: ${startTime} - Hora de final: ${endTime}`;
  
    const location = document.createElement("p");
    location.className = "card-text";
    location.innerText = `Lugar: ${taskLocation}`;
  
    const people = document.createElement("p");
    people.className = "card-text";
    people.innerText = `Participantes: ${participants}`;
  
    // Añade el contenido al contentWrapper
    contentWrapper.appendChild(title);
    contentWrapper.appendChild(description);
    contentWrapper.appendChild(time);
    contentWrapper.appendChild(location);
    contentWrapper.appendChild(people);
  
    // Crea el checkbox y añade el controlador de eventos
    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.className = "form-check-input";
    completeCheckbox.style.marginTop = "1rem";
    completeCheckbox.addEventListener("change", () => {
      if (completeCheckbox.checked) {
        card.style.backgroundColor = "#28a745"; // verde
      } else {
        card.style.backgroundColor = ""; // color por defecto
      }
    });
  
    // Añade el contenido y el checkbox a la tarjeta
    cardBody.appendChild(contentWrapper);
    cardBody.appendChild(completeCheckbox);
    card.appendChild(cardBody);
  
    // Añade la tarjeta al aside
    const asideContent = document.querySelector(".aside-content");
    asideContent.appendChild(card);
  
    // Limpia los campos del formulario y cierra el modal
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("taskLocation").value = "";
    document.getElementById("participants").value = "";
    const newCardModal = bootstrap.Modal.getInstance(document.getElementById("newCardModal"));
    newCardModal.hide();
  }
  