const message = "this is a msg declared as a global variable";

function handleClick(e, message) {
  console.log(message);
}

const button = document.querySelector("button");

button.addEventListener("click", function(e) {
  handleClick(e, "hello");
});
