// console.log("hellow")
// closures
 function outer(){
count = 0;
return function inner (){
    
    count++;
    return count ;
}
}

const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// console.log(typeof  )