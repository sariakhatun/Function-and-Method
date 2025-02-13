/**
 * Take a number n as input from user. Create an array of numbers from 1 to n.Use the reduce method to calculate product of all numbers in the array
 */
let n = prompt("Enter size of array :");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let output = arr.reduce((res,curr)=>{
    return res*curr
})
console.log(output)