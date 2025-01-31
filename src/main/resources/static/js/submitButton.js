const urlField = document.getElementById('url');
const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-]*)*\/?$/;

urlField.addEventListener('input', function() {
    if (urlPattern.test(urlField.value.trim())) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

passwordField.addEventListener('input', function() {
    if (passwordField.value.trim() !== "") {
        submitButton.classList.add('move-back');
    } else {
        submitButton.classList.remove('move-back');
    }
});