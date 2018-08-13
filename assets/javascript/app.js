//object with questions and answers and correct choices
var questions = [
    { 
        "Question": "What is Drake's real name?",
        "Answer": ["Grayson", "Aubrey", "Jeffrey", "Susu"],
        "Correct": "Aubrey",
        "Image": "https://media.giphy.com/media/CnTm1G4rM7k9q/giphy.gif"
    },

    {
        "Question": "Which Kendrick Lamar song came first?", "Answer": ["i", "Humble", "Ignorance is Bliss", "Poetic Justice"],
        "Correct": "Ignorance is Bliss",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

    {
        "Question": "J Cole knocked on whose door to promote his mixtape?",
        "Answer": ["Jay Z", "Eminem", "Nas", "Tupac"],
        "Correct": "Jay Z",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

    {
        "Question": "Continue the lyric: 'I am a sinner...'",
        "Answer": ["baby cook me a chicken dinner", "I am a singer, I'm gonna bring her back again", "and I'm probably gonna sin again", "because I've been caught up in inside trading and it's immoral and illegal, damn"],
        "Correct": "and I'm probably gonna sin again",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

    {
        "Question": "What is Nas' revolutionary debut album that changed the game?",
        "Answer": ["Illmatic", "Moment of Clarity", "It Was Written", "All Eyez On Me"],
        "Correct": "Illmatic",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

    {
        "Question": "Continue the lyric: 'His palms are...'",
        "Answer": ["ready, easily calm and steady", "drawn, on the song he drops a bomb", "gone, bloodied since the start of dawn", "sweaty, knees weak, arms are heavy"],
        "Correct": "sweaty, knees weak, arms are heavy",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

    {
        "Question": "Who is not an original member of the Wu Tang Clan?",
        "Answer": ["Ghostface Killah", "FZA", "Method Man", "Raekwon"],
        "Correct": "FZA",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

    {  
        "Question": "Continue the lyric: 'La, la, laa la, wait till I get my...'",
        "Answer": ["boys lined up", "girl back again", "fans and the bands", "money right"],
        "Correct": "money right",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif"
    },

];

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
            $("#clock").css("animation", "none");
            $("#timer").text("Time left: " + seconds);
            seconds--;

            if(seconds < 5){
                $("#clock").css("animation", "pulse 5s infinite");
            }

            if(seconds === -1 && click < questions.length){
                seconds = 15;
                click++
                incorrect++;
                nextQuestion();
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
            $(this).css("background-color", "rgba(120, 247, 109, 0.65)");
            $(this).css("box-shadow", "0px 0px 10px rgba(6, 250, 26, 0.87)");
            $(this).css("font-size", "28px");
            $(this).css("font-family", "'Lobster', cursive");
            $(this).css("padding", "5px");
            $(this).css("transition", "0.5s ease");
            
            correct++;
            console.log("Correct!");
        }
        else{
            $(this).css("background-color", "rgba(226, 67, 67, 0.61)");
            $(this).css("box-shadow", "0px 0px 10px rgba(250, 6, 6, 0.87)");
            $(this).css("font-size", "28px");
            $(this).css("font-family", "'Lobster', cursive");
            $(this).css("border-radius", "10px");
            $(this).css("padding", "5px");
            $(this).css("transition", "0.5s ease");
            incorrect++;
            console.log("incorrect!");
        }
        click++;
        seconds = 15;
        $("#clock").css("animation", "none");
        clearTimeout(timer);

    
        setTimeout(function(){
            timeLimit();
            if(click < questions.length){
                nextQuestion();
            }
            else if(click === questions.length){
                displayScore();
            }
        }, 3000);
    
    });

});