document.querySelectorAll('.chat-list-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove('unread-message');
    });
});

// Colapsar el calendario en pantallas pequeñas
document.addEventListener('DOMContentLoaded', function () {
    const calendarCollapse = document.getElementById('calendarCollapse');

    if (window.innerWidth <= 768) {
        // Colapsar el calendario
        const collapseInstance = new bootstrap.Collapse(calendarCollapse, {
            toggle: false
        });
        collapseInstance.hide(); // Ocultar por defecto en pantallas pequeñas
    }
});
