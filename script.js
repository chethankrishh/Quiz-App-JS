const data = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    answer: "Au",
  },
];

let quizwrp = document.querySelector(".quiz-mainwrp");
let questions = document.querySelector(".question");
let quizoptionwrp = document.querySelector(".options-wrp");
let questionnumber = document.querySelector(".question-no");
let nextbtn = document.querySelector(".next-btn");

let currentQuestion = 0;
let correctanswer = 0;
let selectedAnswer = null;

function displayQuestion() {
  quizoptionwrp.innerHTML = "";
  questions.innerHTML = data[currentQuestion].question;
  questionnumber.innerHTML = `Question ${currentQuestion + 1} of ${
    data.length
  }`;
  data[currentQuestion].options.forEach((val) => {
    let optionDiv = document.createElement("DIV");
    optionDiv.classList.add("options");
    optionDiv.innerHTML = val;
    quizoptionwrp.appendChild(optionDiv);
  });
}

quizoptionwrp.addEventListener("click", (e) => {
  if (e.target.classList.contains("options")) {
    document.querySelectorAll(".options").forEach((option) => {
      option.classList.remove("selected");
    });

    selectedAnswer = e.target.textContent;
    e.target.classList.add("selected");
    console.log("Selected Answer:", selectedAnswer);
  }
});

function answerCheck() {
  if (selectedAnswer === null) {
    alert("Please select an answer before proceeding.");
    return;
  }

  if (data[currentQuestion].answer === selectedAnswer) {
    correctanswer++;
  }

  selectedAnswer = null;

  if (currentQuestion < data.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    displayScore();
  }
}

nextbtn.addEventListener("click", answerCheck);

function displayScore() {
  quizwrp.innerHTML = `<h2>Your final score is ${correctanswer} out of ${data.length}</h2>`;
  let resetButton = document.createElement("button");
  resetButton.textContent = "Reset Quiz";
  resetButton.classList.add("reset-btn");
  quizwrp.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    location.reload();
  });
}

displayQuestion();
