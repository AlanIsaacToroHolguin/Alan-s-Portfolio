// translations.js - Sistema de traducciones
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About me",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            greeting: "Hello, I'm Alan Toro",
            role: "Full Stack Developer",
            description: "Backend architecture & cloud integrations specialist building scalable solutions in the Microsoft ecosystem, with a focus on AI-driven implementations and Azure services.",
            viewProjects: "View Projects",
            contact: "Contact",
            downloadCV: "Download CV"
        },
        // About Section
        about: {
            title: "About me",
            text1: "I am a Full-Stack Developer experienced in Java, .NET, and Node.js. I specialize in backend architecture and cloud integrations, with a growing focus on AI-driven solutions using Azure Cognitive Search and LLM implementations.",
            text2: "During my experience at MAS Global Consulting — a Microsoft Partner organization — I have worked on building scalable applications and integrating Azure services to optimize real-world systems. My goal is to deliver high-quality code while expanding my expertise in cloud-native infrastructures and AI integrations.",
            stat1Title: "Completed Projects",
            stat2Title: "Months of experience",
            stat3Title: "Technologies Mastered"
        },
        // Experience Section
        experience: {
            title: "Experience",
            role: "Junior Software Developer & Intern",
            company: "MAS Global Consulting · Microsoft Partner",
            status: "● Current",
            period: "Dec 2025 – Jun 2026 · 6 mo",
            location: "Medellín, Colombia · On-site",
            desc: "Software Developer at Más Global Consulting, a Microsoft Partner organization, specializing in fullstack development, cloud infrastructure, and AI-driven solutions within the Microsoft ecosystem.",
            li1: "Fullstack Development: Implemented dynamic frontend components using React and TypeScript, integrating them with backend services developed in .NET / C#.",
            li2: "Generative AI Integration: Led the integration of OpenAI models for internal process automation, improving operational efficiency through applied artificial intelligence.",
            li3: "Cloud Infrastructure: Managed configuration and deployment of applications in Microsoft Azure, ensuring correct backend service operation and cloud solution scalability.",
            li4: "CI/CD Pipeline: Optimized software traceability and deployment through Azure DevOps workflows, reducing production errors and improving technical documentation.",
            li5: "Requirements Analysis: Actively collaborated in gathering technical and functional requirements, translating business needs into software solutions aligned with best practices."
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            databases: "Databases"
        },
        // Projects Section
        projects: {
            title: "Projects",
            project1: {
                title: "Microservices Architecture",
                description: "Designed and implemented a distributed microservices architecture with an API Gateway, independent services using MySQL and MongoDB, and a React frontend consuming the unified API."
            },
            project2: {
                title: "Band & Rehearsal Manager",
                description: "Fullstack app for musicians to manage bands, schedule rehearsals, track attendance and organize their song repertoire with a kanban-style setlist board."
            },
            project3: {
                title: "Proximidad App",
                description: "LinkedIn-inspired professional networking platform built as a team project, designed with improved UX and features to better connect users with job opportunities."
            },
            project4: {
                title: "AI Chat Assistant",
                description: "Fullstack AI chatbot with real-time streaming responses, multi-conversation management, JWT authentication, and markdown rendering — powered by Groq API and OpenAI."
            },
            project5: {
                title: "Electric Guitar E-Commerce",
                description: "Enterprise e-commerce platform for electric guitars built with Spring Boot, featuring JWT authentication, product catalog, shopping cart, order state machines, and an admin dashboard with sales analytics."
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
            rights: "Alan Toro. All rights reserved."
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
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        // Sección Hero
        hero: {
            greeting: "Hola, soy Alan Toro",
            role: "Desarrollador Full Stack",
            description: "Especialista en arquitectura backend e integraciones en la nube, construyendo soluciones escalables en el ecosistema Microsoft con enfoque en implementaciones impulsadas por IA.",
            viewProjects: "Ver Proyectos",
            contact: "Contacto",
            downloadCV: "Descargar CV"
        },
        // Sección Sobre Mí
        about: {
            title: "Sobre mí",
            text1: "Soy un Desarrollador Full-Stack con experiencia en Java, .NET y Node.js. Me especializo en arquitectura backend e integraciones en la nube, con un enfoque creciente en soluciones impulsadas por IA usando Azure Cognitive Search e implementaciones LLM.",
            text2: "Durante mi experiencia en MAS Global Consulting — una organización Microsoft Partner — he trabajado en la construcción de aplicaciones escalables e integración de servicios de Azure para optimizar sistemas del mundo real. Mi objetivo es entregar código de alta calidad mientras expando mi experiencia en infraestructuras cloud-native e integraciones de IA.",
            stat1Title: "Proyectos Completados",
            stat2Title: "Meses de experiencia",
            stat3Title: "Tecnologías Dominadas"
        },
        // Sección Experiencia
        experience: {
            title: "Experiencia",
            role: "Junior Software Developer & Practicante",
            company: "MAS Global Consulting · Microsoft Partner",
            status: "● Actual",
            period: "Dic 2025 – Jun 2026 · 6 meses",
            location: "Medellín, Colombia · Presencial",
            desc: "Desarrollador de Software en Más Global Consulting, una organización Microsoft Partner, especializado en desarrollo fullstack, infraestructura cloud y soluciones impulsadas por IA dentro del ecosistema Microsoft.",
            li1: "Desarrollo Fullstack: Implementé componentes dinámicos en el frontend usando React y TypeScript, integrándolos con servicios backend desarrollados en .NET / C#.",
            li2: "Integración de IA Generativa: Lideré la integración de modelos de OpenAI para la automatización de procesos internos, mejorando la eficiencia operativa mediante IA aplicada.",
            li3: "Infraestructura Cloud: Gestioné la configuración y despliegue de aplicaciones en Microsoft Azure, asegurando la correcta operación de servicios backend y la escalabilidad en la nube.",
            li4: "CI/CD: Optimicé la trazabilidad y el despliegue de software mediante flujos de trabajo en Azure DevOps, reduciendo errores en producción y mejorando la documentación técnica.",
            li5: "Análisis de Requerimientos: Colaboré activamente en el levantamiento de requerimientos técnicos y funcionales, traduciendo necesidades de negocio en soluciones de software alineadas a buenas prácticas."
        },
        // Sección Habilidades
        skills: {
            title: "Habilidades Técnicas",
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            databases: "Bases de Datos"
        },
        // Sección Proyectos
        projects: {
            title: "Últimos Proyectos",
            project1: {
                title: "Arquitectura de Microservicios",
                description: "Diseñé e implementé una arquitectura de microservicios distribuida con API Gateway, servicios independientes usando MySQL y MongoDB, y frontend en React consumiendo la API unificada."
            },
            project2: {
                title: "Band & Rehearsal Manager",
                description: "App fullstack para músicos: gestión de bandas, ensayos, asistencia y repertorio con tablero kanban de setlist."
            },
            project3: {
                title: "App Proximidad",
                description: "Plataforma de networking profesional inspirada en LinkedIn, desarrollada en equipo, con UX mejorada y funcionalidades para conectar mejor a los usuarios con oportunidades laborales."
            },
            project4: {
                title: "AI Chat Assistant",
                description: "Chatbot de IA fullstack con respuestas en streaming en tiempo real, gestión de conversaciones múltiples, autenticación JWT y renderizado de markdown — impulsado por Groq API y OpenAI."
            },
            project5: {
                title: "E-Commerce de Guitarras Eléctricas",
                description: "Plataforma e-commerce empresarial para guitarras eléctricas con Spring Boot, autenticación JWT, catálogo de productos, carrito de compras, máquinas de estado para pedidos y dashboard administrativo con analítica de ventas."
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
            rights: "Alan Toro. Todos los derechos reservados."
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
    const keys = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
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

    // Actualizar Experience
    if (sectionTitles[1]) sectionTitles[1].textContent = t.experience.title;
    const expRole = document.querySelector('.experience-role');
    const expCompany = document.querySelector('.experience-company-name');
    const expStatus = document.querySelector('.experience-status');
    const expPeriod = document.querySelector('.experience-period');
    const expLocation = document.querySelector('.experience-location');
    const expDesc = document.querySelector('.experience-desc');
    if (expRole) expRole.textContent = t.experience.role;
    if (expCompany) expCompany.innerHTML = `MAS Global Consulting &nbsp;·&nbsp; Microsoft Partner`;
    if (expStatus) expStatus.textContent = t.experience.status;
    if (expPeriod) expPeriod.innerHTML = `<i class="fas fa-calendar-alt"></i> ${t.experience.period}`;
    if (expLocation) expLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.experience.location}`;
    if (expDesc) expDesc.textContent = t.experience.desc;
    const expListItems = document.querySelectorAll('.experience-list li');
    const liKeys = ['li1','li2','li3','li4','li5'];
    expListItems.forEach((li, i) => { if (liKeys[i]) li.textContent = t.experience[liKeys[i]]; });

    // Actualizar Skills
    if (sectionTitles[2]) sectionTitles[2].textContent = t.skills.title;

    const skillCategories = document.querySelectorAll('.skill-category h3');
    if (skillCategories[0]) skillCategories[0].textContent = t.skills.frontend;
    if (skillCategories[1]) skillCategories[1].textContent = t.skills.backend;
    if (skillCategories[2]) skillCategories[2].textContent = t.skills.cloud;
    if (skillCategories[3]) skillCategories[3].textContent = t.skills.databases;

    // Actualizar Projects
    if (sectionTitles[3]) sectionTitles[3].textContent = t.projects.title;

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
    if (projectCards[3]) {
        projectCards[3].querySelector('h3').textContent = t.projects.project4.title;
        projectCards[3].querySelector('p').textContent = t.projects.project4.description;
    }
    if (projectCards[4]) {
        projectCards[4].querySelector('h3').textContent = t.projects.project5.title;
        projectCards[4].querySelector('p').textContent = t.projects.project5.description;
    }

    // Actualizar Contact
    if (sectionTitles[4]) sectionTitles[4].textContent = t.contact.title;
    
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
    if (footerP) footerP.innerHTML = `&copy; 2026 ${t.footer.rights}`;
    
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