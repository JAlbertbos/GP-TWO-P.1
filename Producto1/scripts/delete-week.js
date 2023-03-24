document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase 'bi-trash'
    const trashIcons = document.querySelectorAll(".bi-trash");
  
    // Variable global para almacenar el ID de la carpeta que se va a eliminar
    let folderIdToDelete = null;
  
    // Agrega un evento de clic a cada icono de basura
    trashIcons.forEach((icon) => {
      icon.addEventListener("click", function (event) {
        // Encuentra el elemento carpeta más cercano
        const folder = event.target.closest(".folder");
  
        // Establece el valor del atributo data-folder-id en la variable global
        folderIdToDelete = folder.getAttribute("data-folder-id");
      });
    });
  
    // Agrega un nuevo selector que busque los iconos de basura en las nuevas carpetas creadas en el modal
    const modalFolderTrashIcons = document.querySelectorAll("#nuevaCarpetaModal .bi-trash");
  
    // Agrega un evento de clic a cada icono de basura en las nuevas carpetas creadas en el modal
    modalFolderTrashIcons.forEach((icon) => {
      icon.addEventListener("click", function (event) {
        // Encuentra el elemento carpeta más cercano
        const folder = event.target.closest(".modal-folder");
  
        // Elimina la carpeta
        folder.parentNode.removeChild(folder);
      });
    });
  
    // Agrega un evento de clic al botón 'Eliminar' del modal de eliminación de carpeta
    document.getElementById("eliminarCarpetaBtn").addEventListener("click", function () {
      // Encuentra la carpeta que se va a eliminar
      const folderToDelete = document.querySelector(`[data-folder-id="${folderIdToDelete}"]`);
  
      // Elimina la carpeta
      folderToDelete.parentNode.removeChild(folderToDelete);
  
      // Resetea el valor de la variable global
      folderIdToDelete = null;
  
      // Cierra el modal de eliminación de carpeta
      const eliminarCarpetaModal = document.getElementById("eliminarCarpetaModal");
      const modal = bootstrap.Modal.getInstance(eliminarCarpetaModal);
      modal.hide();
    });
  });