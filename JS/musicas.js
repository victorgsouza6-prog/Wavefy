const musicas = [
  {
    nome: "Novo Balanço",
    artista: "VEIGH",
    capa: "imagens/capas/veigh.png",
    audio: "./musicas/VEIGH.mp3"
  },
  {
    nome: "POCPOC",
    artista: "Pedro Sampaio",
    capa: "imagens/capas/pedro.sampaio.png",
    audio: "./musicas/PEDRO_SAMPAIO.mp3" // Removido espaço
  },
  {
    nome: "Vidrado em Você",
    artista: "MC Livinho",
    capa: "imagens/capas/livinho.png",
    audio: "./musicas/MC_Livinho.mp3" // Removido espaço
  },
  {
    nome: "Cavalo de Troia",
    artista: "MC Kevin",
    capa: "imagens/capas/mc.kevin.png",
    audio: "./musicas/Mc_Kevin.mp3" // Removido espaço
  },
  {
    nome: "Oh Garota Eu Quero Você Só Pra Mim",
    artista: "MC Jacaré",
    capa: "imagens/capas/mc.jacare.png",
    audio: "./musicas/MC_Jacare.mp3" // Removido acento e espaço
  },
  {
    nome: "333",
    artista: "Matuê",
    capa: "imagens/capas/matue.png",
    audio: "./musicas/Matue.mp3" // Removido acento
  },
  {
    nome: "Leão",
    artista: "Marília Mendonça",
    capa: "imagens/capas/marilia.png",
    audio: "./musicas/Marilia_Mendonca.mp3" // Removido acentos e espaços
  },
  {
    nome: "Morena",
    artista: "Luan Santana",
    capa: "imagens/capas/luan.santana.png",
    audio: "./musicas/Luan_Santana.mp3"
  },
  {
    nome: "Dentro da Hilux",
    artista: "Luan Pereira",
    capa: "imagens/capas/luan.pereira.png",
    audio: "./musicas/Luan_Pereira.mp3"
  },
  {
    nome: "Sosseguei",
    artista: "Jorge & Mateus",
    capa: "imagens/capas/jorge.e.mateus.png",
    audio: "./musicas/Jorge_e_Mateus.mp3"
  },
  {
    nome: "Meu Pedaço de Pecado",
    artista: "João Gomes",
    capa: "imagens/capas/joao.gomes.png",
    audio: "./musicas/Joao_Gomes.mp3"
  },
  {
    nome: "Batom de Cereja",
    artista: "Israel & Rodolffo",
    capa: "imagens/capas/israel.png",
    audio: "./musicas/Israel_e_Rodolffo.mp3"
  },
  {
    nome: "Bloqueado",
    artista: "Gusttavo Lima",
    capa: "imagens/capas/gustavo.png",
    audio: "./musicas/gusttavo-limaa.mp3"
  },
  {
    nome: "No Ouvidinho",
    artista: "Felipe Amorim",
    capa: "imagens/capas/felipe.amorin.png",
    audio: "./musicas/Felipe_Amorim.mp3"
  },
  {
    nome: "Envolver",
    artista: "Anitta",
    capa: "imagens/capas/anitta.png",
    audio: "./musicas/Anitta.mp3"
  },
  {
    nome: "Pipoco",
    artista: "Ana Castela",
    capa: "imagens/capas/ana.castela.png",
    audio: "./musicas/Ana_Castela.mp3"
  }
];

const lista = document.getElementById("listaMusicas");

if (lista) {
  lista.innerHTML = "";
  musicas.forEach((m, indice) => {
    lista.innerHTML += `
    <div class="card">
        <img src="${m.capa}" alt="${m.nome}">
        <h3>${m.nome}</h3>
        <p>${m.artista}</p>
        <button onclick="selecionarMusica(${indice})">
            ▶ Tocar
        </button>
    </div>
    `;
  });
}
