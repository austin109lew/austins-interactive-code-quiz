// Get references to HTML elements
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timerValue = 60;

// Start Button
startButton.addEventListener('click', startQuiz);

// Quiz Questions
const quizQuestions = [
  {
    question: 'Commonly used data types DO NOT include:',
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 'alerts',
  },
  {
    question: 'The condition in an if / else statement is enclosed within _____.',
    options: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    correctAnswer: 'parentheses',
  },
  {
    question: 'Arrays in JavaScript can be used to store ____.',
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above',
  },
  {
    question: 'String values must be enclosed within ____ when being assigned to variables',
    options: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    correctAnswer: 'quotes',
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log',
  },
];


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
    scoreDisplay.textContent = score; // Update the score display
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
  timerDisplay.textContent = timerValue;

  timer = setInterval(() => {
    timerValue--;
    timerDisplay.textContent = timerValue;

    if (timerValue === 0) {
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
function startQuiz() {
  // Hide the start button
  startButton.style.display = 'none';

  // Show the question container
  questionContainer.style.display = 'block';

  // Call the necessary functions to start the quiz
  displayQuestion();
  startTimer();
}

