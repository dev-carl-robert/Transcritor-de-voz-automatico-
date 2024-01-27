const caixaTexto = document.getElementById('textoTranscrito');
const botaoTranscricao = document.getElementById('transcrever');
 
const reconhecimento = new webkitSpeechRecognition();

reconhecimento.onresult = (evento) => {
    const transcricao = evento.results[0][0].transcript;
    caixaTexto.innerText = transcricao;
};

botaoTranscricao.addEventListener('click', () => reconhecimento.start())