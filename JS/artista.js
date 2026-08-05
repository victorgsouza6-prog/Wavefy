// ==========================
// ARTISTAS DO WAVEFY
// ==========================

const artistas = {

    "The Weeknd": {
        imagem: "imagens/artistas/weeknd.jpg",
        musicas: [
            "Blinding Lights",
            "After Hours",
            "Save Your Tears",
            "Starboy"
        ]
    },


    "Taylor Swift": {
        imagem: "imagens/artistas/taylor.jpg",
        musicas: [
            "Blank Space",
            "Anti-Hero",
            "Love Story",
            "Cruel Summer"
        ]
    },


    "Bruno Mars": {
        imagem: "imagens/artistas/bruno.jpg",
        musicas: [
            "24K Magic",
            "Grenade",
            "Locked Out Of Heaven",
            "Just The Way You Are"
        ]
    },


    "Travis Scott": {
        imagem: "imagens/artistas/travis.jpg",
        musicas: [
            "FE!N",
            "Goosebumps",
            "SICKO MODE",
            "Highest In The Room"
        ]
    }

};


// ==========================
// PEGAR ARTISTA DA URL
// ==========================

const url = new URLSearchParams(window.location.search);

const nome = url.get("nome");


// ==========================
// MOSTRAR DADOS
// ==========================

const artista = artistas[nome];


if(artista){

    document.getElementById("nomeArtista").innerHTML = nome;

    document.getElementById("fotoArtista").src = artista.imagem;


    const lista = document.getElementById("listaMusicas");


    artista.musicas.forEach((musica)=>{

        lista.innerHTML += `
        
        <div class="musica">
            ▶ ${musica}
        </div>

        `;

    });


}else{

    document.getElementById("nomeArtista").innerHTML = "Artista não encontrado";

}
