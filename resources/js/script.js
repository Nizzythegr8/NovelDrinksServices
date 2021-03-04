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
        var nav = $('.main-nav li');
        var icon = $('.mobile-icon');
        var overlay = $('.overlay');

        nav.slideToggle(200);
        if (icon.hasClass('fas fa-bars')) {
            icon.removeClass("fas fa-bars").addClass("fas fa-times");
            overlay.style.display = "block";

        } else {
            icon.removeClass("fas fa-times").addClass("fas fa-bars");
            overlay.style.display = "none";
        }
    });

    $('.mobile-icon').click(function() {
        document.querySelector(".blurry-body").classList.add("blur")
    })
});