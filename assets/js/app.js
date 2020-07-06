var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
var step;
var action;

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
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            //hide game over box
            $("#gameOver").hide();

            //change button text to reset game
            $("#startreset").html("Reset Game");

            //start sending fruit
            startAction();

        }
    });

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //updating score

    $("#slicesound")[0].play(); //play sound

    //stop fruit
    clearInterval(action);

    //hide fruit with anaimation
    $("#fruit1").hide("explode", 500); //slice fruit

    //send new fruit
    setTimeout(startAction, 550);

});


   //functions
   function addHearts (){
       $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i ++){
        $("#trialsLeft").append('<img src="assets/images/heart.png" class="life">');
   }
}

//start sending fruit
function startAction(){

    //generate fruit
    $("#fruit1").show();
    chooseFruit(); //choose random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position

    //generate random step
    step = 1 + Math.round(5*Math.random());
   
    //move fruit down by 1 step every 10ms
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);

        //check if fruit is too low
        if($("#fruit1").position().top > $("#fruitContainer").height()){

            //check if any trials left
            if(trialsLeft > 1){
                 //generate fruit
                $("#fruit1").show();
                chooseFruit(); //choose random fruit
                $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position

    //generate random step
    step = 1 + Math.round(5*Math.random());

                //reduce trials by 1
                trialsLeft --;

                //populate trials left
                addHearts();

            }else{ //game over
                playing= false;
                $("#startreset").html("Start Game");
                $("#gameOver").show();
                $("#gameOver").html('<p>game over!</p><p>your score is '+ score + ' </p>');
                $("#trialsLeft").hide();
                stopAction();

            }

        }

    }, 10);

}

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src' , 'assets/images/' + fruits[Math.round(8*Math.random())] + '.png');
}

//stop dropping fruit
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});