export function updateResultBox() {
    const tb = document.getElementsByTagName("table");
    tb.innerHTML = ""; // Limpa o conteúdo da tabela
    
    participantsData.forEach((participant) => {
    const newRow = tb.insertRow();
    const cellNome = newRow.insertCell();
    const cellTema = newRow.insertCell();
    const cellData = newRow.insertCell();
    const cellPontuacao = newRow.insertCell();
    const cellMediaAcertos = newRow.insertCell();
    const cellMediaErros = newRow.insertCell();
    
    cellNome.textContent = participant.name;
    cellTema.textContent = participant.theme;
    cellData.textContent = participant.date;
    
    const { acertos, erros } = participant.scores;
    const pontuacao = `${acertos} / ${acertos + erros}`;
    cellPontuacao.textContent = pontuacao;
    
    const mediaAcertos = (acertos / participantsData.length).toFixed(2);
    const mediaErros = (erros / participantsData.length).toFixed(2);
    cellMediaAcertos.textContent = mediaAcertos;
    cellMediaErros.textContent = mediaErros;
    })
    };