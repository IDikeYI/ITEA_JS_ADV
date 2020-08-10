/*
* Register form
*  - User Name field
*  - Password field
* */
const registerForm = document.getElementById('registerForm'),
      registerFormPopup = document.getElementById('registerForm-popup');

function validator(validateItem) {
    let tagField = document.createElement("em"),
        formSubmit = validateItem.form.querySelector('[type="submit"]');
        formSubmit.setAttribute("disabled", true);

    if (validateItem.type == "text") {

        let textField = document.createTextNode(validateItem.placeholder + " can’t contain special symbols. Only characters and\n" +
            "numbers");
            tagField.appendChild(textField);
        if (/^[a-z0-9]+$/i.test(validateItem.value)) {
            validateItem.style.border = "1px solid green";
            validateItem.nextElementSibling ? validateItem.nextElementSibling.remove() : '';
            formSubmit.removeAttribute("disabled");
        } else {
            validateItem.style.border = "1px solid red";
            !validateItem.nextElementSibling ? validateItem.parentElement.appendChild(tagField) : validateItem.nextElementSibling.replaceWith(tagField);
        }

    } else if (validateItem.type == "password") {

        if (validateItem.value.length < 6) {

            let shortText = document.createTextNode(validateItem.placeholder + " to short. Min 6");
                tagField.appendChild(shortText);
            !validateItem.nextElementSibling ? validateItem.parentElement.appendChild(tagField) : validateItem.nextElementSibling.replaceWith(tagField);
            validateItem.style.border = "1px solid red";

        }  else if (validateItem.value.length > 9) {

            let longText = document.createTextNode(validateItem.placeholder + " to long. Max 9");
                tagField.appendChild(longText);
            !validateItem.nextElementSibling ? validateItem.parentElement.appendChild(tagField) : validateItem.nextElementSibling.replaceWith(tagField);
            validateItem.style.border = "1px solid red";

        } else if (!/[^a-z0-9\\,\\.\\;]/g.test(validateItem.value)) {

            let regularValue = document.createTextNode(validateItem.placeholder + " should contain at least one special character.");
                tagField.appendChild(regularValue);
            !validateItem.nextElementSibling ? validateItem.parentElement.appendChild(tagField) : validateItem.nextElementSibling.replaceWith(tagField);
            validateItem.style.border = "1px solid red";

        } else {
            validateItem.style.border = "1px solid green";
            validateItem.nextElementSibling ? validateItem.nextElementSibling.remove() : '';
            formSubmit.removeAttribute("disabled");
        }
    }
}

/* Only if form submit */

// registerForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     registerFormFields.forEach(item => validator(item));
// });

/* With keyup event */

registerForm.addEventListener('keyup', function (e) {
    validator(e.target);
});

registerForm.addEventListener('submit', function (e) {
    if (registerFormPopup) {
        document.body.classList.add("validated");
        registerForm.style.display = 'none';

        setTimeout(function () {
            location.reload();
        }, 3500);
    }
    e.preventDefault();
});