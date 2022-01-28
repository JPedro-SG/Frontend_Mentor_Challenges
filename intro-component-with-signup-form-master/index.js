const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const Form = document.querySelector('form')
const allInputField = document.querySelectorAll('.gp input')


Form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(firstName.value.trim() === '') handleError(firstName);
    else handleSucces(firstName)
    if(lastName.value.trim() === '') handleError(lastName);
    else handleSucces(lastName)
    if(email.value.trim() === '') handleError(email, 'Email cannot be empty');
    else if(!validateEmail(email)) handleError(email, 'Look like this is not a email');
    else handleSucces(email)
    if(password.value.trim() === '') handleError(password);
    else handleSucces(password)
})

const handleError = (input, errorMSG) => {
    const gp = input.parentElement;
    gp.classList.remove('ok')
    gp.classList.add('not_ok')

    if(errorMSG !== undefined){
        const span = gp.querySelector('span')
        span.innerText = errorMSG
    }
}

const handleSucces = (input) => {
    const gp = input.parentElement;
    gp.classList.remove('not_ok')
    gp.classList.add('ok')
}

const validateEmail = (input) => {
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(String(input.value).toLowerCase());
}

allInputField.forEach(input => {
    input.addEventListener('keydown', (e) => {
        const gp = input.parentElement;
        gp.classList.remove('not_ok')
        gp.classList.remove('ok')
    })
})