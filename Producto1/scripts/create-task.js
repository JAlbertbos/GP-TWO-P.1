let column;

function discoverColumn(n){
  if(n === "TODO"){
    column= "TODO";
  }
  else if(n === "INPROGRESS"){
    column= "INPROGRESS";
  }
  else{
    column= "DONE";
  }
  console.log(column);
}


function createTask(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;
    console.log(title, description, priority);
    addTask(title, description, priority);
}

function addTask(titulo, descripcion, priority){
//crear elementos
    const element = document.getElementById('col1');
    const row = document.createElement("div");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const title = document.createElement("h5");
    const description = document.createElement("p");
    const container = document.createElement("div");
    const containerRow = document.createElement("div");
    const col1 = document.createElement("div");
    const span = document.createElement("span");
    const col2 = document.createElement("div");
    const editButton = document.createElement("button");
    const imgEditButton = document.createElement("img");
    const col3 = document.createElement("div");
    const deleteButton = document.createElement("button");
    const imgDeleteButton = document.createElement("img");
//añadir clases, atributos, funcionalidades y contenido
    row.classList.add("row");
    row.setAttribute("draggable", "true");
    card.classList.add("card", "cursor-move");
    cardBody.classList.add("card-body");
    title.classList.add("card-title");
    title.textContent= titulo;
    description.classList.add("card-text");
    description.textContent= descripcion;
    container.classList.add("container", "m-0", "p-0");
    containerRow.classList.add("row");
    col1.classList.add("col-10");
    if(priority === "1"){
      span.classList.add("badge", "bg-success");
      span.textContent= "Low";
    }
    else if(priority === "2"){
      span.classList.add("badge", "bg-warning");
      span.textContent= "Medium";
    }
    else{
      span.classList.add("badge", "bg-danger");
      span.textContent= "Hight";
    }
    col2.classList.add("col-1");
    editButton.classList.add("btn");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#editTaskModal");
    //editButton.setAttribute("onclick", "editElement(this)");
    imgEditButton.classList.add("mt-3");
    imgEditButton.src= "img/icons-nota-resize.png";
    col3.classList.add("col-1");
    deleteButton.classList.add("btn");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("data-bs-toggle", "modal");
    deleteButton.setAttribute("data-bs-target", "#removeTaskModal");
    //deleteButton.setAttribute("onclick", "removeElement(this)");
    imgDeleteButton.classList.add("mt-3");
    imgDeleteButton.src= "img/basura.png";





//add parents
    row.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(container);
    container.appendChild(containerRow);
    containerRow.appendChild(col1);
    containerRow.appendChild(col2);
    containerRow.appendChild(col3);
    col1.appendChild(span);
    col2.appendChild(editButton);
    editButton.appendChild(imgEditButton);
    col3.appendChild(deleteButton);
    deleteButton.appendChild(imgDeleteButton);
    element.appendChild(row);

    setDraggables();
}


//añadir la funcionalidad al boton

const saveNewTask = document.getElementById("saveNewTask");
saveNewTask.addEventListener("click", createTask);
