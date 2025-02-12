// function sum(x,y){
//     console.log(x+y);
// }
// sum(5,6);
function sum(x,y){
    s=x+y;
    console.log("before return");
    return s;
    console.log("after return");//this line is not executed

}
let val = sum(4,5);
console.log(val)