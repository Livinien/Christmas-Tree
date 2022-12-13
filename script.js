

const body = document.body;


setInterval(rainFall, 10);


function rainFall() {

    const waterDrop = document.createElement('i');

    waterDrop.classList.add('fa-regular');
    waterDrop.classList.add('fa-snowflake');
    waterDrop.style.fontSize = Math.random() * 7 + 'px';
    waterDrop.style.animationDuration = Math.random() * 2 + 's';
    waterDrop.style.opacity = Math.random() + 0.3;
    waterDrop.style.left = Math.random() * window.innerWidth + 'px';

    body.appendChild(waterDrop);

    setTimeout(() => {
        waterDrop.remove();
    }, 6000)
}