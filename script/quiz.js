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
// modificação que eu fiz no continueBtn.onclick
continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");
    
    showQuestions(0);
    questionCounter(1);
    audio.play().loop(); // <- aqui
};

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