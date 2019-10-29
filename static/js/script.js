$(document).ready(function() {
    $('.index-collapse--button').on("click", function() {
            //scroll to bottom of opened panel to ensure visible on screen
            $('html, body').animate({scrollTop: $(this,"p").offset().top}, 500);
    });

    $('.paddock-image-thumbnail').on("click", function() {
        var imageSource=$(this).attr("src");
        $('#paddock-image-modal img').attr("src",imageSource)
    })

})
