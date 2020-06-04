var level = -1;


function playRed(){
  var audio = new Audio("sounds/red.mp3");
   audio.play();
}

function playGreen(){
  var audio = new Audio("sounds/green.mp3");
   audio.play();
}

function playBlue(){
  var audio = new Audio("sounds/blue.mp3");
   audio.play();

}

function playYellow(){
  var audio = new Audio("sounds/yellow.mp3");
   audio.play();

}
function playWrong(){
  var audio = new Audio("sounds/wrong.mp3")
  audio.play();
}


function play_sound(name){

  console.log("Playing sound " + name);

  var random_number = Math.random();
  random_number = random_number*4;
  random_number = Math.floor(random_number);

  var random_chosen_color = button_colors[random_number];

  if(name=="red"){
    playRed();
  }
  else if(name == "green"){
    playGreen();
  }
  else if(name == "blue"){
    playBlue();
  }
  else if(name == "yellow"){
    playYellow();
  }

}


function next_sequence() {
  user_clicked_pattern = [];
  level++;

  $("#level-title").text("Level " + level);

  var random_number = Math.random();
  random_number = random_number*4;
  random_number = Math.floor(random_number);


  var random_chosen_color = button_colors[random_number];

  $("#" + random_chosen_color).fadeIn(100).fadeOut(100).fadeIn(100);


  game_pattern.push(random_chosen_color);

}






var user_clicked_pattern = [];


$('#red').click(function(){
    play_sound("red");
});


$('#green').click(function(){
    play_sound("green");
});

$('#yellow').click(function(){
    play_sound("yellow");
});

$('#blue').click(function(){
    play_sound("blue");
});


$(".btn").click(function(){
  // var user_clicked_pattern = [];

  var user_chosen_color = $(this).attr("id");
  console.log(user_chosen_color);
  user_clicked_pattern.push(user_chosen_color);
  check_answer(user_clicked_pattern.length-1);
  console.log(user_clicked_pattern);
  animatePress(user_chosen_color);
});

function animatePress(currentColor) {
  console.log("hello");

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}





function check_answer(current_level){
    if(game_pattern[current_level] === user_clicked_pattern[current_level]){
      console.log("success");
      if(user_clicked_pattern.length === game_pattern.length){
        setTimeout(function(){
          next_sequence();
        },1000);
      }
  }
    else{
      playWrong();
      $("#level-title").text("GAME OVER!!! Please refresh the page to play again..")

      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    }
}



$(document).ready(function(){
  $("#level-title").text("Press a key to start!");

  console.log("Hello");
});



var started = false;

$(document).keypress(function() {
  // console.log("hello");
  if (!started) {
    next_sequence();
    started = true;
  }
});


var game_pattern = [];

var button_colors = ["red", "blue", "green", "yellow"];
