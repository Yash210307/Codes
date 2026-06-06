window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
        header.style.boxShadow = 'none';
    }
});

// 2. Scroll Reveal Animation for Sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150;

        if (sectionTop < triggerPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.8s ease-out';
        }
    });
};

// Set initial state for reveal
document.querySelectorAll('section').forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(40px)';
});

window.addEventListener('scroll', revealSections);
// Trigger once on load
revealSections();

// 3. Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});