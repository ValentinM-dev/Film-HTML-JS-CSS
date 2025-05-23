var media = document.querySelector("video");
var controls = document.querySelector(".controls");

var play = document.querySelector(".play");
var stop = document.querySelector(".stop");
var rwd = document.querySelector(".rwd");
var fwd = document.querySelector(".fwd");

var timerWrapper = document.querySelector(".timer");
var timer = document.querySelector(".timer span");
var timerBar = document.querySelector(".timer div");
var body = document.querySelector("body");

media.removeAttribute("controls");
controls.style.visibility = "visible";

play.addEventListener("click", playPauseMedia);

function playPauseMedia() {
  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalFwd);
  clearInterval(intervalRwd);
  if (media.paused) {
    play.setAttribute("data-icon", "u");
    media.play();
    body.classList.add("shadow");

  } else {
    play.setAttribute("data-icon", "P");
    media.pause();
    body.classList.remove("shadow");
  }
}

stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);

function stopMedia() {
  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalFwd);
  clearInterval(intervalRwd);
  media.pause();
  media.currentTime = 0;
  play.setAttribute("data-icon", "P");
  body.classList.remove("shadow");
}

rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);

var intervalFwd;
var intervalRwd;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove("active");

  if (rwd.classList.contains("active")) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add("active");
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove("active");

  if (fwd.classList.contains("active")) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add("active");
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

media.addEventListener("timeupdate", setTime);

function setTime() {
  var minutes = Math.floor(media.currentTime / 60);
  var seconds = Math.floor(media.currentTime - minutes * 60);
  var minuteValue;
  var secondValue;

  if (minute < 10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (secondes < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  var mediaTime = MinuteValue + ":" + secondValue;
  timer.textContent = mediaTime;

  var barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = barLength + "px";
}

