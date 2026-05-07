// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de scroll en navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat-item, .about-text, .experience-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contador animado para estadísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Activar contadores cuando sean visibles
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-item h3');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                animateCounter(counter, target);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// ============================================
// EmailJS — Configuración
// 1. Crea cuenta gratis en https://emailjs.com
// 2. Add Email Service (Gmail) → copia el Service ID
// 3. Create Email Template → copia el Template ID
//    Variables del template: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Account → API Keys → copia el Public Key
// ============================================
/* global emailjs */
const EMAILJS_SERVICE_ID  = 'service_guaqa2e';
const EMAILJS_TEMPLATE_ID = 'template_he9gamt';
const EMAILJS_PUBLIC_KEY  = 'TYj6h6StXtxxWqVDb';

emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        const t = translations[currentLang].notifications;

        const name    = this.querySelector('[name="name"]').value.trim();
        const email   = this.querySelector('[name="email"]').value.trim();
        const subject = this.querySelector('[name="subject"]').value.trim();
        const message = this.querySelector('[name="message"]').value.trim();

        if (!name || !email || !subject || !message) {
            showNotification(t.fillFields, 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification(t.invalidEmail, 'error');
            return;
        }

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';
        showNotification(t.sending, 'info');

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                name:    name,
                email:   email,
                subject: subject,
                message: message
            });
            showNotification(t.success, 'success');
            this.reset();
        } catch (err) {
            console.error('EmailJS error:', err);
            showNotification(t.error, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Validación de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Colores según el tipo
    if (type === 'success') {
        notification.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
    } else {
        notification.style.background = 'linear-gradient(45deg, #00d4ff, #0099cc)';
    }
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Efecto de partículas en el hero (opcional)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${Math.random() * 15 + 20}s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        hero.appendChild(particle);
    }
}

// CSS para animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Activar partículas
document.addEventListener('DOMContentLoaded', createParticles);

// Efecto de typing en el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Activar efecto de typing cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Smooth scroll mejorado para navegación
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Ajustar por navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Mejorar accesibilidad del teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Cerrar menú móvil con Escape
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Lazy loading para imágenes (si se agregan en el futuro)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Activar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Preloader (opcional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar animaciones según el dispositivo
if (isMobile()) {
    // Reducir animaciones en móvil para mejor rendimiento
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
}

// Active nav section highlight
const allSections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.35 });

allSections.forEach(s => sectionObserver.observe(s));

// Resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Handle CV download
const cvDownloadBtn = document.querySelector('.btn-cv');
if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // URL real de tu CV
        const cvUrl = 'assets/cv/Software Developer_Alan Toro_Resume .pdf';
        
        // Crear link temporal para descarga
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'AlanToroCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Obtener idioma actual para la notificación
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        const message = translations[currentLang].notifications.cvDownloaded;
        
        showNotification(message, 'success');
    });
}

console.log('Portfolio cargado correctamente! 🚀');