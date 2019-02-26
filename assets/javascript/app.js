//object with questions and answers and correct choices
var questions = [
    {
        "Question": "What is Drake's real name?",
        "Answer": ["Grayson", "Aubrey", "Jeffrey", "Susu"],
        "Correct": "Aubrey",
        "Image": "https://media.giphy.com/media/CnTm1G4rM7k9q/giphy.gif",
        explanation: "Drake was born Aubrey Drake Graham on 24th October 1986 and he's 31 years old. His nicknames are Drizzy and Champagne Papi."
    },

    {
        "Question": "Which Kendrick Lamar song came first?", "Answer": ["i", "Humble", "Ignorance is Bliss", "Poetic Justice"],
        "Correct": "Ignorance is Bliss",
        "Image": "https://media.giphy.com/media/26ufdKlT4SEYqyLG8/giphy.gif",
        explanation: "'Ignorance is Bliss' was released on September 23rd, 2010 as part of his Overly Dedicated mixtape!"
    },

    {
        "Question": "J Cole knocked on whose door to promote his mixtape?",
        "Answer": ["Jay Z", "Eminem", "Nas", "Tupac"],
        "Correct": "Jay Z",
        "Image": "https://media.giphy.com/media/101TgAiTF9v6E0/giphy.gif",
        explanation: "It was 2007. J. Cole was fresh out of St. John’s University and saw that Jay-Z was working on American Gangster. “I was like, ‘Yo, he’s not done yet. I can go make beats right now and get on this album ‘cause I know where the studio is at. So I went home, made two beats... took the train to the city, stood outside the studio... for like three hours waiting on Jay-Z to pull up. The Phantom finally pulls around the corner. Someone get out the car in front of him just to open his door. He hops out. I’m froze. I don’t really know what to say. I’m like, ‘Yo, Jay I got this for you.’ He’s like, ‘What is that? What are you doing?’ I’m like, American Gangster, beat CD.’ I can’t really speak and he’s like, ‘Man I don’t want that shit, man. Give that to one of those guys.’ He said it. ‘I’m like, “Oh you mother… Don’t you know I’ve been out here for three hours?"
    },

    {
        "Question": "Continue the lyric: 'I am a sinner...'",
        "Answer": ["baby cook me a chicken dinner", "I am a singer, I'm gonna bring her back again", "and I'm probably gonna sin again", "because I've been caught up in inside trading and it's immoral and illegal, damn"],
        "Correct": "and I'm probably gonna sin again",
        "Image": "https://media.giphy.com/media/X6UOz28rN4N2M/giphy.gif",
        explanation: "From 'Don't Kill My Vibe' by Kendrick Lamar."
    },

    {
        "Question": "What is Nas' revolutionary debut album that changed the game?",
        "Answer": ["Illmatic", "Moment of Clarity", "It Was Written", "All Eyez On Me"],
        "Correct": "Illmatic",
        "Image": "https://media.giphy.com/media/eXFlPMVF5blU4/giphy.gif",
        explanation: "Illmatic received widespread acclaim from contemporary critics, many of whom hailed it as a masterpiece.[78] NME called its music 'rhythmic perfection', and Greg Kot of the Chicago Tribune cited it as the best hardcore hip hop album 'out of the East Coast in years'. Dimitri Ehrlich of Entertainment Weekly credited Nas for giving his neighborhood 'proper respect' while establishing himself, and said that the clever lyrics and harsh beats 'draw listeners into the borough's lifestyle with poetic efficiency."
    },

    {
        "Question": "Continue the lyric: 'His palms are...'",
        "Answer": ["ready, easily calm and steady", "drawn, on the song he drops a bomb", "gone, bloodied since the start of dawn", "sweaty, knees weak, arms are heavy"],
        "Correct": "sweaty, knees weak, arms are heavy",
        "Image": "https://media.giphy.com/media/11IbChs8PTjgSQ/giphy.gif",
        explanation: "From Eminem's 'Lose Yourself,' the classic, inspiring, and aggressive hit from 2002. It is one of the most popular rap songs of all time."

    },

    {
        "Question": "Who is not an original member of the Wu Tang Clan?",
        "Answer": ["Ghostface Killah", "FZA", "Method Man", "Raekwon"],
        "Correct": "FZA",
        "Image": "https://media.giphy.com/media/YiKxmNkPqm11HR7alH/giphy.gif",
        explanation: "Wu-Tang Clan is an American hip hop group from Staten Island, New York City, originally composed of East Coast rappers RZA, GZA, Ol' Dirty Bastard, Method Man, Raekwon, Ghostface Killah, Inspectah Deck, U-God and Masta Killa. Longtime collaborator Cappadonna became an official member in 2007."

    },

    {
        "Question": "Continue the lyric: 'La, la, laa la, wait till I get my...'",
        "Answer": ["boys lined up", "girl back again", "fans and the bands", "money right"],
        "Correct": "money right",
        "Image": "https://media.giphy.com/media/uTfxG5KdIhH7a/giphy.gif",
        explanation: "One of Kanye West's most popular tracks, 'Can't Tell Me Nothing' is an anthem reflecting on Kanye's newfound fame and dealing with media pressure. It was nominated for a Grammy but lost to another one of his songs on Graduation, 'Good Life.' "
    },

];

