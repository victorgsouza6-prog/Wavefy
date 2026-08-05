const audio = document.getElementById("audio");

const botaoPlay = document.getElementById("play");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
const volume = document.getElementById("volume");

let musicaAtual = 0;

// Carrega uma música
function carregarMusica(indice){

    musicaAtual = indice;

    audio.src = musicas[indice].audio;

    document.getElementById("nomeMusica").textContent = musicas[indice].nome;
    document.getElementById("nomeArtista").textContent = musicas[indice].artista;
    document.getElementById("capaPlayer").src = musicas[indice].capa;

}

// Tocar
function tocar(){

    audio.play();

    if(botaoPlay){
        botaoPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

}

// Pausar
function pausar(){

    audio.pause();

    if(botaoPlay){
        botaoPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

}

// Play / Pause
if(botaoPlay){

    botaoPlay.addEventListener("click",()=>{

        if(audio.paused){

            tocar();

        }else{

            pausar();

        }

    });

}

// Próxima
if(botaoProximo){

    botaoProximo.addEventListener("click",()=>{

        musicaAtual++;

        if(musicaAtual >= musicas.length){

            musicaAtual = 0;

        }

        carregarMusica(musicaAtual);

        tocar();

    });

}

// Anterior
if(botaoAnterior){

    botaoAnterior.addEventListener("click",()=>{

        musicaAtual--;

        if(musicaAtual < 0){

            musicaAtual = musicas.length - 1;

        }

        carregarMusica(musicaAtual);

        tocar();

    });

}

// Volume
if(volume){

    volume.addEventListener("input",()=>{

        audio.volume = volume.value / 100;

    });

    volume.value = 100;

}

audio.volume = 1;

// Quando terminar
audio.addEventListener("ended",()=>{

    musicaAtual++;

    if(musicaAtual >= musicas.length){

        musicaAtual = 0;

    }

    carregarMusica(musicaAtual);

    tocar();

});

// Primeira música
carregarMusica(0);

function selecionarMusica(indice){

    const player = document.querySelector(".player");

    if(player){
        player.classList.add("ativo");
    }

    carregarMusica(indice);

    tocar();

}