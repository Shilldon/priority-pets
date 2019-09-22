function sendMail(contactForm) {
    var service_id = "default_service";
    var template_id = "Pet-sitting";
    
    var template_params= {
        "from_first_name": contactForm.firstname.value,
        "from_last_name": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value,
        "petsitting_request": contactForm.petsittingrequest.value
    }

    emailjs.send(service_id, template_id, template_params)
    .then(
        function(response){
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    );
    return false;
}