document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            });
        }
        
        
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active'); 
        }
    });
});



const menuToggle = document.querySelector('.menu-toggle'); 
const mainNav = document.getElementById('main-nav');       


if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active'); 
    });
}