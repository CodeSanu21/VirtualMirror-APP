
// DOM Elements
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const tryOnLink = document.getElementById('tryOnLink');
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const tryOnSection = document.getElementById('tryOnSection');
const cameraFeed = document.getElementById('cameraFeed');
const captureBtn = document.getElementById('captureBtn');
const photoCanvas = document.getElementById('photoCanvas');
const shareBtn = document.getElementById('shareBtn');

// Show/Hide Sections
function showSection(sectionToShow) {
    [loginSection, registerSection, tryOnSection].forEach(section => {
        section.classList.add('hidden');
    });
    sectionToShow.classList.remove('hidden');
}

loginLink.addEventListener('click', () => showSection(loginSection));
registerLink.addEventListener('click', () => showSection(registerSection));
tryOnLink.addEventListener('click', () => showSection(tryOnSection));

// Camera Access and Capture
navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => {
        cameraFeed.srcObject = stream;
    })
    .catch(error => {
        console.error("Camera access denied:", error);
    });

captureBtn.addEventListener('click', () => {
    const context = photoCanvas.getContext('2d');
    context.drawImage(cameraFeed, 0, 0, photoCanvas.width, photoCanvas.height);
});

// Share functionality (example - you can integrate with social media later)
shareBtn.addEventListener('click', () => {
    const dataUrl = photoCanvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'virtual_try_on.png';
    link.click();
});

// Functions to try on clothes and makeup
function tryClothing(clothing) {
    alert(`You have selected ${clothing}. Try it on!`);
    // Add logic to display the clothing try-on interface
}

function tryMakeup(makeup) {
    alert(`You have selected ${makeup}. Try it on!`);
    // Add logic to display the makeup try-on interface
}