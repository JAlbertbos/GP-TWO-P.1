  // Obtener el botón de eliminar elemento
  const botonEliminar = document.querySelector('#eliminar-elemento');

  // Agregar un evento de clic al botón
  botonEliminar.addEventListener('click', () => {
    // Mostrar el mensaje de confirmación en un popup
    const confirmacion = window.confirm('¿Seguro que quieres eliminar?');
    // Si el usuario hace clic en "Aceptar"
    if (confirmacion) {
      // Obtener el elemento a eliminar
      const elementoEliminar = document.querySelector('#elemento-a-eliminar');
      // Eliminar el elemento del DOM
      elementoEliminar.remove();
    }
  });