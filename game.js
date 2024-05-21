const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('question-heading');
const scoreText = document.getElementById('score-number');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [   
   {
       question: 'Which HTML tag is used to define an inline style?',
       choice1: '<script>',
       choice2: '<css>',
       choice3: '<style>',
       choice4: '<span>',
       answer: 3,
   },
   {
       question: 'Which property is used to change the text color in CSS?',
       choice1: 'text-color',
       choice2: 'font-color',
       choice3: 'text-style',
       choice4: 'color',
       answer: 4,
   },
   {
       question: 'Which of the following is the correct way to comment in HTML?',
       choice1: '// Comment',
       choice2: '<!-- Comment -->',
       choice3: '/* Comment */',
       choice4: '<! Comment>',
       answer: 2,
   },
];
 
const MAX_QUESTIONS = 3;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
    

    document.querySelector('#choiceA').addEventListener('click', checkA);
    document.querySelector('#choiceB').addEventListener('click', checkB);
    document.querySelector('#choiceC').addEventListener('click', checkC);
    document.querySelector('#choiceD').addEventListener('click', checkD);

    function checkA() {
        if (!acceptingAnswers) return;
        console.log('checkA');
        acceptingAnswers = false;
        const selectedChoice = document.querySelector('#choiceA');
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(10);
        }

        document.getElementById(selectedChoice.id).classList.add(classToApply);

        setTimeout(() => {
            document.getElementById(selectedChoice.id).classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    }

    function checkB() {
        if (!acceptingAnswers) return;
        console.log('checkB');
        acceptingAnswers = false;
        const selectedChoice = document.querySelector('#choiceB');
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(10);
        }

        document.getElementById(selectedChoice.id).classList.add(classToApply);

        setTimeout(() => {
            document.getElementById(selectedChoice.id).classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    }

    function checkC() {
        if (!acceptingAnswers) return;
        console.log('checkC');
        acceptingAnswers = false;
        const selectedChoice = document.querySelector('#choiceC');
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(10);
        }

        document.getElementById(selectedChoice.id).classList.add(classToApply);

        setTimeout(() => {
            document.getElementById(selectedChoice.id).classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    }

    function checkD() {
        if (!acceptingAnswers) return;
        console.log('checkD');
        acceptingAnswers = false;
        const selectedChoice = document.querySelector('#choiceD');
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(10);
        }

        document.getElementById(selectedChoice.id).classList.add(classToApply);

        setTimeout(() => {
            document.getElementById(selectedChoice.id).classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    }
    
};

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset['number'];

//         const classToApply = 
//             selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//         if (classToApply === 'correct') {
//             incrementScore(10);
//         }

//         selectedChoice.parentElement.classList.add(classToApply);

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply);
//             getNewQuestion();
//         }, 1000);
//     });
// });

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


startGame();