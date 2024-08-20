window.initMap = () => {
    const map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 37.24317528542883, lng: 131.86688500415858},
        zoom: 6,
    });
}

const input_email = document.querySelector('.input-email');
const button_email = document.querySelector('.btn-subscribe');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalpage = document.querySelector('.container-modal');
const btn_modalclose = document.querySelector('.btn-modal');
const form_submit = document.querySelector('#form-email');
button_email.addEventListener('click', function (event) {
    event.preventDefault();

    const input_value = input_email.value;
    if (!input_value) {
        window.alert('이메일이 입력되지 않았습니다!');
    } else if (!emailPattern.test(input_value)) {
        window.alert('유효하지 않은 이메일입니다!');
    } else {
        modalpage.style.display = 'flex';
    }
});

btn_modalclose.addEventListener('click', function (event) {
    event.preventDefault();

    const formData = new FormData(form_submit);
    console.log('제출 폼 데이터 확인:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // form_submit.submit();

    modalpage.style.display = 'none';
});

const btn_scrollup = document.querySelector('.btn-scrollup');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        btn_scrollup.style.opacity = 1;
    } else {
        btn_scrollup.style.opacity = 0;
    }
});

btn_scrollup.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const btn_menu = document.querySelector('.btn-menu');
const menu_content = document.querySelector('.container-menu');
const menu_close = document.querySelector('.btn-arrow');
btn_menu.addEventListener('click', function () {
    menu_content.style.display = 'block';
});
menu_close.addEventListener('click', function () {
    menu_content.style.display = 'none';
})
