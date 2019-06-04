
 var wins=0
 var losses=0
 var score=0;
 var goal=0;

$(document).ready(function(){
    

    var crystalRedValue=0;


    function goalFunction(){

        var goalUnrounded = Math.random() * (120 - 19) + 19;
        goal = Math.floor(goalUnrounded);
        $("#goal").text(goal);
        console.log(goal);

    }

    function crystalRandomFunction(){

        crystalRedValue = Math.floor(Math.random() * (12 - 1) + 1);
        $("#R").data("value", crystalRedValue);

        var crystalBlueValue = Math.floor(Math.random() * (12 - 1) + 1);
        $("#B").data("value", crystalBlueValue);

        var crystalGreenValue = Math.floor(Math.random() * (12 - 1) + 1);
        $("#G").data("value", crystalGreenValue);

        var crystalYellowValue = Math.floor(Math.random() * (12 - 1) + 1);
        $("#Y").data("value", crystalYellowValue);

    }

    $("#R").click(function() {
        var value = $(this).data("value");
        score = score + value;
        $("#score").text(score);
        crystalCheck();
    });

    $("#B").click(function() {
        var value = $(this).data("value");
        score = score + value;
        $("#score").text(score);
        crystalCheck();
    });

    $("#G").click(function() {
        var value = $(this).data("value");
        score = score + value;
        $("#score").text(score);
        crystalCheck();
    });

    $("#Y").click(function() {
        var value = $(this).data("value");
        score = score + value;
        $("#score").text(score);
        crystalCheck();
    });

    function crystalCheck(){

        if(score === goal){

            wins++;
            $("#wins").text(wins);
            console.log(wins);
            goal=0;
            score=0;
            goalFunction();
            crystalRandomFunction();

        }

        if(score >= goal){

            losses++;
            $("#losses").text(losses);
            console.log(losses);
            goal=0;
            score=0;
            goalFunction();
            crystalRandomFunction();
        }

    }



    goalFunction();
    crystalRandomFunction();
  });

