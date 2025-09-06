//! 문제객체
const questions = [
  {
    question: "자바스크립트의 약자는 무엇인가요?",
    choices: ["Java", "JavaScript", "JScript", "JQuery"],
    answer: "JavaScript",
  },
  {
    question: "HTML은 무엇을 위한 언어인가요?",
    choices: ["스타일링", "구조", "연산", "데이터베이스"],
    answer: "구조",
  },
  {
    question: "CSS의 약자는 무엇인가요?",
    choices: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Syntax",
      "Color Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const choiceBtns = document.querySelectorAll(".choice");
const scoreE1 = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const question = questions[currentQuestion];
  questionE1.textContent = question.question;
  choiceBtns.forEach((btn, index) => {
    btn.textContent = question.choices[index];
  });
}

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === questions[currentQuestion].answer) {
      score++;
    } else {
      questionE1.textContent = "퀴즈 끝!!";
      document.getElementById("choices").style.display = "none";
    }
    scoreE1.textContent = `점수 : ${score}`;
  });
});

loadQuestion();
