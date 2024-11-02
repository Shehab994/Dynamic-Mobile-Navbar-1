let icons = document.querySelectorAll('a');
let circle = document.querySelector('.circle');

icons.forEach((icon) => {

    icon.addEventListener('click', (btn) => {
        document.querySelector('.active').classList.remove('active');
        btn.target.parentElement.classList.add('active');

        circle.style.left = (btn.target.offsetLeft - 1) + 'px';

    })
});

