document.getElementById("acceptButton").addEventListener("click", addNewCard);

function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  function addNewCard() {
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
  
    // Añade la tarjeta al aside
    const asideContent = document.querySelector(".aside-content");
    asideContent.appendChild(card);
  
    // Limpia los campos del formulario y cierra el modal
    document.getElementById("cardTitle").value = "";
    document.getElementById("cardContent").value = "";
    const addCardModal = bootstrap.Modal.getInstance(document.getElementById("addCardModal"));
    addCardModal.hide();
  }