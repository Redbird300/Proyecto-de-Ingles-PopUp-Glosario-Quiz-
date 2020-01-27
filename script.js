const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", ()=>{
    currentQuestionsIndex++
    nextQuestion()
})

let shuffledQuestions, currentQuestionsIndex;

function startGame(){
    console.log("started")
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(()=>Math.random() - .5 )
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove("hide")
    nextQuestion()
}

function nextQuestion(){
    resetState()
showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question){
 questionElement.innerHTML = question.question
 question.answers.forEach(answer => {
     const button = document.createElement("button")
     button.innerText = answer.text
     button.classList.add("btn")
     if (answer.correct){
         button.dataset.correct = answer.correct
         } 
         button.addEventListener("click",selectAnswer)
         answerButtonsElement.appendChild(button)
 });
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hiden");
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.lenght > currentQuestionsIndex + 1){
    nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restar"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
        if(correct){
            element.classList.add("correct")
        }else{
            element.classList.add("wrong")
        }
    }

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What is the verb when you walk more fast?",
        answers: [
            {text: "Eat", correct: false},
            {text: "Answer", correct: false},
            {text: "Run", correct: true},
            {text: "Go", correct: false},
        ]
    },
    {
        question: "If you have a pencil and a notebook, you can?",
        answers: [
            {text: "Draw", correct: true},
            {text: "Explain", correct: false},
            {text: "Cook", correct: false},
            {text: "Destroy the world", correct: false},
        ]
    },
    {
        question: "When you are in The Disco, you can...",
        answers: [
            {text: "Meet", correct: true},
            {text: "Dance", correct: true},
            {text: "Learn", correct: false},
            {text: "Injure", correct: false},
        ]
    },
    {
        question: "I belive i can...",
        answers: [
            {text: "Go out", correct: false},
            {text: "Vanish now", correct: false},
            {text: "Grow up", correct: false},
            {text: "Fly", correct: true},
        ]
    },
    {
        question: "Am/Is/Are",
        answers: [
            {text: "Be", correct: true},
            {text: "Let", correct: false},
            {text: "know", correct: false},
            {text: "joke", correct: false},
        ]
    }, 
    {
        question: "In the school, you can?",
        answers: [
            {text: "Go out", correct: false},
            {text: "Vanish", correct: false},
            {text: "Learn", correct: true},
            {text: "Fly", correct: false},
        ]
    }, {
        question: "November... - Guns & Roses",
        answers: [
            {text: "Read", correct: false},
            {text: "Rain", correct: true},
            {text: "Run", correct: false},
            {text: "Remember", correct: false},
        ]
    },
    {
        question: "If you do something bad, you need...?",
        answers: [
            {text: "Drink", correct: false},
            {text: "Sleep", correct: false},
            {text: "Learn", correct: true},
            {text: "ignore", correct: false},
        ]
    }, 
    { 
        question: "When you see a traffic light red you may? ",
         answers: [
        {text: "Sing", correct: false},
        {text: "Stop", correct: true},
        {text: "Start", correct: false},
        {text: "Sweep", correct: false},
    ]
}, {
    question: "When you put on the TV and sit down you...",
    answers: [
        {text: "Watch", correct: true},
        {text: "Work", correct: false},
        {text: "Wish", correct: false},
        {text: "Win", correct: false},
    ]
}, 
]