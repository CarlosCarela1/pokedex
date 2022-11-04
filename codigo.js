const pokemonContainer = document.querySelector(".pokemon_container")
const search = document.getElementById("search");
const buscadorContainer = document.getElementById("buscadorContainer")



const llamarData = async (id)=>{
    pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    data = await pokemones.json();
    console.log(data)
    createPokemon(data)
}



const llamarPokemones =(num)=>{
    for(i = 1; i < num; i++){
        llamarData(i)
    }
}



function createPokemon(pokemon){
    const fragment = document.createDocumentFragment()
    
    const card_container = document.createElement("div")
    card_container.classList.add("contenedor_principal")

    const parrafo_back = document.createElement("p")
    parrafo_back.classList.add("parrafo_back")
    parrafo_back.innerHTML = `Base Experience: ${pokemon.base_experience}` + `<br/>` +`Type: `+  pokemon.types[0].type.name;

    const back = document.createElement("div")
    back.classList.add("back")
    

    const card = document.createElement("div");
    card.classList.add("card");

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img_container")

    const img = document.createElement("img");
    img.classList.add("imagenes-pokemones")
    img.src = pokemon.sprites.other.home.front_default;

    const id = document.createElement("p")
    id.classList.add("id")
    id.textContent = `ID#` + " " + pokemon.id.toString().padStart(3,0);
    

    const pokemonName = document.createElement("p");
    pokemonName.classList.add("parrafo")
    pokemonName.innerHTML = `<p class="pokemon-name">${pokemon.name}</p>`;



    imgContainer.appendChild(img)
    
    back.appendChild(parrafo_back)
    card.appendChild(imgContainer)
    card.appendChild(id)
    card.appendChild(pokemonName)
    card_container.appendChild(card)
    card_container.appendChild(back)
    fragment.appendChild(card_container)
    pokemonContainer.appendChild(fragment)
}





llamarPokemones(200)
