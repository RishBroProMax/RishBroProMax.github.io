const correctPassword = "lol1234";
let attempts = 5;

function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (enteredPassword === correctPassword) {
        document.getElementById('gallery').classList.remove('hidden');
        document.getElementById('password-section').classList.add('hidden');
        errorMessage.textContent = "Go Away mother Fucker";
    } else {
        attempts--;
        errorMessage.textContent = `Incorrect password. You have ${attempts} attempts left.`;

        if (attempts === 0) {
            errorMessage.textContent = "No more attempts left!";
            document.getElementById('password').disabled = true;
            document.querySelector('button').disabled = true;
        }
    }
}
