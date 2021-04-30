// Add your functions here
function map(sourceArray, cb) { //source array + cb that will do things later 
    let nums = [] //new array 
    for (let i = 0; i < sourceArray.length; i++) { 
        let aThing = sourceArray[i] //takes each array element 
        nums.push(cb(aThing)) //callback function operates on each item and pushes result to nums array 
    }
    return nums //return array
}

function reduce(sourceArray, callback, starting) {
    let nums = (!!starting) ? starting : sourceArray[0] //if starting condition truthy, starting else starting 0 
    let i = (!!starting) ? 0 : 1  //if truthy, 0 else 1 
        for (; i < sourceArray.length; i++) { 
            nums = callback(sourceArray[i], nums) // calls cb on values 
        }
        return nums 
}
