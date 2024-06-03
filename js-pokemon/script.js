import { pokemon } from "./data/pokemon.js";
import { cardElGen, cardListGen } from "./modules/components.js";

// generare tante card quanti sono i pokemon nella lista 

//NEW
const newPokemon = [{
	id: 1,
	name: 'Bulbasaur',
	type: 'grass',
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
}, 
{
	id: 2,
	name: 'Pippo',
	type: 'grass',
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
}
]

let i = 0
const mainSectionEl = document.querySelector('.main'); //prendo il main
const btnAdd = document.querySelector('.btn-add'); //richiamo il button

const renderListCard = () => { //resetta tutto il contenuto di main section
	mainSectionEl.innerHTML = ""
	const cardList = cardListGen();//genero la lista
	for (let i = 0; i <= pokemon.length - 1; i++) { //ciclo , per ogni pokemon contenuto della lista va a creare il pokemon
	const cardEl = cardElGen(pokemon[i]); 
	cardList.append(cardEl); //prende la card list vuota e la riempie
}


	return cardList //restituisce tutte le card aggiunte tramite ciclo for
}

window.onload = mainSectionEl.append(renderListCard()); //al primo render, prendiamo il main section el e gli appendiamo ciò che viene lavorato e sputato fuori dal render list



//new
btnAdd.addEventListener("click", event => { //aggiungo pokemon
	
	if (pokemon.some(i =>i.id === newPokemon.id)){
		console.log("il pokemon esiste già!");

	} else {
		pokemon.push(newPokemon)
	mainSectionEl.append(renderListCard()) //riviene preso il main section, fa un append di renderListCard (va a riattaccare una nuova lista con pokemon nuovi)
	}
})



//un evento è qualsiasi cosa facciamo interagendo con un elemento del nostro sito. è il click su un elemento o entrare dentro una finestra e muovere il mouse
//è anche lo scrolling
//javascript event (mdn)
//click event (cercare e implementare)





