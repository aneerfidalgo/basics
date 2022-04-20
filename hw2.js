
const testArray =  [ true, false, false, true, false, false, false, true, true, true, true, false ]







function checkTrue(arr){
    let result = 0
    for(let i = 0; i < arr.lenght; i++){
        // if(arr[i] === true)
        if(arr[i]){
            //result = result + 1
            result++
        }
    }

    return result;
}

console.log("This is the result", checkTrue(testArray))