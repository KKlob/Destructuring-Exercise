// Provided SpringBoard Question 1
// What does the following code return/pring?
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

//Answers below
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// Provided SpringBoard Question 2
// What does the following code return/print?
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };

//   let {numPlanets, ...discoveryYears} = planetFacts;

//   console.log(discoveryYears); // ?

// Answers Below
// console.log(discoveryYears); // {yearNeptuneDiscovereed: 1846, yearMarsDiscovered: 1659}

//Provided SpringBoard Question 3
//What does the following code return/pring?
// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }

//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?

// Answers Below
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple
// getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
// getUserData({}) // 'You name is undefined and you like green'

// Provided SpringBoard Question 4
// What does the follwing code return/print?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?

// Answers below
//console.log(first) // "Maya"
//console.log(second) // "Marisa"
//console.log(third) // "Chi"

// Provided SpringBoard Question 5
// what does the following code return/print?
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]

//   console.log(raindrops); // ?
//   console.log(whiskers); // ?
//   console.log(aFewOfMyFavoriteThings); // ?

// Answers below
// console.log(raindrops) // "Raindrops on roses"
// console.log(whiskers) // "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings) // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Provided SpringBoard Question 6
// What does the following code return/print?
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?

// Answer below
// console.log(numbers) // [10, 30, 20]

// ES2015 Refactoring

// Springboard Provided Code to refactor to ES2015
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

// Refactored Code Below
const obj = {
    numbers: {
        a: 1,
        b: 2,
    }
};

const { numbers: { a, b } } = obj;

// SpringBoard Provided Code to refactor
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// Create one-line array swap

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// Provided SpringBoard Instruction for raceResults()
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array

// Write a one line function to make this work using
// - an arrow function
// - destructuring
// - 'Enhanced' object assignment

//raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });