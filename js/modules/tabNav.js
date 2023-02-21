export default function tabNav(){
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