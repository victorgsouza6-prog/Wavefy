// ==========================
// ELEMENTOS DA PÁGINA
// ==========================

const listaPlaylist =
    document.getElementById("listaPlaylist") ||
    document.querySelector(".lista-playlist");

const quantidadeMusicas =
    document.getElementById("quantidadeMusicas") ||
    document.querySelector(".topo-playlist span");

const playerPlaylist =
    document.querySelector(".player-playlist");

const audioPlaylist =
    document.getElementById("audioPlaylist") ||
    document.getElementById("audio");

const capaPlaylist =
    document.getElementById("capaPlayerPlaylist") ||
    document.querySelector(".player-musica-info img");

const nomePlaylist =
    document.getElementById("nomeMusicaPlaylist") ||
    document.querySelector(".player-musica-info h3");

const artistaPlaylist =
    document.getElementById("nomeArtistaPlaylist") ||
    document.querySelector(".player-musica-info p");

const botaoPlayPlaylist =
    document.getElementById("playPlaylist") ||
    document.querySelector(".botao-play-playlist");

const botaoAnteriorPlaylist =
    document.getElementById("anteriorPlaylist");

const botaoProximoPlaylist =
    document.getElementById("proximoPlaylist");

const volumePlaylist =
    document.getElementById("volumePlaylist");

const barraProgresso =
    document.getElementById("barraProgresso");

const tempoAtual =
    document.getElementById("tempoAtual");

const tempoTotal =
    document.getElementById("tempoTotal");


// ==========================
// PEGAR PLAYLIST SALVA
// ==========================

let playlist =
    JSON.parse(localStorage.getItem("playlist")) || [];

let musicaAtual = 0;


// ==========================
// MOSTRAR MÚSICAS
// ==========================

function mostrarPlaylist() {

    if (!listaPlaylist) {
        console.error("A lista da playlist não foi encontrada no HTML.");
        return;
    }

    listaPlaylist.innerHTML = "";

    if (quantidadeMusicas) {
        quantidadeMusicas.textContent =
            `${playlist.length} ${playlist.length === 1 ? "música" : "músicas"}`;
    }

    if (playlist.length === 0) {

        listaPlaylist.innerHTML = `

            <div class="playlist-vazia">

                <i class="fa-solid fa-music"></i>

                <h2>Sua playlist está vazia</h2>

                <p>Adicione músicas na página inicial.</p>

                <a href="index.html">
                    Voltar para o início
                </a>

            </div>

        `;

        if (playerPlaylist) {
            playerPlaylist.classList.remove("ativo");
        }

        return;
    }

    playlist.forEach((musica, indice) => {

        listaPlaylist.innerHTML += `

            <div
                class="musica-playlist"
                id="musicaPlaylist-${indice}"
                onclick="selecionarMusicaPlaylist(${indice})"
            >

                <span class="numero-musica">
                    ${indice + 1}
                </span>

                <img
                    src="${musica.capa}"
                    alt="${musica.nome}"
                >

                <div class="info-musica-playlist">

                    <h3>${musica.nome}</h3>

                    <p>${musica.artista}</p>

                </div>

                <button
                    type="button"
                    class="remover-playlist"
                    onclick="removerDaPlaylist(event, ${indice})"
                    title="Remover da playlist"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

        `;

    });

}


// ==========================
// CARREGAR MÚSICA
// ==========================

function carregarMusicaPlaylist(indice) {

    if (!playlist[indice]) {
        console.error("Música não encontrada:", indice);
        return;
    }

    musicaAtual = indice;

    const musica = playlist[indice];

    audioPlaylist.src = musica.audio;

    if (capaPlaylist) {
        capaPlaylist.src = musica.capa;
    }

    if (nomePlaylist) {
        nomePlaylist.textContent = musica.nome;
    }

    if (artistaPlaylist) {
        artistaPlaylist.textContent = musica.artista;
    }

    document
        .querySelectorAll(".musica-playlist")
        .forEach(item => item.classList.remove("tocando"));

    const musicaSelecionada =
        document.getElementById(`musicaPlaylist-${indice}`);

    if (musicaSelecionada) {
        musicaSelecionada.classList.add("tocando");
    }

}


// ==========================
// TOCAR MÚSICA
// ==========================

function tocarPlaylist() {

    if (!audioPlaylist) {
        console.error("O elemento de áudio não foi encontrado.");
        return;
    }

    audioPlaylist.play()
        .then(() => {

            if (botaoPlayPlaylist) {
                botaoPlayPlaylist.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';
            }

        })
        .catch(erro => {

            console.error("Erro ao tocar a música:", erro);

        });

}


// ==========================
// PAUSAR MÚSICA
// ==========================

