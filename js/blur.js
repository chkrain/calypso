document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.blur').classList.toggle('active');
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.burger')) {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.nav').classList.remove('open');
        document.querySelector('.blur').classList.remove('active');
    }
});

// Нажатие на бургер. Блюр при нажатии на бургер