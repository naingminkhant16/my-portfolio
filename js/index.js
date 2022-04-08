$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 4,
                nav: false
            }
        }
    })
});