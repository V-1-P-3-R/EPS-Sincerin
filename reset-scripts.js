document.getElementById('resetForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const resetMessage = document.getElementById('resetMessage');

    if (email === 'email@ejemplo.com') {
        resetMessage.textContent = 'Se ha enviado un correo de restauración a tu correo electrónico.';
        resetMessage.style.color = 'green';
        resetMessage.style.display = 'block';
    } else {
        resetMessage.textContent = 'Correo electrónico no encontrado.';
        resetMessage.style.color = 'red';
        resetMessage.style.display = 'block';
    }
});