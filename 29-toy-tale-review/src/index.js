// API Functions

function get(url) {
  return fetch(url).then(response => response.json())
}

function post(url, toyData) {
  return fetch(url, {
    method: "POST",
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(toyData)
  }).then(response => response.json())
}

function patch(url, id, toyData) {
  return fetch(`${url}${id}`, {
    method: "PATCH",
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(toyData)
  }).then(response => response.json())
}

API = { get, post, patch }

// CONSTANTS

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector("div#toy-collection")

let addToy = false

const baseURL = "http://localhost:3000/toys/"

// FUNCTIONS

// Create Card then Append

function createToyCard(toy) {
  let toyDiv = document.createElement("div")
  toyDiv.className = "card"
  let h2 = document.createElement("h2")
  h2.innerText = toy.name
  let img = document.createElement("img")
  img.src = toy.image
  img.className = "toy-avatar"
  let p = document.createElement("p")
  p.innerText = `${toy.likes} Likes`
  p.className = `likes-${toy.id}`
  let button = document.createElement("button")
  button.className = "like-btn"
  button.innerText = "Like <3"
  button.addEventListener("click", () => handleLikeClick(toy.id))
  toyDiv.append(h2, img, p, button)
  toyCollection.append(toyDiv)
}

// Get then Render all toys

function getAndRenderToys() {
  API.get(baseURL).then(toyList => toyList.forEach(createToyCard))
}

// Increase Likes on server then client

function handleLikeClick(id) {
  let likes = parseInt(document.querySelector(`p.likes-${id}`).innerText)
  likes ++
  API.patch(baseURL, id, { likes }).then(updateLikesOnClient)
}

function updateLikesOnClient(toy) {
  let likesEl = document.querySelector(`p.likes-${toy.id}`)
  likesEl.innerText = `${toy.likes} Likes`
}

//  Add new toy to server then  client

function handleFormSubmit(event) {
  event.preventDefault()
  let dataObject = {
    name: event.target[0].value,
    image: event.target[1].value,
    likes: 0
  }
  API.post(baseURL, dataObject).then((toy) => {
    // The line below clears the form inputs
    event.target.reset()
    createToyCard(toy)
  })
}

// Toggle add toy form/event listener

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    toyForm.addEventListener("submit", handleFormSubmit)
  } else {
    toyForm.style.display = 'none'
    toyForm.removeEventListener("submit", handleFormSubmit)
  }
})

// Other Event listeners

document.body.onload = getAndRenderToys
