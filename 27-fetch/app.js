console.log("1");

fetch("http://localhost:3000/posts")
  .then(d => d.json())
  .then(console.table)
  .catch(err => console.error("YIKES"));

console.log("2");
