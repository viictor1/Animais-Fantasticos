function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo'); /* deixar primeiro elemento ativo como padr]ao */
    
        function activeTab(index){
            tabContent.forEach((item) => {
                item.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
        }
        
        tabMenu.forEach((item, index) =>{
            item.addEventListener('click', () =>{
                activeTab(index)
            })
        })
    }
}

function initAccordion(){
    const ativo = 'ativo';
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    if(accordionList.length){
        accordionList[0].classList.add(ativo);
        accordionList[0].nextElementSibling.classList.add(ativo);
        
        function activeAccordion(){
            this.classList.toggle(ativo);
            this.nextElementSibling.classList.toggle(ativo);
        }
        accordionList.forEach((item) =>{
            item.addEventListener('click', activeAccordion);
        });
    }  
}

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    
    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection);
    })
}

function initAnimaScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;
    
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0){
                    section.classList.add('ativo');
                }
            })
        }
    
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}

initTabNav();
initAccordion();
initScrollSuave();
initAnimaScroll();