const albuns = [

{
nome:"Novo Balanço",
artista:"VEIGH",
capa:"imagens/capas/veigh.png"
},

{
nome:"POCPOC",
artista:"Pedro Sampaio",
capa:"imagens/capas/pedro.sampaio.png"
},

{
nome:"Vidrado em Você",
artista:"MC Livinho",
capa:"imagens/capas/livinho.png"
},

{
nome:"Cavalo de Troia",
artista:"MC Kevin",
capa:"imagens/capas/mc.kevin.png"
},

{
nome:"Oh Garota Eu Quero Você Só Pra Mim",
artista:"MC Jacaré",
capa:"imagens/capas/mc.jacare.png"
},

{
nome:"333",
artista:"Matuê",
capa:"imagens/capas/matue.png"
},

{
nome:"Leão",
artista:"Marília Mendonça",
capa:"imagens/capas/marilia.png"
},

{
nome:"Morena",
artista:"Luan Santana",
capa:"imagens/capas/luan.santana.png"
},

{
nome:"Dentro da Hilux",
artista:"Luan Pereira",
capa:"imagens/capas/luan.pereira.png"
},

{
nome:"Sosseguei",
artista:"Jorge & Mateus",
capa:"imagens/capas/jorge.e.mateus.png"
},

{
nome:"Meu Pedaço de Pecado",
artista:"João Gomes",
capa:"imagens/capas/joao.gomes.png"
},

{
nome:"Batom de Cereja",
artista:"Israel & Rodolffo",
capa:"imagens/capas/israel.png"
},

{
nome:"Bloqueado",
artista:"Gusttavo Lima",
capa:"imagens/capas/gustavo.png"
},

{
nome:"No Ouvidinho",
artista:"Felipe Amorim",
capa:"imagens/capas/felipe.amorin.png"
},

{
nome:"Envolver",
artista:"Anitta",
capa:"imagens/capas/anitta.png"
},

{
nome:"Pipoco",
artista:"Ana Castela",
capa:"imagens/capas/ana.castela.png"
}

];

const lista = document.getElementById("listaAlbuns");

if (lista) {

lista.innerHTML = "";

albuns.forEach(album => {

lista.innerHTML += `

<div class="card">

    <img src="${album.capa}" alt="${album.nome}">

    <h3>${album.nome}</h3>

    <p>${album.artista}</p>

    <button>Abrir Álbum</button>

</div>

`;

});

}