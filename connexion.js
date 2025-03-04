document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('message');

    // Simulation de la vérification du login (remplacez par votre logique de backend)
    if (username === 'admin' && password === 'password123') {
        messageBox.style.color = '#00FF00';
        messageBox.textContent = 'Connexion réussie !';
    } else {
        messageBox.style.color = '#FF0000';
        messageBox.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
});
