document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS CENTRAL DE PROJETOS (COMPLETO) ---
    const projectsData = {
        'petshop-lp-behance': {
            title: 'Landing Page para PetShop',
            tags: ['UI/UX Design', 'Landing Page', 'Behance'],
            images: ['img/5.png'],
            description: 'Design de uma landing page vibrante e acolhedora para um petshop, focada em criar uma conexão emocional com os donos de pets e facilitar o acesso a informações sobre serviços.',
            challenge: 'O desafio era criar uma interface que fosse ao mesmo tempo profissional e amigável, transmitindo confiança e cuidado, além de organizar uma grande variedade de serviços (banho, tosa, veterinário) de forma clara.',
            solution: 'Utilizei uma paleta de cores alegres, ícones personalizados e fotografias de alta qualidade para criar um ambiente convidativo. A estrutura da página guia o usuário de forma intuitiva, com CTAs (Call to Actions) claros para agendamento.',
            role: 'UI/UX Designer',
            tools: 'Figma',
            link: 'https://www.behance.net/gallery/232590577/Landing-Page-para-PetShop'
        },
        'estetica-automotiva-lp': {
            title: 'Landing Page para Estética Automotiva',
            tags: ['UI Design', 'Landing Page', 'Branding'],
            images: ['img/7.png'],
            description: 'Uma landing page com design sofisticado e moderno para uma empresa de estética automotiva, projetada para atrair um público exigente e destacar a qualidade premium dos serviços.',
            challenge: 'Transmitir a sensação de luxo, precisão e confiança. O design precisava ser tão impecável quanto os serviços de detalhamento automotivo oferecidos, evitando uma aparência genérica.',
            solution: 'Optei por um tema escuro (dark mode) que realça o brilho dos veículos, combinado com uma tipografia forte e elegante. As seções são diretas, focadas em resultados visuais (antes e depois) e facilitam o pedido de orçamento.',
            role: 'UI Designer',
            tools: 'Figma',
            link: 'https://www.behance.net/gallery/232590439/Landing-Page-para-Esttica-Automotiva'
        },
        'nail-designer-lp': {
            title: 'Landing Page para Nail Designer',
            tags: ['UI/UX Design', 'Branding', 'Behance'],
            images: ['img/8.png'],
            description: 'Projeto de landing page com foco em elegância e conversão para uma profissional de nail design, transformando seu portfólio online em uma ferramenta de agendamento.',
            challenge: 'Criar uma página que fosse visualmente deslumbrante para exibir a arte das unhas, mas que também fosse extremamente funcional para que as clientes pudessem agendar um horário sem dificuldades.',
            solution: 'O design utiliza uma paleta de cores suaves e femininas, com grande destaque para a galeria de fotos. Integrei um formulário de agendamento diretamente na página, simplificando o processo de conversão de visitante para cliente.',
            role: 'UI/UX Designer',
            tools: 'Figma',
            link: 'https://www.behance.net/gallery/232590315/Landing-Page-para-Nail-Designer'
        },
        'spa-lp': {
            title: 'Landing Page para SPA',
            tags: ['UI/UX Design', 'Landing Page', 'Behance'],
            images: ['img/6.png'],
            description: 'Design de interface para uma landing page de um SPA de luxo...',
            challenge: 'O desafio era traduzir a atmosfera serena e luxuosa de um SPA para uma interface digital...',
            solution: 'Criei um layout limpo e elegante, utilizando uma paleta de cores suaves...',
            role: 'UI/UX Designer (Projeto de Estudo)',
            tools: 'Figma, Adobe Photoshop',
            link: 'https://www.behance.net/gallery/222758587/Landing-Page-SPA'
        },
        'vaggas-design': {
            title: 'Vaggas - App de Aluguel de Vagas',
            tags: ['UI/UX Design', 'Figma', 'Case Study'],
            images: ['img/2.png'],
            description: 'Estudo de caso e projeto de UI/UX para um aplicativo mobile conceitual...',
            challenge: 'Muitos condomínios possuem vagas de garagem não utilizadas...',
            solution: 'Projetei um aplicativo com um mapa interativo para busca de vagas...',
            role: 'UI/UX Designer (Projeto de Estudo)',
            tools: 'Figma, Adobe Illustrator',
            link: 'https://www.behance.net/gallery/219143863/Design-app-aluguel-de-vaga'
        },
        'barbearia-lp': {
    title: 'Landing Page Barbearia',
    tags: ['Design', 'Front-end', 'Behance'], 
    images: ['img/1.png'],
    description: 'Design e desenvolvimento de uma landing page moderna e responsiva para uma barbearia, com foco em conversão e agendamentos online.',
    challenge: 'A barbearia precisava de uma presença online que fosse visualmente atraente e que, mais importante, convertesse visitantes em clientes, facilitando o agendamento de horários.',
    solution: 'Criei uma landing page de página única com um design masculino e elegante, seções claras de serviços, galeria de fotos e um botão de "Agendar Agora" sempre visível para maximizar as conversões.',
    role: 'Designer & Desenvolvedora Front-end',
    tools: 'HTML5, CSS3, JavaScript, Figma',
    link: 'https://www.behance.net/gallery/232590071/Landing-Page-para-Barbearia' 
},
         'restaurante-app': {
            title: 'App de Restaurante Japonês (Estudo)',
            tags: ['Flutter', 'Mobile', 'GitHub'],
            images: ['img/3.png'],
            description: 'Aplicativo de estudo desenvolvido em Flutter para demonstrar habilidades em desenvolvimento mobile...',
            challenge: 'O objetivo deste projeto de estudo era praticar a construção de interfaces complexas...',
            solution: 'Desenvolvi um app com navegação entre telas, visualização de detalhes de produtos e um carrinho...',
            role: 'Desenvolvedora Mobile (Projeto de Estudo)',
            tools: 'Flutter, Dart',
            link: 'https://github.com/emilyaugusto/JapanRestaurantApp'
        },
        'estoque-ti': {
            title: 'Sistema de Estoque de TI',
            tags: ['ASP.NET MVC', 'SQL Server', 'Segurança'],
            images: ['img/9.png','img/9_1.png','img/9_2.png'],
            description: 'Sistema web robusto para gestão de ativos e periféricos de TI...',
            challenge: 'A gestão manual de equipamentos de TI era ineficiente, sujeita a erros e não oferecia segurança...',
            solution: 'Desenvolvi um sistema centralizado com autenticação de dois fatores (2FA)...',
            role: 'Desenvolvedora Full-Stack',
            tools: 'ASP.NET MVC, C#, SQL Server, JavaScript',
            link: '#'
        }
    };

    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const projectCards = document.querySelectorAll('.project-card');
        const carouselTrack = document.getElementById('modal-carousel-track');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentSlide = 0;
        let totalSlides = 0;

        const showSlide = (index) => {
            if (carouselTrack) carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        };

        const setupCarousel = (images) => {
            if (!carouselTrack || !images) return;
            carouselTrack.innerHTML = '';
            currentSlide = 0;
            totalSlides = images.length;
            
            images.forEach(src => {
                const slide = document.createElement('div');
                slide.className = 'w-full flex-shrink-0';
                const img = document.createElement('img');
                img.src = src;
                img.className = 'w-full h-auto max-h-[50vh] object-contain';
                slide.appendChild(img);
                carouselTrack.appendChild(slide);
            });
            
            const display = totalSlides > 1 ? 'block' : 'none';
            prevBtn.style.display = display;
            nextBtn.style.display = display;
            showSlide(0);
        };
        
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        const openModal = (projectId) => {
            const project = projectsData[projectId];
            if (!project) {
                console.error(`Projeto com ID "${projectId}" não encontrado no projectsData.`);
                return;
            }
            
            setupCarousel(project.images);
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-description').textContent = project.description;
            document.getElementById('modal-challenge').textContent = project.challenge || '';
            document.getElementById('modal-solution').textContent = project.solution || '';
            document.getElementById('modal-role').textContent = project.role;
            document.getElementById('modal-tools').textContent = project.tools;
            
            const modalLink = document.getElementById('modal-link');
            if (project.link && project.link !== '#') {
                modalLink.href = project.link;
                modalLink.style.display = 'inline-block';
                if (project.link.includes('github')) modalLink.textContent = 'Ver no GitHub';
                else if (project.link.includes('behance')) modalLink.textContent = 'Ver no Behance';
                else modalLink.textContent = 'Ver Projeto Online';
            } else {
                modalLink.style.display = 'none';
            }

            const tagsContainer = document.getElementById('modal-tags');
            tagsContainer.innerHTML = '';
            if(project.tags) {
                project.tags.forEach(tagText => {
                    const tag = document.createElement('span');
                    tag.className = 'bg-indigo-500/80 text-indigo-100 text-xs font-semibold px-2.5 py-1 rounded-full';
                    tag.textContent = tagText;
                    tagsContainer.appendChild(tag);
                });
            }
            
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.scrollTop = 0;
        };

        const closeModal = () => {
            modalContent.classList.add('scale-95');
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('pointer-events-none'), 300);
        };

        projectCards.forEach(card => card.addEventListener('click', () => openModal(card.dataset.projectId)));
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => (e.target === modal) && closeModal());
    }
    
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));
    }

    const creativeToggle = document.getElementById('creative-toggle');
    if (creativeToggle) {
        const labelDesign = document.getElementById('label-design');
        const labelCode = document.getElementById('label-code');
        const designView = document.getElementById('design-view');
        const codeView = document.getElementById('code-view');
        creativeToggle.addEventListener('change', () => {
            const isChecked = creativeToggle.checked;
            labelDesign.classList.toggle('text-white', !isChecked);
            labelDesign.classList.toggle('text-gray-500', isChecked);
            labelCode.classList.toggle('text-white', isChecked);
            labelCode.classList.toggle('text-gray-500', !isChecked);
            designView.style.opacity = isChecked ? '0' : '1';
            codeView.style.opacity = isChecked ? '1' : '0';
        });
    }
    
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeInSections.forEach(section => observer.observe(section));
});