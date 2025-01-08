// Smooth Scroll to Features Section
function scrollToSection(id) {
    const element = document.querySelector(id);
    window.scrollTo({
        top: element.offsetTop - 80,  // Adjust for header height
        behavior: 'smooth'
    });
}
