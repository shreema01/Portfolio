function sendMain() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,


    };


    const serviceId = "service_9s3nbof"
    const templateId = "template_yn6pero"
    emailjs.send(serviceId, templateId, params).than(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
        }
    )
        .catch(err => console.log(err));
}