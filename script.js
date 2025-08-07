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
