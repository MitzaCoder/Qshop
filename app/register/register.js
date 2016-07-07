function isFieldEmpty(field) {
    if (field.value === '')
        return true;
    return false;
}

function markFieldInvalid(field) {
    field.style.borderColor = 'darkred';
}

function markFieldValid(field) {
    field.style.borderColor = 'lightgray';
}

function showInvalidFieldMessage(field) {    
    field.nextSibling.className="";
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded!");
    var registerForm = document.querySelector('form');
    var formFields = document.querySelectorAll('form input');
    
    for (var i = 0; i < formFields.length; ++i) {
        formFields[i].addEventListener('change', function() {
            if (isFieldEmpty(this)) {
                markFieldInvalid(this);
                showInvalidFieldMessage(this);
            } else {
                markFieldValid(this);
                //hideInvalidFieldMessage(this);
            }
        });
    }

    registerForm.addEventListener('submit', function(event) {
        for (var i = 0; i < formFields.length; ++i) {
            if (isFieldEmpty(formFields[i])) {
                markFieldInvalid(formFields[i]);
                event.preventDefault();
            }
        }
    });
});
