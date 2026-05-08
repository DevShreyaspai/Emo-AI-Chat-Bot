const span = document.getElementById('business-span');
const textArray = ['business', 'success', 'growth', 'journey'];
let currentIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[currentIndex].length) {
        span.textContent += textArray[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else {
        setTimeout(deleteText, 2000); // Wait before deleting text
    }
}

function deleteText() {
    if (charIndex > 0) {
        span.textContent = span.textContent.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50); // Adjust deleting speed here
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(typeText, 500); // Wait before typing next text
    }
}

// Start the typing effect
typeText();
