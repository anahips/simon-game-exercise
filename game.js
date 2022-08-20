var userClickedPattern = [];
var gamePattern = [];
var lastPatternColor = null;
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

console.log(lastPatternColor);

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`.` + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  lastPatternColor = gamePattern[gamePattern.lastIndexOf(randomChosenColor)];

  playSound(randomChosenColor);
}

$(".btn").on("click", function (event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  var lastAnswerColor =
    userClickedPattern[userClickedPattern.lastIndexOf(userChosenColor)];

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(lastAnswerColor);
});

function playSound(name) {
  var audio = new Audio(`sounds/` + name + `.mp3`);
  audio.play();
}

function animatePress(currentColor) {
  $(`#` + currentColor).addClass("pressed");

  setTimeout(function () {
    $(`#` + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (currentLevel === lastPatternColor) {
    console.log("success");
  } else {
    console.log("sorry");
  }
}
