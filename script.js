 /**
 * PRIME WALT NIG LTD - Corporate Website JavaScript
 * Enhanced with smooth animations
 */

// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});

// Header Scroll Effect
function headerScrollEffect() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-zoom').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active Navigation Link Highlight
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Form Submission Handler
function submitForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!firstName || !lastName || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you within 24-48 hours.');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Add stagger classes to grid items
function addStaggerClasses() {
    // Team cards
    document.querySelectorAll('.team-grid .team-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // Service cards
    document.querySelectorAll('.services-grid .service-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // Project cards
    document.querySelectorAll('.projects-grid .project-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // MVV cards
    document.querySelectorAll('.mvv-grid .mvv-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // Why cards
    document.querySelectorAll('.why-grid .why-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // Staff cards
    document.querySelectorAll('.staff-grid .staff-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = (index * 0.1) + 's';
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link
    setActiveNavLink();
    
    // Add stagger animations
    addStaggerClasses();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Header scroll effect
    headerScrollEffect();
    
    // Scroll event listener
    window.addEventListener('scroll', function() {
        headerScrollEffect();
    });
    
    console.log('PRIME WALT NIG LTD website loaded with enhanced animations!');
});

// Lazy Loading Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
