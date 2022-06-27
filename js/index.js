function hideOffCanvas() {
    setTimeout(() => {
        document.getElementById('btn-close').click();
    }, 500)
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        stagePadding: 50,
        smartSpeed: 450,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left text-dark fs-1'></i>",
            "<i class='fas fa-angle-right text-dark fs-1'></i>"
        ],
        center: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })


});

document.addEventListener('DOMContentLoaded', function () {
    let home_btn = document.getElementById('home_nav');
    let about_btn = document.getElementById('about_nav');
    let services_btn = document.getElementById('services_nav');
    let skills_btn = document.getElementById('skills_nav');
    let projects_btn = document.getElementById('projects_nav');
    let contact_btn = document.getElementById('contact_nav');

    window.addEventListener('scroll', function () {
        // let home = document.querySelector('#intro_home').offsetTop;
        let about = document.querySelector('#about').offsetTop;
        let services = document.querySelector('#services').offsetTop;
        let skills = document.querySelector('#skills').offsetTop;
        let projects = document.querySelector('#projects').offsetTop;
        let contact = document.querySelector('#contact').offsetTop;

        let sh = this.window.scrollY;

        if (sh >= 0 && sh < about - 100) home_btn.classList.add('active_nav');
        else home_btn.classList.remove('active_nav');

        if (sh >= about - 100 && sh < services - 100) about_btn.classList.add('active_nav');
        else about_btn.classList.remove('active_nav');

        if (sh >= services - 100 && sh < skills - 100) services_btn.classList.add('active_nav');
        else services_btn.classList.remove('active_nav');

        if (sh >= skills - 100 && sh < projects - 100) skills_btn.classList.add('active_nav');
        else skills_btn.classList.remove('active_nav');

        if (sh >= projects - 100 && sh < contact - 150) projects_btn.classList.add('active_nav');
        else projects_btn.classList.remove('active_nav');

        if (sh >= contact - 150) contact_btn.classList.add('active_nav');
        else contact_btn.classList.remove('active_nav');

        scrollTopbtnShowHide()
    })


    let upArrow = document.getElementById('upArrow');
    upArrow.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    function scrollTopbtnShowHide() {
        if (document.documentElement.scrollTop <= 150) {
            upArrow.style.display = 'none';
        } else {
            upArrow.style.display = 'block';
        }
    }

});

ScrollReveal().reveal(".content ", {
    distance: '600%',
    origin: 'left',
    // duration: 700,
    interval: 200,
    opacity: null,
    delay: 200,
    // reset: true
});