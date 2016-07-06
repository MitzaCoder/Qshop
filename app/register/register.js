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
    var formFields = document.querySelectorAll('form input');
    
    for (var i = 0; i < formFields.length; ++i) {
        formFields[i].addEventListener('change', function() {
            if (isFieldEmpty(this)) {
                markFieldInvalid(this);
            }
        });
    }

    registerForm.addEventListener('submit', function(event) {
        if (fieldsAreValid) {
            event.preventDefault();
        }
    });
});
