/*STICKT NAVIGATION*/
$(document).ready(function() {
    /*FOR STICKY NAVI*/
    $('.about-us').waypoint(function(direction) {
        if (direction == "down") {
            // $('nav').addClass('.sticky');
            document.querySelector(".nav").classList.add("sticky")
                // $('.nav').classList.add("sticky")
        } else {
            // $('.nav').removeClass('.sticky');
            document.querySelector(".nav").classList.remove("sticky")

        }
    }, {
        offset: '60px'
    }, 1500);


    /*MOBILE NAV*/
    $('.mobile-icon').click(function() {
        var nav = $('.main-nav li')
        var icon = $('.special-icon i')

        nav.slideToggle(400);
        if (icon.hasClass('fas fa-bars')) {
            icon.classList.add("fas fa-times");
            icon.classList.remove('fas fa-bars');

        } else {
            icon.classList.add('fas fa-bars');
            icon.classList.remove('fas fa-times');
        }
    });

    $('.mobile-icon').click(function() {
        document.querySelector(".blurry-body").classList.add("blur")
    })
});