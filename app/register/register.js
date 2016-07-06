function isFieldEmpty(field) {
    if (field.value === '')
        return true;
    return false;
}

function markFieldInvalid(field) {
    field.style.borderColor = 'darkred';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded!");
    var registerForm = document.querySelector('form');
    var usernameField = document.getElementById('username');
    var emailField  = document.getElementById('email');
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirm-password'); 

    registerForm.addEventListener('submit', function(event) {
        if (isFieldEmpty(usernameField)) {
            markFieldInvalid(usernameField);
            event.preventDefault();
        }
        if (isFieldEmpty(emailField)) {
            markFieldInvalid(emailField);
            event.preventDefault();
        }
        if (isFieldEmpty(passwordField)) {
            markFieldInvalid(passwordField);
            event.preventDefault();
        }
        if (isFieldEmpty(confirmPasswordField)) {
            markFieldInvalid(confirmPasswordField);
            event.preventDefault();
        }
    });
});
