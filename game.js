var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`.` + `${randomChosenColor}`)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

$(".btn").on("click", function (event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
});

function playSound(name) {
  console.log(name);
  var audio = new Audio(`sounds/` + `${name}` + `.mp3`);
  audio.play();
}
