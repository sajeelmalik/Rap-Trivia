# Rap-Trivia

Test yourself and see if you are a true Rap God!

* You have 15 seconds to answer each question!
* Powered by Bootstrap and Javascript

Further design and updates to come!

## Getting Started

Follow the deployed project link below to play the game!

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Rap Trivia](https://sajeelmalik.github.io/Rap-Trivia/)


### Image Preview of Rap Trivia
<!-- take a picture of the image and add it into the readme  -->
![Rap Trivia Preview](https://raw.githubusercontent.com/sajeelmalik/Rap-Trivia/master/assets/images/preview.JPG "Rap Trivia")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!

## Technology Used

* **HTML5**
* **CSS3** 
* **Javascript** - the primary scripting logic powering the game
* **jQuery** - the robust scripting library for Javascript
* [**Bootstrap CDN v4.1.0**]
(https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web styling framework used
* [**Google Fonts**](https://fonts.google.com/) - an interactive library of licensed fonts 

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Dynamic generation of HTML elements via jQuery is an extremely powerful tool to instantaneously adjust the webpage to the user's interaction with the interface.

```
function displayScore(){
        clearInterval(timer);
        $("#timer").hide();
        $("#questions").hide();
        $(".answers").hide();

        var percentage = Math.round((correct/questions.length) * 100)+ "%";
  
        function addScore(){
            var totalScore = $("<p>").text("Your total score is: " + percentage);
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

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* intervals and timeouts are useful tools to set functions to run within specific time parameters
* Dynamic element generation and selective displaying of these elements is a crucial concept that must be delved into more deeply (.show() and .hide() methods, introducing unique attributes using .attr())
* jQuery event handling allows for a diverse user experience and acn override buiit-in browser defaults for video and audio autoplay features


## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
