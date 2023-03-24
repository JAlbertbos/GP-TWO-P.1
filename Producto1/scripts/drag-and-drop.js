function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const target = event.target;

  if (target.classList.contains("dropzone")) {
    target.appendChild(document.getElementById(data));
  }
}