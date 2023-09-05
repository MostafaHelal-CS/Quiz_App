// Array of Questions And Answers
let QueAndAns=[
    {
        quustion: "1- JavaScript is the programming language of the ...",
        answer: [
            {
                text: "A. Desktop",
                iscorrect: false,
            },
            {
                text: "B. Mobile",
                iscorrect: false,
            },
            {
                text: "C. Web",
                iscorrect: true,
            },
            {
                text: "D. Server",
                iscorrect: false,
            },
        ]
    },
    {
        quustion: "2 Which type of JavaScript language is ...",
        answer: [
            {
                text: "A. Object-oriented",
                iscorrect: false,
            },
            {
                text: "B. Object-based",
                iscorrect: true,
            },
            {
                text: "C. Functional programming",
                iscorrect: false,
            },
            {
                text: "D. All of the above",
                iscorrect: false,
            },
        ]
    },
    {
        quustion: "3- Which of the following statement(s) is true about the JavaScript?",
        answer: [
            {
                text: "A. It is a scripting language used to make the website interactive",
                iscorrect: true,
            },
            {
                text: "B. It is an advanced version of Java for Desktop and Mobile application development",
                iscorrect: false,
            },
            {
                text: "C. It is a markup language of Java to develop the webpages",
                iscorrect: false,
            },
            {
                text: "D. All of the above",
                iscorrect: false,
            },
        ]
    },
    {
        quustion: "4- JavaScript ignores?",
        answer: [
            {
                text: "A. newlines",
                iscorrect: false,
            },
            {
                text: "B. tabs",
                iscorrect: false,
            },
            {
                text: "C. spaces",
                iscorrect: false,
            },
            {
                text: "D. All of the above",
                iscorrect: true,
            },
        ]
    },
    {
        quustion: "5- Which property is used to define the HTML content to an HTML element with a specific id?",
        answer: [
            {
                text: "A. innerText",
                iscorrect: false,
            },
            {
                text: "B. innerContent",
                iscorrect: false,
            },
            {
                text: "C. elementText",
                iscorrect: false,
            },
            {
                text: "D. innerHTML",
                iscorrect: true,
            },
        ]
    },
    {
        quustion: "6- Which JavaScript method is used to write HTML output?",
        answer: [
            {
                text: "A. document.write()",
                iscorrect: true,
            },
            {
                text: "B. document.output()",
                iscorrect: false,
            },
            {
                text: "C. console.log()",
                iscorrect: false,
            },
            {
                text: "D. document.writeHTML()",
                iscorrect: false,
            },
        ]
    },
    {
        quustion: "7- Which JavaScript method is used to write on browser's console?",
        answer: [
            {
                text: "A. console.write()",
                iscorrect: true,
            },
            {
                text: "B. console.output()",
                iscorrect: false,
            },
            {
                text: "C. console.log()",
                iscorrect: false,
            },
            {
                text: "D. console.writeHTML()",
                iscorrect: false,
            },
        ]
    }
];


// Select Start Button
let startBtn=document.getElementById("start");

// Selet Title Page
let theTitle=document.querySelector(".title");

// Select the App That Contains the Quiz
let theApp=document.querySelector(".App");

// select The Span Question Number
let questionNumber=document.querySelector(".QueNum");

// Set Current Question
questionNumber.innerHTML=1;

// select The Span Question Number
let totalQuestion=document.querySelector(".TotalQue");

// Set The total question To The Number Of Question
totalQuestion.innerHTML=QueAndAns.length;

// StartUp Function
startBtn.onclick=function () {
    this.remove();
    theTitle.remove();
    theApp.style.display="block";
    loadQuiz();
};

let currentQue=0;
function loadQuiz () {

    // Select The question div from html page
    let theQuestion=document.querySelector(".questions");

    // Select The Options div from html page
    let theOptions=document.querySelector(".options");

    // Set The Question in the array in thequestion div;
    theQuestion.innerHTML=QueAndAns[currentQue].quustion;

    theOptions.innerHTML="";

    for(let i=0; i<QueAndAns[currentQue].answer.length; i++) {
        // Create Div load The Answer
        let option=document.createElement("div");
        // Add Class To The Div
        option.className="answers";

        let thelable=document.createElement("label");
        thelable.setAttribute("for", `ans${i}`);

        let theinput=document.createElement("input");
        theinput.name="answer";
        theinput.type="radio";
        theinput.id=`ans${i}`;
        theinput.value=i;

        option.appendChild(theinput);
        option.appendChild(thelable);

        thelable.innerHTML=QueAndAns[currentQue].answer[i].text;

        // Append the Div To theOptions Element
        option.addEventListener('click', function () {
            theinput.checked=true;
            this.classList.add("clicked");
        });
        theOptions.appendChild(option);
    }
}


