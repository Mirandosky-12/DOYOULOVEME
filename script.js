// Mostrar mensaje cuando se presiona el botón "Yes"
function showYesMessage() {
    alert("Yay! I love you too!");
}

// Mover el botón "No" a una posición aleatoria dentro del contenedor
function moveNoButton() {
    // Obtén el botón "No" por su id
    var noButton = document.getElementById("noButton");

    // Tamaño del contenedor que restringirá el movimiento del botón
    var container = document.querySelector(".wrapper");

    // Obtener el ancho y alto del contenedor
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    // Generar posiciones aleatorias dentro de los límites del contenedor
    var newLeft = Math.floor(Math.random() * (containerWidth - noButton.offsetWidth));
    var newTop = Math.floor(Math.random() * (containerHeight - noButton.offsetHeight));

    // Aplicar las nuevas posiciones al botón "No"
    noButton.style.left = newLeft + "px";
    noButton.style.top = newTop + "px";
}
