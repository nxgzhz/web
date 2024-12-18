const boxes = document.querySelectorAll('[class^="img-box"]');
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

const clockElements = [
  document.getElementById("clock01"),
  document.getElementById("clock02"),
];

boxes.forEach((box) => {
  let positionX = parseFloat(window.getComputedStyle(box).left) || 0;
  let positionY = parseFloat(window.getComputedStyle(box).top) || 0;
  const initialHeight = parseFloat(window.getComputedStyle(box).height) || 100;
  let height = initialHeight;
  let directionX = Math.random() < 0.5 ? 1 : -1;
  let directionY = Math.random() < 0.5 ? 1 : -1;

  let baseSpeedX = Math.random() * 1.0 + 0.5;
  let baseSpeedY = baseSpeedX * (Math.random() * 0.1 + 0.05);

  const duration = 1000;
  let shrinkSpeed = (initialHeight / duration) * (0.5 + Math.random() * 0.5);

  let speedX = baseSpeedX;
  let speedY = baseSpeedY;
  let shrinking = true;

  box.style.transform = "translateY(-50%)";

  function moveBox() {
    if (shrinking && height > 0) {
      height -= shrinkSpeed;
      if (height < 0) height = 0;
      box.style.height = `${height}px`;
    }

    positionX += speedX * directionX;
    if (
      positionX <= -box.offsetWidth ||
      positionX + box.offsetWidth >= containerWidth
    ) {
      directionX *= -1;
    }

    positionY += speedY * directionY;
    if (positionY <= 0 || positionY + height >= containerHeight) {
      directionY *= -1;
    }

    box.style.left = `${positionX}px`;
    box.style.top = `${positionY}px`;

    requestAnimationFrame(moveBox);
  }

  box.addEventListener("mouseenter", () => {
    speedX = baseSpeedX * 0.1;
    speedY = baseSpeedY * 0.1;
  });

  box.addEventListener("mouseleave", () => {
    speedX = baseSpeedX;
    speedY = baseSpeedY;
  });

  box.addEventListener("click", () => {
    shrinking = false;
    let targetHeight = Math.min(height + initialHeight * 0.1, initialHeight);
    let animationFrame;

    function increaseHeight() {
      if (height < targetHeight) {
        height += 1;
        box.style.height = `${height}px`;
        animationFrame = requestAnimationFrame(increaseHeight);
      } else {
        cancelAnimationFrame(animationFrame);
        setTimeout(() => {
          shrinking = true;
        }, 1000);
      }
    }

    increaseHeight();
  });

  moveBox();
});
