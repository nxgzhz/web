// 이미지 개수를 20개로 수정
const totalBoxes = 20;
const startYear = 1974;

// 좌측 박스 그룹
const leftBox = document.getElementById("left-box");
// 우측 박스 그룹
const rightBox = document.getElementById("right-box");

// 박스 생성 함수
function createBox(imageNumber, year) {
  const box = document.createElement("div");
  box.classList.add("box");

  // 이미지 태그 생성
  const img = document.createElement("img");
  img.src = `img/img${imageNumber.toString().padStart(2, "0")}.png`;
  img.alt = `img${imageNumber}`;

  // overlay 생성
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const text = document.createElement("span");
  text.textContent = year;
  overlay.appendChild(text);

  // 이미지와 overlay를 박스에 추가
  box.appendChild(img);
  box.appendChild(overlay);

  return box;
}

// 좌측 박스 그룹에 20개의 박스 추가 (위로 이동)
for (let i = 1; i <= totalBoxes; i++) {
  const year = startYear + i - 1; // 1974, 1975 ... 식으로 연도 설정
  const box = createBox(i, year);
  leftBox.appendChild(box);
}

// 우측 박스 그룹에 20개의 박스 추가 (아래로 이동)
for (let i = 1; i <= totalBoxes; i++) {
  const year = startYear + i - 1; // 1974, 1975 ... 식으로 연도 설정
  const box = createBox(i, year);
  rightBox.appendChild(box);
}

// 무한 스크롤을 위한 요소 복제
function cloneBoxes() {
  const leftBoxes = leftBox.querySelectorAll(".box");
  const rightBoxes = rightBox.querySelectorAll(".box");

  leftBoxes.forEach((box) => {
    const clone = box.cloneNode(true);
    leftBox.appendChild(clone);
  });

  rightBoxes.forEach((box) => {
    const clone = box.cloneNode(true);
    rightBox.appendChild(clone);
  });
}

// 초기화 시 박스를 복제하여 무한 스크롤 가능하게 설정
cloneBoxes();
