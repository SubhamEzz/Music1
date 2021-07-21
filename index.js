

/** with jQuery*/


// $("button.w").on("click",function(){
//   var audio = new Audio('sounds/tom-1.mp3');
//              audio.play();
//
// });
// $("button.a").on("click",function(){
//   var audio = new Audio('sounds/tom-2.mp3');
//           audio.play();
// });
// $("button.s").on("click",function(){
//   var audio = new Audio('sounds/tom-3.mp3');
//             audio.play();
// });
// $("button.d").on("click",function(){
//   var audio = new Audio('sounds/tom-4.mp3');
//                audio.play();
// });
// $("button.j").on("click",function(){
//   var audio = new Audio('sounds/snare.mp3');
//                audio.play();
// });
// $("button.k").on("click",function(){
//   var audio = new Audio('sounds/crash.mp3');
//                audio.play();
// });$("button.l").on("click",function(){
//   var audio = new Audio('sounds/kick-bass.mp3');
//                audio.play();
// });

// $("document").keydown(function(event){
//   playSound(event.key);
//   btnAnimation(event.key);
// });





for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var btn = this.innerHTML;
  playSound(btn);
  btnAnimation(btn);

});

document.addEventListener("keydown",function(event){
  playSound(event.key);
  btnAnimation(event.key);
});
}

function playSound(key){
  switch(key){
    case 'w' :   var audio = new Audio('sounds/tom-1.mp3');
               audio.play();
               break;
    case 'a' :   var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
    case 's' :   var audio = new Audio('sounds/tom-3.mp3');
              audio.play();
              break;
    case 'd' :   var audio = new Audio('sounds/tom-4.mp3');
                 audio.play();
                 break;
    case 'j' :   var audio = new Audio('sounds/snare.mp3');
                 audio.play();
                 break;
    case 'k' :   var audio = new Audio('sounds/crash.mp3');
                 audio.play();
                 break;
    case 'l' :   var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
                 break;
  }
}

function btnAnimation(key){
 var mainKey= document.querySelector("."+key);
 mainKey.classList.add("pressed");
 setTimeout(function () {
   mainKey.classList.remove("pressed");
 }, 100);
}
