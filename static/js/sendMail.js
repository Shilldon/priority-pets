function sendMail(contactForm) {
    var service_id = "priority_pets";
    var template_id = "pet_stting_request";
    
    var template_params= {
        "subject": contactForm.subject.value,
        "petsitting_request": contactForm.petsittingrequest.value,
        "firstname": contactForm.firstname.value,
        "lastname": contactForm.lastname.value,
        "emailaddress": contactForm.emailaddress.value
        
    }

    emailjs.send(service_id, template_id, template_params)
    .then(
        function(response){
            console.log("SUCCESS", response);
            $("#modal-message-text").text('');
            $("#modal-message-text").append("Thanks for your message. I will be in touch shortly.");
            $("#message-modal").modal('show');
            $('#contact-form').find(":input").val('');
        },
        function(error) {
            $("#modal-message-text").text('');
            $("#modal-message-text").append("There was an error sending your message. <br/>Please try again later, or call me on 07387 715 779.");
            $("#message-modal").modal('show');      
            console.log("FAILED", error);
        }
    );
    return false;
}