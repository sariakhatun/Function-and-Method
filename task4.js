/**
 * We are given array of marks of students. Filter out of the marks of students that scored 90+;
 */
let arr = [97,64,32,49,99,96,86]
let newArray = arr.filter((val) =>{
    return val>90;
})
console.log(newArray)