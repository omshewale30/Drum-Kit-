var ndrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < ndrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonAnimation(this.innerHTML);
    switch (this.innerHTML) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
      case "j":
        var audio = new Audio('sounds/tom-5.mp3');
        audio.play();
        break;
      case "k":
        var audio = new Audio('sounds/tom-7.mp3');
        audio.play();
        break;
      case "l":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    }

  });

}
document.addEventListener("keypress", (event) => {
buttonAnimation(event.key);
  switch (event.key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-5.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-7.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
  }

});

function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}
