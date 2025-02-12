/**
 * print all the even numbers of an array using function
 */
function even_numbers(numbers){
    let sum=0;
    for(const number of numbers){
        if(number%2===0){
            console.log(number);
            sum+=number;
        }
    }
    return sum;
}
let s = even_numbers([2,4,5,6,9,11]) 
console.log("sum of even numbers:",s)