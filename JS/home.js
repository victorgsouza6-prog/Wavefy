// ==========================
// SAUDAÇÃO
// ==========================

const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (saudacao) {

    if (hora < 12) {
        saudacao.textContent = "Bom dia 👋";
    } else if (hora < 18) {
        saudacao.textContent = "Boa tarde 👋";
    } else {
        saudacao.textContent = "Boa noite 👋";
    }

}


// ==========================
// MÚSICAS
// ==========================

const musicas = [

    {
        nome: "VEIGH",
        artista: "VEIGH",
        capa: "imagens/capas/veigh.png",
        audio: "musicas/VEIGH.mp3"
    },

    {
        nome: "Pedro Sampaio",
        artista: "Pedro Sampaio",
        capa: "imagens/capas/pedro.sampaio.png",
        audio: "musicas/PEDRO SAMPAIO.mp3"
    },

    {
        nome: "MC Livinho",
        artista: "MC Livinho",
        capa: "imagens/capas/livinho.png",
        audio: "musicas/MC Livinho.mp3"
    },

    {
        nome: "MC Kevin",
        artista: "MC Kevin",
        capa: "imagens/capas/mc.kevin.png",
        audio: "musicas/Mc Kevin.mp3"
    },

    {
        nome: "MC Jacaré",
        artista: "MC Jacaré",
        capa: "imagens/capas/mc.jacare.png",
        audio: "musicas/MC Jacaré.mp3"
    },

    {
        nome: "Matuê",
        artista: "Matuê",
        capa: "imagens/capas/matue.png",
        audio: "musicas/Matuê.mp3"
    },

    {
        nome: "Marília Mendonça",
        artista: "Marília Mendonça",
        capa: "imagens/capas/marilia.png",
        audio: "musicas/Marília Mendonça.mp3"
    },

    {
        nome: "Luan Santana",
        artista: "Luan Santana",
        capa: "imagens/capas/luan.santana.png",
        audio: "musicas/Luan Santana.mp3"
    },

    {
        nome: "Luan Pereira",
        artista: "Luan Pereira",
        capa: "imagens/capas/luan.pereira.png",
        audio: "musicas/Luan Pereira.mp3"
    },

    {
        nome: "Jorge & Mateus",
        artista: "Jorge & Mateus",
        capa: "imagens/capas/jorge.e.mateus.png",
        audio: "musicas/Jorge & Mateus.mp3"
    },

    {
        nome: "João Gomes",
        artista: "João Gomes",
        capa: "imagens/capas/joao.gomes.png",
        audio: "musicas/João Gomes.mp3"
    },

    {
        nome: "Israel & Rodolffo",
        artista: "Israel & Rodolffo",
        capa: "imagens/capas/israel.png",
        audio: "musicas/Israel & Rodolffo.mp3"
    },

    {
        nome: "Gusttavo Lima",
        artista: "Gusttavo Lima",
        capa: "imagens/capas/gustavo.png",
        audio: "musicas/gusttavo-limaa.mp3"
    },

    {
        nome: "Felipe Amorim",
        artista: "Felipe Amorim",
        capa: "imagens/capas/felipe.amorin.png",
        audio: "musicas/Felipe Amorim.mp3"
    },

    {
        nome: "Anitta",
        artista: "Anitta",
        capa: "imagens/capas/anitta.png",
        audio: "musicas/Anitta.mp3"
    },

    {
        nome: "Ana Castela",
        artista: "Ana Castela",
        capa: "imagens/capas/ana.castela.png",
        audio: "musicas/Ana Castela.mp3"
    }

];


// ==========================
// ATUALIZAR DADOS SALVOS
// ==========================

function atualizarListaSalva(nomeLista) {

    const listaSalva =
        JSON.parse(localStorage.getItem(nomeLista)) || [];

    const listaAtualizada = listaSalva.map((itemSalvo) => {

        const musicaAtualizada = musicas.find(
            musica => musica.nome === itemSalvo.nome
        );

        return musicaAtualizada || itemSalvo;

    });

    localStorage.setItem(
        nomeLista,
        JSON.stringify(listaAtualizada)
    );

}

atualizarListaSalva("playlist");
atualizarListaSalva("favoritos");


// ==========================
// ARTISTAS
// ==========================

const artistas = musicas.map((musica) => {

    return {
        nome: musica.artista,
        foto: musica.capa
    };

});


// ==========================
// ÁLBUNS
// ==========================

const albuns = musicas.map((musica) => {

    return {
        nome: musica.nome,
        artista: musica.artista,
        capa: musica.capa
    };

});


// ==========================
// CARDS DE MÚSICAS
// ==========================

const divMusicas = document.getElementById("musicas");

