const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙'; // Icône de lune pour le dark mode
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#1a1a2e';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
toggleButton.style.fontSize = '20px';
toggleButton.style.borderRadius = '50%';
toggleButton.style.zIndex = '1000';
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Icône de soleil pour le mode clair
    } else {
        toggleButton.textContent = '🌙'; // Icône de lune pour le mode sombre
    }
});
document.body.appendChild(toggleButton);
