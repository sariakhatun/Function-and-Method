let arr = [1,2,3,4,5]
// arr.forEach(function sqr(val){
//     console.log(val*val);
// })
// another way 
/*arr.forEach((val)=>{
    console.log(val*val);
})*/
// another way
let calcSquare = (val) =>{
    console.log(val*val);
}
arr.forEach(calcSquare);