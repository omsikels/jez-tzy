const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.15;
  yesBtn.style.transform = `translateX(-120%) scale(${yesScale})`;
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);

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
      <p style="font-size:1.3rem;">You’re officially my Valentine 🥰</p>
    </div>
  `;
});
