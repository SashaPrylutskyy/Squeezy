const urlField = document.getElementById('url');
const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const passwordContainer = document.querySelector('.password-container');
const urlInputGroup = document.querySelector('.form-group #url');

const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-]*)*\/?$/;

urlField.addEventListener('input', function() {
    if (urlPattern.test(urlField.value.trim())) {
        submitButton.disabled = false;
        passwordContainer.classList.remove('hidden');
        urlInputGroup.style.borderRadius = '15px 15px 0 0';
    } else {
        submitButton.disabled = true;
        passwordContainer.classList.add('hidden');
        urlInputGroup.style.borderRadius = '15px';
    }
});

passwordField.addEventListener('input', function() {
    if (passwordField.value.trim() !== "") {
        submitButton.classList.add('move-back');
    } else {
        submitButton.classList.remove('move-back');
    }
});