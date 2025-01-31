let form = document.getElementById("validateForm");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const notification = document.getElementById('notification');
    const urlParams = new URLSearchParams(window.location.search);
    const suffix = urlParams.get('suffix');

    if (password) {
        fetch('/validate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({suffix: suffix, password: password})
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.replace(data.message)
                } else {
                    notification.textContent = "Error: " + data.message;
                    notification.style.display = 'block';
                }
            })
            .catch(error => {
                notification.textContent = "Error: " + error;
                notification.style.display = 'block';
            });
        form.reset();
        submitButton.disabled = true;
    }
});