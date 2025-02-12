/**
 * for a given string tell me whether it has even number of characters or not
 */
function even_string(msg){
    let count=0;
    
    for(let i=0;i<msg.length;i++){
        count++;
    }
    if(count%2===0){
        console.log("has even numbers of characters")
    }
    else{
        console.log("has odd numbers of characters")
    }
}
even_string("Saria Khatun")
