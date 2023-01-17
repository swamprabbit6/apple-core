// Create a button element
const button = document.createElement('button');
var time = document.querySelector(".time");
var secondsLeft = 60;
var startScreen = document.getElementById("startScreen")
var questionsDiv = document.getElementById("questionsDiv")
var finalScreen = document.getElementById("finalScreen")
var questionIndex = 0
var questionTitle = document.getElementById("questionTitle")
var answerChoices = document.getElementById("answerChoices")
var currentQuestion = document.getElementById("currentQuestion")
// Set the button text to 'Begin Quiz'
button.innerText = 'Begin Quiz'

button.addEventListener('click', startGame)

  document.body.appendChild(button)

function startGame() {
  button.style.display = "none"
  console.log("game started")
  questionsDiv.removeAttribute("class", "hide")
  startScreen.setAttribute("class", "hide")
  //run display questions function
  showQuestions()
  timerEl();
}

function timerEl() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(secondsLeft)
    time.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
// Message to appear when time has run out
function sendMessage() {
  time.textContent = "Time is out. You got " + score + " out of 4 questions correct!";
}

// create questions
var questions = [
  {title: "Inside which HTML element do we put JavaScript?", choices: ["script", "div","span", "p"],answer: "script"},
  
  {title: "How do you write 'Hello World' in an alert box?", choices: ["msg('Hello World')", "alertBox('Hello World')", "alert.alert('Hello World')", "alert('Hello World')"], answer: "alert('Hello World')"},

  {title: "Which is not a JavaScript Framework?", choices: ["Python Script", "JQuery","Django", "NodeJS"], answer: "Django"},

  {title: "How do you create a function in JavaScript?", choices: ["function = myFunction()", "function === myFunction()", "function() = functionName", "var function = (myFunction)"], answer: "function = myFunction()"}
];
console.log (questions)

function showQuestions() {
  const currentQuestion = questions[questionIndex]
  // display question title depending on current question index
  questionTitle.textContent= currentQuestion.title
  // for each choice in our current index choices array, render a button with a text value of itself and then evaluate against correct answer, append to answer choices id.
  currentQuestion.choices.forEach(function(choice){
    var choiceBTN = document.createElement("button")
    choiceBTN.textContent = choice
    choiceBTN.setAttribute("value", choice)
    // choiceBTN.setAttribute class for styling
    answerChoices.append(choiceBTN)
    choiceBTN.addEventListener("click", checkAnswer)
  })
}

var score = 0
function checkAnswer(event) {
  var selectedAnswer = event.target.value
  if (selectedAnswer === questions[questionIndex].answer) {
    console.log("Correct!")
    score++
  } else {
    console.log("Incorrect")
    secondsLeft = secondsLeft - 10
    console.log(secondsLeft)
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    // if there are more questions, show the next question
    answerChoices.innerHTML = "";
    showQuestions();
  } else {
    answerChoices.innerHTML = "";
    questionsDiv.innerHTML = "";
    secondsLeft = 1
    // End the game
    finalScreen.setAttribute("class", "hide")
  }
    return;
  }