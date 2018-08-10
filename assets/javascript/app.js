//object with questions and answers and correct choices
var questions = [{"Question": "What is Drake's real name?",
"Answer": ["Grayson", "Aubrey", "Jeffrey", "Susu"],
"Correct": "Aubrey"},
{"Question": "What is the square root of 225?", "Answer": ["25", "15", "10", "20"],
"Correct": "15"},
{"Question": "What is the square root of 225?",
"Answer": ["25", "15", "10", "20"],
"Correct": "15"},
];

//questions[i].Answer.indexOf(questions[i].Correct);

//global variables
var correct = 0;
var incorrect = 0;
var timer;
var seconds = 10;


$(document).ready(function(){

    console.log(questions.length)

    function timeLimit(){
        timer = setInterval(function(){
            $("#timer").text("Time left: " + seconds);
            seconds--;
            if(seconds === -1){
                $("#questions").hide()
                checkAnswer();
                displayScore();
                clearInterval(timer);
            }
        }, 1000); 
    };

    function gameStart(){
        for(var i = 0; i < questions.length; i++){
            console.log(questions[i].Answer.indexOf(questions[i].Correct));
            var q = $("<h2>").text(questions[i].Question);
            $("#questions").append(q);

            $.each(questions[i].Answer, function(index, value){
                var answers = $("<p>").text(questions[i].Answer);
                $("#questions").append("<input type = 'radio' name = " + i + " id = " + index + "/><label for = "+ index + ">" + value + " </label>");
        

            });
        }
    };

    function checkAnswer(){
        
        for(var i = 0; i < questions.length; i++){
            var correctRadio = questions[i].Answer.indexOf(questions[i].Correct);
            console.log(correctRadio);
            console.log($("input:radio[id =" + correctRadio + "]").is(':checked'));
            if ($("input[id="+ correctRadio + "]").is(':checked')){
                correct++;
            }
            else{
                incorrect++;
            }
        }
        console.log(correct + " " + incorrect)
    }

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
        console.log("clicked");
        $("#start").remove();
        timeLimit();
        gameStart();

    });

});