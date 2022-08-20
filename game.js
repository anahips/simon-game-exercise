var userClickedPattern = [];
var gamePattern = [];
var lastPatternColor = "";
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

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

  playSound(randomChosenColor);
  debugger;

  lastPatternColor = gamePattern[gamePattern.lastIndexOf(randomChosenColor)];
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

function checkAnswer(currentLevel) {
  if (currentLevel === lastPatternColor) {
    setTimeout(nextSequence, 1000);
  } else {
    wrong();
  }
}

function wrong() {
  playSound("wrong");

  $("body").addClass("game-over");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  $("#level-title").text("Game Over, Press Any Key to Restart");

  startOver();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

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
