function changeText(){
    document.getElementById("textChangeDiv").innerText = "You are Amazing";
    document.getElementById("textChangeDiv").innerHTML = "You are Amazing";
}
function validateForm() {
    const submitButton = document.getElementById("submit");
    const message = document.getElementById("message-panel");
    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const postalCode = document.getElementById("postalCode").value;
        
        // Regular expressions for pattern validation
        const phonePattern = /^\(\d{3}\)-\d{3}-\d{4}$/;
        const postalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
        
        // Flag to check if at least one pattern is used
        let patternUsed = false;
        
        if (!firstName || !lastName || !phoneNumber || !email || !postalCode) {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please fill in all fields";
        } else {
            if (!phonePattern.test(phoneNumber)) {
                message.style.backgroundColor = "red";
                message.style.color = "white";
                message.innerHTML = "Invalid phone number format. Please use (000)-000-0000 format";
            } else {
                patternUsed = true;
            }
            
            if (!postalCodePattern.test(postalCode)) {
                message.style.backgroundColor = "red";
                message.style.color = "white";
                message.innerHTML = "Invalid postal code format. Please use A1A 1A1 format";
            } else {
                patternUsed = true;
            }
            
            if (!patternUsed) {
                message.style.backgroundColor = "red";
                message.style.color = "white";
                message.innerHTML = "PLease follow the format";
            } else {
                alert("Thank You for contacting! Will reach back soon!");
            }
        }
    });
}

validateForm();
