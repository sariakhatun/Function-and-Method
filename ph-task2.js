/**
 * Take a number if the number is odd multiply by 2 and return the result and is even divide it by 2 and return the result
 */
function even(a){
    let result;
    if(a%2===0){
        result = a/2;
        console.log(a,"is even number and the result is :",result)
    }
    else{
        result = a*2;
        console.log(a,"is odd number and the result is :",result)
    }
   
}
 even(6);
