function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if(!email.includes('@')) alert('Нет символа @');
    else if(!email.includes('.')) alert('Нет символа .');
    else alert('Все отлично!');
}

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = 'Images/nav/nav-close.svg';
    } else {
        navBtnImg.src ='Images/nav/nav-open.svg';
    }
}