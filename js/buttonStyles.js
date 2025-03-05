var liElements = document.querySelectorAll('.linkThirdCont');

function makeActive(event) {
    event.preventDefault();

    liElements.forEach(function (li) {
        li.classList.remove('activeBtnSecThird');
        var linkInLi = li.querySelector('.linkInLink');
        if (linkInLi) {
            linkInLi.classList.remove('activeBtnSecThirdLink');
        }
    });

    this.classList.add('activeBtnSecThird');
    var linkInThisLi = this.querySelector('.linkInLink');
    if (linkInThisLi) {
        linkInThisLi.classList.add('activeBtnSecThirdLink');
    }
}

liElements.forEach(function (li) {
    li.addEventListener('click', makeActive);
});

// стили кнопок остаются