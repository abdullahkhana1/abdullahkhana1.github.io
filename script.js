// Typewriter effect for hero section
const typewriterText = "Abdullah Khan";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < typewriterText.length) {
    document.getElementById("typewriter").textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", () => {
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    typewriterElement.textContent = "";
    typeWriter();
  }
});
