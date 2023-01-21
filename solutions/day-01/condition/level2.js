const prompt = require("prompt-sync")()

score = prompt('Enter the score: ')
let grade
switch(true){
    case 90 <= score && score <= 100:
        grade = 'A'
        break

    case 70 <= score :
        grade = 'B'
        break

    case 60 <= score :
        grade = 'C'
        break

    case 50 <= score :
        grade = 'D'
        break

    case 0 <= score :
        grade = 'F'
        break
    
    default: 
        grade="what kind of score is that!??"
}
console.log(grade)