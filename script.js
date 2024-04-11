const box = document.getElementById('box');
const shrinkButton = document.getElementById('shrink');
const growButton = document.getElementById('grow');

function changeSize(increment) {
    const currentSize = box.offsetWidth;
    const newSize = currentSize + increment;
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
}

shrinkButton.addEventListener('click', () => changeSize(-10));
growButton.addEventListener('click', () => changeSize(10));