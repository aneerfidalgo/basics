let firstName = "Aner"


if(firstName){
    console.log(`Hello world', ${firstName}`)
}else if(lastName){
    console.log("Hello world, stranger")
} else{
    console.log("My last name is "+ lastNamme)
}

// else{
//     console.log("Hello world, stranger")
// }

const today = "Tuesday"

let result = today === "Monday"? "Darie is getting paid": "Darie is broke"
console.log(result)




let fruit = "carambola"

switch(fruit){
    case`carambola`:
        console.log("this is a kiwi")
        break
    case `banana`:
        console.log("this is a banana")  
        break
    default:
        console.log("buy pineapple")
        break
}
//const fruit = "orange"

switch(fruit){
    case "orange":
        console.log("this is an orange")
        break
    case "apple":
        console.log("this is my apple")
        break
    default:
        console.log("we are out of fruits")
        break
}


