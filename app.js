var randomNumber = Math.floor(Math.random() * 10) + 1;

var attempts = 3;

function checkNumber(){

    var userNumber = document.getElementById("number").value;

    if(userNumber < 1 || userNumber > 10){

        document.getElementById("result").innerHTML =
        "Enter a number between 1 and 10";

        return;

    }


    document.getElementById("attempt").innerHTML =
    "Attempts Left : " + attempts;

    if(userNumber == randomNumber){


        document.getElementById("result").innerHTML =
        "Congratulations! You Won.";

    }

    else if(attempts == 0){

        document.getElementById("result").innerHTML =
        "Game Over! Number was " + randomNumber;

    }

    else if(userNumber > randomNumber){

        document.getElementById("result").innerHTML =
        "Too High!";

    }

    else{

        document.getElementById("result").innerHTML =
        "Too Low!";

    }

}

function newGame(){

    randomNumber = Math.floor(Math.random() * 10) + 1;

    attempts = 3;

    document.getElementById("number").value = "";

    document.getElementById("attempt").innerHTML =
    "Attempts Left : 3";

    document.getElementById("result").innerHTML = "";

}