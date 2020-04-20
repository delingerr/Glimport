var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var gamerEl = document.getElementById("gamerInitials");
var scoreEl = document.getElementById("score");
var saveBtnEl = document.getElementById("saveBtn");
var userName = document.getElementById("username");
var historyBtn = document.getElementById("historyScoreBtn");

//var startButton = document.getElementById("start");
var timeEl = document.getElementById("time");

var startDiv = document.getElementById("start-div");
var gradeDiv = document.getElementById("grade");

var questionIndex = 0;
var correctCount = 0;
var time = 30;
var countdown;

//startButton.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", optionSelected);

var questions = [
  {
    question: "What is 1000 × 1 equal to?",
    choices: ["1", "0", "10", "1000"],
    answer: "1000",
  },
  {
    question:
    "How much is 190 – 87 + 16?",
    choices: ["103", "261", "87", "119"],
    answer: "119",
  },
  {
    question: "Which of the following are extensions of graphics files?",
    choices: ["BMP","TXT","DOC","EXE"],
    answer: "BMP",
  },
  {
    question: "Which storage device is considered portable?",
    choices: ["Hard-Disk","Magnetic Tape","Flash Drive","ROM"],
    answer: "Flash Drive",
  },
  {
    question: "The WWW is:",
    choices: ["World Wide Wig","World Wide WAN","World Wide Web","None of the above"],
    answer: "World Wide Web",

  },
  
];
  

startQuiz()
//updateTime()
function startQuiz() {

  countdown = setInterval(updateTime, 1000);
  questionsEl.innerHTML = questions[questionIndex].question;
  choicesEl.innerHTML = "";
  gradeDiv.innerHTML = "";
  
  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var choicesList = document.createElement("button");
    choicesList.textContent = choices[i];
    choicesEl.append(choicesList);
  }
  
}

function updateTime() {
  time--;
  timeEl.textContent = "Time remaining: " + time + "sec";
  if (time <= 0) {
    localStorage.setItem("mostRecentScore", correctCount);
    endQuiz();
  }
}


function nextQuestion() {
  questionIndex++;

  startQuiz()
}



function optionSelected(event){
  
    clearInterval(countdown);
    if (event.target.matches("button")) {
      var answer = event.target.textContent;
      if (answer === questions[questionIndex].answer) {
        gradeDiv.textContent = ("Correct");
        correctCount++;
      } else {
        gradeDiv.textContent = ("Incorrect");
        time = time - 2;
        timeEl.textContent = time;
      }
    }
    setTimeout(nextQuestion, 2000);

}



function endQuiz (){
  clearInterval(countdown);
  
  questionsEl.innerHTML ="";
  choicesEl.innerHTML = "";
  gradeDiv.innerHTML = "";
  timeEl.innerHTML = "";
  gradeDiv.append("your score was " + correctCount);
  //body.innerHTML = "Game over, You scored " + correctCount;
  //gamerEl.innerHTML = document.createElement("input")
  gamerInput ();
}

function gamerInput (){
  gamerEl.classList.remove("hide");
}
var mostRecentScore = localStorage.getItem("mostRecentScore")
var highScores = localStorage.setItem("highScores", JSON.stringify([]))

function saveScores(event){
  event.preventDefault();

  var username = document.querySelector("#username").value;

  var score = {
    score: mostRecentScore,
    name: userName.value
  };
  console.log(score)
}

saveBtnEl.addEventListener("click", saveScores);


historyBtn.addEventListener("click", historyScore);

function historyScore(){
  var name = localStorage.getItem("name");
  var score = localStorage.getItem("score");

  
}

