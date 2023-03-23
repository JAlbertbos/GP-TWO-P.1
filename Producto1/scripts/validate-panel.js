    // Validar el formulario 
    const form = document.getElementById("cardForm");
    const nameInput = document.getElementById("name");
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const descriptionInput = document.getElementById("description");
    const confirmButton = document.getElementById("confirmButton");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (nameInput.value === "" || dayInput.value === "" || monthInput.value === "" || yearInput.value === "" || descriptionInput.value === "") {
        alert("Todos los campos son requeridos.");
      } else if (isNaN(dayInput.value) || isNaN(monthInput.value) || isNaN(yearInput.value)) {
        alert("Los campos de día, mes y año deben ser números.");
      } else if (dayInput.value < 1 || dayInput.value > 31) {
        alert("El campo de día debe estar entre 1 y 31.");
      } else if (monthInput.value < 1 || monthInput.value > 12) {
        alert("El campo de mes debe estar entre 1 y 12.");
      } else {
        // Aquí iría el código para enviar el formulario.
        console.log("Formulario enviado");
      }
    });