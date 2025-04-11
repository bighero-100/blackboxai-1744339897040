// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const dropdowns = document.querySelectorAll('.dropdown');
const loginForm = document.getElementById('loginForm');
const contactForm = document.getElementById('contactForm');

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Dropdown Menu Functionality
dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (trigger && menu) {
        // Show/hide on hover for desktop
        dropdown.addEventListener('mouseenter', () => {
            menu.classList.remove('hidden');
        });
        
        dropdown.addEventListener('mouseleave', () => {
            menu.classList.add('hidden');
        });
        
        // Toggle on click for mobile
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('hidden');
        });
    }
});

// Form Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}Error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        input.classList.add('border-red-500');
    }
}

function clearError(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    if (errorElement) {
        errorElement.classList.add('hidden');
        input.classList.remove('border-red-500');
    }
}

// Login Form Handling
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        // Reset errors
        clearError(email);
        clearError(password);

        // Email validation
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Password validation
        if (!password.value) {
            showError(password, 'Password is required');
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters');
            isValid = false;
        }

        if (isValid) {
            // Here you would typically make an API call to your backend
            console.log('Form is valid, submitting...');
            // Simulate API call
            setTimeout(() => {
                alert('Login successful!');
                loginForm.reset();
            }, 1000);
        }
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Reset errors
        [name, email, subject, message].forEach(input => clearError(input));

        // Validate all fields
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        if (!subject.value.trim()) {
            showError(subject, 'Subject is required');
            isValid = false;
        }

        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // Here you would typically make an API call to your backend
            console.log('Form is valid, submitting...');
            // Simulate API call
            setTimeout(() => {
                alert('Message sent successfully! We will get back to you soon.');
                contactForm.reset();
            }, 1000);
        }
    });
}

// Movie Card Animation
const movieCards = document.querySelectorAll('.movie-card');
movieCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('transform', 'scale-105');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('transform', 'scale-105');
    });
});

// Initialize any third-party libraries or additional functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