function pausarPlaylist() {

    audioPlaylist.pause();

    if (botaoPlayPlaylist) {
        botaoPlayPlaylist.innerHTML =
            '<i class="fa-solid fa-play"></i>';
    }

}


// ==========================
// CLICAR EM UMA MÚSICA
// ==========================

window.selecionarMusicaPlaylist = function(indice) {

    if (playerPlaylist) {
        playerPlaylist.classList.add("ativo");
    }

    carregarMusicaPlaylist(indice);

    tocarPlaylist();

};


// ==========================
// PLAY E PAUSE
// ==========================

if (botaoPlayPlaylist) {

    botaoPlayPlaylist.addEventListener("click", () => {

        if (!audioPlaylist.src) {

            carregarMusicaPlaylist(musicaAtual);

        }

        if (audioPlaylist.paused) {

            tocarPlaylist();

        } else {

            pausarPlaylist();

        }

    });

}


// ==========================
// PRÓXIMA MÚSICA
// ==========================

if (botaoProximoPlaylist) {

    botaoProximoPlaylist.addEventListener("click", () => {

        if (playlist.length === 0) {
            return;
        }

        musicaAtual++;

        if (musicaAtual >= playlist.length) {
            musicaAtual = 0;
        }

        carregarMusicaPlaylist(musicaAtual);

        tocarPlaylist();

    });

}


// ==========================
// MÚSICA ANTERIOR
// ==========================

if (botaoAnteriorPlaylist) {

    botaoAnteriorPlaylist.addEventListener("click", () => {

        if (playlist.length === 0) {
            return;
        }

        musicaAtual--;

        if (musicaAtual < 0) {
            musicaAtual = playlist.length - 1;
        }

        carregarMusicaPlaylist(musicaAtual);

        tocarPlaylist();

    });

}


// ==========================
// REMOVER DA PLAYLIST
// ==========================

window.removerDaPlaylist = function(event, indice) {

    event.preventDefault();
    event.stopPropagation();

    const estavaTocando =
        musicaAtual === indice &&
        audioPlaylist &&
        !audioPlaylist.paused;

    playlist.splice(indice, 1);

    localStorage.setItem(
        "playlist",
        JSON.stringify(playlist)
    );

    if (playlist.length === 0) {

        if (audioPlaylist) {
            audioPlaylist.pause();
            audioPlaylist.removeAttribute("src");
        }

        if (playerPlaylist) {
            playerPlaylist.classList.remove("ativo");
        }

        musicaAtual = 0;

    } else if (indice < musicaAtual) {

        musicaAtual--;

    } else if (indice === musicaAtual) {

        if (musicaAtual >= playlist.length) {
            musicaAtual = 0;
        }

        carregarMusicaPlaylist(musicaAtual);

        if (estavaTocando) {
            tocarPlaylist();
        }

    }

    mostrarPlaylist();

};


// ==========================
// VOLUME
// ==========================

if (volumePlaylist && audioPlaylist) {

    volumePlaylist.value = 100;
    audioPlaylist.volume = 1;

    volumePlaylist.addEventListener("input", () => {

        audioPlaylist.volume =
            Number(volumePlaylist.value) / 100;

    });

}


// ==========================
// FORMATAR TEMPO
// ==========================

function formatarTempo(segundos) {

    if (isNaN(segundos)) {
        return "00:00";
    }

    const minutos =
        Math.floor(segundos / 60);

    const segundosRestantes =
        Math.floor(segundos % 60);

    return `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;

}


// ==========================
// ATUALIZAR BARRA DE TEMPO
// ==========================

if (audioPlaylist) {

    audioPlaylist.addEventListener("loadedmetadata", () => {

        if (tempoTotal) {
            tempoTotal.textContent =
                formatarTempo(audioPlaylist.duration);
        }

        if (barraProgresso) {
            barraProgresso.max =
                audioPlaylist.duration || 0;
        }

    });

    audioPlaylist.addEventListener("timeupdate", () => {

        if (tempoAtual) {
            tempoAtual.textContent =
                formatarTempo(audioPlaylist.currentTime);
        }

        if (barraProgresso) {
            barraProgresso.value =
                audioPlaylist.currentTime;
        }

    });

    audioPlaylist.addEventListener("ended", () => {

        if (playlist.length === 0) {
            return;
        }

        musicaAtual++;

        if (musicaAtual >= playlist.length) {
            musicaAtual = 0;
        }

        carregarMusicaPlaylist(musicaAtual);
        tocarPlaylist();

    });

}


// ==========================
// MEXER NA BARRA
// ==========================

if (barraProgresso && audioPlaylist) {

    barraProgresso.addEventListener("input", () => {

        audioPlaylist.currentTime =
            Number(barraProgresso.value);

    });

}


// ==========================
// INICIAR PÁGINA
// ==========================

mostrarPlaylist();