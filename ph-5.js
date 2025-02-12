/**
 * objectives: write a function to give me the sum of all number in an array
 */
function sum(number){
    let s=0;
    for(let i=0;i<number.length;i++){
        s+=number[i];
    }
    return s;
}
//let nums = [1,2,3,4,5]
let result = sum([1,2,3,4,5])
console.log("sum of numbers : ",result)