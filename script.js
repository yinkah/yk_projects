let getForm = document.getElementById('reg');
getForm.addEventListener('submit', processForm);
function processForm(evt) {
    evt.preventDefault();

    // FULL NAME
    let getFullName = document.getElementById('full_name').value;
    let getFullNameError = document.getElementById('full_name_error');

    // PHONE NUMBER
    let getPhoneNumber = document.getElementById('phone_number').value;
    let getPhoneNumberError = document.getElementById('phone_number_error');

    // PASSWORD
    let getPassword = document.getElementById('password').value;
    let getPasswordError = document.getElementById('password_error');

    // CONFIRM PASSWORD
    let getConfirmPassword = document.getElementById('confirm_password').value;
    let getConfirmPasswordError = document.getElementById('confirm_password_error');

    if (getFullName.length < 3) {
        getFullNameError.innerHTML =
            "<p style='color:red;'>Full name must be greater than 3 char</p>"
    } else {
        getFullNameError.innerHTML = '';
    }

    if (getPhoneNumber.length < 11) {
        getPhoneNumberError.innerHTML =
            '<p style="color: red;">Phone number is required</p>';
    } else {
        getPhoneNumberError = '';
    }
    if (getPassword.length < 6) {
        getPasswordError.innerHTML =
            '<p style="color: red;">Password is too short</p>';
    } else {
        getPasswordError = '';
    }
    if (getConfirmPassword.length < 6) {
        getConfirmPasswordError.innerHTML =
            '<p style="color: red;">Confirm password is too short</p>';
    } else {
        getConfirmPasswordError.innerHTML = '';
    }

    if (getPassword != getConfirmPassword) {
        getPasswordError.innerHTML =
            '<p style="color: red;">Password does not match</p>';
        getConfirmPasswordError.innerHTML = 
            '<p style="color: red;">Confirm password does not match</p>';
    } else {
        getPasswordError.innerHTML = '';
        getConfirmPasswordError.innerHTML = '';
    }
}

let btn = document.querySelector('#togglePassword');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let getPasswordField = document.querySelector('#password');
    if (getPasswordField.type === 'password') {
        getPasswordField.setAttribute('type', 'text');
        btn.innerHTML = 'Hide';
        // btn.setAttribute('value', 'Hide')
    } else {
        getPasswordField.setAttribute('type', 'password');
        btn.innerHTML = 'Show';
        // btn.setAttribute('value', 'Show')
    }
});