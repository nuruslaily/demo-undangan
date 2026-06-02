// Music Player Functionality
const musicToggle = document.getElementById("musicToggle");
const backgroundMusic = document.getElementById("backgroundMusic");
let isPlaying = false;

// Toggle music on button click
musicToggle.addEventListener("click", function () {
  if (isPlaying) {
    backgroundMusic.pause();
    musicToggle.style.color = "#d4af37";
    musicToggle.classList.remove("playing");
    isPlaying = false;
  } else {
    backgroundMusic.play();
    musicToggle.style.color = "#ff69b4";
    musicToggle.classList.add("playing");
    isPlaying = true;
  }
});

// Add interactive flower and heart effects
document.addEventListener("DOMContentLoaded", function () {
  // Create floating particles on mouse move
  document.addEventListener("mousemove", function (e) {
    createParticle(e.clientX, e.clientY);
  });

  // Add click animation
  document.addEventListener("click", function (e) {
    createExplosion(e.clientX, e.clientY);
  });
});

function createParticle(x, y) {
  const particles = ["🌸", "🌹", "🌷", "💕", "💖", "💗"];
  const particle = document.createElement("div");
  const randomParticle =
    particles[Math.floor(Math.random() * particles.length)];

  particle.textContent = randomParticle;
  particle.style.position = "fixed";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.pointerEvents = "none";
  particle.style.fontSize = Math.random() * 20 + 10 + "px";
  particle.style.opacity = "0.8";
  particle.style.zIndex = "9999";
  particle.style.animation = "particleFloat 2s ease-out forwards";

  document.body.appendChild(particle);

  setTimeout(() => particle.remove(), 2000);
}

function createExplosion(x, y) {
  const particleCount = 8;
  for (let i = 0; i < particleCount; i++) {
    createParticle(
      x + (Math.random() - 0.5) * 100,
      y + (Math.random() - 0.5) * 100,
    );
  }
}

// Add animation to CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);
