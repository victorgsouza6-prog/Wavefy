const lista = document.getElementById("listaFavoritos");


let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];


if(favoritos.length === 0){

    lista.innerHTML = "<p>Nenhuma música favorita ainda.</p>";

}


favoritos.forEach((musica,index)=>{


    lista.innerHTML += `

    <div class="musica">

        <h3>${musica.nome}</h3>

        <p>${musica.artista}</p>

        <button onclick="removerFavorito(${index})">
            Remover ❤️
        </button>

    </div>

    `;


});



function removerFavorito(index){

    favoritos.splice(index,1);

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );


    location.reload();

}