function preloadImages(images, callback) {
    let loadedCounter = 0;
    let toLoadCounter = images.length;

    images.forEach((src) => {
        const img = new Image();
        img.onload = img.onerror = () => {
            loadedCounter++;
            document.getElementById('progress').style.width = `${(loadedCounter / toLoadCounter) * 100}%`;
            if (loadedCounter === toLoadCounter) {
                callback();
            }
        };
        img.src = src;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const imagesToLoad = [
        '../images/image_17.jpg',
        '../images/image_18.jpg',
        '../images/image_19.jpg',
        '../images/image_20.jpg',
        '../images/image_21.jpg',
        '../images/image_22.jpg',
        '../images/image_23.jpg',
        '../images/image_24.jpg',
        '../images/image_25.jpg',
        '../images/image_26.jpg',
        '../images/image_27.jpg',
        '../images/image_28.jpg',
        '../images/image_29.jpg',
        '../images/image_30.jpg',
        '../images/image_31.jpg',
        '../images/image_32.jpg',
        '../images/image_33.jpg',
        '../images/image_34.jpg',
        '../images/image_35.jpg',
        '../images/image_36.jpg',
        '../images/image_37.jpg',
        '../images/image_38.jpg',
        '../images/image_39.jpg',
        '../images/image_40.jpg',
        '../images/image_41.jpg',
        '../images/image_42.jpg',
        '../images/image_43.jpg',
        '../images/image_44.jpg',
        '../images/image_45.jpg',
        '../images/image_46.jpg',
        '../images/image_47.jpg',
        '../images/image_48.jpg',
        '../images/image_49.jpg',
        '../images/image_50.jpg',
        '../images/image_51.jpg',
        '../images/image_52.jpg',
        '../images/image_53.jpg',
        '../images/image_54.jpg',
        '../images/image_55.jpg',
        '../images/image_56.jpg',
        '../images/image_57.jpg',
        '../images/image_58.jpg',
        '../images/image_59.jpg',
        '../images/image_60.jpg',
        '../images/image_61.jpg',
        '../images/image_62.jpg',
        '../images/image_63.jpg',
        '../images/image_64.jpg',
        '../images/image_65.jpg',
        '../images/image_66.jpg',
        '../images/image_67.jpg',
        '../images/image_68.jpg',
        '../images/image_69.jpg',
        '../images/image_70.jpg',
        '../images/image_71.jpg',
        '../images/image_72.jpg',
        '../images/image_73.jpg',
        '../images/image_74.jpg',
        '../images/image_75.jpg',
        '../images/image_76.jpg',
        '../images/image_77.jpg',
        '../images/image_78.jpg',
        '../images/image_79.jpg',
        '../images/image_80.jpg',
        '../images/image_81.jpg',
        '../images/image_82.jpg',
        '../images/image_83.jpg',
        '../images/image_84.jpg',
        '../images/image_85.jpg',
        '../images/image_86.jpg',
        '../images/image_87.jpg',
        '../images/image_88.jpg',
        '../images/image_89.jpg',
        '../images/image_90.jpg',
        '../images/image_91.jpg',
        '../images/image_92.jpg',
        '../images/image_93.jpg',
        '../images/image_94.jpg',
        '../images/image_95.jpg',
        '../images/image_96.jpg',
        '../images/image_97.jpg',
        '../images/image_98.jpg',
        '../images/image_99.jpg',
        '../images/image_100.jpg',
        '../images/image_101.jpg',
        '../images/image_102.jpg',
        '../images/image_103.jpg',
        '../images/image_104.jpg',
        '../images/image_105.jpg',
        '../images/image_106.jpg',
        '../images/image_107.jpg',
        '../images/image_108.jpg',
        '../images/image_109.jpg',
        '../images/image_110.jpg',
        '../images/image_111.jpg',
        '../images/image_112.jpg',
        '../images/image_113.jpg',
        '../images/image_114.jpg',
        '../images/image_115.jpg',
        '../images/image_116.jpg',
        '../images/image_117.jpg',
        '../images/image_118.jpg',
        '../images/image_119.jpg',
        '../images/image_120.jpg',
        '../images/image_121.jpg',
        '../images/image_122.jpg',
        '../images/image_123.jpg',
        '../images/image_124.jpg',
        '../images/image_125.jpg',
        '../images/image_126.jpg',
        '../images/image_127.jpg',
        '../images/image_128.jpg',
        '../images/image_129.jpg',
        '../images/image_130.jpg',
    ];

    const preloader = document.getElementById('preloader');

    preloadImages(imagesToLoad, () => {
        document.getElementById('preloader').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        });
    });
});

window.onload = function () {
    // Элементы загружены
    document.getElementById('preloader').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    });
};


// --------------------------------------------- Aninmation ---------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('start-animation')) {
                const delay = entry.target.style.getPropertyValue('--d') || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('start-animation');
            }
        });
    }, { threshold: [0.1] }); // 10%

    const elementsAboutUs = document.querySelectorAll('.secondSectionImageUlFirst li p');
    const elementContacts = document.querySelectorAll('.fourthSectionText span');
    const elementContactsImage = document.querySelectorAll('.fourthSectionImage a');
    const elementContactsButton = document.querySelectorAll('.fourthSectionLink');
    const elementsAboutUsImageFirst = document.querySelectorAll('.sectionImg_1');
    const elementsAboutUsImageSecond = document.querySelectorAll('.sectionImg_2');
    const elementsAboutUsImageThird = document.querySelectorAll('.sectionImg_3');
    const elementsOfNames = document.querySelectorAll('h2');
    const elementsFooter = document.querySelectorAll('.doubleUl h3');
    const elementsFooterImageMobile = document.querySelectorAll('.footerMobileLogo img');
    const elementsFooterImageDesctop = document.querySelectorAll('.footerLogo img');
    const elementCategories = document.querySelectorAll('.categories ul li');
    const elementsSliderButtons = document.querySelectorAll('.sliderButtons');
    const elementLogo = document.querySelectorAll('.logo img');
    elementsAboutUs.forEach(el => {
        observer.observe(el);
    });
    elementContacts.forEach(el => {
        observer.observe(el);
    });
    elementContactsImage.forEach(el => {
        observer.observe(el);
    });
    elementContactsButton.forEach(el => {
        observer.observe(el);
    });
    elementsAboutUsImageFirst.forEach(el => {
        observer.observe(el);
    });
    elementsAboutUsImageSecond.forEach(el => {
        observer.observe(el);
    });
    elementsAboutUsImageThird.forEach(el => {
        observer.observe(el);
    });
    elementsOfNames.forEach(el => {
        observer.observe(el);
    });
    elementsFooter.forEach(el => {
        observer.observe(el);
    });
    elementsFooterImageMobile.forEach(el => {
        observer.observe(el);
    });
    elementsFooterImageDesctop.forEach(el => {
        observer.observe(el);
    });
    elementCategories.forEach(el => {
        observer.observe(el);
    });
    elementsSliderButtons.forEach(el => {
        observer.observe(el);
    });
    elementLogo.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('start-input-animation')) {
                entry.target.classList.add('start-input-animation');
            }
        });
    }, { threshold: [0.1] });

    const elementCategories = document.querySelectorAll('.searchContainer');
    elementCategories.forEach(el => {
        observer.observe(el);
    });
});