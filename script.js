// TYPING EFFECT
const roles = ["Web Developer", "AI/ML Enthusiast", "Creative Thinker"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = roles[i];
  
  if (isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j--);
  } else {
    document.getElementById("typing").textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// PARTICLES CONFIG
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});

