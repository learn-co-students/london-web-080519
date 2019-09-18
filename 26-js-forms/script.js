function validateLoginAttempt(username, password) {
  userDatabase = [
    { username: "daniel", password: "bread" },
    { username: "charly", password: "jb" },
    { username: "ian", password: "funkyMonkeys" }
  ];

  for (let i = 0; i < userDatabase.length; i++) {
    if (
      userDatabase[i].password === password &&
      userDatabase[i].username === username
    ) {
      return true;
    }
  }
  return false;
}

const toggleLecturerNotes = () =>
  lecturerNotes.classList.contains("hidden")
    ? lecturerNotes.classList.remove("hidden")
    : lecturerNotes.classList.add("hidden");
const moon = document.querySelector("#moon");
const lecturerNotes = document.querySelector("#lecturer-notes");
moon.addEventListener("click", toggleLecturerNotes);

const emoji = { description: "fat tater", img: "🥔" };

const form = document.querySelector("#login-form");

form.addEventListener("submit", handleSubmit);

function error() {
  throw new Error("oi, you can't go in");
}

function handleSubmit(e) {
  console.log({ target: e.target });
  e.preventDefault();
  const username = e.target[0].value;
  const password = e.target[1].value;

  const loginStatusSpan = document.querySelector("#login-status");
  validateLoginAttempt(username, password)
    ? (loginStatusSpan.innerText = "IN" + emoji.img)
    : error();
  // take appropriate action
  e.target.reset();
}

// maybe provide logout functionality
