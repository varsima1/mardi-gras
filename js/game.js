const quizData = [
  {
    question: " What is the main parade route for Mardi Gras in New Orleans?",
    a: "Bourbon Street",
    b: "Canal Street",
    c: "Magazine Street",
    d: "Charles Avenue",
    correct: "d",
  },

  {
    question:
      "What is the name of the famous Mardi Gras parade organization that features flambeaux carriers?",
    a: "Zulu Social Aid & Pleasure Club",
    b: "Krewe of Proteus",
    c: "Krewe of Bacchus",
    d: "Krewe of Muses",
    correct: "b",
  },
  {
    question:
      "What is the traditional Mardi Gras throw that features plastic toys and trinkets?",
    a: "Doubloons",
    b: "Beads",
    c: "Moon Pies",
    d: "Cups",
    correct: "a",
  },

  {
    question:
      "What is the name of the Mardi Gras parade organization that is known for throwing hand-decorated coconuts?",
    a: "Krewe of Zulu",
    b: "Krewe of Bacchus",
    c: "Krewe of Orpheus",
    d: "Krewe of Rex",
    correct: "a",
  },

  {
    question:
      "What is the name of the traditional Mardi Gras king cake that features cinnamon and sugar filling?",
    a: "Pain Perdu",
    b: "Croissant",
    c: "Brioche",
    d: "Galette des Rois",
    correct: "c",
  },

  {
    question:
      " What is the name of the Mardi Gras parade organization that is known for featuring satirical and political themes in their floats?",
    a: "Krewe of Endymion",
    b: "Krewe of Zulu",
    c: "Krewe of Bacchus",
    d: "Krewe of Momus",
    correct: "d",
  },

  {
    question:
      "What is the traditional Mardi Gras food that is a spicy rice dish?",
    a: "Jambalaya",
    b: "Etouffee",
    c: "Gumbo",
    d: "Red beans and rice",
    correct: "a",
  },

  {
    question:
      "What is the name of the Mardi Gras parade organization that features all-female riders?",
    a: "Krewe of Iris",
    b: "Krewe of Nyx",
    c: "Krewe of Athena",
    d: "Krewe of Venus",
    correct: "b",
  },

  {
    question:
      "What is the name of the traditional Mardi Gras cocktail made with brandy, bitters, and absinthe?",
    a: "Hurricane",
    b: "Ramos Gin Fizz",
    c: "Sazerac",
    d: "Vieux Carré",
    correct: "c",
  },

  {
    question:
      " What is the name of the Mardi Gras parade organization that is known for featuring elaborate and oversized floats?",
    a: "Krewe of Bacchus",
    b: "Krewe of Proteus",
    c: "Krewe of Rex",
    d: "Krewe of Endymion",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
