import { questionsHTML } from "./questions-html.js";
import { questionsCSS } from "./questions-css.js";
import { quetionsJS } from "./question-js.js";
import { startBtn, popupInfo, exitBtn, main, continueBtn, quizSection, quizBox, questionCount, questionNum,nextBtn } from "./btns.js";

startBtn.onclick = () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
};

exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
};

continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");

    showQuestions(0);
    questionCounter(1);
    audio.play().loop();
};

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNum++;
        questionCounter(questionNum);
    } 
    else {
        console.log("Questão concluída");
    }
};

tryAgainBtn.onclick = () => {
    quizBox.classList.add("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNum = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNum);

    headerScore();
};

goHomeBtn.onclick = () => {
    quizSection.classList.remove("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNum = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNum);
    audio.pause();
};


import { showQuestions } from "./showQuestion.js";
showQuestions(index);



import { optionSelected } from "./optionSelected.js";
optionSelected(answer);



import { questionCounter } from "./questionCounter.js";
questionCounter(index);



import { twoDigits, start, pause, timer } from "./timer.js";
twoDigits(digit);
start ();
pause ();
timer ();



import { pausebtn, audio, quizhtml, quizcss, quizjs, audios, } from "./musica.js";
// Função do novo botão de pause
let tocando = true;
pausebtn.onclick = () => {
    if (tocando) {
        audio.pause();
        pausebtn.textContent = "Play";
    } else {
        audio.play();
        pausebtn.textContent = "Pause";
    }
    tocando = !tocando;
    };

// Função para trocar a musica para cada tema:
quizhtml.addEventListener("click", () => { // <- HTML
    audio.src = audios[0];
});

quizcss.addEventListener("click", () => { // <- CSS
    audio.src = audios[1];
});

quizjs.addEventListener("click", () => { // <- JS
    audio.src = audios[2];
});





const resultBox = document.querySelector(".result-box");
const resultBoxContainer = document.querySelector(".result-box-container");

const participantNameInput = document.getElementById("participantName");

const themeSelect = document.getElementById("themeSelect");

const rankingBox = document.querySelector(".ranking-box");

const insightsContainer = document.querySelector(".insights-container");

const quizhtml = document.querySelector(".html-theme");
const quizcss = document.querySelector(".css-theme");
const quizjs = document.querySelector(".js-theme");


let isResultsVisible = false;
    function fillResultsTable() {
        const resultTableBody = document.querySelector(
        ".ranking-container tbody"
        );

        resultTableBody.innerHTML = "";

        participantsData.forEach((participant) => {
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>${participant.name}</td>
    <td>${participant.scores.HTML}</td>
    <td>${participant.scores.CSS}</td>
    <td>${participant.scores.JavaScript}</td>
    <td>${participant.timeTaken}</td>
    <td>${formatDate(participant.date)}</td>
    `;
        resultTableBody.appendChild(row);
        });

        updateInsights();
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
    }

    function toggleTheme() {
        const body = document.body;
        const iconToggle = document.getElementById("iconToggle");

        if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        iconToggle.innerHTML = '<i class="fa">&#xf186;</i>';
        } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        iconToggle.innerHTML = '<i class="fa">&#xf185;</i>';
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
    }
    function loadQuestionsByTheme(theme) {
        switch (theme) {
        case "HTML":
            return htmlQuestions;
        case "CSS":
            return cssQuestions;
        case "JavaScript":
            return jsQuestions;
        default:
            return [];
        }
    }


    function headerScore() {
        const headerScoreText = document.querySelector(".header-score");
        headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
    }

    function animateCircularProgress() {
        const circularProgress = document.querySelector(
        ".percentage-container .circular-progress"
        );
        const progressValue = document.querySelector(
        ".percentage-container .progress-value"
        );
        let progressStartValue = 0;
        let progressEndValue = (userScore / questions.length) * 100;
        let speed = 20;

        let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#ff0157 ${
            progressStartValue * 3.6
          }deg, rgba(255, 255, 255, 0.1) ${progressStartValue * 3.6}deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        }, speed);
    }

    function showResultBox() {
        quizBox.classList.remove("active");
        resultBox.classList.add("active");

        const scoreText = document.querySelector(".score-text");
        scoreText.textContent = `Sua pontuação: ${userScore} de ${questions.length}`;

        animateCircularProgress();
        setTimeout(() => {
        rankingBox.classList.add("active");
        insightsContainer.classList.add("active");
        fillResultsTable();
        }, 800);
    }