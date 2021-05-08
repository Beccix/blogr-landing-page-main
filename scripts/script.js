let btn = document.querySelectorAll('.btn-header');

btn.forEach(function (btn) {
    btn.addEventListener('click', function (btnHeader) {
        console.log(btnHeader.currentTarget)
    })
})