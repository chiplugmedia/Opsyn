document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Handle dropdown in mobile
    const dropdownBtns = document.querySelectorAll('.dropbtn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = this.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && 
            !menuToggle.contains(e.target) && 
            !authButtons.contains(e.target)) {
            navLinks.classList.remove('active');
            authButtons.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Get the target collapse element
                const targetId = this.getAttribute('data-bs-target');
                const targetCollapse = document.querySelector(targetId);
                
                // Close all other accordion items
                document.querySelectorAll('.accordion-collapse').forEach(collapse => {
                    if (collapse !== targetCollapse) {
                        collapse.classList.remove('show');
                        const otherButton = document.querySelector(`[data-bs-target="#${collapse.id}"]`);
                        otherButton.classList.add('collapsed');
                        otherButton.setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current accordion item
                this.classList.toggle('collapsed');
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                targetCollapse.classList.toggle('show');
            });
        });
    });
});