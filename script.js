// Selecciona las páginas y los botones
const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPage = 0; // Índice de la página actual

// Función para mostrar la página activa
function updatePages() {
    pages.forEach((page, index) => {
        page.classList.remove('active', 'previous');
        if (index === currentPage) {
            page.classList.add('active'); // Página actual
        } else if (index < currentPage) {
            page.classList.add('previous'); // Página anterior
        }
    });
}

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

// Inicializa las páginas
updatePages();
