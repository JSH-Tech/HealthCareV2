document.addEventListener('DOMContentLoaded', () => {
    
    // Fonction pour animer les images des sections au survol
    const animateImagesOnHover = () => {
        const images = document.querySelectorAll('section img');
        
        images.forEach(image => {
            image.style.transition = 'transform 0.3s ease';
            image.addEventListener('mouseover', () => {
                image.style.transform = 'scale(1.05)'; // Agrandit l'image légèrement
            });
            image.addEventListener('mouseout', () => {
                image.style.transform = 'scale(1)'; // Réduit l'image à sa taille normale
            });
        });
    };
    
    // Fonction pour animer les sections au défilement
    const animateSectionsOnScroll = () => {
        const sections = document.querySelectorAll('service');
        
        const animateInView = () => {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInView) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                }
            });
        };
        
        window.addEventListener('scroll', animateInView);
        animateInView(); // Vérifie la visibilité des sections au chargement initial
    };

    // Appel des fonctions
    animateImagesOnHover();
    animateSectionsOnScroll();
});
