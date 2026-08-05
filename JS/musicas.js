const musicas = [
  {
    nome: "Novo Balanço",
    artista: "VEIGH",
    capa: "imagens/capas/veigh.png",
    audio: "./Musicas/VEIGH.mp3"
  },
  {
    nome: "POCPOC",
    artista: "Pedro Sampaio",
    capa: "imagens/capas/pedro.sampaio.png",
    audio: "./Musicas/PEDRO SAMPAIO.mp3"
  },
  {
    nome: "Vidrado em Você",
    artista: "MC Livinho",
    capa: "imagens/capas/livinho.png",
    audio: "./Musicas/MC Livinho.mp3"
  },
  {
    nome: "Cavalo de Troia",
    artista: "MC Kevin",
    capa: "imagens/capas/mc.kevin.png",
    audio: "./Musicas/Mc Kevin.mp3"
  },
  {
    nome: "Oh Garota Eu Quero Você Só Pra Mim",
    artista: "MC Jacaré",
    capa: "imagens/capas/mc.jacare.png",
    audio: "./Musicas/MC Jacaré.mp3"
  },
  {
    nome: "333",
    artista: "Matuê",
    capa: "imagens/capas/matue.png",
    audio: "./Musicas/Matuê.mp3"
  },
  {
    nome: "Leão",
    artista: "Marília Mendonça",
    capa: "imagens/capas/marilia.png",
    audio: "./Musicas/Marília Mendonça.mp3"
  },
  {
    nome: "Morena",
    artista: "Luan Santana",
    capa: "imagens/capas/luan.santana.png",
    audio: "./Musicas/Luan Santana.mp3"
  },
  {
    nome: "Dentro da Hilux",
    artista: "Luan Pereira",
    capa: "imagens/capas/luan.pereira.png",
    audio: "./Musicas/Luan Pereira.mp3"
  },
  {
    nome: "Sosseguei",
    artista: "Jorge & Mateus",
    capa: "imagens/capas/jorge.e.mateus.png",
    audio: "./Musicas/Jorge & Mateus.mp3"
  },
  {
    nome: "Meu Pedaço de Pecado",
    artista: "João Gomes",
    capa: "imagens/capas/joao.gomes.png",
    audio: "./Musicas/João Gomes.mp3"
  },
  {
    nome: "Batom de Cereja",
    artista: "Israel & Rodolffo",
    capa: "imagens/capas/israel.png",
    audio: "./Musicas/Israel & Rodolffo.mp3"
  },
  {
    nome: "Bloqueado",
    artista: "Gusttavo Lima",
    capa: "imagens/capas/gustavo.png",
    audio: "./Musicas/gusttavo-limaa.mp3"
  },
  {
    nome: "No Ouvidinho",
    artista: "Felipe Amorim",
    capa: "imagens/capas/felipe.amorin.png",
    audio: "./Musicas/Felipe Amorim.mp3"
  },
  {
    nome: "Envolver",
    artista: "Anitta",
    capa: "imagens/capas/anitta.png",
    audio: "./Musicas/Anitta.mp3"
  },
  {
    nome: "Pipoco",
    artista: "Ana Castela",
    capa: "imagens/capas/ana.castela.png",
    audio: "./Musicas/Ana Castela.mp3"
  }
];





const lista = document.getElementById("listaMusicas");

if (lista) {

lista.innerHTML = "";

musicas.forEach((m, indice)=>{

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