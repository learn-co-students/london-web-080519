# just enough js

```js
document.querySelector("");
document.querySelectorAll("");
```

Three ways to select things from the document:

```js
// by tag type (no prefix whatsoever)
document.querySelector("table");

// by class
document.querySelector(".table-row-pink");

// by id
document.querySelector("#header");
```

Those will select only _one_ element, first that matches

```js
document.querySelectorAll("");
```

You guessed it, selects _all_
