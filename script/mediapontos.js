export var pontos = [];
export var temaJogo = ""; //armazenar o tema escolhido 


export function FazerPerguntas(IndicePergunta, respostaUsuario) {//verificação de resposta do usuário 
    var pergunta = quetionsJS[IndicePergunta];//Indice das questõess 
    if (respostaUsuario === pergunta.answer) {
        pontos.push(pergunta.pontos);   
    }
}

export function selecionarTema(temaSelecionado) {
    temaJogo = temaSelecionado
}

export function iniciarQuiz() {
    for (let i = 0; i < quetionsJS.length; i++) {
        FazerPerguntas(i, parseInt(respostaUsuario));
    }

    var totalPontos = pontos.reduce((total, pontuacao) => total + pontuacao, 0 );
    console.log("Total de pontos: ",totalPontos );

    var mediaPontos = totalPontos/quetionsJS.length;
    console.log("Média de Pontos: ", mediaPontos);

    
    cadastro (nome,temaJogo,data,totalPontos)
}

export function cadastro (nome,temaJogo,data) {
    var tb = document.getElementsByTagName("table")//seleciona a tabela
    var qtdLinhas = tb.rows.length; //quantidade de linhas na tabela 
    var linha = tb.insertRow(qtdLinhas)
    var data = new Date();


    var cellNome = linha.insertCell(0);
    var  celltema = linha.insertCell(1);
    var celldata = linha.insertCell(2);
    var cellpontuacao = linha.insertCell(3);

    cellNome.innerHTML = nome;
    celltema.innerHTML = temaJogo;
    celldata.innerHTML = data.toLocaleString('pt-Br');
    cellpontuacao.innerHTML = totalPontos;
};
