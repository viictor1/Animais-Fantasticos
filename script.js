function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');
    
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo'); /* deixar primeiro elemento ativo como padr]ao */
    
        function activeTab(index){
            tabContent.forEach((item) => {
                item.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
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
    const accordionList = document.querySelectorAll('.js-accordion dt');
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
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

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

initTabNav();
initAccordion();
initScrollSuave();
