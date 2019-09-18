// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.className = "hidden"
const modalMessage = document.querySelector("#modal-message")

const heartButtons = document.querySelectorAll("li>span")

heartButtons.forEach(function (button) {
  button.addEventListener("click", handleClick)
})

function handleClick(event) {
  if (event.target.innerText === EMPTY_HEART) {
    mimicServerCall().then(function () {
      event.target.innerText = FULL_HEART
      event.target.className = "activated-heart"
    }).catch(function (error) {
        modalMessage.innerText = error
        modal.className = ""
        setTimeout(function () {
          modal.className = "hidden"
        },5000)
    })
  } else {
    event.target.innerText = EMPTY_HEART
    event.target.className = "like-glyph"
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 1
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
