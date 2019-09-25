// API

get = url => fetch(url).then(resp => resp.json())

post = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

destroy = (url, id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE"
  }).then(resp => resp.json())
}

const API = { get, post, destroy }

//  CONSTANTS

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector("main")

// FUNCTIONS

createAndShowTrainer = trainer => {
  let div = document.createElement('div')
  div.className = "card"
  div.dataset.id = trainer.id
  let p = document.createElement('p')
  p.innerText = trainer.name
  let button = document.createElement("button")
  button.setAttribute("data-trainer-id", trainer.id)
  button.innerText = "Add Pokemon"
  button.addEventListener("click", handleAddClick)
  let ul = document.createElement("ul")
  ul.append(...createTrainersPokemon(trainer.pokemons))
  // this is where the pokemon live eventually
  div.append(p, button, ul)
  main.append(div)
}

handleAddClick = (event) => {
  //  get trainer id
  let trainer_id = event.target.dataset.trainerId
  let currentTrainerUl = document.querySelector(`div[data-id="${trainer_id}"]>ul`)
  if (currentTrainerUl.childElementCount < 6) {
    API.post(POKEMONS_URL, { trainer_id }).then(addPokemonToTrainerCard)
  } else {
    alert("NO MORE POKEMON FOR YOU!!!!")
  }
}

addPokemonToTrainerCard = pokemon => {
  let currentTrainerUl = document.querySelector(`div[data-id="${pokemon.trainer_id}"]>ul`)
  currentTrainerUl.append(createPokemon(pokemon))
}

createTrainersPokemon = pokemons => {
  return pokemons.map(createPokemon)
}

createPokemon = pokemon => {
  let li = document.createElement("li")
  li.innerText = `${pokemon.nickname} (${pokemon.species})`
  li.setAttribute("data-pokemon-id", pokemon.id)
  let button = document.createElement("button")
  button.className = "release"
  button.setAttribute("data-pokemon-id", pokemon.id)
  button.innerText = "Release"
  button.addEventListener("click", handleReleaseClick)
  li.append(button)
  return li
}

handleReleaseClick = event => {
  let pokemonId = event.target.dataset.pokemonId
  API.destroy(POKEMONS_URL, pokemonId).then(removePokemonFromTrainer)
}

removePokemonFromTrainer = pokemon => {
  let currentTrainerUl = document.querySelector(`div[data-id="${pokemon.trainer_id}"]>ul`)
  let deadPokemon = currentTrainerUl.querySelector(`li[data-pokemon-id="${pokemon.id}"]`)
  deadPokemon.remove()
}

renderAllTrainers = trainers => trainers.forEach(createAndShowTrainer)

getAndRenderTrainers = () => {
  API.get(TRAINERS_URL).then(renderAllTrainers)
}

document.body.onload = getAndRenderTrainers
