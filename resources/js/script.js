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
        var icon = $('.main-nav i')

        nav.slideToggle(200);
        if (icon.hasClass('.fas fa-bars')) {
            icon.addClass('.fas fa-times');
            icon.removeClass('.fas fa-bars');

        } else {
            icon.addClass('.fas fa-bars');
            icon.removeClass('.fas fa-times');
        }
    });

});