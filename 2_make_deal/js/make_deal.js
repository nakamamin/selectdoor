/* Algorithm: Create a function that will randomise the prize to be in one of the doors. */

door_number = '0';
prize_win = false;
choose_stay = false;
enable_door1 = false;

function prizeRandom() {
  var door_prize = Math.floor(Math.random()*3 + 1);
  console.log(door_prize);
  return door_prize;
}

function replaceDealDesc(new_desc) {
  $("#deal_desc").replaceWith(new_desc);
  $(".choose_h3").replaceWith("<h3 class='choose_h3'>Would you like to switch or stay?</h3>");
}

function switchOrStay(choose_stay,prize_win) {
  console.log(choose_stay);
  if(choose_stay) {
    $("#deal_desc").replaceWith("<h3 id='deal_desc'>You have chosen to stay.</h3>");
  } else {
    $("#deal_desc").replaceWith("<h3 id='deal_desc'>You decided to switch.</h3>");    
  }

  if(prize_win) {
    $(".choose_h3").replaceWith("<h3 class='win'>Congratulations! It contains the AWESOME thing! <br/> Here is your prize!<h3>");
    $(".img_wrapper").replaceWith("<iframe width='560' height='315' src='//www.youtube.com/embed/IkHzvhsMGhI?list=PL31AE9DE086F06DCD' frameborder='0' allowfullscreen></iframe>");
  } else {
    $(".choose_h3").replaceWith("<h3 class='.choose_h3'>Oh no! You've chosen a horrible thing!</h3>"); 
    $(".img_wrapper").replaceWith("<iframe width='560' height='315' src='//www.youtube.com/embed/pNg8S_pqpQU' frameborder='0' allowfullscreen></iframe>");      
  }
}

function doorOne() {
  if(door_prize != 2) {
    var $new_door = $('<img src="img/door2_open.jpg">');
    $("#door2").replaceWith($new_door);
    door_number = '2';
    $("#door2").click(false); //disable click
  } else {
    $new_door = $('<img src="img/door3_open.jpg">');
    $("#door3").replaceWith($new_door);
    door_number = '3';
    $("#door3").click(false); //disable click
  }
  var new_desc = "<h3 id='deal_desc'>You have chosen Door 1. <br/>Behold! Door " + door_number + " has been opened that shows something that looks horrible!</h3>";
  replaceDealDesc(new_desc);

  //Stay
  $('#door1').click(function() {
    choose_stay = true;
    if(door_prize == 1) {
      prize_win = true;
    }
    switchOrStay(choose_stay,prize_win);
  });
  //Switch
  $('#door2').click(function() {
     choose_stay = false;
    if(door_prize == 2) {
      prize_win = true;
    }
    console.log(choose_stay);
    switchOrStay(choose_stay,prize_win);       
  });  
  $('#door3').click(function() {
     choose_stay = false;
    if(door_prize == 3) {
      prize_win = true;
    }   
    console.log(choose_stay);
    switchOrStay(choose_stay,prize_win);    
  });  

}//end doorOne()

function doorTwo() {
  if(door_prize != 1) {
    var $new_door = $('<img src="img/door1_open.jpg">');
    $("#door1").replaceWith($new_door);
    door_number = '1';
  } else {
    $new_door = $('<img src="img/door3_open.jpg">');
    $("#door3").replaceWith($new_door);
    door_number = '3';
  }
  var new_desc = "<h3 id='deal_desc'>You have chosen Door 2. <br/>Behold! Door " + door_number + " has been opened that shows something that looks horrible!</h3>";
  replaceDealDesc(new_desc);

  //Stay
  $('#door2').click(function() {
    choose_stay = true;
    if(door_prize == 2) {
      prize_win = true;
    }
    switchOrStay(choose_stay,prize_win);
  });
  //Switch
  $('#door1').click(function() {
     choose_stay = false;
    if(door_prize == 1) {
      prize_win = true;
    }
    switchOrStay(choose_stay,prize_win);       
  });  
  $('#door3').click(function() {
     choose_stay = false;
    if(door_prize == 3) {
      prize_win = true;
    }   
    switchOrStay(choose_stay,prize_win);    
  });  
}//end doorTwo()

function doorThree() {
  if(door_prize != 1) {
    var $new_door = $('<img src="img/door1_open.jpg">');
    $("#door1").replaceWith($new_door);
    door_number = '1';
  } else {
    $new_door = $('<img src="img/door2_open.jpg">');
    $("#door2").replaceWith($new_door);
    door_number = '2';
  }
  var new_desc = "<h3 id='deal_desc'>You have chosen Door 3. <br/>Behold! Door " + door_number + " has been opened that shows something that looks horrible!</h3>";
  replaceDealDesc(new_desc);

  //Stay
  $('#door3').click(function() {
    choose_stay = true;
    if(door_prize == 3) {
      prize_win = true;
    }
    switchOrStay(choose_stay,prize_win);
  });
  //Switch
  $('#door2').click(function() {
     choose_stay = false;
    if(door_prize == 2) {
      prize_win = true;
    }
    switchOrStay(choose_stay,prize_win);       
  });  
  $('#door1').click(function() {
     choose_stay = false;
    if(door_prize == 1) {
      prize_win = true;
    }   
    switchOrStay(choose_stay,prize_win);    
  });  
}

$(document).ready(function() {
  door_prize = prizeRandom();

});


