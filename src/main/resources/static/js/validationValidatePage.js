const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.trim() !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});