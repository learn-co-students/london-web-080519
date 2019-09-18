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
