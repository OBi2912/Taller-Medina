// Taller Medina - Interactive JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('show');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe glass cards
document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '%');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '%');
        }
    }, 16);
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.text-3xl');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                stat.textContent = '0' + (text.includes('+') ? '+' : '%');
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.grid.grid-cols-3.gap-6');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.textContent = '✓ Mensaje Enviado';
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('bg-green-600');

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('bg-green-600');
            }, 3000);
        }, 2000);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.blob');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-orange-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-orange-400');
        }
    });
});

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Generate placeholder images using canvas
function generatePlaceholderImage(elementId, text, gradient, theme = 'default') {
    const img = document.getElementById(elementId);
    if (!img) return;

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Create gradient background
    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, gradient[0]);
    grd.addColorStop(1, gradient[1]);

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add workshop-themed elements
    if (theme === 'workshop') {
        // Draw car silhouette on lift
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';

        // Car body
        ctx.beginPath();
        ctx.roundRect(200, 250, 400, 120, 10);
        ctx.fill();

        // Car windows
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.roundRect(250, 260, 150, 60, 5);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(420, 260, 150, 60, 5);
        ctx.fill();

        // Wheels
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.beginPath();
        ctx.arc(280, 380, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(520, 380, 35, 0, Math.PI * 2);
        ctx.fill();

        // Lift posts
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(220, 400);
        ctx.lineTo(220, 550);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(580, 400);
        ctx.lineTo(580, 550);
        ctx.stroke();

        // Tool icons
        const toolPositions = [
            { x: 100, y: 100 },
            { x: 700, y: 100 },
            { x: 100, y: 500 },
            { x: 700, y: 500 }
        ];

        toolPositions.forEach(pos => {
            // Wrench icon
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 15, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x + 10, pos.y + 10);
            ctx.lineTo(pos.x + 25, pos.y + 25);
            ctx.stroke();
        });
    }

    // Add overlay for better text visibility
    const overlayGradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
    overlayGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    overlayGradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    ctx.fillStyle = overlayGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text with shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.font = 'bold 56px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 150);

    // Add subtitle
    ctx.font = '24px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('Servicio Profesional', canvas.width / 2, canvas.height / 2 + 200);

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // Add decorative corner elements
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;

    // Top left corner
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(30, 30);
    ctx.lineTo(60, 30);
    ctx.stroke();

    // Top right corner
    ctx.beginPath();
    ctx.moveTo(canvas.width - 60, 30);
    ctx.lineTo(canvas.width - 30, 30);
    ctx.lineTo(canvas.width - 30, 60);
    ctx.stroke();

    // Bottom left corner
    ctx.beginPath();
    ctx.moveTo(30, canvas.height - 60);
    ctx.lineTo(30, canvas.height - 30);
    ctx.lineTo(60, canvas.height - 30);
    ctx.stroke();

    // Bottom right corner
    ctx.beginPath();
    ctx.moveTo(canvas.width - 60, canvas.height - 30);
    ctx.lineTo(canvas.width - 30, canvas.height - 30);
    ctx.lineTo(canvas.width - 30, canvas.height - 60);
    ctx.stroke();

    // Convert to image
    img.src = canvas.toDataURL();
    img.alt = text;
}

// Generate placeholder images with workshop theme
// Note: Commented out because we're now using real images from Unsplash
// generatePlaceholderImage('hero-image', 'Taller Medina', ['#f97316', '#dc2626'], 'workshop');
// generatePlaceholderImage('about-image', 'Nuestro Taller', ['#3b82f6', '#8b5cf6'], 'workshop');

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function () {
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 100);
    });
});

// Appointment button handlers
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Agendar')) {
        button.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                // Scroll to contact form
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                    const offset = 80;
                    const targetPosition = contactSection.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
});

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Console message
console.log('%c🔧 Taller Medina', 'font-size: 24px; font-weight: bold; color: #f97316;');
console.log('%cSitio web desarrollado con ❤️', 'font-size: 14px; color: #94a3b8;');

// Initialize all animations on page load
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});
