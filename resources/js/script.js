/*STICKT NAVIGATION*/
$(document).ready(function() {
    /*FOR STICKY NAVI*/
    $('.section-about').waypoint(function(direction) {
        if (direction == "down") {
            // $('nav').addClass('.sticky');
            // document.querySelector(".nav").classList.add("sticky")
            // document.querySelector(".sticky").style.transition = "all 2s ease"
            // $('.nav').classList.add("sticky")
        } else {
            // $('.nav').removeClass('.sticky');
            // document.querySelector(".nav").classList.remove("sticky")

        }
    }, {
        offset: '100px'
    }, 1500);


    /*MOBILE NAV*/
    $('.mobile-icon').click(function() {
        var nav = $('.main-nav li')
        var icon = $('.special-icon i')

        nav.slideToggle(200);
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