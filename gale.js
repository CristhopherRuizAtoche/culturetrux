document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const items = document.querySelectorAll('.gallery-item');

        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block'; // Mostrar elemento
            } else {
                item.style.display = 'none'; // Ocultar elemento
            }
        });
    });
});
