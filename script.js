document.getElementById('hamburger-menu').addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
});

document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('#hero h1');
    heroText.classList.add('animate-text');
});