if (divMusicas) {

    divMusicas.innerHTML = "";

    musicas.forEach((musica, indice) => {

        const favoritos =
            JSON.parse(localStorage.getItem("favoritos")) || [];

        const playlist =
            JSON.parse(localStorage.getItem("playlist")) || [];

        const estaFavoritada = favoritos.some(
            item => item.nome === musica.nome
        );

        const estaNaPlaylist = playlist.some(
            item => item.nome === musica.nome
        );

        divMusicas.innerHTML += `

            <div
                class="card"
                onclick="selecionarMusica(${indice})"
            >

                <button
                    type="button"
                    class="coracao ${estaFavoritada ? "favoritado" : ""}"
                    onclick="favoritarMusica(event, ${indice}, this)"
                    title="Adicionar aos favoritos"
                >
                    <i class="${estaFavoritada ? "fa-solid" : "fa-regular"} fa-heart"></i>
                </button>

                <button
                    type="button"
                    class="btn-playlist ${estaNaPlaylist ? "adicionado" : ""}"
                    onclick="adicionarNaPlaylist(event, ${indice}, this)"
                    title="Adicionar à playlist"
                >
                    <i class="${estaNaPlaylist ? "fa-solid fa-check" : "fa-solid fa-plus"}"></i>
                </button>

                <img
                    src="${musica.capa}"
                    alt="${musica.nome}"
                >

                <h3>${musica.nome}</h3>

                <p>${musica.artista}</p>

            </div>

        `;

    });

}


// ==========================
// CARDS DE ÁLBUNS
// ==========================

const divAlbuns = document.getElementById("albuns");

if (divAlbuns) {

    divAlbuns.innerHTML = "";

    albuns.forEach((album) => {

        divAlbuns.innerHTML += `

            <div class="card">

                <img
                    src="${album.capa}"
                    alt="${album.nome}"
                >

                <h3>${album.nome}</h3>

                <p>${album.artista}</p>

            </div>

        `;

    });

}


// ==========================
// CARDS DE ARTISTAS
// ==========================

const divArtistas = document.getElementById("artistas");

if (divArtistas) {

    divArtistas.innerHTML = "";

    artistas.forEach((artista) => {

        divArtistas.innerHTML += `

            <div
                class="card"
                onclick="abrirArtista('${artista.nome}')"
            >

                <img
                    src="${artista.foto}"
                    alt="${artista.nome}"
                >

                <h3>${artista.nome}</h3>

            </div>

        `;

    });

}


// ==========================
// PESQUISA
// ==========================

const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", () => {

        const texto = pesquisa.value.toLowerCase();

        const cards =
            document.querySelectorAll("#musicas .card");

        cards.forEach((card) => {

            const titulo =
                card.querySelector("h3").textContent.toLowerCase();

            const artista =
                card.querySelector("p").textContent.toLowerCase();

            if (
                titulo.includes(texto) ||
                artista.includes(texto)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ==========================
// FAVORITOS
// ==========================

window.favoritarMusica = function(event, indice, botao) {

    event.preventDefault();
    event.stopPropagation();

    let favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];

    const musica = musicas[indice];

    const posicao = favoritos.findIndex(
        item => item.nome === musica.nome
    );

    const icone = botao.querySelector("i");

    if (posicao === -1) {

        favoritos.push(musica);

        botao.classList.add("favoritado");
        icone.className = "fa-solid fa-heart";

    } else {

        favoritos.splice(posicao, 1);

        botao.classList.remove("favoritado");
        icone.className = "fa-regular fa-heart";

    }

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

};


// ==========================
// PLAYLIST
// ==========================

window.adicionarNaPlaylist = function(event, indice, botao) {

    event.preventDefault();
    event.stopPropagation();

    let playlist =
        JSON.parse(localStorage.getItem("playlist")) || [];

    const musica = musicas[indice];

    const posicao = playlist.findIndex(
        item => item.nome === musica.nome
    );

    const icone = botao.querySelector("i");

    if (posicao === -1) {

        playlist.push(musica);

        botao.classList.add("adicionado");
        icone.className = "fa-solid fa-check";

    } else {

        playlist.splice(posicao, 1);

        botao.classList.remove("adicionado");
        icone.className = "fa-solid fa-plus";

    }

    localStorage.setItem(
        "playlist",
        JSON.stringify(playlist)
    );

};


// ==========================
// PREMIUM
// ==========================

window.abrirPremium = function() {

    const modalPremium =
        document.getElementById("modalPremium");

    if (modalPremium) {
        modalPremium.style.display = "flex";
    }

};

window.fecharPremium = function() {

    const modalPremium =
        document.getElementById("modalPremium");

    if (modalPremium) {
        modalPremium.style.display = "none";
    }

};


// ==========================
// MENU DA CONTA
// ==========================

const btnConta = document.getElementById("btnConta");
const menuConta = document.getElementById("menuConta");

if (btnConta && menuConta) {

    btnConta.addEventListener("click", (event) => {

        event.stopPropagation();
        menuConta.classList.toggle("ativo");

    });

    document.addEventListener("click", () => {

        menuConta.classList.remove("ativo");

    });

}


// ==========================
// ABRIR ARTISTA
// ==========================

window.abrirArtista = function(nome) {

    window.location.href =
        "artista.html?nome=" + encodeURIComponent(nome);

};


// ==========================
// BLOQUEAR ACESSO SEM LOGIN
// ==========================

if (localStorage.getItem("wavefyLogado") !== "true") {

    window.location.href = "login.html";

}


// ==========================
// MOSTRAR NOME DO USUÁRIO
// ==========================

const nomeUsuarioSalvo =
    localStorage.getItem("wavefyUsuario");

const nomeUsuarioTela =
    document.querySelector(".user p");

if (nomeUsuarioSalvo && nomeUsuarioTela) {

    nomeUsuarioTela.textContent = nomeUsuarioSalvo;

}