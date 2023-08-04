
function calculateScore() {
    const totalQuestions = questions.length;
    const acertos = respostasJogador.filter((resposta, index) => resposta === questions[index].answer).length;
    const erros = totalQuestions - acertos;
    return { acertos, erros };
}

function showResultBox() {
    quizBox.classList.remove("active");
    resultBox.classList.add("active");

    const { acertos, erros } = calculateScore();

    const totalQuestions = questions.length;
    const mediaAcertos = (acertos / totalQuestions) * 100;
    const percentualErros = (erros / totalQuestions) * 100;

    const scoreText = document.querySelector(".score-text")
    scoreText.textContent = `Sua pontuação: ${acertos} acertos e ${erros} erros de ${totalQuestions} questões.`;

    const mediaAcertosText = document.querySelector(".media-acertos");
    const percentualErrosText = document.querySelector(".percentual-erros");

    mediaAcertosText.textContent = `Média de acertos: ${mediaAcertos.toFixed(2)}%`;
    percentualErrosText.textContent = `Percentual de erros: ${percentualErros.toFixed(2)}%`;

}


