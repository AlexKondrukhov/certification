let student1 = document.querySelector('.student-1');

let studBackground = document.querySelector('.student-background');

student1.addEventListener('click', showPopUp);

function showPopUp (evt) {
  evt.preventDefault();
  studBackground.style.display = 'block';
};



let closeStudPopUp = document.querySelector('.form-close');

closeStudPopUp.addEventListener('click', () => {
  studBackground.style.display = 'none'
});