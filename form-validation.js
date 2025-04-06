document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const message = e.target[2].value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});
