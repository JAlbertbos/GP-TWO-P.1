// Obtenemos todos los elementos circulo
const circles = document.querySelectorAll('.circle');

// Obtenemos el elemento textarea
const descripcion = document.getElementById('descripcion');

// Agregamos un event listener para cada círculo
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Obtenemos el color del círculo seleccionado
        const color = getComputedStyle(circle).getPropertyValue('background-color');
        

        // Cambiamos el fondo del área de texto al color elegido
        descripcion.style.backgroundColor = color;
    });
});
