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

// Efecto de scroll en navbar — transparente sobre hero oscuro, sólido al scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ────────────────────────────────────────────────
// Smooth scroll (Lenis) + scroll reveals
// ────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    // Init Lenis only on devices that respect motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Make in-page anchor links use Lenis
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', (e) => {
                const targetId = a.getAttribute('href');
                if (!targetId || targetId === '#') return;
                const el = document.querySelector(targetId);
                if (el) {
                    e.preventDefault();
                    lenis.scrollTo(el, { offset: -70, duration: 1.4 });
                }
            });
        });
    }

    // Auto-apply .reveal to commonly-animated elements (keeps backwards compat)
    const autoReveal = document.querySelectorAll(
        '.section-title, .skill-category, .project-card, .stat-item, .about-text, .experience-card, .article-card, .contact-info, .contact-form'
    );
    autoReveal.forEach(el => el.classList.add('reveal'));

    // Stagger children inside groups
    document.querySelectorAll('.skills-grid, .projects-grid, .about-stats, .articles-grid').forEach(group => {
        group.querySelectorAll('.reveal').forEach((child, i) => {
            child.style.setProperty('--reveal-delay', `${i * 0.08}s`);
        });
    });

    // Reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        revealObserver.observe(el);
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

        const submitBtn   = this.querySelector('button[type="submit"]');
        const submitLabel = submitBtn.querySelector('.form-submit-label');
        const statusEl    = this.querySelector('.form-status');
        const originalLabel = submitLabel ? submitLabel.textContent : 'Send message';

        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = currentLang === 'en' ? 'Sending…' : 'Enviando…';
        if (statusEl) { statusEl.textContent = t.sending; statusEl.className = 'form-status'; }
        showNotification(t.sending, 'info');

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                name:    name,
                email:   email,
                subject: subject,
                message: message
            });
            showNotification(t.success, 'success');
            if (statusEl) { statusEl.textContent = t.success; statusEl.className = 'form-status is-success'; }
            submitBtn.classList.remove('is-loading');
            submitBtn.classList.add('is-success');
            if (submitLabel) submitLabel.textContent = currentLang === 'en' ? 'Sent ✓' : 'Enviado ✓';
            this.reset();
            setTimeout(() => {
                submitBtn.classList.remove('is-success');
                submitBtn.disabled = false;
                if (submitLabel) submitLabel.textContent = originalLabel;
                if (statusEl) { statusEl.textContent = ''; statusEl.className = 'form-status'; }
            }, 3200);
        } catch (err) {
            console.error('EmailJS error:', err);
            showNotification(t.error, 'error');
            if (statusEl) { statusEl.textContent = t.error; statusEl.className = 'form-status is-error'; }
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
            if (submitLabel) submitLabel.textContent = originalLabel;
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

// (Typewriter desactivado — chocaba con tipografía editorial y rompía los tags HTML del hero.
// El reveal animado del hero se hace ahora vía CSS / IntersectionObserver en Fase 3.)

// Año dinámico en el footer
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ────────────────────────────────────────────────
// Custom cursor + magnetic buttons (desktop only)
// ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer) return;

    const dot  = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    const dotLerp  = 0.45;
    const ringLerp = 0.18;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.body.classList.add('cursor-active');
    });

    window.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    window.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));

    function tick() {
        dotX  += (mouseX - dotX)  * dotLerp;
        dotY  += (mouseY - dotY)  * dotLerp;
        ringX += (mouseX - ringX) * ringLerp;
        ringY += (mouseY - ringY) * ringLerp;
        dot.style.transform  = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Hover detection on interactive elements
    const hoverSelector = 'a, button, .btn, .project-card, .skill-category, .article-card, .contact-method, .lang-btn, .hamburger, input, textarea';
    document.querySelectorAll(hoverSelector).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Magnetic effect on primary buttons (subtle)
    if (!prefersReducedMotion) {
        const magneticEls = document.querySelectorAll('.btn-primary, .btn-cv, .form-submit, .social-link');
        magneticEls.forEach(el => {
            el.classList.add('magnetic');
            const strength = 0.25;
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });
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