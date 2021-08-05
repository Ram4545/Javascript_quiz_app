const quizDB = [
    {
        question:" Q1: What is the full form of HTML?",
            a:"Hello tO my land",
            b:"Hey text markup language",
            c:"HyperText Makeup language",
            d:"HyperText Markup language",
            ans:"ans4"
    },
    {
        question:" Q2: What is the full form of CSS?",
            a:"Cascading Styles Sheets",
            b:"Cascading Styles Sheep",
            c:"Cartoon styles sheets",
            d:"Cascading super sheets",
            ans:"ans1"
    },
    {
        question:" Q3: What is the full form of HTTP?",
            a:"HyperText transfer products",
            b:"HyperText test protocol",
            c:"Hey text transfer protocols",
            d:"Hyper text transfer protocols",
            ans:"ans4"
           
    },
    {
        question:" Q4: What is the full form of JS?",
            a:"JavaScript",
            b:"JavaSuper",
            c:"JustScript",
            d:"JordenShoes",
            ans:"ans1"
           
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answer = document.querySelector('.answer');
let questionCount = 0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = question.a;
    option2.innerText = question.b;
    option3.innerText = question.c;
    option4.innerText = question.d;
}

loadQuestion();

const getCheckanswer = ()=> {
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });
    return answer;
}
submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer =quizDB[questionCount]);
    question
})
