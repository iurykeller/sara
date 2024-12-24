
// Captura o botão e o elemento de áudio
const playButton = document.getElementById('play-music');
const backgroundMusic = document.getElementById('background-music');

// Toca a música quando o botão é clicado
playButton.addEventListener('click', () => {
    backgroundMusic.play();
    playButton.style.display = 'none'; // Esconde o botão após clicar
});

// Função para criar neve
function createSnowflake() {
    const snowflake = document.createElement('div');
    const size = Math.random() * 10 + 5; // Tamanho aleatório entre 5px e 15px

    snowflake.classList.add('snowflake');
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    snowflake.style.animationDuration = `${Math.random() * 3 + 4}s`; // Duração aleatória entre 4s e 7s

    document.body.appendChild(snowflake);

    // Remove o floco após a animação
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Criação contínua de flocos de neve
setInterval(createSnowflake, 300);
window.onload = () => {
alert("obrigado por ser minha melhor companhia!") }
