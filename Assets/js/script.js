// create the global variables for all the classes to target the elements you will need to use
containerEl = document.querySelectorAll(".startpage");

// create question variable. (look into array of objects to store question along with answer and possible options.)
var scoreIdCounter = 0;
var timeleft = 60;
var timeInterval;

var scores = [];
var timerEl = document.getElementById('timer');
var quizContainerEl = document.createElement("div");
var questionEl = document.createElement('h1');
questionEl.className = "question";
var answerListEl = document.createElement("ul");
answerListEl.className = "answer-list";
var answerChoiceOne = document.createElement("button");
answerChoiceOne.className = ("btn");
var answerChoiceTwo = document.createElement("button");
abswerChoiceTwo.className = ("btn");
var answerChoiceThree = document.createElement("button");
answerChoiceThree.className = ("btn");
var answerChoiceFour = document.createElement("button");
answerChoiceFour.className = ("btn");
var closingContainerEl = document.createElement("div")
var viewScoreContainer = document.createElement("div");

// 
var countdown = function () {
    timeInterval = setInterval(function () {
        if (timeleft > 0) {
            timerEl.textContent = 'Time: ' + timeleft;
            timeleft--;
        }
        else {
            timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}
// create start function that will run o n button click
var beginQuiz = function () {
    questionEl.textContent = "Question #1: Commonly used data types do NOT include:";
    quizContainerEl.appendChild(questionEl);

    answerChoiceOne.textContent = "strings";
    answerListEl.appendChild(answerChoiceOne);

    answerChoiceTwo.textContent = "booleans";
    answerListEl.appendChild(answerChoiceTwo);

    answerChoiceThree.textContent = "alerts";
    answerListEl.appendChild(answerChoiceThree);

    answerChoiceFour.textContent = "numbers";
    answerListEl.appendChild(answerChoiceFour);

    quizContainerEl.appendChild(answerListEl);
    containerEl.replaceWith(quizContainerEl);

    answerChoiceOne.addEventListener("click", wrongAnswer);
    answerChoiceTwo.addEventListener("click", wrongAnswer);
    answerChoiceThree.addEventListener("click", questionTwo);
    answerChoiceFour.addEventListener("click", wrongAnswer);
}

var wrongAnswer = function () {
    timeleft = timeleft - 5;
    questionTwo();
}

var questionTwo = function () {
    questionEl.textContent = "Question #2: The condition in an if/else statement is enclosed with:";
    answerChoiceOne.textContent = "quotes";
    answerChoiceTwo.textContent = "parenthesis";
    answerChoiceThree.textContent = "curly brackets";
    answerChoiceFour.textContent = "square brackets";

    answerChoiceOne.addEventListener("click", questionThree);
    answerChoiceTwo.addEventListener("click", rightAnswerTwo);
    answerChoiceThree.addEventListener("click", wrongAnswerTwo);
    answerChoiceFour.addEventListener("click", questionThree);
}

var rightAnswerTwo = function () {
    timeLeft = timeLeft + 10
    questionThree();
}
var wrongAnswerTwo = function () {
    timeLeft = timeLeft - 10;
    questionThree();
}
questionTwo = function () {
    questionEl.textContent = "Question #2: The condition in an if/else statement is enclosed with:";
    answerChoiceOne.textContent = "quotes";
    answerChoiceTwo.textContent = "parenthesis";
    answerChoiceThree.textContent = "curly brackets";
    answerChoiceFour.textContent = "square brackets";

    answerChoiceOne.addEventListener("click", questionThree);
    answerChoiceTwo.addEventListener("click", rightAnswerTwo);
    answerChoiceThree.addEventListener("click", wrongAnswerTwo);
    answerChoiceFour.addEventListener("click", questionThree);
}

var rightAnswerTwo = function () {
    timeLeft = timeLeft + 10
    questionThree();
}
var wrongAnswerTwo = function () {
    timeLeft = timeLeft - 10;
    questionThree();
}

var questionThree = function () {
    questionEl.textContent = "Question #3: Arrays in JavaScript can be used to store:";
    answerChoiceOne.textContent = "numbers and strings";
    answerChoiceTwo.textContent = "other arrays";
    answerChoiceThree.textContent = "booleans";
    answerChoiceFour.textContent = "all of the above";

    answerChoiceOne.addEventListener("click", questionFour);
    answerChoiceTwo.addEventListener("click", wrongAnswerThree);
    answerChoiceThree.addEventListener("click", questionFour);
    answerChoiceFour.addEventListener("click", rightAnswerThree);
}

var rightAnswerThree = function () {
    timeleft = timeleft + 10
    questionFour();
}
var wrongAnswerThree = function () {
    timeleft = timeleft - 10;
    questionFour() ;
}

var questionFour = function () {
    questionEl.textContent = "Question #4: String values must be enclose within ____ when being assigned to variables."
    answerChoiceOne.textContent = "commas";
    answerChoiceTwo.textContent = "curly brackets";
    answerChoiceThree.textContent = "quotes";
    answerChoiceFour.textContent = "parenthesis";

    answerChoiceOne.addEventListener("click", questionFive);
    answerChoiceTwo.addEventListener("click", questionFive);
    answerChoiceThree.addEventListener("click", rightAnswerFour);
    answerChoiceFour.addEventListener("click", wrongAnswerFour);
}

var rightAnswerFour = function () {
    timeLeft = timeLeft + 10
    questionFive();
}
var wrongAnswerFour = function () {
    timeLeft = timeLeft - 10;
    questionFive();
}

var questionFive = function () {
    questionEl.textContent = "Question #5: A very useful tool used during development and debugging for printing content to the debugger is:"
    answerChoiceOne.textContent = "console.log";
    answerChoiceTwo.textContent = "JavaScript";
    answerChoiceThree.textContent = "terminal/bash";
    answerChoiceFour.textContent = "for loops";

    answerChoiceOne.addEventListener("click", rightAnswerFive);
    answerChoiceTwo.addEventListener("click", gameOver);
    answerChoiceThree.addEventListener("click", wrongAnswerFive);
    answerChoiceFour.addEventListener("click", gameOver);
}

var rightAnswerFive = function () {
    timeLeft = timeLeft + 10
    gameOver();
}
var wrongAnswerFive = function () {
    timeLeft = timeLeft - 10;
    gameOver();
}

var gameOver = function () {
    clearInterval(timeInterval);
    var closingHeaderEl = document.createElement("h1");
    closingHeaderEl.textContent = "All done!";
    closingContainerEl.appendChild(closingHeaderEl);

    var closingCommentEl = document.createElement("p");
    closingCommentEl.className = ("closing-message");
    closingCommentEl.innerHTML = "Your final score is " + timeLeft;
    closingContainerEl.appendChild(closingCommentEl);

    var closingFormEl = document.createElement("form");

    enterInitials = document.createElement("p");
    enterInitials.className = ("closing-message");
    enterInitials.textContent = "Enter initials:";
    closingFormEl.appendChild(enterInitials);

    var inputInitials = document.createElement("input");
    inputInitials.className = ("input-form");
    closingFormEl.appendChild(inputInitials);
    var submitButtonEl = document.createElement("button");
    submitButtonEl.className = ("submit-btn");
    submitButtonEl.textContent = "Submit";
    closingFormEl.appendChild(submitButtonEl);

    closingContainerEl.appendChild(closingFormEl);
    quizContainerEl.replaceWith(closingContainerEl);

    closingFormEl.addEventListener("submit", saveScore);
}

var saveScore = function (event) {
    event.preventDefault();
    var initialInput = document.querySelector("input[class='input-form']").value;
    var scoreObj = { initial: initialInput, time: timeLeft, };
    scoreObj.id = scoreIdCounter;
    scores.push(scoreObj);
    localStorage.setItem("scores", JSON.stringify(scores))
    viewScore(scoreObj);
}

var loadScore = function () {
    var savedScore = localStorage.getItem("scores");
    if (!savedScore) {
        return false;
    }
    savedScore = JSON.parse(savedScore);

    for (var i = 0; i < savedScore.length; i++) {
        viewScore(savedScore[i]);
    }
}

var viewScore = function (scoreObj) {

    document.getElementById("view-score").disabled = true;

    containerEl.replaceWith(viewScoreContainer);

    viewScoreHeader = document.createElement("h1");
    viewScoreHeader.textContent = "View Score";
    viewScoreContainer.appendChild(viewScoreHeader);

    var viewScoreList = document.createElement("ul");
    viewScoreList.className = ("view-score-list");

    listItem = document.createElement("li");
    listItem.innerHTML = scoreObj.initial + ": " + scoreObj.time;
    viewScoreList.appendChild(listItem);

    viewScoreContainer.appendChild(viewScoreList);

    var goBack = document.createElement("button");
    goBack.className = ("btn");
    goBack.textContent = "Go back";
    viewScoreContainer.appendChild(goBack);

    closingContainerEl.replaceWith(viewScoreContainer);

    goBack.addEventListener("click", startPage);
}

startPage = function () {
    location.reload();
}

document.getElementById("start-button").addEventListener("click", countdown);
document.getElementById("start-button").addEventListener("click", beginQuiz);
document.getElementById("view-score").addEventListener("click", loadScore);

// TODO LIST

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score