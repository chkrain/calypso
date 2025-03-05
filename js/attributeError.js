function updateActiveIndex() {
    var element = document.getElementById('swiper-slide');
    if (element) {
        var attributeValue = element.getAttribute('src');
        if (attributeValue) {
            console.log('Значение атрибута:', attributeValue);
        } else {
            console.error('Атрибут не найден');
        }
    } else {
        console.error('Элемент не найден');
    }
}