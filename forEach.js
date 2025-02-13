let arr = [1,2,3,4,5]
a = ["pune", "delhi","mumbai"]
arr.forEach(function printVal(val){//each value at each index
    console.log(val);
})
console.log("--------------------")
a.forEach((val,i,a) => {
    console.log(val,i,a)
})