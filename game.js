var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$(document).ready(function () {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`.` + `${randomChosenColor}`)
    .fadeOut(100)
    .fadeIn(100);

  console.log(randomChosenColor);
});
