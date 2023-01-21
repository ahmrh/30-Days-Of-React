const prompt = require("prompt-sync")()

let year = prompt("Enter a year: ").toLowerCase()
let month = prompt("Enter a month: ").toLowerCase()

const month31 = ["january", "march", "may", "july", "august", "october", "december"]
const month30 = ["april", "june", "september", "november"]

let isLeapYear = (year) => {
    return (0 == year % 4) && (0 != year % 100) || (0 == year % 400)
}

let day
switch(true){
    case month31.includes(month): 
        day = 31; break
    case month30.includes(month): 
        day = 30; break
    default: day = isLeapYear(year)? 29 : 28
}

const arr = month.split("")
arr[0] = arr[0].toUpperCase()
month = arr.join('')

console.log(`${month}, ${year} has ${day} days.`)