const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input');
const renderButton = controls.querySelector('[data-action="render"]');
const destroyButton = controls.querySelector('[data-action="destroy"]');


function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        size += 10;
        fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}


function randomColor() {
    return Math.floor(Math.random() * 256);
}

renderButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount > 0) {
        createBoxes(amount);
    }
});

destroyButton.addEventListener('click', destroyBoxes);



function initGallery() {
    const images = Array.from(document.querySelectorAll('.gallery .image'));
    let currentIndex = 0;


    showImage(images, currentIndex);


    document.addEventListener('keydown', (event) => {
        currentIndex = handleKeyPress(event, currentIndex, images.length);
        showImage(images, currentIndex);
    });
}

function showImage(images, index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function handleKeyPress(event, currentIndex, totalImages) {
    if (event.key === 'ArrowRight') {
        return (currentIndex + 1) % totalImages;
    } else if (event.key === 'ArrowLeft') {
        return (currentIndex - 1 + totalImages) % totalImages;
    }
    return currentIndex;
}
document.addEventListener('DOMContentLoaded', initGallery);


