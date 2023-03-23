    // Validar el formulario 
    $('#cardForm').on('validated.bs.form', function (event) {
      if (nameInput.value === "" || dayInput.value === "" || monthInput.value === "" || yearInput.value === "" || descriptionInput.value === "") {
        alert("Todos los campos son requeridos.");
      } else if (isNaN(dayInput.value) || isNaN(monthInput.value) || isNaN(yearInput.value)) {
        alert("Los campos de día, mes y año deben ser números.");
      } else if (dayInput.value < 1 || dayInput.value > 31) {
        alert("El campo de día debe estar entre 1 y 31.");
      } else if (monthInput.value < 1 || monthInput.value > 12) {
        alert("El campo de mes debe estar entre 1 y 12.");
      } else {
        form.submit();
        console.log("Formulario enviado");
      }
    });
    