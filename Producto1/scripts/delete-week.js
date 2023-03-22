document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase 'bi-trash'
    const trashIcons = document.querySelectorAll(".bi-trash");

    // Agrega un evento de clic a cada icono de basura
    trashIcons.forEach((icon) => {
        icon.addEventListener("click", function (event) {
            // Encuentra el elemento card más cercano
            const card = event.target.closest(".card");

            // Elimina la tarjeta
            card.parentNode.removeChild(card);
        });
    });
});
