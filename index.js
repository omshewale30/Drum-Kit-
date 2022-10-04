var ndrums=document.querySelectorAll(".drum").length;

for (var i=0;i<ndrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var j=Math.ceil(Math.random()*6);
    var audnum="sounds/tom-"+j+".mp3";
  var audio = new Audio(audnum);
  audio.play();
});
}
