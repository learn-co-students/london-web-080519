// ES6 Advanced Syntax

//  History of JS/ECMAScript - https://en.wikipedia.org/wiki/JavaScript#History
//  Site showing difference between ES5 and ES6  - http://es6-features.org/#Constants

// ES6 is a standardization/version of Javascript which was released in 2015.
// It has many new features that help developers write and understand JavaScript more easily.
// Modern Frameworks like Angular and React are developed with ES6. Its syntax is also different than classic JavaScript.

// 1. Destructuring - a way of redefining variables to make them easier to use within our program

const team1 = {
    player1: "Ian",
    player2: "Charly",
    player3: null,
    player4: null,
    player5: null
}

const { player1, player2, player3, player4, player5 } = team1

// this creates 5 variables that contain the values of each of the named keys from the team1 hash
// the values for each key within the original object haven't been changed, but we can no access them
// individually without calling the key of the hash each time

player1
// => "Ian"

team1.player1
// => "Ian"


// 2. Key-Value assignment shorthand

const player6 = 'Dan'
const player7 = 'Sam'
const player8 = 'Nico'
const player9 = 'Joe'
const player10 = 'Ben'

const team2 = { player6, player7, player8, player9, player10 }

// this creates an object with keys named after the variables listed between the brackets, which each contain that variables value

player7
// => "Sam"

team2.player7
// => "Sam"

// 3. Spread Operator - a way of copying the contents of one object into another

const capitals1 = {
    england: "London",
    france: "Paris",
    spain: "Madrid",
    italy: "Rome"
}

const capitals2 = { ...capitals1 }
const capitals3 = capitals1

// this takes all of the information inside the capitals1 object and puts it inside a new object
// this is a completely separate object, rather than a reference to the original object, so when
// you change the value of a key in the first object, it won't change the value of the key inside
// the second object. this syntax also works with arrays in javascript

capitals1.italy = "Venice"

capitals1.italy
// => "Venice"

capitals2.italy
// => "Rome"

capitals3.italy
// => "Venice"

// 4. Arrow functions

// Shorthand for declaring an anonymous function as an argument within a function. They can also be saved to a variable and called later.
arrow = (dog) => {
  return `${dog} is a dog.`
}

arrow("Ian")
// => "Ian is a dog."

// Arrow functions have their own particular set of rules.
// 1. If the function has one argument passed into it, there is no need to add brackets around the argument
arrow1 = dog => {
  return `${dog } is a dog.`
}

arrow1("Ian")
// => "Ian is a dog."

// 2. If the function body contains only one line, curly brackets are not needed if the body is on the same line as the arrow. This is also IMPLITICLY returns the line
arrow2 = dog => `${dog } is a dog.`

arrow2("Ian")
// => "Ian is a dog."

// 3. Arrow functions will also implicity return if standard brackets are used around the body of the function. This is true if the function is one-line or has multiple lines
arrow3 = dog => (
  `${dog } is a dog.`
)

arrow3("Ian")
// => "Ian is a dog."

// 5. Functions as Objects/Callback Function

// functions can be passed into other functions as arguments or stored as items within an object/array. They can all then be called and run whenever is convenient later.

let functions1 = [
  () => "One",
  () => "Two",
  () => "Three"
]

functions1[0]()
// => "One"

let functions2 = {
  one:() => "One",
  two: () => "Two",
  three:() => "Three"
}

functions2.two()
// => "Two"

let numbers = [1,2,3,4,5,6,7,8,9,10]

bunchOfMaths = num => num * (((num * 12) / (num / 42)) - (num ** 2))

numbers.map(bunchOfMaths)
// => [503, 1000, 1485, 1952, 2395, 2808, 3185, 3520, 3807, 4040]

// 6. This

// This is the Javascript equivalent of self in Ruby. This refers to the the object that this belongs to.
// The meaning of this can change depending on the type of function used and the scope within which that
// function is defined.

const dog1 = {
  name: "Fido",
  age: 12,
  getStats: function() {
    return `${this.name} is ${this.age} years old.`
  }
}

dog1.getStats()
// => "Fido is 12 years old."
//  In this example, this refers to the constant dog1, as it has been defined within that object

const dog2 = {
    name: "Timmy",
    age: 9,
    getStats: () => `${this.name} is ${this.age} years old.`
}

dog2.getStats()
// => " is undefined years old."
// In this example, this refers to the global scope (or window within the browser console) due to how
// Arrow functions handle this.

// 7. Arrow function scoping

// Arrow functions do not have their own this. If you call this within an arrow functions, it adopts the value of
// this from the scope it was created in and will remember is as this wherever and whenever you call it
// This is why the getStats function from the dog2 object returns blank andf undefined values. Within that arrow
// function, this will refer to the global scope, so it's looking for globally defined values for name and age.
// In this case, the function was called with the browser consle, so this becomes the window object. window.name
// has been defined as "" and window.age is undefined, which is why we get above string as the return value of
// the function

// If we change these values by declaring global variables as below, the function will adopt them and the function
// will then output the following.

name = "Sammy"

age = 7

dog2.getStats()
// => "Sammy is 7 years old."


// 8. Class syntax

// Just like ruby, we can create classes of Objects in Javascript

// To set initial properties of a Class, we use a constructor function. This function CANNOT be an arrow function
// due to the the fact that an arrow function takes this from the scope it was defined in, so it will try to set
// values for the class itself rather then the new object we are creating

// Any function we define within the class syntax don't need the function keyword before them

// To define class functions or variables/properties we need to preceed them with the keyword static.

class Dog {

  static all = []

  constructor(name, age){
    static this.name = name
    static this.age = age
    Dog.all.push(this)
  }

  getStats = () => `${this.name} is ${this.age} years old.`

  getStatsNoArrow() {
    return `${this.name} is ${this.age} years old.`
  }

  static howMany = () => `There are currently ${this.all.length} dogs.`

  static howManyNoArrow() {
    return `There are currently ${this.all.length} dogs.`
  }
}

let dog1 = new Dog("Joey", 23)
let dog2 = new Dog("Tim", 12)

dog1.getStats()
// => "Joey is 23 years old."

dog2.getStatsNoArrow()
// => "Tim is 12 years old."

Dog.howMany()
// => "There are currently 2 dogs."

Dog.howManyNoArrow()
// => "There are currently 2 dogs."
