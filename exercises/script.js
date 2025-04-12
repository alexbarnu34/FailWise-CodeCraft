const questions = [
  {
    question: `Given the following code:
    <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}</code></pre>
Replace the line "<code>cout &lt;&lt; "Hello World!"</code>" with your desired output.`,
    answer: "cout"
  },
  {
    question: "What is the output of the following code: <code>int x = 5; cout << x * 2;</code>?",
    answer: "10"
  },
  {
    question: "What is the keyword used to declare a variable?",
    answer: "int"
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const currentQuestionObj = questions[currentQuestion];

  questionElement.innerHTML = currentQuestionObj.question;
}

function checkAnswer() {
  const userAnswer = document.getElementById('user-answer').value.trim();

  if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
    score++;
    document.getElementById('feedback').innerText = 'Correct!';
  } else {
    document.getElementById('feedback').innerText = 'Incorrect!';
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById('user-answer').value = ''; // Clear input field
    displayQuestion();
  } else {
    document.getElementById('quiz-container').innerHTML = `
      <h1>Quiz Completed</h1>
      <p>Your Score: ${score}/${questions.length}</p>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
}

function showAnswer() {
  const answerInput = document.getElementById('user-answer');
  const submitButton = document.getElementById('submit-button');

  if (answerInput.value.trim() === questions[currentQuestion].answer.toLowerCase()) {
    answerInput.value = '';
  } else {
    answerInput.value = questions[currentQuestion].answer;
  }

  // Toggle visibility of the submit button only if the answer is not shown
  if (!submitButton.style.display || submitButton.style.display === 'none') {
    submitButton.style.display = 'block';
  } else {
    submitButton.style.display = 'none';
  }
}

// Ensure that the Submit Answer button is initially shown
document.getElementById('submit-button').style.display = 'block';
displayQuestion();