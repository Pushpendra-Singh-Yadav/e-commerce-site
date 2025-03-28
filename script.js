// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// GSAP Animations for Navbar
gsap.from('.navbar-brand', { 
    duration: 1, 
    y: -50, 
    opacity: 0, 
    ease: 'bounce' 
});

gsap.from('.nav-link', { 
    duration: 0.8, 
    y: -30, 
    opacity: 0, 
    stagger: 0.2 
});

gsap.from('.nav-icon', { 
    duration: 1, 
    scale: 0, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2 
});
