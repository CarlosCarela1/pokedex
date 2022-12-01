const pokemonContainer = document.querySelector(".pokemon_container")
const search = document.getElementById("search");
const buscadorContainer = document.getElementById("buscadorContainer")



const llamarData = async (id)=>{
    pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    data = await pokemones.json();
    createPokemon(data)
    console.log(data)
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
    img.src = pokemon.sprites.other.dream_world.front_default;

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







const filtrar = async (search)=>{  
    "use strict"
   
        search = document.getElementById("search").value.toLowerCase()
        let pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`);
        let data = await pokemones.json()
        let resultado = data;
        console.log(resultado)
        Mostrar(data)
        locations(search)
       
       
   
}

boton.addEventListener("click", ()=> {
    filtrar()
})




const Mostrar = (poke)=>{
    "use strict"
    const informacionPokemon = document.getElementById("poke-info");
    informacionPokemon.innerHTML = `<p class="info-weight"><b>Nombre:</b> ${poke.name}`  + `<br/>` + `<b>Experiencia Base:</b> ${poke.base_experience}` + `<br/>` +`<b>Tipo:</b> `+  `${poke.types[0].type.name}</p>`;
    let imagen = document.getElementById("imagen-buscador");
    imagen.src = poke.sprites.other.dream_world.front_default;
    imagen.classList.add("imagen-search");
    
}

const locations = async (name)=>{  
    "use strict"
        let pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
        let data = await pokemones.json(); 
        let descripcion = document.getElementById("description");
        descripcion.innerHTML = `<p class="descripcion">${data.flavor_text_entries[26].flavor_text}</p>`;
}
locations()

// const descriptionText =(descripcion)=>{
//     descripcion = document.getElementById("description");
//     descripcion.innerHTML = `<p>${descripcion.flavor_text_entries[26].flavor_text}</p>`
// }