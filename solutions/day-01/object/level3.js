

// 1
const personAccount = {
    firstName :"",
    lastName : "",
    incomes: {
        incomes: [],
        description: ""
    },
    expenses: {
        expenses: [],
        description: ""
    },
    totalIncome: () => {
        
    },
    totalExpense: () => {
        
    },
    accountInfo: () => {
        
    },
    addIncome: () => {

    },
    addExpense: () => {

    },
    accountBalance: () => {

    }
}

// console.log(personAccount)

// 2
import {users, products} from "./data.js"

let data = {
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe123'
}

const keys = ["username", "email", "password"]

const signUp = (data) => {
    let available = true
    for(let user of users)
        if(Object.values(user).includes(data.username)){
            available = false
            break
        }

    if(available){
        let newUser = {
            _id: `${(Math.random() + 1).toString(36).substring(7)}`,
            username: `${data.username}`,
            email: `${data.email}`,
            password: `${data.password}`,
            createdAt: `${new Date(Date.now()).toUTCString()}`,
            isLoggedIn: false
        }
        users.push(newUser)
        console.log("Account created")
    } 
    else
        console.log("Can't create account")
}

signUp(data)

signIn
console.log(users)