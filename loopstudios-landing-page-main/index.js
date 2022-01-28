const hamburguer = document.querySelector('.hamburguer')
const close_btn = document.querySelector('.close')

hamburguer.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    // console.log(modal)
    modal.classList.toggle('opened')
})

close_btn.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    // console.log(modal)
    modal.classList.toggle('opened')
})