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

});