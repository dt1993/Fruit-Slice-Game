var playing;
var score;
var trialsleft;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function(){
    //click on start reset button
    $("#startreset").click(function(){

   //are we playing?
        if(playing == true){
            //reload page
            location.reload();

        }else{
            //we are not playing
            playing = true; //game initiated
            //set score to 0
            score = 0;
            $("#scorevalue").html(score);

            //show trials left
            $("#trialsleft").show();
            trialsLeft = 3;
            addHearts();

            //change button text to reset game
            $("#startreset").html("Reset Game");

            //start sending fruit
            startAction();


        }
    });

});





         
      //no
         //show trials left
         //change button text
//to reset game
         //1. create a random fruit
         //define a random step
         //2. more fruit down one step every 30 sec
            //is fruit too low?
               //no -> repeat #2
               //yes -> any trials left?
                  //yes -> repeat #1
                  //no -> show game over, button text -> start game

//slice fruit
   //play sound
   //explode fruit

   //functions
   function addHearts (){
    for(i = 0; i < trialsLeft; i ++){
        $("#trialsleft").append('<img src="assets/images/heart.png" class="life">');
   }
}

//start sending fruit
function startAction(){
    $("#fruit1").show();
    chooseFruit(); //choose random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
   

}

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src' , 'assets/images/' + fruits[Math.round(8*Math.random())] + '.png');;
}