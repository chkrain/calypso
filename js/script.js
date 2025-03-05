// -------------------------------------------------------------------------------------------------------------


let swiper;
let originalSlides = []; // Массив для сохранения HTML содержимого исходных слайдов

// Функция для сохранения исходного состояния слайдов
function saveOriginalSlides() {
  originalSlides = Array.from(swiper.slides).map(slide => slide.outerHTML);
}

function initSwiper() {
  swiper = new Swiper('.swiper', {
    // Ваши параметры инициализации
    navigation: {
      nextEl: '.prevBtn',
      prevEl: '.nextBtn',
    },
    autoHeight: false,
    loop: false,
    speed: 400,
    spaceBetween: 12,
    initialSlide: 0,
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grid: {
      rows: 2,
    },
    freeMode: true,
    observer: true,
    observeParents: true,
  });

  // Сохраняем исходное состояние слайдов сразу после инициализации Swiper
  saveOriginalSlides();
}

function adjustSwiperSlides() {
  let slidesPerView = 1.4;
  const width = window.innerWidth;

  if (width >= 1240) {
    slidesPerView = 4;
  } else if (width >= 960) {
    slidesPerView = 3.4;
  } else if (width >= 848) {
    slidesPerView = 3.2;
  } else if (width >= 720) {
    slidesPerView = 2.6;
  } else if (width >= 600) {
    slidesPerView = 2.3;
  } else if (width >= 480) {
    slidesPerView = 2;
  }

  if (swiper) {
    swiper.params.slidesPerView = slidesPerView;
    swiper.update();
  }
}

window.addEventListener('load', adjustSwiperSlides);
window.addEventListener('resize', adjustSwiperSlides);

document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('searchInput');
  var notFoundMessage = document.getElementById('notFoundMessage');

  // Функция для восстановления исходного состояния слайдов
  function restoreOriginalSlides() {
    swiper.removeAllSlides();
    swiper.appendSlide(originalSlides);
    swiper.update();
  }


  // Функция для отображения сообщения "Ничего не нашлось"
  function showNotFoundMessage() {
    notFoundMessage.style.display = 'flex';
  }

  // Функция для скрытия сообщения "Ничего не нашлось"
  function hideNotFoundMessage() {
    notFoundMessage.style.display = 'none';
  }

  searchInput.addEventListener('input', function (event) {
    var searchText = event.target.value.toLowerCase();

    if (searchText === '') {
      restoreOriginalSlides(); // Восстанавливаем исходное состояние, если поле поиска пустое
      hideNotFoundMessage(); // Скрываем сообщение "Ничего не нашлось"
    } else {
      // Сначала удаляем все слайды
      swiper.removeAllSlides();

      // Затем добавляем обратно только те, которые соответствуют поиску
      const matchedSlides = originalSlides.filter(html => html.toLowerCase().includes(searchText));
      if (matchedSlides.length > 0) {
        swiper.appendSlide(matchedSlides); // Вставляем слайды в начало свайпера
        hideNotFoundMessage(); // Скрываем сообщение "Ничего не нашлось"
      } else {
        showNotFoundMessage(); // Показываем сообщение "Ничего не нашлось"
      }

      swiper.update();
    }
  });

  initSwiper(); // Инициализация Swiper
});


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

var debouncedRecreateSwiper = debounce(function () {
  recreateSwiper();
}, 15);

window.addEventListener('resize', debouncedRecreateSwiper);


// Поиск 

// Получаем ссылки на категории
var categoryLinks = document.querySelectorAll('.categories a');
var rows = 2;

// Перебираем ссылки и назначаем обработчик события для каждой
categoryLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    // Отменяем стандартное действие ссылки
    event.preventDefault();

    // Получаем ID слайда, к которому нужно прокрутить
    var slideId = link.getAttribute('href').replace('#', '');
    // console.log('Slide ID:', slideId);

    // Находим индекс слайда по его ID
    var slideIndex;
    var slides = document.querySelectorAll('.swiper-slide');
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].id === slideId) {
        slideIndex = i;
        break;
      }
    }
    // console.log('Slide Index:', slideIndex); 
    // Прокручиваем слайдер к нужному слайду
    var slideIndex = Math.floor(i / rows);
    if (swiper && swiper.initialized) {
      swiper.slideTo(slideIndex);
    } else {
      console.error('Swiper is not initialized or not available');
    }
  });
});


