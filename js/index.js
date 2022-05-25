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

    window.addEventListener('scroll', function () {
        // let home = document.querySelector('#intro_home').offsetTop;
        let about = document.querySelector('#about').offsetTop;
        let services = document.querySelector('#services').offsetTop;
        let skills = document.querySelector('#skills').offsetTop;
        let projects = document.querySelector('#projects').offsetTop;
        let contact = document.querySelector('#contact').offsetTop;

        let sh = this.window.scrollY;

        if (sh >= 0 && sh < about - 100) this.document.getElementById('home_nav').classList.add('active_nav');
        else this.document.getElementById('home_nav').classList.remove('active_nav');

        if (sh >= about - 100 && sh < services - 100) this.document.getElementById('about_nav').classList.add('active_nav');
        else this.document.getElementById('about_nav').classList.remove('active_nav');

        if (sh >= services - 100 && sh < skills - 100) this.document.getElementById('services_nav').classList.add('active_nav');
        else this.document.getElementById('services_nav').classList.remove('active_nav');

        if (sh >= skills - 100 && sh < projects - 100) this.document.getElementById('skills_nav').classList.add('active_nav');
        else this.document.getElementById('skills_nav').classList.remove('active_nav');

        if (sh >= projects - 100 && sh < contact - 150) this.document.getElementById('projects_nav').classList.add('active_nav');
        else this.document.getElementById('projects_nav').classList.remove('active_nav');

        if (sh >= contact - 150) this.document.getElementById('contact_nav').classList.add('active_nav');
        else this.document.getElementById('contact_nav').classList.remove('active_nav');

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