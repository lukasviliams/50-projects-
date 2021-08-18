const panels = document.querySelectorAll('.panel')

function removeActiveclas () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveclas()
        panel.classList.add('active')
    })
})