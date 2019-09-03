$(document).ready(function() {
    $('.index-collapse--button').on("click", function() {
            //scroll to bottom of opened panel to ensure visible on screen
            $('html, body').animate({scrollTop: $(this,"p").offset().top}, 500);
    });

})
