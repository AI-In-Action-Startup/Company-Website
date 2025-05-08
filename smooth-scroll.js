document.querySelectorAll('nav ul li a, .hero-btn, .footer-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Only prevent default if it's an internal link
        if(link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Make sure the element exists before scrolling
            if(targetElement) {
                // Close mobile menu if it's open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if(navbarCollapse && navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
                
                // Scroll to the element
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Update URL without page reload
                history.pushState(null, null, `#${targetId}`);
            }
        }
    });
});

// Add active class to nav items when scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
