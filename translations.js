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
            articles: "Writing",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            greeting: "Hello, I'm <em>Alan Toro</em>",
            role: "Full Stack Developer",
            description: "Building scalable web applications and AI-powered products with C#/.NET, React, Python and Microsoft Azure. Focused on clean code, real-world impact, and shipping things that work.",
            viewProjects: "View Projects",
            contact: "Contact",
            downloadCV: "Download CV",
            metaLeft: "Full Stack Developer, Medellín",
            metaRight: "Open to opportunities"
        },
        // About Section
        about: {
            title: "About me",
            text1: "I am a Full-Stack Developer with experience across the stack: from React and TypeScript interfaces to C#/.NET, Python and Node.js APIs, with a growing focus on AI integrations using Azure AI Foundry models, RAG and agentic frameworks.",
            text2: "I've built production applications in Microsoft Partner environments, integrating Azure services and AI workflows into real-world systems. I thrive in international environments and my goal is to keep delivering high-quality code while expanding my expertise in AI-driven products and cloud-native infrastructures.",
            stat1Title: "Completed Projects",
            stat2Title: "Months of experience",
            stat3Title: "Technologies Used",
            eyebrow: "The short version"
        },
        // Experience Section
        experience: {
            title: "Experience",
            items: [
                {
                    role: "Software Development Assistant",
                    company: "Presencia Colombo Suiza",
                    period: "Jul 2026 – Sep 2026",
                    location: "Medellín, Colombia · Hybrid",
                    desc: "Software development, data analysis and process improvement.",
                    bullets: [
                        "Developed Python automation scripts to streamline repetitive tasks and improve data processing workflows.",
                        "Extracted, cleaned and consolidated data from multiple Excel sources, standardizing reports and improving data quality.",
                        "Used SQL and relational data structures to organize, validate and analyze information for operational reporting.",
                        "Developed and maintained Power BI dashboards and reports to visualize KPIs and improve organizational visibility.",
                        "Supported the development of web tools and prepared technical documentation to improve workflows and knowledge transfer."
                    ]
                },
                {
                    role: "Software Developer",
                    company: "MAS Global Consulting · Microsoft Partner",
                    period: "Dec 2025 – Jun 2026",
                    location: "Medellín, Colombia · On-site",
                    desc: "Software Developer at MAS Global Consulting, a Microsoft Partner organization, building and deploying web applications and AI-driven solutions with C#/.NET, React, Python and Microsoft Azure.",
                    bullets: [
                        "Developed full stack applications with React, TypeScript and .NET/C#, translating business requirements into practical, scalable solutions.",
                        "Built a resume-analysis MVP with Azure Document Intelligence that compares CVs against job descriptions, reducing recruiter screening time by 40%.",
                        "Led the development of an enterprise chatbot with Python, FastAPI and Agno, integrating OpenAI models through Azure AI Foundry and reducing website navigation time by ~20%.",
                        "Supported cloud applications with Azure and Azure DevOps: monitoring with Application Insights, automating CI/CD triggers and reducing Azure AI Search cost from $70 to $0 per month.",
                        "Collaborated with the team and stakeholders on requirements and problem solving, and authored a scalability report for 50, 100 and 200 users."
                    ]
                },
                {
                    role: "Associate Degree in Software Analysis and Development",
                    company: "SENA",
                    period: "2024 – 2026 · Graduated Jul 2026",
                    location: "Colombia"
                }
            ]
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            databases: "Databases",
            aiApis: "AI & APIs"
        },
        // Projects Section
        projects: {
            title: "Projects",
            items: [
                {
                    title: "KhozAI",
                    description: "Side project exploring AI-driven practice tooling for guitarists. Rule-based MVP that generates personalized routines from level, time available and weak areas. LLM integration on the roadmap. Built to learn how to ship a real product end-to-end."
                },
                {
                    title: "Electric Guitar E-Commerce",
                    description: "Enterprise e-commerce platform for electric guitars built with Spring Boot, featuring JWT authentication, product catalog, shopping cart, order state machines, and an admin dashboard with sales analytics."
                },
                {
                    title: "Band & Rehearsal Manager",
                    description: "Fullstack app for musicians to manage bands, schedule rehearsals, track attendance and organize their song repertoire with a kanban-style setlist board."
                },
                {
                    title: "AI Chat Assistant",
                    description: "Fullstack AI chatbot with real-time streaming responses, multi-conversation management, JWT authentication, and markdown rendering. Powered by Groq API and OpenAI."
                },
                {
                    title: "Proximidad App",
                    description: "LinkedIn-inspired professional networking platform built as a team project, designed with improved UX and features to better connect users with job opportunities."
                },
                {
                    title: "Microservices Architecture",
                    description: "Designed and implemented a distributed microservices architecture with an API Gateway, independent services using MySQL and MongoDB, and a React frontend consuming the unified API."
                }
            ]
        },
        // Articles Section
        articles: {
            title: "Writing & Thoughts",
            platform: "DEV.TO",
            read: "6 min read",
            articleTitle: "Stop Building Todo Apps: What I Learned Shipping a Real Side Project",
            articleExcerpt: "5 honest lessons from building KhozAI, my first real side project shipped end-to-end, and why your day job and side projects compound each other."
        },
        // Contact Section
        contact: {
            title: "Contact Me",
            eyebrow: "Currently open to opportunities",
            subtitle: "Let's Work Together!",
            description: "I am available for freelance projects and new opportunities. Feel free to get in touch.",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Write your Message",
            sendButton: "Send message",
            locationLabel: "Based in",
            availabilityLabel: "Availability",
            location: "Medellín, Colombia",
            remote: "Available for remote work"
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
            articles: "Artículos",
            contact: "Contacto"
        },
        // Sección Hero
        hero: {
            greeting: "Hola, soy <em>Alan Toro</em>",
            role: "Desarrollador Full Stack",
            description: "Construyendo aplicaciones web escalables y productos impulsados por IA con C#/.NET, React, Python y Microsoft Azure. Enfocado en código limpio, impacto real y entregar cosas que funcionan.",
            viewProjects: "Ver Proyectos",
            contact: "Contacto",
            downloadCV: "Descargar CV",
            metaLeft: "Desarrollador Full Stack, Medellín",
            metaRight: "Abierto a oportunidades"
        },
        // Sección Sobre Mí
        about: {
            title: "Sobre mí",
            text1: "Soy un Desarrollador Full-Stack con experiencia en todo el stack: desde interfaces en React y TypeScript hasta APIs en C#/.NET, Python y Node.js, con un enfoque creciente en integraciones de IA usando modelos de Azure AI Foundry, RAG y frameworks agénticos.",
            text2: "He construido aplicaciones en producción en entornos Microsoft Partner, integrando servicios de Azure y flujos con IA en sistemas reales. Disfruto los entornos internacionales y mi objetivo es seguir entregando código de alta calidad mientras expando mi experiencia en productos con IA e infraestructuras cloud-native.",
            stat1Title: "Proyectos Completados",
            stat2Title: "Meses de experiencia",
            stat3Title: "Tecnologías Utilizadas",
            eyebrow: "La versión corta"
        },
        // Sección Experiencia
        experience: {
            title: "Experiencia",
            items: [
                {
                    role: "Asistente de Desarrollo de Software",
                    company: "Presencia Colombo Suiza",
                    period: "Jul 2026 – Sep 2026",
                    location: "Medellín, Colombia · Híbrido",
                    desc: "Desarrollo de software, análisis de datos y mejora de procesos.",
                    bullets: [
                        "Desarrollé scripts de automatización en Python para agilizar tareas repetitivas y mejorar los flujos de procesamiento de datos.",
                        "Extraje, limpié y consolidé datos de múltiples fuentes de Excel, estandarizando los reportes y mejorando la calidad de los datos.",
                        "Usé SQL y estructuras de datos relacionales para organizar, validar y analizar información para reportes operativos.",
                        "Desarrollé y mantuve dashboards y reportes en Power BI para visualizar KPIs y mejorar la visibilidad organizacional.",
                        "Apoyé el desarrollo de herramientas web y preparé documentación técnica para mejorar los flujos de trabajo y la transferencia de conocimiento."
                    ]
                },
                {
                    role: "Desarrollador de Software",
                    company: "MAS Global Consulting · Microsoft Partner",
                    period: "Dic 2025 – Jun 2026",
                    location: "Medellín, Colombia · Presencial",
                    desc: "Desarrollador de Software en MAS Global Consulting, una organización Microsoft Partner, construyendo y desplegando aplicaciones web y soluciones impulsadas por IA con C#/.NET, React, Python y Microsoft Azure.",
                    bullets: [
                        "Desarrollé aplicaciones full stack con React, TypeScript y .NET/C#, traduciendo requerimientos de negocio en soluciones prácticas y escalables.",
                        "Construí un MVP de análisis de hojas de vida con Azure Document Intelligence que compara CVs contra descripciones de vacantes, reduciendo 40% el tiempo de filtrado de los reclutadores.",
                        "Lideré el desarrollo de un chatbot empresarial con Python, FastAPI y Agno, integrando modelos de OpenAI mediante Azure AI Foundry y reduciendo ~20% el tiempo de navegación del sitio.",
                        "Di soporte a aplicaciones en la nube con Azure y Azure DevOps: monitoreo con Application Insights, automatización de triggers de CI/CD y reducción del costo de Azure AI Search de $70 a $0 al mes.",
                        "Colaboré con el equipo y las partes interesadas en requerimientos y resolución de problemas, y redacté un informe de escalabilidad para 50, 100 y 200 usuarios."
                    ]
                },
                {
                    role: "Tecnólogo en Análisis y Desarrollo de Software",
                    company: "SENA",
                    period: "2024 – 2026 · Graduado en jul 2026",
                    location: "Colombia"
                }
            ]
        },
        // Sección Habilidades
        skills: {
            title: "Habilidades Técnicas",
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            databases: "Bases de Datos",
            aiApis: "IA y APIs"
        },
        // Sección Proyectos
        projects: {
            title: "Últimos Proyectos",
            items: [
                {
                    title: "KhozAI",
                    description: "Side project explorando herramientas de práctica para guitarristas con enfoque IA. MVP basado en reglas que genera rutinas personalizadas según nivel, tiempo disponible y áreas a mejorar. Integración con LLM en el roadmap. Construido para aprender a llevar un producto real de punta a punta."
                },
                {
                    title: "E-Commerce de Guitarras Eléctricas",
                    description: "Plataforma e-commerce empresarial para guitarras eléctricas con Spring Boot, autenticación JWT, catálogo de productos, carrito de compras, máquinas de estado para pedidos y dashboard administrativo con analítica de ventas."
                },
                {
                    title: "Band & Rehearsal Manager",
                    description: "App fullstack para músicos: gestión de bandas, ensayos, asistencia y repertorio con tablero kanban de setlist."
                },
                {
                    title: "AI Chat Assistant",
                    description: "Chatbot de IA fullstack con respuestas en streaming en tiempo real, gestión de conversaciones múltiples, autenticación JWT y renderizado de markdown. Impulsado por Groq API y OpenAI."
                },
                {
                    title: "App Proximidad",
                    description: "Plataforma de networking profesional inspirada en LinkedIn, desarrollada en equipo, con UX mejorada y funcionalidades para conectar mejor a los usuarios con oportunidades laborales."
                },
                {
                    title: "Arquitectura de Microservicios",
                    description: "Diseñé e implementé una arquitectura de microservicios distribuida con API Gateway, servicios independientes usando MySQL y MongoDB, y frontend en React consumiendo la API unificada."
                }
            ]
        },
        // Sección Artículos
        articles: {
            title: "Artículos y Reflexiones",
            platform: "DEV.TO",
            read: "6 min de lectura",
            articleTitle: "Stop Building Todo Apps: Lo que aprendí construyendo un side project real",
            articleExcerpt: "5 lecciones honestas construyendo KhozAI, mi primer side project real lanzado de punta a punta, y por qué tu trabajo del día y tus side projects se potencian mutuamente."
        },
        // Sección Contacto
        contact: {
            title: "Contáctame",
            eyebrow: "Disponible para nuevas oportunidades",
            subtitle: "¡Trabajemos Juntos!",
            description: "Estoy disponible para proyectos freelance y nuevas oportunidades. No dudes en contactarme.",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Correo electrónico",
            subjectPlaceholder: "Asunto",
            messagePlaceholder: "Escribe tu Mensaje",
            sendButton: "Enviar mensaje",
            locationLabel: "Ubicación",
            availabilityLabel: "Disponibilidad",
            location: "Medellín, Colombia",
            remote: "Disponible para trabajo remoto"
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
    const keys = ['home', 'about', 'experience', 'skills', 'projects', 'articles', 'contact'];
    navLinks.forEach((link, index) => {
        if (keys[index]) {
            link.textContent = t.nav[keys[index]];
        }
    });
    
    // Actualizar Hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) heroTitle.innerHTML = t.hero.greeting;

    // Hero meta strip (top of hero)
    const heroMetaLeft  = document.querySelector('.hero-meta-left .hero-meta-label');
    const heroMetaRight = document.querySelector('.hero-meta-right .hero-meta-label');
    if (heroMetaLeft  && t.hero.metaLeft)  heroMetaLeft.textContent  = t.hero.metaLeft;
    if (heroMetaRight && t.hero.metaRight) heroMetaRight.textContent = t.hero.metaRight;
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

    const aboutEyebrow = document.querySelector('.about-eyebrow');
    if (aboutEyebrow && t.about.eyebrow) aboutEyebrow.textContent = t.about.eyebrow;

    const statTitles = document.querySelectorAll('.stat-item p');
    if (statTitles[0]) statTitles[0].textContent = t.about.stat1Title;
    if (statTitles[1]) statTitles[1].textContent = t.about.stat2Title;
    if (statTitles[2]) statTitles[2].textContent = t.about.stat3Title;

    // Actualizar Experience
    if (sectionTitles[1]) sectionTitles[1].textContent = t.experience.title;
    document.querySelectorAll('.experience-item').forEach((card, i) => {
        const item = t.experience.items[i];
        if (!item) return;
        const set = (sel, fn) => { const el = card.querySelector(sel); if (el) fn(el); };
        set('.experience-role', el => { el.textContent = item.role; });
        set('.experience-company-name', el => { el.innerHTML = item.company.replace(' · ', ' &nbsp;·&nbsp; '); });
        set('.experience-period', el => { el.innerHTML = `<i class="fas fa-calendar-alt"></i> ${item.period}`; });
        set('.experience-location', el => { el.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${item.location}`; });
        if (item.desc) set('.experience-desc', el => { el.textContent = item.desc; });
        if (item.bullets) {
            card.querySelectorAll('.experience-list li').forEach((li, j) => {
                if (item.bullets[j]) li.textContent = item.bullets[j];
            });
        }
    });

    // Actualizar Skills
    if (sectionTitles[2]) sectionTitles[2].textContent = t.skills.title;

    const skillCategories = document.querySelectorAll('.skill-category h3');
    if (skillCategories[0]) skillCategories[0].textContent = t.skills.frontend;
    if (skillCategories[1]) skillCategories[1].textContent = t.skills.backend;
    if (skillCategories[2]) skillCategories[2].textContent = t.skills.cloud;
    if (skillCategories[3]) skillCategories[3].textContent = t.skills.databases;
    if (skillCategories[4]) skillCategories[4].textContent = t.skills.aiApis;

    // Actualizar Projects
    if (sectionTitles[3]) sectionTitles[3].textContent = t.projects.title;

    const projectCards = document.querySelectorAll('.project-content');
    projectCards.forEach((card, i) => {
        const item = t.projects.items[i];
        if (!item) return;
        card.querySelector('h3').textContent = item.title;
        card.querySelector('p').textContent = item.description;
    });

    // Actualizar Articles
    if (sectionTitles[4]) sectionTitles[4].textContent = t.articles.title;
    const articlePlatform = document.querySelector('.article-platform');
    const articleRead = document.querySelector('.article-read');
    const articleTitleEl = document.querySelector('.article-title');
    const articleExcerptEl = document.querySelector('.article-excerpt');
    if (articlePlatform) articlePlatform.textContent = t.articles.platform;
    if (articleRead) articleRead.textContent = t.articles.read;
    if (articleTitleEl) articleTitleEl.textContent = t.articles.articleTitle;
    if (articleExcerptEl) articleExcerptEl.textContent = t.articles.articleExcerpt;

    // Actualizar Contact
    if (sectionTitles[5]) sectionTitles[5].textContent = t.contact.title;
    
    const contactInfoH3 = document.querySelector('.contact-info h3');
    const contactInfoP = document.querySelector('.contact-info p');
    const contactEyebrow = document.querySelector('.contact-eyebrow');
    if (contactInfoH3) contactInfoH3.textContent = t.contact.subtitle;
    if (contactInfoP) contactInfoP.textContent = t.contact.description;
    if (contactEyebrow) contactEyebrow.textContent = t.contact.eyebrow;
    
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
    
    // Actualizar contact methods (LinkedIn, location, remote)
    const contactValues = document.querySelectorAll('.contact-method-value');
    if (contactValues[2]) contactValues[2].textContent = t.contact.location;
    if (contactValues[3]) contactValues[3].textContent = t.contact.remote;
    const contactLabels = document.querySelectorAll('.contact-method-label');
    if (contactLabels[2]) contactLabels[2].textContent = t.contact.locationLabel;
    if (contactLabels[3]) contactLabels[3].textContent = t.contact.availabilityLabel;
    
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