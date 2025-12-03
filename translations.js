// translations.js - Sistema de traducciones
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            greeting: "Hello, I'm Alan Toro",
            role: "Full Stack Developer",
            description: "Full Stack Developer passionate about creating exceptional web experiences and innovative solutions that connect ideas with technology.",
            viewProjects: "View Projects",
            contact: "Contact",
            downloadCV: "Download CV"
        },
        // About Section
        about: {
            title: "About me",
            text1: "I'm a web developer with over 6 months of experience building modern and scalable web applications. I specialize in both frontend and backend technologies, always striving to learn new tools and enhance my technical skills.",
            text2: "My passion lies in turning complex ideas into clean, elegant interfaces that deliver an exceptional user experience. I work on both personal projects and team collaborations, creating innovative solutions that combine design and functionality.",
            stat1Title: "Completed Projects",
            stat2Title: "Months of experience",
            stat3Title: "Satisfied clients"
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools"
        },
        // Projects Section
        projects: {
            title: "Latest Projects",
            project1: {
                title: "Microservices Architecture",
                description: "Developed a microservices application using MySQL for one service and MongoDB for another."
            },
            project2: {
                title: "Task Management App (Coming soon)",
                description: "Developed a Task Management app using the MERN stack"
            },
            project3: {
                title: "Proximidad App",
                description: "Outstanding team project from my studies at SENA (National Learning Service): a platform to help users find job opportunities."
            }
        },
        // Contact Section
        contact: {
            title: "Contact Me",
            subtitle: "Let's Work Together!",
            description: "I am available for freelance projects and new opportunities. Feel free to get in touch. ✅",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Write your Message",
            sendButton: "Send message",
            location: "Medellín-Colombia"
        },
        // Footer
        footer: {
            rights: "My Portfolio. All rights reserved."
        },
        // Notifications
        notifications: {
            sending: "Sending message...",
            success: "Message sent successfully!",
            error: "Error sending message. Please try again.",
            fillFields: "Please fill in all fields",
            invalidEmail: "Please enter a valid email",
            cvDownloaded: "CV downloaded successfully"
        }
    },
    es: {
        // Navegación
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        // Sección Hero
        hero: {
            greeting: "Hola, soy Alan Toro",
            role: "Desarrollador Full Stack",
            description: "Desarrollador Full Stack apasionado por crear experiencias web excepcionales y soluciones innovadoras que conectan ideas con tecnología.",
            viewProjects: "Ver Proyectos",
            contact: "Contacto",
            downloadCV: "Descargar CV"
        },
        // Sección Sobre Mí
        about: {
            title: "Sobre mí",
            text1: "Soy un desarrollador web con más de 6 meses de experiencia construyendo aplicaciones web modernas y escalables. Me especializo en tecnologías frontend y backend, siempre buscando aprender nuevas herramientas y mejorar mis habilidades técnicas.",
            text2: "Mi pasión radica en convertir ideas complejas en interfaces limpias y elegantes que brinden una experiencia de usuario excepcional. Trabajo tanto en proyectos personales como en colaboraciones en equipo, creando soluciones innovadoras que combinan diseño y funcionalidad.",
            stat1Title: "Proyectos Completados",
            stat2Title: "Meses de experiencia",
            stat3Title: "Clientes Satisfechos"
        },
        // Sección Habilidades
        skills: {
            title: "Habilidades Técnicas",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Herramientas"
        },
        // Sección Proyectos
        projects: {
            title: "Últimos Proyectos",
            project1: {
                title: "Arquitectura de Microservicios",
                description: "Desarrollé una aplicación de microservicios utilizando MySQL para un servicio y MongoDB para otro."
            },
            project2: {
                title: "App de Gestión de Tareas (Próximamente)",
                description: "Desarrollé una aplicación de gestión de tareas usando el stack MERN"
            },
            project3: {
                title: "App Proximidad",
                description: "Proyecto destacado en equipo de mis estudios en SENA (Servicio Nacional de Aprendizaje): una plataforma para ayudar a los usuarios a encontrar oportunidades laborales."
            }
        },
        // Sección Contacto
        contact: {
            title: "Contáctame",
            subtitle: "¡Trabajemos Juntos!",
            description: "Estoy disponible para proyectos freelance y nuevas oportunidades. No dudes en contactarme. ✅",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Correo electrónico",
            subjectPlaceholder: "Asunto",
            messagePlaceholder: "Escribe tu Mensaje",
            sendButton: "Enviar mensaje",
            location: "Medellín-Colombia"
        },
        // Footer
        footer: {
            rights: "Mi Portafolio. Todos los derechos reservados."
        },
        // Notificaciones
        notifications: {
            sending: "Enviando mensaje...",
            success: "¡Mensaje enviado exitosamente!",
            error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
            fillFields: "Por favor, completa todos los campos",
            invalidEmail: "Por favor, ingresa un email válido",
            cvDownloaded: "CV descargado exitosamente"
        }
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    console.log('Cambiando idioma a:', lang);
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    const t = translations[lang];
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('.nav-link');
    const keys = ['home', 'about', 'skills', 'projects', 'contact'];
    navLinks.forEach((link, index) => {
        if (keys[index]) {
            link.textContent = t.nav[keys[index]];
        }
    });
    
    // Actualizar Hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) heroTitle.textContent = t.hero.greeting;
    if (heroSubtitle) heroSubtitle.textContent = t.hero.role;
    if (heroDescription) heroDescription.textContent = t.hero.description;
    
    // Actualizar botones del hero
    const heroBtns = document.querySelectorAll('.hero-buttons .btn');
    if (heroBtns[0]) heroBtns[0].textContent = t.hero.viewProjects;
    if (heroBtns[1]) heroBtns[1].textContent = t.hero.contact;
    
    const cvBtn = document.querySelector('.btn-cv');
    if (cvBtn) {
        cvBtn.innerHTML = `<i class="fas fa-download"></i> ${t.hero.downloadCV}`;
    }
    
    // Actualizar About
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = t.about.title;
    
    const aboutTexts = document.querySelectorAll('.about-text p');
    if (aboutTexts[0]) aboutTexts[0].textContent = t.about.text1;
    if (aboutTexts[1]) aboutTexts[1].textContent = t.about.text2;
    
    const statTitles = document.querySelectorAll('.stat-item p');
    if (statTitles[0]) statTitles[0].textContent = t.about.stat1Title;
    if (statTitles[1]) statTitles[1].textContent = t.about.stat2Title;
    if (statTitles[2]) statTitles[2].textContent = t.about.stat3Title;
    
    // Actualizar Skills
    if (sectionTitles[1]) sectionTitles[1].textContent = t.skills.title;
    
    const skillCategories = document.querySelectorAll('.skill-category h3');
    if (skillCategories[0]) skillCategories[0].textContent = t.skills.frontend;
    if (skillCategories[1]) skillCategories[1].textContent = t.skills.backend;
    if (skillCategories[2]) skillCategories[2].textContent = t.skills.tools;
    
    // Actualizar Projects
    if (sectionTitles[2]) sectionTitles[2].textContent = t.projects.title;
    
    const projectCards = document.querySelectorAll('.project-content');
    if (projectCards[0]) {
        projectCards[0].querySelector('h3').textContent = t.projects.project1.title;
        projectCards[0].querySelector('p').textContent = t.projects.project1.description;
    }
    if (projectCards[1]) {
        projectCards[1].querySelector('h3').textContent = t.projects.project2.title;
        projectCards[1].querySelector('p').textContent = t.projects.project2.description;
    }
    if (projectCards[2]) {
        projectCards[2].querySelector('h3').textContent = t.projects.project3.title;
        projectCards[2].querySelector('p').textContent = t.projects.project3.description;
    }
    
    // Actualizar Contact
    if (sectionTitles[3]) sectionTitles[3].textContent = t.contact.title;
    
    const contactInfoH3 = document.querySelector('.contact-info h3');
    const contactInfoP = document.querySelector('.contact-info p');
    if (contactInfoH3) contactInfoH3.textContent = t.contact.subtitle;
    if (contactInfoP) contactInfoP.textContent = t.contact.description;
    
    // Actualizar placeholders del formulario
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const subjectInput = document.querySelector('input[name="subject"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    const submitBtn = document.querySelector('.contact-form .btn-primary');
    
    if (nameInput) nameInput.placeholder = t.contact.namePlaceholder;
    if (emailInput) emailInput.placeholder = t.contact.emailPlaceholder;
    if (subjectInput) subjectInput.placeholder = t.contact.subjectPlaceholder;
    if (messageTextarea) messageTextarea.placeholder = t.contact.messagePlaceholder;
    if (submitBtn) submitBtn.textContent = t.contact.sendButton;
    
    // Actualizar ubicación
    const contactMethods = document.querySelectorAll('.contact-method span');
    if (contactMethods[2]) contactMethods[2].textContent = t.contact.location;
    
    // Actualizar Footer
    const footerP = document.querySelector('.footer p');
    if (footerP) footerP.innerHTML = `&copy; 2024 ${t.footer.rights}`;
    
    // Actualizar los botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    console.log('Idioma cambiado exitosamente a:', lang);
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando idiomas...');
    
    // Obtener idioma guardado o usar inglés por defecto
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    console.log('Idioma detectado:', savedLang);
    
    // Aplicar idioma
    changeLanguage(savedLang);
    
    // Agregar event listeners a los botones de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Botones de idioma encontrados:', langButtons.length);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            console.log('Click en botón de idioma:', lang);
            changeLanguage(lang);
        });
    });
});

console.log('translations.js cargado correctamente');