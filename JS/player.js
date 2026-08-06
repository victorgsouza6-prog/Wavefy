const audio = document.getElementById("audio");

const botaoPlay = document.getElementById("play");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
const volume = document.getElementById("volume");

const nomeMusicaPlayer = document.getElementById("nomeMusica");
const nomeArtistaPlayer = document.getElementById("nomeArtista");
const capaPlayer = document.getElementById("capaPlayer");

let musicaAtual = 0;


// ==========================
// CARREGAR MÚSICA
// ==========================

function carregarMusica(indice) {

    if (!audio) {
        console.error("Elemento de áudio não encontrado.");
        return;
    }

    if (!musicas[indice]) {
        console.error("Música não encontrada. Índice:", indice);
        return;
    }

    musicaAtual = indice;

    const musica = musicas[indice];

    audio.pause();
    audio.src = musica.audio;
    audio.load();

    if (nomeMusicaPlayer) {
        nomeMusicaPlayer.textContent = musica.nome;
    }

    if (nomeArtistaPlayer) {
        nomeArtistaPlayer.textContent = musica.artista;
    }

    if (capaPlayer) {
        capaPlayer.src = musica.capa;
        capaPlayer.alt = musica.nome;
    }

    console.log("Música carregada:", musica.audio);

}


// ==========================
// TOCAR
// ==========================

async function tocar() {

    if (!audio || !audio.src) {
        console.error("Nenhuma música foi carregada.");
        return;
    }

    try {

        await audio.play();

        console.log("Música tocando:", audio.src);

        if (botaoPlay) {
            botaoPlay.innerHTML =
                '<i class="fa-solid fa-pause"></i>';
        }

    } catch (erro) {

        console.error("Erro ao tocar:", erro);
        console.error("Arquivo procurado:", audio.src);

    }

}


// ==========================
// PAUSAR
// ==========================

function pausar() {

    if (!audio) {
        return;
    }

    audio.pause();

    if (botaoPlay) {
        botaoPlay.innerHTML =
            '<i class="fa-solid fa-play"></i>';
    }

}


// ==========================
// SELECIONAR MÚSICA PELO CARD
// ==========================

window.selecionarMusica = function(indice) {

    const player = document.querySelector(".player");

    if (player) {
        player.classList.add("ativo");
    }

    carregarMusica(indice);
    tocar();

};


// ==========================
// BOTÃO PLAY E PAUSE
// ==========================

if (botaoPlay) {

    botaoPlay.addEventListener("click", function() {

        if (audio.paused) {
            tocar();
        } else {
            pausar();
        }

    });

}


// ==========================
// PRÓXIMA
// ==========================

if (botaoProximo) {

    botaoProximo.addEventListener("click", function() {

        musicaAtual++;

        if (musicaAtual >= musicas.length) {
            musicaAtual = 0;
        }

        carregarMusica(musicaAtual);
        tocar();

    });

}


// ==========================
// ANTERIOR
// ==========================

if (botaoAnterior) {

    botaoAnterior.addEventListener("click", function() {

        musicaAtual--;

        if (musicaAtual < 0) {
            musicaAtual = musicas.length - 1;
        }

        carregarMusica(musicaAtual);
        tocar();

    });

}


// ==========================
// VOLUME
// ==========================

if (volume && audio) {

    volume.value = 100;
    audio.volume = 1;

    volume.addEventListener("input", function() {

        audio.volume = Number(volume.value) / 100;

    });

}


// ==========================
// QUANDO A MÚSICA TERMINAR
// ==========================

if (audio) {

    audio.addEventListener("ended", function() {

        musicaAtual++;

        if (musicaAtual >= musicas.length) {
            musicaAtual = 0;
        }

        carregarMusica(musicaAtual);
        tocar();

    });

}


// ==========================
// CARREGAR PRIMEIRA MÚSICA
// ==========================

if (typeof musicas !== "undefined" && musicas.length > 0) {
    carregarMusica(0);
}