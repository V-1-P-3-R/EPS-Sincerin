document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');


    if (username === '1193600712' && password === '1234') {
        alert('Ingreso exitoso');
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
        errorMessage.style.display = 'block';
    }
});