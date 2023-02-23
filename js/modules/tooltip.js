export default function tooltip(){
    const tooltTips = document.querySelectorAll('[data-tooltip]');
    if(tooltTips){
        tooltTips.forEach((tooltip) => {
            tooltip.addEventListener('mouseover', onMouseOver)
        })
    
        function onMouseOver(event){
            const toolTipBox = createToolTip(this);
            onMouseMove.toolTipBox = toolTipBox;
            this.addEventListener('mousemove', onMouseMove);
            onMouseLeave.toolTipBox = toolTipBox;
            onMouseLeave.element = this;
            this.addEventListener('mouseleave', onMouseLeave);
        }
    
        const onMouseLeave = {
            handleEvent(){
                this.toolTipBox.remove();
                this.element.removeEventListener('mouseleave', onMouseLeave);
                this.element.removeEventListener('mousemove', onMouseMove);
            }
        }
    
        const onMouseMove = {
            handleEvent(event) {
                this.toolTipBox.style.top = event.pageY + 20 + 'px';
                this.toolTipBox.style.left = event.pageX + 20 + 'px';
            }
        }
    
        function createToolTip(element){
            const toolTipBox = document.createElement('div');
            const text = element.getAttribute('aria-label');
            toolTipBox.classList.add('toolTip');
            toolTipBox.innerText = text;
            document.body.appendChild(toolTipBox);
            return toolTipBox;
        }
    }

}