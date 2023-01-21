const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// 1. declare an empty array
const emptyArr = []

// 2. declare an array with more than 5 number of elements
const arr = ['a', 'b', 'c', 'd', 'e', 'f']

// 3. Find the length of your array
let length = arr.length

// 4. get the first item, the middle item, and the last item
let firstItem = arr[0]

let middleItem = arr.length % 2 != 0
    ? arr[arr.length/2]
    : [arr[arr.length/2 - 1], arr[arr.length/2] ]

let lastItem = arr[arr.length - 1]


// 5. declare an array called mixedDataTypes ...
const mixedDataTypes = ['a', 1, true, {false : "babi", "0" : true}, (param) => { a =  param * 11;  return a}, ["aye", 'welp']]

// 6. declare an array variable name itCompanies
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)

console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

console.log()

for(let company of itCompanies)
    console.log(company.toUpperCase())
console.log()

company = "appuru"

console.log(
    itCompanies.includes(company)
        ? "Company exist"
        : "Company doesn't exist"
)

console.log(`${itCompanies.join(', ')} are big IT companies.`)

// filter out companies which have more than one o 
const filteredItCompanies = []

for(let company of itCompanies){
    slicedStr = company.toLowerCase().split('')

    count = 0
    for(let i of slicedStr){
        if(i == 'o')
            count += 1
    }
    if(count <= 1){
        filteredItCompanies.push(company)
    } 

}

console.log(filteredItCompanies)

// sort the array using sort() method 
console.log(itCompanies.sort())

// slice out the first 3 companies
console.log(itCompanies.slice(0, 3))

// slice out the last 3 companies
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// slice out the middle it company or companies from array
let a = (length) => {return Math.round(length / 2 - 1)}
let b = (length) => {return Math.floor(length / 2 + 1)}

console.log(itCompanies)
console.log(
   itCompanies.slice(a(itCompanies.length), b(itCompanies.length))
)
console.log(a(itCompanies.length), b(itCompanies.length))

itCompanies.push("Goto")
console.log(itCompanies)

console.log(
    itCompanies.slice(a(itCompanies.length), b(itCompanies.length) )
)

console.log(a(itCompanies.length), b(itCompanies.length))

// remove the first it company from the array
console.log(itCompanies)
itCompanies.splice(0,1)
console.log(itCompanies)

// remove the last it company from array
itCompanies.splice(itCompanies.length - 1, itCompanies.length )
console.log(itCompanies)

itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)