document.querySelectorAll('.chat-list-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove('unread-message');
    });
});
