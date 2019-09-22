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
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    );
    return false;
}