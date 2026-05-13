import { question } from "./questions.js";

const questionText = document.getElementById("question-Element")
const answers = document.querySelectorAll('.btn');
const nextButton = document.querySelector('.next-btn')

console.log(question[0].answer[0].correct);




let currentQuestionIndex = 0;


function startQuiz() {
    questionText.innerText = question[currentQuestionIndex].question;
    answers.forEach(function (el, index) {
        el.innerText = question[currentQuestionIndex].answer[index].text

    })


}

function checkAnswer(index) {

    const isCorrect =
        question[currentQuestionIndex].answer[index].correct;

    if (isCorrect) {
        answers[index].style.backgroundColor = 'green';
        answers.forEach(ans => {
            ans.style.pointerEvents = "none";
        });
    } else {
        answers[index].style.backgroundColor = 'red';
        answers.forEach(ans => {
            ans.style.pointerEvents = "none";
        });
    }



}



answers.forEach((button, index) => {

    button.innerText =
        question[currentQuestionIndex]
            .answer[index]
            .text;

    button.onclick = function () {

        checkAnswer(index);



    };


});



nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    answers.forEach(ans => {
        ans.style.pointerEvents = "auto";
        ans.style.backgroundColor = ''
    });
    startQuiz();

})


startQuiz();