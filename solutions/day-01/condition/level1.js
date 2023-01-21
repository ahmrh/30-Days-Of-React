const prompt = require("prompt-sync")()

// 1
const one = () => {
    let age = prompt('Enter your age: ')

    if(age >= 18)
        console.log("You are old enough to drive")
    else 
        console.log(`You are left with ${18 - age} ${18 - age == 1? "year" : "years"} to drive`)
}

// one()


// 2
const two = () => {
    age = prompt('Enter your age: ')
    if(age == 21)
        console.log(`You are the same age as me`)
    else
        console.log(`You are ${Math.abs(age - 21)} ${Math.abs(age - 21) == 1? "year" : "years"} ${age > 21? "older" : "younger"} than me`)
}

// two()

// 3
const three = () => {
    let a = 4
    let b = 3

    if(a > b) console.log(`${a} is greater than ${b}`)
    else console.log(`${a} is less than ${b}`)

    a > b
        ? console.log(`${a} is greater than ${b}`)
        : console.log(`${a} is less than ${b}`)
}
// three()

// 4
const four = () => {
    let number = prompt("Enter a number: ")

    number % 2 == 0
    ? console.log(`${number} is an even number`)
    : console.log(`${number} is an odd number`)
}

// four()