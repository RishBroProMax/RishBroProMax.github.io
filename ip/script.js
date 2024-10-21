const apiUrl = 'http://ip-api.com/json/';
let isHumanVerified = false; // Track if human verification is done

// Handle Human Verification
document.getElementById('verify-btn').addEventListener('click', () => {
    // Assume verification success (you can integrate CAPTCHA here)
    alert("You are verified! 🎉");

    // Save verification status in MongoDB (API call placeholder)
    saveUserVerification();

    isHumanVerified = true;
    document.getElementById('verification-section').style.display = 'none';
    document.getElementById('ip-section').style.display = 'block';
});

// Fetch IP Information
document.getElementById('search-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('ip-input').value;

    if (!userInput) {
        showPopup('Please enter an IP address! 😅');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${userInput}`);
        const ipData = await response.json();

        if (ipData.status === 'fail') {
            showPopup('Invalid IP address 😕.');
            return;
        }

        const resultHtml = `
            🌍 <strong>Country:</strong> ${ipData.country} <br>
            📍 <strong>Region:</strong> ${ipData.regionName} <br>
            🏙 <strong>City:</strong> ${ipData.city} <br>
            🗺 <strong>Latitude:</strong> ${ipData.lat} <br>
            🗺 <strong>Longitude:</strong> ${ipData.lon} <br>
            📡 <strong>ISP:</strong> ${ipData.isp} <br>
            🔗 <strong>IP:</strong> ${ipData.query}
        `;
        showPopup(resultHtml);
    } catch (error) {
        console.error('Error fetching IP data:', error);
        showPopup('Error fetching IP data, please try again! 😓');
    }
});

// Display User's Own IP Address
document.getElementById('my-ip-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        showPopup(`${data.ip}`);
    } catch (error) {
        console.error('Error fetching own IP:', error);
        showPopup('Could not fetch your IP address. 😕');
    }
});

// Copy IP Address on Popup
document.getElementById('copy-btn').addEventListener('click', () => {
    const popupResult = document.getElementById('popup-result').innerText;
    navigator.clipboard.writeText(popupResult).then(() => {
        alert('IP Address copied to clipboard! 📋');
    });
});

// Close Popup
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});

// Function to show popup with dynamic message
function showPopup(message) {
    document.getElementById('popup-result').innerHTML = message;
    document.getElementById('popup').classList.remove('hidden');
}

// Simulate saving user verification to MongoDB
function saveUserVerification() {
    // Example API call to MongoDB (replace with actual MongoDB API)
    const apiUrl = 'mongodb+srv://iqnjat:sjxl6a@cluster0.wequneh.mongodb.net/?retryWrites=true&w=majority';

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verified: true })
    })
    .then(response => response.json())
    .then(data => {
        console.log('User verification saved:', data);
    })
    .catch(error => {
        console.error('Error saving verification:', error);
    });
}
