document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const beforeImage = document.querySelector('.after-image');
    let isDragging = false;

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const { left, width } = slider.parentElement.getBoundingClientRect();
        let x = e.clientX - left;
        if (x < 0) x = 0;
        else if (x > width) x = width;
        
        const percentage = (x / width) * 100;
        slider.style.left = `${percentage}%`;
        // Mise à jour de clip-path au lieu de la largeur pour l'image après
        beforeImage.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
    });

    slider.addEventListener('mousedown', () => {
        isDragging = true;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

