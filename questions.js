
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

  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },

  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },

  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },

];

var questionIndex;

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
var counter = document.querySelector("#scoreNumb");
var CountDown = document.querySelector("#countdown");
var HighScore = 0;

// answer buttons
//q1
var strings = document.querySelector("#answA");
var booleans = document.querySelector("#answB");
var alerts = document.querySelector("#answC");
var numbers = document.querySelector("#answD");
// q2
var quotes = document.querySelector("#answA1");
var curlyBrackets = document.querySelector("#answB1");
var parentheses = document.querySelector("#answC1");
var squareBrackets = document.querySelector("#ansD1");


// show and hide
var question1 = document.querySelector('#q1');
question1.style.display = 'none';
var question2 = document.querySelector('#q2');
question2.style.display = 'none';
var form = document.querySelector('#result-form');
form.style.display = 'none';
var last = document.querySelector('#last');
last.style.display = 'none';

//Start the game
startButton.addEventListener('click', function () {

  // TIME
  var secondsLeft = 65;  // increase the number after testing
  setTime();
  function setTime() {
    var timerInterval = setInterval(timerDown, 1000);
    function timerDown() {
      secondsLeft--;
      CountDown.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        hide();
        hide2()
        Show3()
        //sendMessage(Score, show timeOut);
      }
    }
  }
  // QUESTIONS

  //first questions
  Show();
  function Show() {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'block';
  }
  answerOne()
  function answerOne() {
    document.getElementById("#answA").onclick = function () {
      console.log('wrong')
      HighScore--;
      hide();
      Show2();
    }
    document.getElementById("#answB").onclick = function () {
      console.log('wrong')
      HighScore--;
      secondsLeft--;
      hide();
      Show2();
    }
    document.getElementById("#answC").onclick = function () {
      console.log('right')
      HighScore++;
      secondsLeft--;
      hide();
      Show2();
    }
    document.getElementById("#answD").onclick = function () {
      console.log('wrong')
      HighScore--;
      secondsLeft--;
      hide();
      Show2();
    }
  }
  // second question
  answerTwo()
  function answerTwo() {
    document.getElementById("#answA1").onclick = function () {
      console.log('wrong')
      HighScore--;
      hide2();
      Show3();
    }
    document.getElementById("#answB1").onclick = function () {
      console.log('wrong')
      HighScore--;
      secondsLeft--;
      hide2();
      Show3();
    }
    document.getElementById("#answC1").onclick = function () {
      console.log('right')
      HighScore++;
      secondsLeft--;
      hide2();
      Show3();
    }
    document.getElementById("#answD1").onclick = function () {
      console.log('wrong')
      HighScore--;
      secondsLeft--;
      hide2();
      Show3();
    }

  }

  //show result + local storage 


  var signUpButton = document.querySelector("#myBtn");


  signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    Showlast();
    hide3();

    //counter.textContent = HighScore;
    var inputValue = document.getElementById("inputName").value;

    if (inputValue === "") {
      alert("initials cannot be blank");
    }
    else {

      localStorage.setItem("inputName", JSON.stringify(inputValue));
      localStorage.setItem("HighScore", JSON.stringify(HighScore));

      // show the infos in the storage
      renderStored();
      function renderStored() {


        var getInput = JSON.parse(localStorage.getItem("inputName"));
        var getScore = JSON.parse(localStorage.getItem("HighScore"));
        $("#scoreNumb").append("<ul>" + getInput + getScore);

        // var buttonRe = $("<button>").text("new Match");
        // $("body").append(buttonRE);
        // buttonRE.on("click", function () {
        //  hidelast() 
        // buttonRE.style.display = "none";
        // });
      }


    }
  });



})

///FUNCTIONS

// Hide and Show
function Show() {
  var question1 = document.querySelector('#q1');
  question1.style.display = 'block';
}



function hide() {
  var question1 = document.querySelector('#q1');
  question1.style.display = 'none';
}
function hide2() {
  question2 = document.querySelector('#q2');
  question2.style.display = 'none';
}

function hide3() {
  var form = document.querySelector('#result-form');
  form.style.display = 'none';
}

function hidelast() {
  var last = document.querySelector('#last');
  last.style.display = 'none';

}

function Show2() {
  var question2 = document.querySelector('#q2');
  question2.style.display = 'block';
}

function Show3() {
  var form = document.querySelector('#result-form');
  form.style.display = 'block';
}

function Showlast() {
  var last = document.querySelector('#last');
  last.style.display = 'block';



}




//failed experiments

// function ShowQest1 () {
//   console.log(questions[0].title)
//   var text = document.createElement('div') //here u write new html
//   text.textContent = questions[0].title;   // I write the content for the html
//   document.body.appendChild(text);   /// I put the content inside 

// for (var i = 0; i < questions[0].choices.length; i++) {
//   var btn = document.createElement("BUTTON");
//    btn.innerHTML = questions[0].choices[i];
//     document.body.appendChild(btn);
// }
// }
// *************************************************************
// for (var i = 0; i < questions.length; i++) {
// if (questions[i] === questions.title);           //  APPROVED
// console.log("build question");// buildQuestion ()
//  }

// for (var i = 0; i < questions.length; i++) {             // APRROVED
// // if (questions[i] === questions.title);           
// //console.log(questions[i].title + questions[i].choices );
// //console.log( questions[i].choices.length)
// // var items = questions[i].choices.length;
// // for (var n = 0; n < items; n++) {
// //  // console.log(questions[i].choices[n])
//   //console.log(questions[i].choices)
//   for (var n = 0; n < questions[i].choices.length; n++) {
//     console.log(questions[i].choices[n])
//   }
// if (questions[i].choices.length = 4) {
//     // console.log(questions[i].choices)
//    }

// *************************************************************************8
// var items = document.querySelectorAll('#answB, #answC, #answD');

// for (var i = 0; i < items.length; i++)
// {
//   items[i].onclick = function() { 
//     console.log('wrong');
//   };
// } 







