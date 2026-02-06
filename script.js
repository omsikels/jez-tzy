const playground = document.getElementById("playground");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

function moveNoButton() {
  const margin = 20;

  const bounds = playground.getBoundingClientRect();
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const minX = margin;
  const maxX = bounds.width - btnW - margin;
  const minY = margin;
  const maxY = bounds.height - btnH - margin;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.15;
  yesBtn.style.transform = `translateX(-120%) scale(${yesScale})`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  playground.innerHTML = `
    <h1>Yay!! 💘🎉</h1>
    <p style="font-size:1.3rem;">You never stood a chance 😌</p>
  `;
});
