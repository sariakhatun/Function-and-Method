/**
 * create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
 * using arrow function
 */
function vowels(msg){
    let count=0;
    msg=msg.toLowerCase();
    for(let i=0;i<msg.length;i++){
        if(msg[i]==='a' || msg[i]==='e' || msg[i]==='i' || msg[i]==='o' || msg[i]==='u'){
            count++;

        }
    }
    return count;
    
}
const countVow = (msg) =>{
    let count=0;
    msg=msg.toLowerCase();
    for(let i=0;i<msg.length;i++){
        if(msg[i]==='a' || msg[i]==='e' || msg[i]==='i' || msg[i]==='o' || msg[i]==='u'){
            count++;

        }
    }
    return count;
}