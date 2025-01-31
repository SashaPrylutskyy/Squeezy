document.getElementById('addForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const url = document.getElementById('url').value.trim();
    const password = document.getElementById('password').value.trim();
    const notification = document.getElementById('notification');

    try {
        const response = await fetch("/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, password })
        });

        const data = await response.json();
        if (data.success) {
            const squeezedUrl = `${window.location.href}api/${data.message}`;
            notification.textContent = squeezedUrl;
            navigator.clipboard.writeText(squeezedUrl);
            notification.classList.add("success");
        } else {
            notification.textContent = `Error: ${data.message}`;
            notification.classList.add("error");
        }
    } catch (error) {
        notification.textContent = "Oops! Something went wrong.";
        notification.classList.add("error");
    }

    notification.style.display = 'block';
    event.target.reset();
    submitButton.disabled = true;
    passwordContainer.classList.add('hidden');
    urlInputGroup.style.borderRadius = '15px';
    submitButton.classList.remove('move-back');
});
