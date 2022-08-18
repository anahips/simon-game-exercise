var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$(document).keypress(function () {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`.` + `${randomChosenColor}`)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio(`sounds/` + `${randomChosenColor}` + `.mp3`);
  audio.play();

  console.log(audio);
});
