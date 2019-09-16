# what makes web apps feel smooth ?

Discuss the current model of interactivity

- foundation of just enough js to build an interactive app
- page refresh
- omnipresent js

# Dom overview

- oo representation of the page that allows js to manipulate the contents
- dom is generated based on html
- [dom](https://www.oreilly.com/library/view/javascript-absolute-beginners/9780134498638/graphics/231fig01.jpg)

# Dev tools

- rclick, inspect
- dom in the elements tab
- - html directly editable
- - styles tab for css
- - pointer features
- js console

# Modifying DOM

- const vs let
- `const bodyElement = document.querySelector('body')`

document.querySelector('#unique-element')
document.querySelectorAll('.some-shared-class')
document.getElementsByTagName('body')[0]
document.getElementById('unique-element')
document.getElementsByClassName('some-shared-class')

So, given our booklist now: const bookList = document.querySelector('ul#book-list')
We can changing attributes bookList.style.backgroundColor = red
We can also change what items are rendered.
booklist.innerHTML = '<li>My Great Book</li>'
We can delete elements document.removeChild(bookList)
Whoops, now we've deleted our bookList. Don't worry, we can re-create it as well
We can instantiate new elements using: const element = document.createElement('ul')
Adding attributes to elements element.id = 'book-list'
Appending to node document.body.appendChild(element)
