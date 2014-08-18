var currDoor = 0;
var openDoor = 0;
var newDoor = 0;
var winningDoor = 0;
var prizeWin, switchOrStay;

$(document).ready( function() {

  // set winning door
  winningDoor = Math.floor(Math.random()*3 + 1);
  
  $('#doors img').click( function() {

    // if currDoor has not been set yet, we are on the first click
    if(currDoor == 0) {

      // set currDoor
      currDoor = $(this).attr('data-door');

      // decide open door based on currDoor and winningDoor
      if(currDoor == 1) {
        openDoor = (winningDoor != 2) ? 2 : 3;
      } else if(currDoor == 2) {
        openDoor = (winningDoor != 1) ? 1 : 3;
      } else {
        openDoor = (winningDoor != 1) ? 1: 2;
      }

      // open openDoor
      $('#door' + openDoor).attr('src', 'img/door' + openDoor + '_open.jpg');

      // communicate clicked door and open door
      $('#deal_desc').html('You have chosen Door ' + currDoor +'!<br />Behold! Door ' + openDoor + ' has been opened that shows something that looks horrible!');
      $('#choose_h3').html('Would you like to switch or stay?<br>(Click same door to stay or the other door to switch.)');

    // if currDoor is set, we are on the second click
    } else {

      // set new door
      newDoor = $(this).attr('data-door');

      // console.log('1: ' + currDoor + ' / 2: ' + newDoor);

      // figure out if switched or stayed
      switchOrStay = (newDoor == currDoor) ? 'stay' : 'switch';
      // figure out if won
      prizeWin = (newDoor == winningDoor) ? 1 : 0;

      // communicate switched or stayed
      $('#deal_desc').html('You have chosen to ' + switchOrStay + '.');

      // communicate if won
      if(prizeWin == 1) {
        $('#choose_h3').replaceWith("<h3 class='win'>Congratulations! It contains the AWESOME thing! <br/> Here is your prize!<h3>");
        $('.img_wrapper').html("<iframe width='560' height='315' src='//www.youtube.com/embed/IkHzvhsMGhI?list=PL31AE9DE086F06DCD' frameborder='0' allowfullscreen></iframe>");
        $('#play_again').css('visibility','visible');
        $('#play_again').click(function() {
          //console.log('You clicked the button nice!')
          location.reload();
        });        
      } else {
        $('#choose_h3').html('Oh no! You\'ve chosen a horrible thing!');
        $('.img_wrapper').html("<iframe width='560' height='315' src='//www.youtube.com/embed/pNg8S_pqpQU' frameborder='0' allowfullscreen></iframe>");
        $('#play_again').css('visibility','visible');
        $('#play_again').click(function() {
          //console.log('You clicked the button horrible!')          
          location.reload();
        });          
      }

    }

  });

});