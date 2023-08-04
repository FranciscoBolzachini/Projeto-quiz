// para colocar no HTML 
// <button class="pausePlay">pause</button>
// <audio class="meuAudio" src="./audio-fundo/WhatsApp Audio 2023-07-26 at 22.23.34.mpeg"></audio>

// constantes que eu adicionei que são para adicionar no js raiz

export const pausebtn = document.querySelector("#audioPlayer");
export const audio = document.querySelector(".myAudio");
export const quizhtml = document.querySelector(".html-theme");
export const quizcss = document.querySelector(".css-theme");
export const quizjs = document.querySelector(".js-theme");

export const audios = [
    "../audio-fundo/WhatsApp Audio 2023-07-26 at 22.23.34.mpeg",
    "../audio-fundo/WhatsApp Audio 2023-07-27 at 15.14.12 (1).mpeg",
    "../audio-fundo/WhatsApp Audio 2023-07-27 at 15.14.12.mpeg"
];

// essa parte e para por no arquivo (quiz.js) quando configurar as modularizações

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
// podemos ver musicas que agradem a todos depois
// essas que eu coloquei são as que estavam no meu celular

quizhtml.addEventListener("click", () => { // <- HTML
    audio.src = audios[0];
});

quizcss.addEventListener("click", () => { // <- CSS
    audio.src = audios[1];
});

quizjs.addEventListener("click", () => { // <- JS
    audio.src = audios[2];
});