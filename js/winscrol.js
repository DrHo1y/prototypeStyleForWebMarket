window.onscroll = () => {
    const head = document.querySelector('.head')
    const contact = document.querySelector('.contacts')
    const Y = window.scrollY
    if (Y > 200) {
        contact.classList.add('fixed')
        head.classList.add('opacity')
    } else {
        contact.classList.remove('fixed')
        head.classList.remove('opacity')
    }
}