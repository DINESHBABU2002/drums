for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "blue";
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w": {
        new Audio("sounds/crash.mp3").play();
        break;
      }
      case "a": {
        new Audio("sounds/kick-bass.mp3").play();
        break;
      }
      case "s": {
        new Audio("sounds/snare.mp3").play();
        break;
      }
      case "d": {
        new Audio("sounds/tom-1.mp3").play();
        break;
      }
      case "j": {
        new Audio("sounds/tom-2.mp3").play();
        break;
      }
      case "k": {
        new Audio("sounds/tom-3.mp3").play();
        break;
      }
      case "l": {
        new Audio("sounds/tom-4.mp3").play();
        break;
      }
      default: {
        console.log(buttonInnerHTML);
      }
    }
  });
}

function handleClick() {
  //alert("hi");
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}

document.addEventListener("keypress", function (event) {
  console.log(event.key);
  switch (event.key) {
    case "w": {
      new Audio("sounds/crash.mp3").play();
      break;
    }
    case "a": {
      new Audio("sounds/kick-bass.mp3").play();
      break;
    }
    case "s": {
      new Audio("sounds/snare.mp3").play();
      break;
    }
    case "d": {
      new Audio("sounds/tom-1.mp3").play();
      break;
    }
    case "j": {
      new Audio("sounds/tom-2.mp3").play();
      break;
    }
    case "k": {
      new Audio("sounds/tom-3.mp3").play();
      break;
    }
    case "l": {
      new Audio("sounds/tom-4.mp3").play();
      break;
    }
    default: {
      console.log(buttonInnerHTML);
    }
  } //alert("sds");
});
