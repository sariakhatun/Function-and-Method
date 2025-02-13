//print max value in array
let arr = [5,6,45,8,5,85]
let output = arr.reduce((pre,curr) =>{
    /*if(pre>curr){
        return pre;
    }
    else{
        return curr;
    }*/
   return pre>curr ? pre : curr;
})
console.log(output);