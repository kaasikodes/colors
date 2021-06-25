const menuToggle = document.querySelector(' #mobile-toggle')

let nav = document.querySelector('.nav-menu')
let navLinks = document.querySelectorAll('.nav-link')
for (const link of navLinks) {
    if (link.id === 'sign-up-page') {
        console.log('postr')
        continue;
        
    }
    link.addEventListener('click',navToggler)
    
}



menuToggle.addEventListener('click', navToggler)
nav.addEventListener('click',highlightToggler)

function navToggler() {
    
    menuToggle.classList.toggle('is-active')
    console.log(menuToggle)
    nav.classList.toggle('active')
    
}

function highlightToggler(e){
    // Turn off all highlights first
    for (const link of navLinks) {
        // prevent button from partakin
        if (link.className === 'nav-link btn') {
            console.log('tio')
            continue;
            
        }
        link.className = 'nav-link'

        
    }
    // Turn on highlight for target element
    e.target.id !== 'sign-up-page'? e.target.classList.toggle('highlight'): ''
    console.log(e.target)
    

}