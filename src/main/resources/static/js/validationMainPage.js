const urlField = document.getElementById('url');
const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const passwordContainer = document.querySelector('.password-container');
const urlInputGroup = document.querySelector('.form-group #url');

urlField.addEventListener('input', function () {
    const urlValue = urlField.value.trim();

    if (urlValue !== "" && urlField.checkValidity()) {
        submitButton.disabled = false;
        passwordContainer.classList.remove('hidden');
        urlInputGroup.style.borderRadius = '15px 15px 0 0';
    } else {
        submitButton.disabled = true;
        passwordContainer.classList.add('hidden');
        urlInputGroup.style.borderRadius = '15px';
        submitButton.classList.remove('move-back');
    }
});

passwordField.addEventListener('input', function () {
    const urlValue = urlField.value.trim();

    if (passwordField.value.trim() !== "" && urlValue !== "") {
        submitButton.classList.add('move-back');
    } else {
        submitButton.classList.remove('move-back');
    }
});