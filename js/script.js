let loginButton = document.querySelector('.button-enter');
let loginPopUp = document.querySelector('.login-popup');
let closeButton = document.querySelector('.popup-close');

loginButton.addEventListener('click', showPopUp)
closeButton.addEventListener('click', close);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault()

    loginPopUp.classList.toggle('show-popup')
};

function close() {
    loginPopUp.classList.remove('show-popup')
}

loginPopUp.addEventListener('click', (e) => {
    if (e.currentTarget.classList.consains('.popup-close')) {
        close();
    }
})
