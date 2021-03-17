var questions = [
    {
        question: ' A complete graph can have ...............',
        choices: ['n^2 spanning trees', 'n^(n-2) spanning trees', 'n^(n+1) spanning trees', 'n^n spanning trees'],
        correctAnswer: 1,
        score:1
    },
    {
        question: 'What is the full form of CSS',
        choices: ['Javascript', 'Java', 'HTML', 'None of these'],
        correctAnswer: 3,
        score:1
    },
    {
        question: 'How to include javascript in HTML document',
        choices: ['script', 'style', 'includejs', 'none of these'],
        correctAnswer: 0,
        score:1
    },
    {
        question: 'How to declare variable in Javascript',
        choices: ['int', 'var', 'variable', 'v'],
        correctAnswer: 1,
        score:1
    },
    {
        question: 'What => means in Javascript ',
        choices: ['Function', 'equalto', 'Arrow Function', 'push'],
        correctAnswer: 2,
        score:1
    },
        {
        question: 'If we want define style for an unique element, then which css selector will we use',
        choices: ['Id', 'class', 'Tag Name', 'name'],
        correctAnswer: 0,
        score:1
    },
    {
        question: 'How to declare variable in Javascript',
        choices: ['int', 'var', 'variable', 'v'],
        correctAnswer: 1,
        score:1
    },
    {
        question: 'If we want to wrap a block of text around an image, which css property will we use ',
        choices: ['wrap', 'float', 'push', 'align'],
        correctAnswer: 1,
        score:1
    },
    {
        question: 'Which CSS property is used to control the text size of an element',
        choices: ['font-style', 'text-size', 'font-size', 'text-style'],
        correctAnswer: 2,
        score:1
    },
    {
        question: 'How can we write comment along with CSS code ?',
        choices: ['/* a comment */', '// a comment //', '/ a comment /', 'None'],
        correctAnswer: 1,
        score:1
    }

];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    document.getElementById("ak").style.visibility = "hidden";
    document.getElementById("anskey").style.visibility = "hidden";
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                 alert("Please select an option");
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                   correctAnswers= correctAnswers+questions[currentQuestion].score;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.getElementById("ok").style.visibility = "hidden";
                    displayanskey();
                    document.querySelector('.nextButton').innerText = 'Restart';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    questionClass.innerText = question;
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);
    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
     document.getElementById("ok").style.visibility = "visible";
     document.querySelector(".test").innerText = 'Quiz';
     document.getElementById("ak").style.visibility = "hidden";
     document.querySelector("#anskey").innerText ="";
     document.getElementById("anskey").style.visibility = "hidden";
    hideScore();
}

function displayScore(){
    document.querySelector(".test").innerText = 'Score : ' + correctAnswers;
    document.querySelector('.quizContainer > .result').style.display = 'block';
document.getElementById("ak").style.visibility = "visible";
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}
function displayanskey()
{
    document.getElementById("anskey").style.visibility = "visible";
 var a="";
 for(var i=0;i<questions.length;i++)
 {
    var q = questions[i].correctAnswer;
    a=a+questions[i].question+"-      "+questions[i].choices[q]+"\n"+"\n";
 }
    document.querySelector("#anskey").innerText =a;

}
