window.initMap = () => {
    const map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 37.24317528542883, lng: 131.86688500415858},
        zoom: 8,
    });
}

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

const input_email = document.querySelector('.input-email');
const button_email = document.querySelector('.btn-subscribe');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalpage = document.querySelector('.modal-container');
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


// 비동기식 접근을 통해 제출 후 새로고침X
//     btn_modalclose.addEventListener('click', function() {
//     const formData = new FormData(form_submit);
//     formData.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });
//     fetch(form_submit.action, {
//     method: 'POST',
//     body: formData,
// })
//     .then(response => {
//     if (response.ok) {
//     console.log('성공적으로 제출되었습니다.');
//     modalpage.style.display = 'none'; // 모달 닫기
// } else {
//     console.error('제출 실패');
// }
// })
//     .catch(error => {
//     console.error('서버 요청 실패:', error);
// });
// });
