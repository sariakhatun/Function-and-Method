//Arrow function
function sum(a,b){
    return a+b;
}
// let val = sum(6,2);
// console.log(val)
function mul(a,b){
    return a*b;
}
const arrowSum=(a,b) => {
    console.log(a+b)
}
let arrowMul=(a,b) =>{
    //console.log(a*b);
    return a*b;
}
arrowMul=8;
const printHello = () =>{
    console.log("Hello!")
}