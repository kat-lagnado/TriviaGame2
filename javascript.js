


var card = $("#quiz-area");

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
    counter: 60,
    unanswered: 0,


//function d
    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("time up");
            game.done();
        }
    },
// start timer function with 1 second interval
    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend(
            "<h2>Time remaining: <span id='counter-number'>20</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {
        var inputs = card.append("input:checked");
        for (var i = 0; i < inputs.lenght; i++) {
            if (inputs[i].val() === questions[i].correctAnswer) {
                game.correct++;
            } else { 
                game.incorrect++;
            
            }
            
        }
        game.result();
    },
    result: function() {
        clearInterval(timer);
    
        $("#sub-wrapper h2").remove();
        
        card.html("<h2>All done!</h2>");
        card.append("<h3> Correct Answers: " + game.correct + "</h3>");
        card.append("<h3> Incorrect Answers: " + game.incorrect + "</h3>");
        card.append("<h3> Unanswered: " + game.unanswered + "</h3>");
        
    }
};




$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});

