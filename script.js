const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

document.addEventListener('DOMContentLoaded', function() {
    // Menggunakan querySelectorAll dengan div yang memiliki id yang dimulai dengan 'section-'
    const sections = document.querySelectorAll('.section-home, .section-resume, .section-portfolio');
    const navLinks = document.querySelectorAll('.menu-nav ul li a');

    function onScroll() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    // Portfolio tabs handling
    const portoNavLinks = document.querySelectorAll('.porto-nav ul li a');
    const portoSections = document.querySelectorAll('.section-photography, .section-graphic-design, .section-videography');

    // Set default state - Graphic Design
    portoSections.forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector('.section-graphic-design').style.display = 'block';
    document.querySelector('.porto-nav ul li a[href="#portfolio"]').classList.add('active'); // Menggunakan #portfolio untuk default

    // Handle portfolio navigation
    portoNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);
            
            // Update active states
            portoNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Update visible content
            portoSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show appropriate section
            if (targetId === 'portfolio') { // Untuk link Graphic Design
                document.querySelector('.section-graphic-design').style.display = 'block';
            } else {
                document.querySelector(`.section-${targetId}`).style.display = 'block';
            }

            // Scroll handling
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                window.scrollTo({
                    top: portfolioSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

