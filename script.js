const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Optional JavaScript to control the hover effect more dynamically if needed
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const title = card.querySelector('.card-title');
        const subtitle = card.querySelector('.card-subtitle');
        
        // Slide up title and show subtitle on hover
        title.style.transform = 'translateY(-30px)';
        subtitle.style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
        const title = card.querySelector('.card-title');
        const subtitle = card.querySelector('.card-subtitle');
        
        // Reset title and hide subtitle when hover ends
        title.style.transform = 'translateY(0)';
        subtitle.style.display = 'none';
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const company = document.getElementById("company").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name && surname && email && message) {
        alert("Grazie per il Messaggio!");
        this.reset(); // Clear the form
    } else {
        alert("Per favore, compila i campi obbligatori");
    }
});