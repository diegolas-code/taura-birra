const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('navbarSupportedContent');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});