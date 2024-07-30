let questions = [
  {
    question: "Solve : 2x + 3 = 9 ; x = ?",
    answers: [
      {
        text: "3",
        correct: "true",
      },
      {
        text: "4",
        correct: "false",
      },
      {
        text: "7",
        correct: "false",
      },
      {
        text: "2",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the name of layer that protect us from UV rays ?",
    answers: [
      {
        text: "Nickel",
        correct: "false",
      },
      {
        text: "chromium",
        correct: "false",
      },
      {
        text: "Ozone",
        correct: "true",
      },
      {
        text: "Plastic",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the power house of the cell ?",
    answers: [
      {
        text: "Plasmodata",
        correct: "false",
      },
      {
        text: "Mitochondria",
        correct: "true",
      },
      {
        text: "Amoeba",
        correct: "false",
      },
      {
        text: "Paramocium",
        correct: "false",
      },
    ],
  },
  {
    question: "What is NaCl ?",
    answers: [
      {
        text: "Common Salt",
        correct: "true",
      },
      {
        text: "Bleaching powder",
        correct: "false",
      },
      {
        text: "Vinegar",
        correct: "false",
      },
      {
        text: "Chloroform",
        correct: "false",
      },
    ],
  },
  {
    question: "What does plants do for survival ?",
    answers: [
      {
        text: "PhotoSynthesis",
        correct: "true",
      },
      {
        text: "Excretion",
        correct: "false",
      },
      {
        text: "Normalization",
        correct: "false",
      },
      {
        text: "Demonitization",
        correct: "false",
      },
    ],
  },
];

let arts = [
  {
    question: "Who is Shakesphere ?",
    answers: [
      {
        text: "Doctor",
        correct: "false",
      },
      {
        text: "Plumber",
        correct: "false",
      },
      {
        text: "Author & Writer",
        correct: "true",
      },
      {
        text: "Unemployed",
        correct: "false",
      },
    ],
  },
  {
    question: "Identify a figure of speech",
    answers: [
      {
        text: " hyperbole",
        correct: "false",
      },
      {
        text: "irony",
        correct: "false",
      },
      {
        text: "paradox",
        correct: "false",
      },
      {
        text: "All of the above",
        correct: "true",
      },
    ],
  },
  {
    question: "Lucid (Find Synonym)",
    answers: [
      {
        text: "Opaque",
        correct: "false",
      },
      {
        text: "Solid",
        correct: "false",
      },
      {
        text: "Clear",
        correct: "true",
      },
      {
        text: "Hazy",
        correct: "false",
      },
    ],
  },
  {
    question: "Identify tense : I have been working on the problem.",
    answers: [
      {
        text: "Present Continuous",
        correct: "false",
      },
      {
        text: "Present Perfect continuous ",
        correct: "true",
      },
      {
        text: "Past Perfect",
        correct: "false",
      },
      {
        text: "Past Continuous",
        correct: "false",
      },
    ],
  },
  {
    question: "Find a synonym : Propel",
    answers: [
      {
        text: "Drive ",
        correct: "true",
      },
      {
        text: "Burst",
        correct: "false",
      },
      {
        text: "Acclimatize",
        correct: "false",
      },
      {
        text: "Modify",
        correct: "false",
      },
    ],
  },
];

let commerce = [
  {
    question: "Patents, Copyrights and Trademarks are",
    answers: [
      {
        text: "Current assets",
        correct: "false",
      },
      {
        text: "fixed assets",
        correct: "false",
      },
      {
        text: "Intangible assets",
        correct: "true",
      },
      {
        text: "Investments",
        correct: "false",
      },
    ],
  },
  {
    question: "Business means ___________",
    answers: [
      {
        text: "Commerce",
        correct: "false",
      },
      {
        text: "industry & commerce",
        correct: "true",
      },
      {
        text: "Trade and Commerce",
        correct: "false",
      },
      {
        text: "Selling & buying",
        correct: "false",
      },
    ],
  },
  {
    question: "which of the following is not an economic activity ?",
    answers: [
      {
        text: "A doctor Practising",
        correct: "false",
      },
      {
        text: "A lawyer practising law",
        correct: "false",
      },
      {
        text: "A proffesional cricketer playing game",
        correct: "false",
      },
      {
        text: "A student playing cricket",
        correct: "true",
      },
    ],
  },
  {
    question: "Co-operative societies have ________ management.",
    answers: [
      {
        text: "Government",
        correct: "false",
      },
      {
        text: "Democratic",
        correct: "true",
      },
      {
        text: "Autocratic",
        correct: "false",
      },
      {
        text: "Private",
        correct: "false",
      },
    ],
  },
  {
    question: "What is equity ?",
    answers: [
      {
        text: "Debt",
        correct: "false",
      },
      {
        text: "Loan",
        correct: "false",
      },
      {
        text: "Ownwership in business",
        correct: "true",
      },
      {
        text: "None of the above",
        correct: "false",
      },
    ],
  },
];

const questionElement = document.querySelector("#question");

const ansButton = document.querySelector("#answer-buttons");

const nextButton = document.querySelector("#next-btn");

//////////////////////////
let scoreArray = [];
let count = 0;
function saveScore(score) {
  scoreArray.push(score);
  console.log(scoreArray);
}

function refresh() {
  window.location.reload();
}

function showResult() {
  // questionElement.innerHTML = `Science: ${scoreArray[0]}/5 & Arts: ${scoreArray[1]}/5 & Commerce: ${scoreArray[2]}/5`;

  // nextButton.innerHTML = "Try Again";
  // count = 0;
  // nextButton.addEventListener("click", refresh);

  questionElement.style.display = "none";
  let result = document.querySelector("#resultTable");
  result.style.display = "block";
  document.querySelector("#Science").innerHTML = scoreArray[0];
  document.querySelector("#Arts").innerHTML = scoreArray[1];
  document.querySelector("#Commerce").innerHTML = scoreArray[2];
  ansButton.appendChild(result);
  count = 0;
  // nextButton.innerHTML = "Try Again";
  // count = 0;
  // nextButton.addEventListener("click", refresh);

  nextButton.innerHTML = "Career Options";
  nextButton.style.fontSize = "18px";
  nextButton.style.backgroundColor = "green";

  nextButton.addEventListener("click", redirect);
}

function redirect() {
  if (scoreArray[0] > scoreArray[1] && scoreArray[0] > scoreArray[2]) {
    window.location.href = "science.html";
  } else if (scoreArray[1] > scoreArray[0] && scoreArray[1] > scoreArray[2]) {
    window.location.href = "arts.html";
  } else if (scoreArray[2] > scoreArray[0] && scoreArray[2] > scoreArray[1]) {
    window.location.href = "commerce.html";
  } else {
    alert(
      "You have potential in two or more fields. Explore fields & talk with expert mentors for more detailed career guidance!"
    );
    window.location.href = "explore.html";
  }
}

//////////////////////////

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  if (count == 1) {
    questions = arts;
  } else if (count == 2) {
    questions = commerce;
  }

  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  count++;
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (ansButton.firstChild) {
    ansButton.removeChild(ansButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(ansButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.display = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Next Section";
  //chnages as per quiz ends
  if (count <= 2) {
    nextButton.innerHTML = "Next Section";
  } else {
    nextButton.innerHTML = "Show Result";
    nextButton.addEventListener("click", showResult);
  }
  nextButton.style.display = "block";

  saveScore(score);
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    if (count <= 2) {
      startQuiz();
    }
  }
});

startQuiz();
