// Create a button element
const button = document.createElement('button');
var time = document.querySelector(".time");
var secondsLeft = 60;
var startScreen = document.getElementById("startScreen")
var questionsDiv = document.getElementById("questionsDiv")
var finalScreen = document.getElementById("finalScreen")
var quesetionIndex = 0
var questionTitle = document.getElementById("questionTitle")
var answerChoices = document.getElementById("answerChoices")

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
  time.textContent = "Time is out";
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
  var currentQuestion = questions[quesetionIndex]
  // display question title depending on current question index
  questionTitle.textContent= currentQuestion.title
  // for each choice in our current index choices array, render a button with a text value of itself and then evaluate against correct answer, append to answer choices id.
  currentQuestion.choices.forEach(function(choice){
    var choiceBTN = document.createElement("button")
    choiceBTN.textContent = choice
    choiceBTN.setAttribute("value", choice)
    // choiceBTN.setAttribute class for styling
    answerChoices.append(choiceBTN)
  })
}
 // Organize HTML into hideable pieces. Bring variables for those divs into javascript.
 // create display question function that renders question title to our question class in HTML (ln 25) run a for loop or for each on specific question indexes answer array to create buttons that reflect the value of the answer choice and display that on screen.
 //Once title and buttons are created, create functions that eveluates button value against correct answer choice for the current answer index.

 //check answer function will be applied on line 69 as onclick onto each button that is created that compares this.value that is reffering to the value of the button that you are clicking on since you are attaching it to each button that is created. To compare it to the current question indexes answer key. Increment question index global variable by 1, run show questions function again. When we reach the end of our questions array, hide questions div and then unhide end screen div.