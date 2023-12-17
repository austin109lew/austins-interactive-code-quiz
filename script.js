// Get references to HTML elements
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

// Array of quiz questions
const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  // Add more questions here...
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Austin', 'Madrid'],
    correctAnswer: 'Paris'
  },
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;
let timer;

// Display current question
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

  answerOptions.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.textContent = option;
    li.appendChild(button);
    answerOptions.appendChild(li);
  });
}

// Handle user input
function handleAnswerClick(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    nextQuestion(); // Call the nextQuestion() function to move to the next question
  } else {
    endQuiz();
  }
}

// Move to the next question
function nextQuestion() {
  displayQuestion();
}

// Implement a timer
function startTimer() {
  let timeLeft = 60;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

// Calculate the final score
function calculateFinalScore() {
  // Calculate the final score based on the user's correct answers
  // Display the final score to the user
}

// End the quiz
function endQuiz() {
  clearInterval(timer);
  calculateFinalScore();
  // Allow the user to save their initials and score
}

// Add event listeners
answerOptions.addEventListener('click', handleAnswerClick);

// Start the quiz
displayQuestion();
startTimer();