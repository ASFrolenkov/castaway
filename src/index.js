import './index.html';
import './index.scss';

const episodesBtns = document.querySelectorAll('.episodes__btn');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal__text');
const submitBtn = document.querySelector('.contact__submit');
const [nameInput, emailInput] = document.querySelectorAll('.contact__input');
const body = document.body;

const div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';
body.appendChild(div);
const scrollWidth = div.offsetWidth - div.clientWidth;
body.removeChild(div);

//open episodes modal
episodesBtns.forEach(elem => {
    elem.addEventListener('click', (e) => {
        const dataEp = e.target.dataset.ep;

        modal.classList.add('show');
        body.style.overflow = 'hidden';
        body.style.padding = `0 ${scrollWidth}px 0 0`
        modalText.textContent = detailSwitch(dataEp);
    })
});

//close modal
modal.addEventListener('click', e => {
    if (e.target.className !== 'modal__wrapper') {
        modal.classList.remove('show')
        body.style.overflow = 'visible';
        body.style.padding = `0`;
        modalText.textContent = '';
    }
});

//open submit modal
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameInput.value && emailInput.value) {
        modal.classList.add('show');
        body.style.overflow = 'hidden';
        body.style.padding = `0 ${scrollWidth}px 0 0`
        modalText.textContent = 'Sending data';
    }
})

function detailSwitch(string) {
    switch(string){
        case 'all':
            return 'View all episodes';
        case 'third':
            return 'Episod 3 details';
        case 'second':
            return 'Episod 2 details';
        case 'first':
            return 'Episod 1 details';
        default:
            break;
    }
}