//global variables
var correct = 0;
var incorrect = 0;
var timer;
var seconds = 15;
var click = 0; //raw click iterator
var answer; //empty answer variable to be edited
var answerClicked = false; //heck if an answer has been clicked to prevent display score bug 


$(document).ready(function () {
    $(".answers").hide();

    // ===== FUNCTIONS =====
    // set time limit for each question
    function timeLimit() {
        timer = setInterval(function () {
            $("#clock").css("animation", "none");
            $("#timer").text("Time left: " + seconds);
            seconds--;

            if (seconds < 5) {
                $("#clock").css("animation", "pulse 5s infinite");
            }

            if (seconds === -1 && click < questions.length) {
                seconds = 15;
                click++
                incorrect++;
                showAnswer();
            }
            else if (click === questions.length) {
                displayScore();
            }
        }, 1000);
    };

    // proceed to the next question
    function nextQuestion() {
        timeLimit();
        seconds = 15;

        $("#questions").empty();
        $(".answers").empty();

        // printing the current question and answer choices to the DOM
        var q = $("<h2>").text(questions[click].Question);
        $("#questions").append(q);

        for (var i = 0; i < questions[click].Answer.length; i++) {
            answer = $("<p>").text(questions[click].Answer[i]);
            answer.attr("id", questions[click].Answer[i]);
            answer.attr("class", "options");
            // console.log(answer.attr("id"));
            $(".answers").append(answer);
        }

    };

    // show a quick Giphy with the explanation 
    function showAnswer() {
        $("#questions").empty();
        $(".answers").empty();

        var gif = $("<img class = 'answer-images'>").attr("src", questions[click - 1].Image);
        $(".answers").append(gif);
        var explanationDiv = $("<div>");
        var answer =  $("<h3 class = 'answer-explanations'>").html("<b>Correct Answer: </b>" +  questions[click - 1].Correct);
        var explanation = $("<h3 class = 'answer-explanations'>").text(questions[click - 1].explanation);
        explanationDiv.append(answer, explanation)
        $(".answers").append(explanationDiv);

        // temporarily utilize flexbox for explanation display
        $(".answers").css("display", "flex");

        // ternary to reduce font-size of long explanations
        $(".answer-explanations").css("font-size", questions[click - 1].explanation.length > 300 ? "0.8em" : "1.0em");


        setTimeout(function () {
            $(".answers").css("display", "block");
            if (click < questions.length) {
                nextQuestion();
            }
            else if (click === questions.length) {
                displayScore();
            }
        }, questions[click - 1].explanation.length > 300 ? 10000 : 6000);
    }

    //display the final score
    function displayScore() {
        clearInterval(timer);
        $("#timer").hide();
        $("#questions").hide();
        $(".answers").hide();
        $("#clock").hide();
        $("#score").show();

        $("#score").css("border-radius", "30px");

        var percentage = Math.round((correct / questions.length) * 100);
        console.log("Percentage: " + percentage)
        function addScore() {
            var totalScore = $("<p class = 'final-score'>").html("Your total score is: <b>" + percentage + "%</b>");
            $("#score").append(totalScore);
            var totalCorrect = $("<p>").text(correct + " Correct Answers.");
            $("#score").append(totalCorrect);
            var totalIncorrect = $("<p>").text(incorrect + " Incorrect Answers.");
            $("#score").append(totalIncorrect);
        }

        if (percentage > 80) {
            var message = $("<h3>").text("Started from the bottom, now you're here.")
            $("#score").append(message);
            addScore();
            $("#score").append("<img class = 'answer-images' src = 'https://media.giphy.com/media/zMCfqXkwjmTO8/giphy.gif' class = '' alt = 'Kanye Laughing'>")
        }
        else if (percentage > 50) {
            var message = $("<h3>").text("Impressive, but there's still room for improvement.");
            $("#score").append(message);
            addScore();
        }
        else {
            var message = $("<h3>").text("Sit down... Be humble.");
            $("#score").append(message);
            addScore();
        }

    }

    // ===== CLICK LISTENERS =====

    //play audio and show first question on game start
    $("#start").on("click", function () {
        var audio = new Audio("assets/images/brasstracks.mp3");
        audio.play();
        $("#clock").show();
        $("#start").remove();
        $(".answers").show();
        nextQuestion();
    });


    $(".answers").on("click", "p", function () {
        if (answerClicked === false) {

            answerClicked = true;
            // console.log(click);
            // console.log($(this).attr('id'));
            // console.log(questions[click].Correct);

            if ($(this).attr('id') === questions[click].Correct) {
                $(this).css("background-color", "rgba(120, 247, 109, 0.65)");
                $(this).css("box-shadow", "0px 0px 10px rgba(6, 250, 26, 0.87)");
                $(this).css("font-size", "28px");
                $(this).css("font-family", "'Lobster', cursive");
                $(this).css("padding", "5px");
                $(this).css("transition", "0.5s ease");

                correct++;
                console.log("Correct!");
            }
            else {
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

            // show answer 2.5 seconds after an answer has been chosen
            setTimeout(function () {
                showAnswer();
                answerClicked = false;

            }, 2500);
        }
    });

});