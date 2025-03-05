document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var searchHolder = document.querySelector('.searchHolder');

    function togglePlaceholder() {
        if (searchInput.value) {
            searchHolder.style.display = 'none';
        } else {
            searchHolder.style.display = 'block';
        }
    }

    searchInput.addEventListener('input', togglePlaceholder);
    searchInput.addEventListener('blur', togglePlaceholder);
    searchInput.addEventListener('focus', togglePlaceholder);

    togglePlaceholder();
});

// Слово поиск в инпуте

document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('searchInput');

    inputElement.addEventListener('click', function () {
        var links = document.querySelectorAll('.linkThirdCont .linkInLink');

        links.forEach(function (link) {
            link.parentNode.classList.add('inactive');
            link.classList.add('inactive');

            setTimeout(function () {
                link.parentNode.classList.remove('activeBtnSecThird', 'inactive');
                link.classList.remove('activeBtnSecThirdLink', 'inactive');
            }, 400);
        });
    });
});

// Удаление при нажатии на инпут