/**
 * write a function called make_avg() which will take an array of integers and size of that array and return the average of those values
 */
function make_avg(numbers){
    let size = numbers.length 
    let avg,sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    avg=sum/size;
    console.log("Average of the numbers :",avg)
    return size;
}
let val = make_avg([5,4,3,2,1]);
console.log("size of the array :",val)