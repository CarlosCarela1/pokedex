const pokemonContainer = document.querySelector(".pokemon_container")

const llamarData = async (id)=>{
    pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    data = await pokemones.json();
    console.log(data)
    createPokemon(data)
}



llamarPokemones =(num)=>{
    for(i = 1; i < num; i++){
        llamarData(i)
    }
}




function createPokemon(pokemon){
    const fragment = document.createDocumentFragment()
    const card = document.createElement("div");
    card.classList.add("card");

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img_container")

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const id = document.createElement("p")
    id.classList.add("id")
    id.textContent = `ID#` + " " + pokemon.id.toString().padStart(3,0);
    

    const pokemonName = document.createElement("p");
    pokemonName.classList.add("parrafo")
    pokemonName.textContent = pokemon.name;



    imgContainer.appendChild(img)
    
    
    card.appendChild(imgContainer)
    card.appendChild(id)
    card.appendChild(pokemonName)
    fragment.appendChild(card)
    pokemonContainer.appendChild(fragment)
}


llamarPokemones(450)
