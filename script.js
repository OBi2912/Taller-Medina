/* Language Switching Functionality */
const translations = {
    es: {
        // Navigation
        "brand-subtitle": "Servicios Mecánicos",
        "nav-home": "Inicio",
        "nav-services": "Servicios",
        "nav-about": "Nosotros",
        "nav-contact": "Contacto",
        "schedule-appointment": "Agendar Cita",

        // Hero Section
        "experience-badge": "Más de 15 años de experiencia",
        "hero-title-1": "Tu Auto en las",
        "hero-title-2": "Mejores Manos",
        "hero-description": "Servicios mecánicos profesionales con tecnología de punta. Diagnóstico preciso, reparaciones garantizadas y atención personalizada.",
        "schedule-service": "Agendar Servicio",
        "view-services": "Ver Servicios",
        "stat-years": "Años",
        "stat-clients": "Clientes",
        "stat-satisfaction": "Satisfacción",
        "guarantee-title": "Garantía Total",
        "guarantee-subtitle": "En todos nuestros servicios",

        // Services Section
        "services-badge": "Nuestros Servicios",
        "services-title-1": "Servicios",
        "services-title-2": "Profesionales",
        "services-description": "Ofrecemos una amplia gama de servicios mecánicos con la más alta calidad y tecnología",

        // Service Cards
        "service-1-title": "Diagnóstico Computarizado",
        "service-1-desc": "Análisis completo con equipos de última generación para detectar cualquier falla en tu vehículo.",
        "service-1-item-1": "Escaneo de códigos de error",
        "service-1-item-2": "Análisis de sistemas electrónicos",
        "service-1-item-3": "Reporte detallado",

        "service-2-title": "Sistema Eléctrico",
        "service-2-desc": "Reparación y mantenimiento de todo el sistema eléctrico de tu vehículo.",
        "service-2-item-1": "Batería y alternador",
        "service-2-item-2": "Sistema de arranque",
        "service-2-item-3": "Iluminación y accesorios",

        "service-3-title": "Mantenimiento Preventivo",
        "service-3-desc": "Servicios programados para mantener tu vehículo en óptimas condiciones.",
        "service-3-item-1": "Cambio de aceite y filtros",
        "service-3-item-2": "Revisión de frenos",
        "service-3-item-3": "Alineación y balanceo",

        "service-4-title": "Motor y Transmisión",
        "service-4-desc": "Reparación especializada de motor y sistemas de transmisión.",
        "service-4-item-1": "Afinación de motor",
        "service-4-item-2": "Reparación de transmisión",
        "service-4-item-3": "Cambio de embrague",

        "service-5-title": "Suspensión y Dirección",
        "service-5-desc": "Servicio completo de suspensión y sistema de dirección.",
        "service-5-item-1": "Cambio de amortiguadores",
        "service-5-item-2": "Reparación de dirección",
        "service-5-item-3": "Revisión de geometría",

        "service-6-title": "Aire Acondicionado",
        "service-6-desc": "Mantenimiento y reparación del sistema de climatización.",
        "service-6-item-1": "Recarga de gas refrigerante",
        "service-6-item-2": "Limpieza de sistema",
        "service-6-item-3": "Reparación de compresor",

        // Classic Cars Section
        "work-badge": "Nuestro Trabajo",
        "classics-title-1": "Pasión por los",
        "classics-title-2": "Clásicos",
        "classics-description": "Trabajamos con vehículos de todas las épocas, desde clásicos hasta modernos",
        "classic-1-title": "Restauración Clásica",
        "classic-1-desc": "Devolvemos la vida a los clásicos",
        "classic-2-title": "Mantenimiento Especializado",
        "classic-2-desc": "Cuidado experto para cada detalle",

        // About Section
        "about-badge": "Sobre Nosotros",
        "about-title-1": "Experiencia y",
        "about-title-2": "Compromiso",
        "about-description": "Con más de 15 años de experiencia en el sector automotriz, Taller Medina se ha consolidado como un referente en servicios mecánicos de calidad. Nuestro equipo de técnicos certificados utiliza tecnología de punta para garantizar el mejor servicio.",
        "owner-title": "Ingeniero Mecánico",
        "owner-role": "Propietario y Director Técnico",
        "feature-1-title": "Técnicos Certificados",
        "feature-1-desc": "Personal altamente capacitado y con certificaciones internacionales.",
        "feature-2-title": "Tecnología Avanzada",
        "feature-2-desc": "Equipos de diagnóstico y herramientas de última generación.",
        "feature-3-title": "Servicio Rápido",
        "feature-3-desc": "Respetamos tu tiempo con servicios eficientes y puntuales.",

        // Contact Section
        "contact-badge": "Contáctanos",
        "contact-title-1": "Agenda tu",
        "contact-title-2": "Cita Hoy",
        "contact-description": "Estamos listos para atender tu vehículo con el mejor servicio",
        "form-name": "Nombre Completo",
        "form-email": "Correo Electrónico",
        "form-phone": "Teléfono",
        "form-service": "Servicio Requerido",
        "form-message": "Mensaje",
        "send-message": "Enviar Mensaje",
        "contact-address-title": "Dirección",
        "contact-phone-title": "Teléfono",
        "contact-email-title": "Email",
        "contact-hours-title": "Horario",
        "contact-hours": "Lunes - Viernes: 8:00 AM - 6:00 PM<br>Sábados: 9:00 AM - 2:00 PM",

        // Footer
        "footer-description": "Tu taller de confianza con más de 15 años de experiencia brindando servicios mecánicos de calidad.",
        "footer-quick-links": "Enlaces Rápidos",
        "footer-services": "Servicios",
        "footer-service-1": "Diagnóstico",
        "footer-service-2": "Mantenimiento",
        "footer-service-3": "Reparaciones",
        "footer-service-4": "Emergencias"
    },
    en: {
        // Navigation
        "brand-subtitle": "Mechanical Services",
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-about": "About",
        "nav-contact": "Contact",
        "schedule-appointment": "Schedule Appointment",

        // Hero Section
        "experience-badge": "Over 15 years of experience",
        "hero-title-1": "Your Car in the",
        "hero-title-2": "Best Hands",
        "hero-description": "Professional mechanical services with cutting-edge technology. Precise diagnostics, guaranteed repairs, and personalized attention.",
        "schedule-service": "Schedule Service",
        "view-services": "View Services",
        "stat-years": "Years",
        "stat-clients": "Clients",
        "stat-satisfaction": "Satisfaction",
        "guarantee-title": "Total Warranty",
        "guarantee-subtitle": "On all our services",

        // Services Section
        "services-badge": "Our Services",
        "services-title-1": "Professional",
        "services-title-2": "Services",
        "services-description": "We offer a wide range of mechanical services with the highest quality and technology",

        // Service Cards
        "service-1-title": "Computerized Diagnostics",
        "service-1-desc": "Complete analysis with state-of-the-art equipment to detect any failure in your vehicle.",
        "service-1-item-1": "Error code scanning",
        "service-1-item-2": "Electronic systems analysis",
        "service-1-item-3": "Detailed report",

        "service-2-title": "Electrical System",
        "service-2-desc": "Repair and maintenance of your vehicle's entire electrical system.",
        "service-2-item-1": "Battery and alternator",
        "service-2-item-2": "Starting system",
        "service-2-item-3": "Lighting and accessories",

        "service-3-title": "Preventive Maintenance",
        "service-3-desc": "Scheduled services to keep your vehicle in optimal conditions.",
        "service-3-item-1": "Oil and filter changes",
        "service-3-item-2": "Brake inspection",
        "service-3-item-3": "Alignment and balancing",

        "service-4-title": "Engine and Transmission",
        "service-4-desc": "Specialized repair of engine and transmission systems.",
        "service-4-item-1": "Engine tuning",
        "service-4-item-2": "Transmission repair",
        "service-4-item-3": "Clutch replacement",

        "service-5-title": "Suspension and Steering",
        "service-5-desc": "Complete suspension and steering system service.",
        "service-5-item-1": "Shock absorber replacement",
        "service-5-item-2": "Steering repair",
        "service-5-item-3": "Geometry check",

        "service-6-title": "Air Conditioning",
        "service-6-desc": "Maintenance and repair of the air conditioning system.",
        "service-6-item-1": "Refrigerant recharge",
        "service-6-item-2": "System cleaning",
        "service-6-item-3": "Compressor repair",

        // Classic Cars Section
        "work-badge": "Our Work",
        "classics-title-1": "Passion for",
        "classics-title-2": "Classics",
        "classics-description": "We work with vehicles from all eras, from classics to modern",
        "classic-1-title": "Classic Restoration",
        "classic-1-desc": "We bring classics back to life",
        "classic-2-title": "Specialized Maintenance",
        "classic-2-desc": "Expert care for every detail",

        // About Section
        "about-badge": "About Us",
        "about-title-1": "Experience and",
        "about-title-2": "Commitment",
        "about-description": "With over 15 years of experience in the automotive sector, Taller Medina has established itself as a benchmark in quality mechanical services. Our team of certified technicians uses cutting-edge technology to guarantee the best service.",
        "owner-title": "Mechanical Engineer",
        "owner-role": "Owner and Technical Director",
        "feature-1-title": "Certified Technicians",
        "feature-1-desc": "Highly trained personnel with international certifications.",
        "feature-2-title": "Advanced Technology",
        "feature-2-desc": "State-of-the-art diagnostic equipment and tools.",
        "feature-3-title": "Fast Service",
        "feature-3-desc": "We respect your time with efficient and punctual services.",

        // Contact Section
        "contact-badge": "Contact Us",
        "contact-title-1": "Schedule Your",
        "contact-title-2": "Appointment Today",
        "contact-description": "We are ready to service your vehicle with the best service",
        "form-name": "Full Name",
        "form-email": "Email Address",
        "form-phone": "Phone",
        "form-service": "Required Service",
        "form-message": "Message",
        "send-message": "Send Message",
        "contact-address-title": "Address",
        "contact-phone-title": "Phone",
        "contact-email-title": "Email",
        "contact-hours-title": "Hours",
        "contact-hours": "Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 2:00 PM",

        // Footer
        "footer-description": "Your trusted workshop with over 15 years of experience providing quality mechanical services.",
        "footer-quick-links": "Quick Links",
        "footer-services": "Services",
        "footer-service-1": "Diagnostics",
        "footer-service-2": "Maintenance",
        "footer-service-3": "Repairs",
        "footer-service-4": "Emergencies"
    }
};

// Current language
let currentLang = 'es';

// Language switching function
function switchLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-lang attributes
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update language toggle button
    const langText = document.getElementById('lang-text');
    if (langText) {
        langText.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Store language preference
    localStorage.setItem('taller-medina-lang', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('taller-medina-lang') || 'es';
    switchLanguage(savedLang);
});

// Language toggle button event listener
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            switchLanguage(newLang);
        });
    }
});

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
        submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.textContent = currentLang === 'es' ? '✓ Mensaje Enviado' : '✓ Message Sent';
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
