const text = "ABDULLAH KHAN";
const target = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (index <= text.length) {
    target.innerHTML = text.substring(0, index++);
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      target.innerHTML = "";
      index = 0;
      typeWriter();
    }, 1000);
  }
}

window.onload = typeWriter;
const elements = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;

    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
});
