//object with questions and answers and correct choices
var questions = [
    { 
        "Question": "What is Drake's real name?",
        "Answer": ["Grayson", "Aubrey", "Jeffrey", "Susu"],
        "Correct": "Aubrey"
    },

    {
        "Question": "Which Kendrick Lamar song came first?", "Answer": ["i", "Humble", "Ignorance is Bliss", "Poetic Justice"],
        "Correct": "Ignorance is Bliss"
    },

    {
        "Question": "J Cole knocked on whose door to promote his mixtape?",
        "Answer": ["Jay Z", "Eminem", "Nas", "Tupac"],
        "Correct": "Jay Z"
    },

    {
        "Question": "Continue the lyric: 'I am a sinner...'",
        "Answer": ["baby cook me a chicken dinner", "I am a singer, I'm gonna bring her back again", "and I'm probably gonna sin again", "because I've been caught up in inside trading and it's immoral and illegal, damn"],
        "Correct": "and I'm probably gonna sin again"
    },

    {
        "Question": "What is Nas' revolutionary debut album that changed the game?",
        "Answer": ["Illmatic", "Moment of Clarity", "It Was Written", "All Eyez On Me"],
        "Correct": "Illmatic"
    },

    {
        "Question": "Continue the lyric: 'His palms are...'",
        "Answer": ["ready, easily calm and steady", "drawn, on the song he drops a bomb", "gone, bloodied since the start of dawn", "sweaty, knees weak, arms are heavy"],
        "Correct": "sweaty, knees weak, arms are heavy"
    },

    {
        "Question": "Who is not an original member of the Wu Tang Clan?",
        "Answer": ["Ghostface Killah", "SZA", "Method Man", "Raekwon"],
        "Correct": "SZA"
    },

    {  
        "Question": "Continue the lyric: 'La, la, laa la, wait till I get my...'",
        "Answer": ["boys lined up", "girl back again", "fans and the bands", "money right"],
        "Correct": "money right"
    },

];

//questions[i].Answer.indexOf(questions[i].Correct);

//global variables
var correct = 0;
var incorrect = 0;
var timer;
var seconds = 15;
var click = 0; //raw click iterator
var answer; //empty answer variable to be edited


$(document).ready(function(){
    $(".answers").hide();

    // console.log(questions.length)

    // set time limit for each question
    function timeLimit(){
        timer = setInterval(function(){
            $("#timer").text("Time left: " + seconds);
            seconds--;

            if(seconds === -1 && click < questions.length){
                clearInterval(timer);
                click++
                incorrect++;
                nextQuestion();
                timeLimit();
            }
            else if(click === questions.length){
                displayScore();
            }
        }, 1000); 
    };

    function nextQuestion(){
        seconds = 15;
        $("#questions").empty();
        $(".answers").empty();
        
        var q = $("<h2>").text(questions[click].Question);
        $("#questions").append(q);

        for(var i = 0; i < questions[click].Answer.length; i++){
            answer = $("<p>").text(questions[click].Answer[i]);
            answer.attr("id", questions[click].Answer[i]);
            answer.attr("class", "options");
            // console.log(answer.attr("id"));
            $(".answers").append(answer);
            }
        
    };

    function displayScore(){
        clearInterval(timer);
        $("#timer").hide();
        $("#questions").hide();
        $(".answers").hide();
        $("#clock").hide();
        $("#score").show();

        var percentage = Math.round((correct/questions.length) * 100);
        console.log("Percentage: " + percentage)
        function addScore(){
            var totalScore = $("<p>").text("Your total score is: " + percentage + "%");
            $("#score").append(totalScore);
            var totalCorrect = $("<p>").text(correct + " Correct Answers.");
            $("#score").append(totalCorrect);
            var totalIncorrect = $("<p>").text(incorrect + " Incorrect Answers.");
            $("#score").append(totalIncorrect);
        }

        if(percentage > 80){
            var message = $("<h3>").text("Started from the bottom, now you're here.")
            $("#score").append(message);
            addScore();
        }
        else if(percentage > 50) {
            var message = $("<h3>").text("Impressive, but there's still room for improvement.");
            $("#score").append(message); 
            addScore();
        }
        else{
            var message = $("<h3>").text("Sit down... Be humble.");
            $("#score").append(message); 
            addScore(); 
        }

    }

    $("#start").on("click", function(){
        var audio = new Audio("assets/images/brasstracks.mp3");
        audio.play();
        $("#clock").show();
        $("#start").remove();
        $(".answers").show();
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
        else if(click === questions.length){
            displayScore();
        }

    });

});