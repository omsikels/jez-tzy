const playground = document.getElementById("playground");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

function moveNoButton() {
  const margin = 20; // safe margin from edges

  // Get the actual dimensions of the playground
  const bounds = playground.getBoundingClientRect();

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  // Calculate max X and Y positions within the playground bounds
  const maxX = bounds.width - btnW - margin;
  const maxY = bounds.height - btnH - margin;

  const minX = margin;
  const minY = margin;

  // Random position within the bounds
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  // Apply the new position to the No button
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Grow the Yes button to apply some fun effect
  yesScale += 0.15;
  yesBtn.style.transform = `translateX(-120%) scale(${yesScale})`;
}

// Desktop interaction
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile interaction
noBtn.addEventListener("touchstart", moveNoButton);

// Handle Yes button click
yesBtn.addEventListener("click", () => {
  playground.innerHTML = `
    <h1>Yay!! 💘🎉</h1>
    <p style="font-size:1.3rem;">You’re officially my Valentine 🥰</p>
  `;
});
