const text = "Abdullah Khan";
const speed = 100; // typing speed in ms
const delayBetweenLoops = 1500; // wait time before restart in ms
let index = 0;

function typeEffect() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  el.textContent = ""; // Instantly clear before starting

  function typeChar() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, speed);
    } else {
      // After full text is typed, wait, then restart
      setTimeout(() => {
        index = 0;
        typeEffect(); // Start over
      }, delayBetweenLoops);
    }
  }

  typeChar();
}

window.addEventListener("load", typeEffect);
