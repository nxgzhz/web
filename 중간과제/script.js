const totalBoxes = 40;
const startYear = 1974;
const repeatCount = 9;

const leftBox = document.getElementById("left-box");
const rightBox = document.getElementById("right-box");

function createBox(imageNumber, year) {
  const box = document.createElement("div");
  box.classList.add("box");

  const img = document.createElement("img");
  img.src = `img/img${imageNumber.toString().padStart(2, "0")}.png`;
  img.alt = `img${imageNumber}`;

  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const text = document.createElement("span");
  text.textContent = year;
  overlay.appendChild(text);

  box.appendChild(img);
  box.appendChild(colorBox);
  box.appendChild(overlay);

  box.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "rgba(255, 0, 0, 1)";
    overlay.style.opacity = "1";
  });

  box.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "rgba(255, 0, 0, 0)";
    overlay.style.opacity = "0";
  });

  return box;
}

for (let j = 0; j < repeatCount; j++) {
  for (let i = 1; i <= totalBoxes; i++) {
    const year = startYear + i - 1;
    const boxLeft = createBox(i, year);
    const boxRight = createBox(i, year);

    leftBox.appendChild(boxLeft);
    rightBox.appendChild(boxRight);
  }
}

function restartAnimation() {
  const images = document.querySelectorAll(".title-images img");
  images.forEach((img) => {
    img.style.animation = "none";
  });

  setTimeout(() => {
    images.forEach((img, index) => {
      img.style.animation = `bounce 1.2s ease-in-out 1`;
      img.style.animationDelay = `${index * 0.6}s`;
    });
  }, 100);
}

setInterval(restartAnimation, 7000);
