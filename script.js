if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker зарегистрирован:', reg))
            .catch(err => console.error('Ошибка регистрации Service Worker:', err));
    });
}

// Simple swipe detection
        let touchStartX = 0;
        document.body.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.body.addEventListener('touchend', e => {
            const diff = e.changedTouches[0].screenX - touchStartX;
            if(Math.abs(diff) > 50) {
                console.log(diff > 0 ? 'Swiped right' : 'Swiped left');
            }
        });