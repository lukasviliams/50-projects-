const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function (e){
        const x = e.clientX
        const y = e.clientY

        const top = e.target.offsetTop
        const left = e.target.offsetLeft
        
        const innerTop = x-left
        const innerLeft = y-top
        
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.left = innerTop + 'px'
        circle.style.top = innerLeft + 'px'

        this.appendChild(circle)
        setTimeout(()=>{
            circle.remove()
        }, 500)
    })
})