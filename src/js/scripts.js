$(document).ready(function () {
    $('#nav-btn').on('click touchstart', function (e) {
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });
})