// Selcet The Statistics Element
let theStatistic=document.querySelector(".staticics");
let score=0;
// Score Function
function scoring () {
    // Select Score Element
    let theScore=document.querySelector(".score");
    theScore.innerHTML=`You Scored [ ${score+1} ] Out Of [ ${QueAndAns.length} ]`;

    // Create Div To Carray ststistics element
    let statEle=document.createElement("div");

    statEle.className="staticsts-box";
    // Create Element To Carry The Total Question
    let total=document.createElement("div");

    // The Total Number Of Question
    total.innerHTML=`-- The Total Number Of  Question Is [ ${QueAndAns.length} ]`;

    // Create Element To Carray The Correct Answer
    let correctAns=document.createElement("div");

    // The Correct Answer
    correctAns.innerHTML=`-- The Number Of Correct Answers Is [ ${score+1} ]`;

    //// Create Element To Carray The Wrong Answer
    let wrongAns=document.createElement("div");

    // The Wrong Answer
    wrongAns.innerHTML=`-- The Number Of Wrong Answers Is [ ${QueAndAns.length-score-1} ]`;

    theStatistic.style.display="block";

    // Append The Div In TheStatistics Elemwnt
    statEle.appendChild(total);
    statEle.appendChild(correctAns);
    statEle.appendChild(wrongAns);
    theStatistic.appendChild(statEle);

    // Select QuestionNumber
    let questionNum=document.querySelector(".QuestionNumber");
    questionNum.style.display="none";

    if(score<(QueAndAns.length-1)/2) {
        // Create Fail Div
        let failEle=document.createElement("div");

        // Set Class To The Fail Div
        failEle.className="fail";

        // Set Value Inside The Duv
        failEle.innerHTML="Soory, You Failed In Quiz";

        // Append The failEle Int the statistics
        theStatistic.appendChild(failEle);
    } else {
        // Create congratolation Div
        let CongEle=document.createElement("div");

        // Set Class To The congratolation Div
        CongEle.className="congratz";

        // Set Value Inside The Duv
        CongEle.innerHTML="Congratolation, You Pass The Quiz";

        theStatistic.appendChild(CongEle);
    }

}

// Genetrate Next Question
function nextQuestion () {
    if(currentQue<QueAndAns.length-1) {
        questionNumber.innerHTML++;
        currentQue++;
        loadQuiz();
    } else {
        document.querySelector(".questions").remove();
        document.querySelector(".options").remove();
        // this.remove();
        scoring();
    }
}
// Select The Next Button
let nextBtn=document.getElementById("Next");

// Function To Get The Next question
nextBtn.onclick=function () {
    ckeckAns();
};


// Check Selected Answer
function ckeckAns () {
    if(currentQue==QueAndAns.length-1) {
        nextBtn.remove();
    }
    let selectedAnswer=document.querySelector('input[name="answer"]:checked').value;
    if(QueAndAns[currentQue].answer[selectedAnswer].iscorrect) {
        console.log(QueAndAns[currentQue].answer[selectedAnswer].text);
        score++;
        nextQuestion();
    } else {
        console.log(QueAndAns[currentQue].answer[selectedAnswer].text);
        nextQuestion();
    }

}

// Go To Next Question through Enter Click
document.addEventListener('keypress', function (event) {
    if(event.keyCode==13) {
        nextBtn.onclick();
    }
});


// Show Correct And Wrong Answer
// function showWRAnswer () {
//     for(let j=0; j<QueAndAns.length; j++) {
//         for(let i=0; i<QueAndAns[currentQue].answer.length; i++) {
//             if(QueAndAns[currentQue].answer[i].iscorrect===true) {
//                 // Create Div To Carry Correct Answers
//                 let rightAnswers=document.createElement("div");
//                 rightAnswers.innerHTML+=`${QueAndAns[currentQue].answer[i].text}`;
//                 theStatistic.appendChild(rightAnswers);
//                 console.log(QueAndAns[currentQue].answer[i].text);
//             }
//         }
//         currentQue++;
//     }
// }

