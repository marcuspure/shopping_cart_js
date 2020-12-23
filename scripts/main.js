document.addEventListener('DOMContentLoaded',() => {
    
    const removeItemBtns = document.querySelectorAll('.remove-btn')
    removeItemBtns.forEach(btn => { 
        btn.addEventListener('click', c => {
            c.currentTarget.parentElement.parentElement.remove()
           console =(row)
        })
    })

})


