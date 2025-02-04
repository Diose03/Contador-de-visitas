// Obtener las referencias a los elementos del DOM

// Acceder a los elementos html
const visitCountElement = document.getElementById("visitCount");
const incrementButton = document.getElementById("incrementButton");

// Inicializar el contador de visitas en el "localStorage"
if (localStorage.getItem('visitCount') === null) {
    localStorage.setItem('visitCount', 0);
}

// Función para actualizar el contador de la página
function actualizarVisitCount() {
    //parsear -->Convetir un tipo de dato a otro, pues aqui se guarda como un string
    //parsea el contador al número base decimal
    const visitCount = parseInt(localStorage.getItem('visitCount'), 10);
    
    //Recuperar el número de visitas
    visitCountElement.textContent = `Número de visitas: ${visitCount}`;
}

// Función para incrementar el contador y actualizar el localStorage
function incrementarVisitCount(){
    let visitCount = parseInt(localStorage.getItem('visitCount'),10);
    visitCount += 1;
    localStorage.setItem('visitCount', visitCount.toString());
    actualizarVisitCount();
}

// Configurar el evento del clic en el botón 
incrementButton.addEventListener('click', incrementarVisitCount);
// Inizializa la página con el contador actualizado aun cuando se cierre la página
actualizarVisitCount();