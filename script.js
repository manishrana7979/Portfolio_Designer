 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#6366f1',
                        secondary: '#f59e0b',
                    }
                }
            }
        }


          VANTA.WAVES({
            el: "#vanta-waves",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x6366f1,
            shininess: 35.00,
            waveHeight: 15.00,
            waveSpeed: 0.50,
            zoom: 0.75
        });

        // Initialize Feather Icons
        feather.replace();

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mobile menu toggle would go here
        // const mobileMenuButton = document.querySelector('button[aria-label="mobile menu"]');
        // const mobileMenu = document.querySelector('.mobile-menu');
        // mobileMenuButton.addEventListener('click', () => {
        //     mobileMenu.classList.toggle('hidden');
        // });