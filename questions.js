
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },

];

//***************  Pseudo Code **************** //
// 1. botton "start the Quiz" (event 1)
//                make visible the first question (no hide) 
//                and start the count down
// // 2. when I click on the answer (event2)
//                if the answer is right - 
                //          correct message 
                //          a. add point - 
                // else 
                //          wrong message 
                //          no point++ - 
                //          subtract time
//                after 2 secs the second question appears
// 3. time runs out and/or all questions are answered: 
        //        show final score.


var startButton = document.querySelector("#start");
var HighScore = document.querySelector("#scoreNumb");
var CountDown = document.querySelector("#countdown");
//var numQuest = for (k = 0; )
HighScore = 0;

var question1 = document.querySelector('#q1');
    question1.style.display = 'none';
var question2 = document.querySelector('#q2');
    question2.style.display = 'none';

    //Start the game
startButton.addEventListener('click', function () {
  console.log("click works")
  setTime();
  Show();
  var secondsLeft = 10;  // increase the number after testing


  function setTime() {
    var timerInterval = setInterval(timerDown, 1000);
    function timerDown() {
      secondsLeft--;
      CountDown.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        console.log('time out');
        //sendMessage(Score, show timeOut);
      }
    }
  }

  function Show() {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'block';
  }
  function hide () {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'none';
  }


})
  ///FUNCTIONS

// Hide and Show
  function Show() {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'block';
  }
  //   for (i = 0; i < numQuest.length; i++){

  //   }
    
  function hide () {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'none';
  }

    
   //console.log(questions[0].title);

// for (var i = 0; i < questions.length; i++) {
// if (questions[i] === questions.title);           //  APPROVED
// console.log("build question");// buildQuestion ()
//  }

 for (var i = 0; i < questions.length; i++) {             // APRROVED
  //if (questions[i] === questions.title);           
   //console.log(questions[i].title + questions[i].choices );// buildQuestion ()
   //console.log(questions[i].choices[i]);
  //var newEl = document.createElement('div');
  for (var i = 0; i < questions[i].lenght; i++) {
  console.log("hi");
  //console.log(questions[i].choices);
  // // console.log(questions[i].choices);
  //   // var btn = document.createElement("BUTTON");
  //   // btn.innerHTML = questions[i].choices[i];
  //   // document.body.appendChild(btn);
     }
  }

  

 

