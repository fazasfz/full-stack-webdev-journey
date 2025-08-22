// This code plays a sound when executed
document.querySelectorAll(".drum").forEach(function(button) {
  button.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    var soundFile;
    switch (buttonInnerHTML) {
      case "w":
        soundFile = "sounds/tom-1.mp3";
        break;
      case "a":
        soundFile = "sounds/tom-2.mp3";
        break;
      case "s":
        soundFile = "sounds/tom-3.mp3";
        break;
      case "d":
        soundFile = "sounds/tom-4.mp3";
        break;
      case "j":
        soundFile = "sounds/snare.mp3";
        break;
      case "k":
        soundFile = "sounds/crash.mp3";
        break;
      case "l":
        soundFile = "sounds/kick-bass.mp3";
        break;
      default:
        soundFile = "sounds/tom-1.mp3";
    }
    var audio = new Audio(soundFile);
    audio.play();
  });
});

document.querySelectorAll(".drum").forEach(function(button) {
  var buttonInnerHTML = button.innerHTML;
  var imageUrl;
  switch (buttonInnerHTML) {
    case "w":
      imageUrl = "images/tom1.png";
      break;
    case "a":
      imageUrl = "images/tom2.png";
      break;
    case "s":
      imageUrl = "images/tom3.png";
      break;
    case "d":
      imageUrl = "images/tom4.png";
      break;
    case "j":
      imageUrl = "images/snare.png";
      break;
    case "k":
      imageUrl = "images/crash.png";
      break;
    case "l":
      imageUrl = "images/kick.png";
      break;
    default:
      imageUrl = "images/tom1.png";
  }
  button.style.backgroundImage = `url('${imageUrl}')`;
  button.style.backgroundSize = "contain";
  button.style.backgroundPosition = "center";
  button.style.backgroundRepeat = "no-repeat";
});

document.querySelectorAll(".drum").forEach(function(button) {
  button.addEventListener("click", function() {
    buttonAnimation(this.innerHTML);
  });
});
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}