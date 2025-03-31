// Javascript Code

// Function that uses a timer to reveal a logo after a certain amount of time
function timerIcon(){
    document.getElementById("logo").style.visibility = "visible";
}

setTimeout(timerIcon, 500);

// Function to validate the entire form
function validateForm() {
    // Validate each input field separately, with the use of regular expressions
    let firstNameValid = validateInput("first", /^.{1,}$/); // At least one character
    let lastNameValid = validateInput("last", /^.{1,}$/); // At least one character
    let emailValid = validateEmail();
    let phoneNumberValid = validatePhoneNumber();
    let messageValid = validateTextArea();
    let subjectValid = validateSubject();

    // Return true if all fields are valid, false otherwise
    return firstNameValid && lastNameValid && emailValid && phoneNumberValid && messageValid && subjectValid;
}

// Function to validate text input fields
function validateInput(inputId, regex) {
    let input = document.getElementById(inputId);
    let value = input.value;

    // Test the input value against the provided regular expression
    if (regex.test(value)) {
        // Set green border if valid
        input.style.border = "green solid 3px";
        return true;
    } 
    else {
        // Set red border if invalid
        input.style.border = "red solid 3px";
        return false;
    }
}

// Function to validate email input, with regular expression
function validateEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validateInput("email", regex);
}

// Function to validate phone number input, with regular expression
function validatePhoneNumber() {
    let regex = /^\d{10}$/;
    return validateInput("phoneNumber", regex);
}

// Function to validate textarea
function validateTextArea() {
    let textarea = document.querySelector("textarea[name='message']");
    let value = textarea.value.trim();

    // Check if textarea is not empty
    if (value.length > 0) {
        // Set green border if valid
        textarea.style.border = "green solid 3px";
        return true;
    } else {
        // Set red border if invalid
        textarea.style.border = "red solid 3px";
        return false;
    }
}

// Function to validate the subject dropdown
function validateSubject() {
    let select = document.querySelector(".subject select");
    let value = select.value;

    // Check if a valid option is selected
    if (value !== "default") {
        // Set green border if valid
        select.style.border = "green solid 3px";
        return true;
    } else {
        // Set red border if invalid
        select.style.border = "red solid 3px";
        return false;
    }
}

// Function to submit the form
function submitForm() {
    if (validateForm()) {
        // Perform form submission
        alert("Form submitted successfully!");
        // Add code here to submit the form to the server
    } else {
        alert("Please fill out all fields correctly before submitting.");
    }
}

