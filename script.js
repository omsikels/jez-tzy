const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

// Initial positions so they start visible
positionButtons();

function positionButtons() {
  const centerX = window.innerWidth / 2;

  yesBtn.style.left = `${centerX - 140}px`;
  yesBtn.style.top = `${window.innerHeight * 0.65}px`;

  noBtn.style.left = `${centerX + 20}px`;
  noBtn.style.top = `${window.innerHeight * 0.65}px`;
}

function moveNoButton() {
  const margin = 20;

  const vw = window.visualViewport
    ? window.visualViewport.width
    : window.innerWidth;

  const vh = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const minX = margin;
  const maxX = vw - btnW - margin;
  const minY = margin;
  const maxY = vh - btnH - margin;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);

// Re-position on resize / orientation change
window.addEventListener("resize", positionButtons);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      text-align:center;">
      <h1>Yay!! 💘🎉</h1>
      <p style="font-size:1.3rem;">You’re stuck with me now 😌</p>
    </div>
  `;
});
