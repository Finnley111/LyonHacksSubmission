const container = document.getElementById('container');
const text = document.getElementById('text');


const total = 10000;
const breath = 4000;
const hold = 2000;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In';
    container.className = 'container expand';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container reduce'
        }, hold )
    }, breath)
}

setInterval(breathAnimation, total);