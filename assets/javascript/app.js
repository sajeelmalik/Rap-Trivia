//object with questions and answers and correct choices
var questions = [{"Question": "What is Drake's real name?",
"Answer": ["Grayson", "Aubrey", "Jeffrey", "Susu"],
"Correct": "Aubrey"},

{"Question": "Which Kendrick Lamar song came first?", "Answer": ["i", "Humble", "Ignorance is Bliss", "Poetic Justice"],
"Correct": "Ignorance is Bliss"},

{"Question": "J Cole knocked on whose door to promote his mixtape?",
"Answer": ["Jay Z", "Eminem", "Nas", "Tupac"],
"Correct": "Jay Z"},

{"Question": "Continue the lyric: 'I am a sinner...'",
"Answer": ["baby cook me a chicken dinner", "I am a singer, I'm gonna bring her back again", "and I'm probably gonna sin again", "because I've been caught up in inside trading and it's immoral and illegal, damn"],
"Correct": "and I'm probably gonna sin again"},

{"Question": "J Cole knocked on whose door to promote his mixtape?",
"Answer": ["Jay Z", "Eminem", "Nas", "Tupac"],
"Correct": "Jay Z"},

{"Question": "Continue the lyric: 'His palms are...'",
"Answer": ["ready, easily calm and steady", "drawn, on the song he drops a bomb", "gone, bloodied since the start of dawn", "sweaty, knees weak, arms are heavy"],
"Correct": "sweaty, knees weak, arms are heavy"},
];

//questions[i].Answer.indexOf(questions[i].Correct);

//global variables
var correct = 0;
var incorrect = 0;
var timer;
var seconds = 10;
var click = 0; //raw click iterator
var answer; //empty answer variable to be edited


$(document).ready(function(){

    console.log(questions.length)

    function timeLimit(){
        timer = setInterval(function(){
            $("#timer").text("Time left: " + seconds);
            seconds--;

            if(seconds === -1 && click < questions.length){
                clearInterval(timer);
                click++
                incorrect++;
                nextQuestion();
                // checkAnswer();
                timeLimit();
            }
            else if(click === 10){
                displayScore();
            }
        }, 1000); 
    };

    function nextQuestion(){
        seconds = 10;
        $("#questions").empty();
        $(".answers").empty();
        // console.log(questions[click].Answer.indexOf(questions[click].Correct));
        var q = $("<h2>").text(questions[click].Question);
        $("#questions").append(q);

        for(var i = 0; i < questions[click].Answer.length; i++){
            answer = $("<p>").text(questions[click].Answer[i]);
            answer.attr("id", questions[click].Answer[i]);
            console.log(answer.attr("id"));
            $(".answers").append(answer);
            }
        
        // }
    };

    // function checkAnswer(){
        
    //     var correctIndex = questions[click].Answer.indexOf(questions[click].Correct);
    //     console.log(correctIndex);
    //     console.log(answer.id)
    //     if (answer.id === questions[click].Correct){
    //         correct++;
    //     }
    //     else{
    //         incorrect++;
    //     }
        
    //     console.log(correct + " " + incorrect)
    // }

    function displayScore(){
        var percentage = Math.round(correct/incorrect);
        console.log("Percentage: " + percentage)
        function addScore(){
            $("score").append("Your total score is: " + percentage);
            $("score").append(correct + " Correct Answers.");
            $("score").append(incorrect + " Incorrect Answers.");
        }
        if(percentage > 80){
            var message = $("<h3>").text("You... might be a genius!")
            $("score").append(message);
            addScore();
        }
        else if(percentage > 50) {
            var message = $("<h3>").text("Impressive, but there's still room for improvement.");
            $("score").append(message); 
            addScore();
        }
        else{
            var message = $("<h3>").text("YOU FAILED! Definitely room to improve.");
            $("score").append(message); 
            addScore(); 
        }

    }

    $("#start").on("click", function(){
        $("#start").remove();
        timeLimit();
        nextQuestion();
    });

    $(".answers").on("click", "p", function(){
        console.log(click);
        console.log($(this).attr('id'));
        console.log(questions[click].Correct);
        if ($(this).attr('id') === questions[click].Correct){
            correct++;
            console.log("Correct!");
        }
        else{
            incorrect++;
            console.log("incorrect!");
        }
        click++;
        if(click < questions.length){
            nextQuestion();
        }
        else if(click === 10){
            displayScore();
        }

    });

});