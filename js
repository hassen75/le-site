const text = "Explorer ma créativité numérique";
const speed = 80; // vitesse d’écriture
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Curseur disparaît après l’écriture
    document.getElementById("cursor").classList.add("hide-cursor");
  }
}

window.onload = typeWriter;
