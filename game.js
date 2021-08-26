let arrayColors = ["red", "blue", "yellow", "green"]

let gameSequence = [];
let userSequence = [];
let level = 0;
let gameOver = false;
let numberOfUserClicks = 0
// let temporaryUserIndex=0;
//first iteration
$(document).on("keypress", function (e) {
    if (level === 0 && gameOver === false) setTimeout(nextSequence, 1000);
    if (level === 0 && gameOver === true) {

        $("body").removeClass("game-over");
        $("#level-title").text("New game!").css("color", "orange");
        setTimeout(nextSequence, 1000)
    }
});

function checkUserAnswer(indexOfSequence) {
    //If the answer is right but also is the last element of the sequence
    if (gameSequence[indexOfSequence] === userSequence[indexOfSequence] && indexOfSequence === (gameSequence.length - 1)) {
        console.log("right answer")
        userSequence = [];

        $("#level-title").text("Pay Attention!").css("color", "orange");
        //repeat the pattern
        repeatSequence()
        //If the answer if right but are items left in the sequence
    } else if (gameSequence[indexOfSequence] === userSequence[indexOfSequence]) {
        console.log("right answer")
    } else {
        playSound("wrong")
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press any key to Restart").css("color", "white");
        restart()
    }

}

// Click on any button
$(".btn").click(function () {

    var idColor = $(this).attr("id");
    // console.log(this)
    userSequence.push(idColor);
    // console.log(userSequence)
    playSound(idColor);
    animatePress(idColor);
    checkUserAnswer(userSequence.length - 1)
    // numberOfUserClicks++;
});


function nextSequence() {

    let randomColor = arrayColors[randomNumber()]
    gameSequence.push(randomColor)
    playSound(randomColor)
    $("#" + randomColor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
    // setTimeout(repeatSequence("#" + randomColor), 500);
    level++;

    setTimeout(() => $("#level-title").text("Level " + level).css("color", "white"), 1000)
    console.log(gameSequence)
}


function repeatSequence() {
    // $(colorName).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);

    gameSequence.forEach((color, index) => {

        setTimeout(() => {
            playSound(gameSequence[index])
            $("#" + gameSequence[index]).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
        }, (index * 1000) + 1000)
    })
    setTimeout(nextSequence, 1000 * gameSequence.length + 1000);
}

const playSound = function (name) {
    let audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

const randomNumber = function () {

    return Math.floor((Math.random() * 4) + 0)
}

function animatePress(colorName) {

    //add  pressed class to the button that gets clicked inside animatePress().
    $("#" + colorName).addClass("pressed");
    //remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $("#" + colorName).removeClass("pressed");
    }, 100);
}

function restart() {
    gameSequence = [];
    level = 0;
    userSequence = [];
    gameOver = true;


}

//     console.log($(e.target));
// for (let i = 0; i < arrayColors.length; i++) {
//     //     //     //     if (arrayColors[i]!=sequence[iteration]){
//     //     //     //         $("#"+).click(function (e) {

//     //     //     //         })
//     //     //     //     }
//     //     //     // }
//     if (arrayColors[i] != sequence[iteration - 1]) {

//         $("#" + arrayColors[i]).bind("click", function () {
//             gameOver = true;
//             alert("Game Over")

//         });
//     }
// }

// $(document).click(function (e) {
//     console.log($(e.target));

//     //         gameOver = true;
// });
// // while (iteration > 0 && gameOver === false) {
//     $("#level-title").text("Your turn!" + iteration + " Round");
//     $(document).click(function () {
//         alert($(this).text());
//         gameOver = true;
//     });




//     //     //if the user click the right answer
//     //     // $("#"+sequence[iteration]).click(function (e) { 
//     //     //     $("#" + sequence[iteration]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     //     //     let audio = new Audio('sounds/' + sequence[iteration] + '.mp3');
//     //     //     audio.play();
//     //     // });
//     //     // //if the user click a wrong answer
//     //     // //Search if that event happen
//     //     // for (let i=0;i<arrayColors.length;i++){
//     //     //     if (arrayColors[i]!=sequence[iteration]){
//     //     //         $("#"+).click(function (e) {

//     //     //         })
//     //     //     }
//     //     // }

// }

// .
// });


// var hasBeenClicked = false;
// jQuery('#id').click(function () {
//     hasBeenClicked = true;
// });

// if (hasBeenClicked) {
//     // The link has been clicked.
// } else {
//     // The link has not been clicked.
// }



// $("#green").css("background-color", "purple")