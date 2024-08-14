console.log('hello');
let p = new Promise((resolve, reject) => {
    resolve('hello world'); // 성공
    // reject('hello world'); // 실패
})
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(' ')[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    })
    .then((메시지) => {
        alert(메시지);
    })
    .catch((메시지) => {
        alert('catch 실행!! :' + 메시지);
    });
console.log('world');