var mario = document.querySelector(".mariostay");
var marioRunning = false;
var marioTurnedRight = true;
var i = 0;
function moveRight() {
  i++;
  document.querySelector("body").style.backgroundPosition = i + "px";
  marioRunning = true;
}
function moveLeft() {
  i--;
  document.querySelector("body").style.backgroundPosition = i + "px";
  marioRunning = true;
}

document.addEventListener("keydown", function (e) {
  if (!marioRunning && e.keyCode == "39") {
    marioTurnedRight = true;
    mario.setAttribute("src", "./mario_running.gif");
    mario.setAttribute("class", "marioRight");
    kreni = window.setInterval(moveLeft, 3);
  }

  document.addEventListener("keyup", function (e) {
    if (e.keyCode == "39") {
      marioRunning = false;
      mario.setAttribute("src", "./mario.png");
      mario.setAttribute("class", "marioRight");
      clearInterval(kreni);
    }
  });

  document.addEventListener("keyup", function (e) {
    if (e.keyCode == "37") {
      marioRunning = false;
      mario.setAttribute("src", "./mario.png");
      mario.setAttribute("class", "marioLeft");
      clearInterval(kreni);
    }
  });
});
document.addEventListener("keydown", function (e) {
  if (!marioRunning && e.keyCode == "37") {
    marioTurnedRight = false;
    mario.setAttribute("src", "./mario_running.gif");
    mario.setAttribute("class", "marioLeft");
    kreni = window.setInterval(moveRight, 3);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "38") {
    mario.setAttribute("class", "marioJump");
  }
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == "38") {
    if (!marioTurnedRight) {
      mario.setAttribute("class", "marioJumpedLeft");
    } else {
      mario.setAttribute("class", "marioJump");
    }
  }
});
document.addEventListener("keyup", function (e) {
  if (e.keyCode == "38") {
    if (marioTurnedRight) {
      mario.setAttribute("class", "marioJumped");
    } else {
      mario.setAttribute("class", "marioLeft");
    }
  }
});
