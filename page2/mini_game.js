let target1 = document.querySelector("#target1");
let hit1 = document.querySelector(".hit1");

let target2 = document.querySelector("#target2");
let hit2 = document.querySelector(".hit2");

let target3 = document.querySelector("#target3");
let hit3 = document.querySelector(".hit3");

let target4 = document.querySelector("#target4");
let hit4 = document.querySelector(".hit4");

let target5 = document.querySelector("#target5");
let hit5 = document.querySelector(".hit5");

let hitScore = document.querySelector("#score");

let restartButton = document.querySelector("#restart_button");

let scoreConstant = 50;
let newScore = 0;

let checkPoint1 = 500;
let checkPoint2 = 1000;
let checkPoint3 = 1500;
let checkPoint4 = 2000;

let origintalTargetSize = 50 + "px";

let minHorizontalPosition = 0;
let maxHorizontalPosition = 90;

let minVerticalPosition = 50;
let maxVerticalPosition = 98;

function checkScore() {
  if (newScore == checkPoint1) {
    target1.style.width = 40 + "px";
    target1.style.height = 40 + "px";

    target2.style.width = 40 + "px";
    target2.style.height = 40 + "px";

    target3.style.width = 40 + "px";
    target3.style.height = 40 + "px";

    target4.style.width = 40 + "px";
    target4.style.height = 40 + "px";

    target5.style.width = 40 + "px";
    target5.style.height = 40 + "px";
  } else if (newScore == checkPoint2) {
    target1.style.width = 30 + "px";
    target1.style.height = 30 + "px";

    target2.style.width = 30 + "px";
    target2.style.height = 30 + "px";

    target3.style.width = 30 + "px";
    target3.style.height = 30 + "px";

    target4.style.width = 30 + "px";
    target4.style.height = 30 + "px";

    target5.style.width = 30 + "px";
    target5.style.height = 30 + "px";
  } else if (newScore == checkPoint3) {
    target1.style.width = 25 + "px";
    target1.style.height = 25 + "px";

    target2.style.width = 25 + "px";
    target2.style.height = 25 + "px";

    target3.style.width = 25 + "px";
    target3.style.height = 25 + "px";

    target4.style.width = 25 + "px";
    target4.style.height = 25 + "px";

    target5.style.width = 25 + "px";
    target5.style.height = 25 + "px";
  } else if (newScore == checkPoint4) {
    target1.style.width = 20 + "px";
    target1.style.height = 20 + "px";

    target2.style.width = 20 + "px";
    target2.style.height = 20 + "px";

    target3.style.width = 20 + "px";
    target3.style.height = 20 + "px";

    target4.style.width = 20 + "px";
    target4.style.height = 20 + "px";

    target5.style.width = 20 + "px";
    target5.style.height = 20 + "px";
  }
}

function getVerticalRandomNumber() {
  return (
    Math.floor(
      Math.random() * (maxVerticalPosition - minVerticalPosition + 1)
    ) + minVerticalPosition
  );
}

function getHorizontalRanmdonNumber() {
  return (
    Math.floor(
      Math.random() * (maxHorizontalPosition - minHorizontalPosition + 1)
    ) + minHorizontalPosition
  );
}

function getScore() {
  return (newScore += scoreConstant);
}

hit1.addEventListener("click", () => {
  let x = (target1.style.top = getVerticalRandomNumber() + "%");
  let y = (target1.style.right = getHorizontalRanmdonNumber() + "%");

  hitScore.innerText = getScore();
});

hit2.addEventListener("click", () => {
  target2.style.top = getVerticalRandomNumber() + "%";
  target2.style.right = getHorizontalRanmdonNumber() + "%";

  hitScore.innerText = getScore();
});

hit3.addEventListener("click", () => {
  target3.style.top = getVerticalRandomNumber() + "%";
  target3.style.right = getHorizontalRanmdonNumber() + "%";

  hitScore.innerText = getScore();
});

hit4.addEventListener("click", () => {
  target4.style.top = getVerticalRandomNumber() + "%";
  target4.style.right = getHorizontalRanmdonNumber() + "%";

  hitScore.innerText = getScore();
});

hit5.addEventListener("click", () => {
  target5.style.top = getVerticalRandomNumber() + "%";
  target5.style.right = getHorizontalRanmdonNumber() + "%";

  hitScore.innerText = getScore();
});

restartButton.addEventListener("click", () => {
  hitScore.innerText = 0;
  newScore = 0;

  //new position
  target1.style.top = getVerticalRandomNumber() + "%";
  target1.style.right = getHorizontalRanmdonNumber() + "%";

  target2.style.top = getVerticalRandomNumber() + "%";
  target2.style.right = getHorizontalRanmdonNumber() + "%";

  target3.style.top = getVerticalRandomNumber() + "%";
  target3.style.right = getHorizontalRanmdonNumber() + "%";

  target4.style.top = getVerticalRandomNumber() + "%";
  target4.style.right = getHorizontalRanmdonNumber() + "%";

  target5.style.top = getVerticalRandomNumber() + "%";
  target5.style.right = getHorizontalRanmdonNumber() + "%";

  //revert target size
  target1.style.width = origintalTargetSize;
  target1.style.height = origintalTargetSize;

  target2.style.width = origintalTargetSize;
  target2.style.height = origintalTargetSize;

  target3.style.width = origintalTargetSize;
  target3.style.height = origintalTargetSize;

  target4.style.width = origintalTargetSize;
  target4.style.height = origintalTargetSize;

  target5.style.width = origintalTargetSize;
  target5.style.height = origintalTargetSize;
});

setInterval(checkScore, 1000);
