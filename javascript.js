
var card = $("#trivia-game");

var questions = [
    {
        question: "what is 1 + 5 ?",
        answers: ["15", "6", "9", "1"],
        correctAnswer: "6"
    },
    {
        question: "who is Jay-Z ?",
        answers: ["rapper", "president", "scientist", "comedian"],
        correctAnswer: "rapper"
    },
    {
        question: "who's 44th president of the USA?",
        answers: ["Ronald Reagan", "Donald Trump", "Barack Obama", "Jay-Z"],
        correctAnswer: "Barack Obama"
    },
    {
        question: "what is value of Pi",
        answers: ["1", "2", "3", "3.14"],
        correctAnswer: "3.14"
    },
    {
        question: "how many letters in russian alphabet?",
        answers: ["26", "3000", "33", "16"],
        correctAnswer: "33"

    }
];

var timer;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
// once count gets to 0 stop teh timer and display on the the html file
    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("time up");
            game.done();
            clearInterval(timer);
        }
    },
// call the function to begin the game and set the timer 
    start: function () {
        timer = setInterval(game.countdown, 1000);
// with jquery displaying starting number 60 and removing button "start"
        $("#sub-wrapper").prepend("<h2> Time remaining: <span id= 'counter-number'>10</span> seconds</h2>");
        $("#start").remove();
// start function takes an array of quetstins defined in "question variable and allows to select by radio-button"
        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var x = 0; x < questions[i].answers.length; x++) {
                card.append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[x] + "'>" + questions[i].answers[x]);
            }
        }

        card.append("<button id='done'> Done</button>");
    },
    // once all answers selected - done function calculates correct and incorrect answers 
    done: function () {
        var inputs = card.children("input:checked");
        console.log('inside done');
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i].val() === questions[i].correctAnswer)) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        game.result();
    },
// clearInterval stops the timer 
    result: function () {
        clearInterval(timer);
        $("#sub-wrapper h2").remove();
        // and resuls brougt to html page
        card.html("<h3> Game is Over</h3>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect answers: " + this.incorrect + "</h3>");
    }
};
// on click events to activate "strat" and "done" on the html page 
$(document).on("click", "#start", function () {
 game.start();
});
$(document).on("click", "#done", function () {
game.done();
});
