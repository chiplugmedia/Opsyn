// Pause animation on hover
document.querySelector('.scroll-container').addEventListener('mouseenter', function() {
    document.querySelector('.scroll-content').style.animationPlayState = 'paused';
});

document.querySelector('.scroll-container').addEventListener('mouseleave', function() {
    document.querySelector('.scroll-content').style.animationPlayState = 'running';
});

// Intersection Observer for animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'scroll 40s linear infinite';
        } else {
            entry.target.style.animation = 'none';
        }
    });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.scroll-content'));
