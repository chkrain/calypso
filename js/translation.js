document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');

    function updateInputClass() {
        if (searchInput.value && !searchInput.matches(':focus')) {
            searchInput.classList.add('inputPadding');
        } else {
            searchInput.classList.remove('inputPadding');
        }
    }

    searchInput.addEventListener('input', updateInputClass);
    searchInput.addEventListener('focus', function () {
        searchInput.classList.remove('inputPadding');
    });

    searchInput.addEventListener('blur', updateInputClass);

    updateInputClass();
});

// Сдвиг при фокусе и наличии текста


var inputField = document.getElementById('searchInput');
var searchIcon = document.querySelector('.searchIcon');

inputField.addEventListener('focus', function (event) {
    inputField.classList.add('shrunk');
    searchIcon.classList.add('transform');
});

inputField.addEventListener('blur', function (event) {
    inputField.classList.remove('shrunk');
    searchIcon.classList.remove('transform');
});

// Cдвиг в инпуте