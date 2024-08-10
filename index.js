document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons a');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.animationPlayState = 'paused';
        });

        icon.addEventListener('mouseout', function() {
            icon.style.animationPlayState = 'running';
        });
    });
});

