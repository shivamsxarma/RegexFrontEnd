
// function add (a,b){
//     return a+b;
// }
// console.log(add (5,5) );

// function oddeven (a){

//     if(a%2==0){
//         console.log("number is even ")
//     }
//     else{
//         console.log("number is odd")
//     }

// }
// console.log(oddeven (10));
// function reversestring(str){
//     let arr = str.split(" ");
//     let i = 0 ; 
//     let j = arr
// }
let num = 53827;
let  max = 0;
while (num > 0){
    let digit = num % 10;
    if (digit > max ){
        max = digit ;
    }
    num = parseInt(num/10);
} 
console.log("largest digit:", max);







