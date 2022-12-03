const pokemonContainer = document.querySelector(".pokemon_container")
const search = document.getElementById("search");
const buscadorContainer = document.getElementById("buscadorContainer")



const llamarData = async (id)=>{
    pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    data = await pokemones.json();
    createPokemon(data)
}



const llamarPokemones =(num)=>{
    for(i = 1; i < num; i++){
        llamarData(i)
    }
}



function createPokemon(pokemon){
    let diccionario =["Hierba", "Fuego", "Psiquico", "Electrico", "Tierra", "Roca","Agua", "Lucha", "Insecto", "Veneno", "Hada", "Dragon", "Fantasma", "Hierro", "Hielo", "Oscuro"];
    let type = pokemon.types[0].type.name;
    if(type === "fire"){
        type = diccionario[1]
    } else if (type === "grass") {
        type = diccionario[0]
    }
    else if (type === "electric") {
        type = diccionario[3]
    } 
    else if (type === "ground") {
        type = diccionario[4]
    } 
    else if (type === "rock") {
        type = diccionario[5]
    } 
    else if (type === "psychic") {
        type = diccionario[2]
    } 
    else if (type === "water") {
        type = diccionario[6]
    }
    else if (type === "fighting") {
        type = diccionario[7]
    } 
    else if (type === "bug") {
        type = diccionario[8]
    }
    else if (type === "poison") {
        type = diccionario[9]
    }
    else if (type === "fairy") {
        type = diccionario[10]
    }
    else if (type === "dragon") {
        type = diccionario[11]
    }
    else if (type === "ghost") {
        type = diccionario[12]
    }
    else if (type === "steel") {
        type = diccionario[13]
    }
    else if (type === "ice") {
        type = diccionario[14]
    }
    else if (type === "dark") {
        tipoEn = diccionario[15]
    }

    const fragment = document.createDocumentFragment()
    
    const card_container = document.createElement("div")
    card_container.classList.add("contenedor_principal")

    const parrafo_back = document.createElement("p")
    parrafo_back.classList.add("parrafo_back")
    parrafo_back.innerHTML = `Experiencia Base: ${pokemon.base_experience}` + `<br/>` +`Tipo: `+  type + `<br/>` + `Peso: `+ pokemon.weight;

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





llamarPokemones(50)







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
    
    let tipoEn = poke.types[0].type.name.toString()
    let tipo =["Hierba", "Fuego", "Psiquico", "Electrico", "Tierra", "Roca","Agua", "Lucha", "Insecto", "Veneno", "Hada", "Dragon", "Fantasma", "Hierro", "Hielo", "Oscuro"]
    if(tipoEn === "fire"){
        tipoEn = tipo[1]
    } else if (tipoEn === "grass") {
        tipoEn = tipo[0]
    }
    else if (tipoEn === "electric") {
        tipoEn = tipo[3]
    } 
    else if (tipoEn === "ground") {
        tipoEn = tipo[4]
    } 
    else if (tipoEn === "rock") {
        tipoEn = tipo[5]
    } 
    else if (tipoEn === "psychic") {
        tipoEn = tipo[2]
    } 
    else if (tipoEn === "water") {
        tipoEn = tipo[6]
    }
    else if (tipoEn === "fighting") {
        tipoEn = tipo[7]
    } 
    else if (tipoEn === "bug") {
        tipoEn = tipo[8]
    }
    else if (tipoEn === "poison") {
        tipoEn = tipo[9]
    }
    else if (tipoEn === "fairy") {
        tipoEn = tipo[10]
    }
    else if (tipoEn === "dragon") {
        tipoEn = tipo[11]
    }
    else if (tipoEn === "ghost") {
        tipoEn = tipo[12]
    }
    else if (tipoEn === "steel") {
        tipoEn = tipo[13]
    }
    else if (tipoEn === "ice") {
        tipoEn = tipo[14]
    }
    else if (tipoEn === "dark") {
        tipoEn = tipo[15]
    }
    informacionPokemon.innerHTML = `<p class="info-weight"><b>Nombre:</b> ${poke.name}`  + `<br/>` + `<b>Experiencia Base:</b> ${poke.base_experience}` + `<br/>` +`<b>Tipo: </b>${tipoEn} `+ `<br/>`+ `<b>Peso:</b> ${poke.weight.toLocaleString()}kg` +`<br/>` + `<b>Altura: </b> ${poke.height}</p>`;
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