const caixaTexto = document.getElementById('textoTranscrito');
const botaoTranscricao = document.getElementById('transcrever');
const micActived = document.querySelectorAll('.mic');

const reconhecimento = new webkitSpeechRecognition();

reconhecimento.onresult = (evento) => {
    const transcricao = evento.results[0][0].transcript;
    caixaTexto.innerText = transcricao;
};
reconhecimento.onstart = () => {
    micActived.forEach(mic => mic.classList.remove('bi-mic'));
    micActived.forEach(mic => mic.classList.add('bi-mic-fill'));
};

reconhecimento.onend = () => {
    micActived.forEach(mic => mic.classList.remove('bi-mic-fill'));
    micActived.forEach(mic => mic.classList.add('bi-mic'));
};

botaoTranscricao.addEventListener('click', () => reconhecimento.start(), )


