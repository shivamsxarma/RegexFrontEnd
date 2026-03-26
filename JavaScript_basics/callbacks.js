// function outer (){
//     // console.log(a)
//     return function inner (){
//         let a = 1;

//     }
// }

// outer()
// const payment = function(){
//     console.log("hlww")
// }
// let payment1=payment;
// payment ()

// function multiplication (value ){
// return function (num){
//     return num * value;
    
// };
// } ;
// let ans = multiplication(4)(5)
// console.log(num)                

//callback : function accepcting another function as an argument  are called an call back function

// or is chij ko higher order function kehte haii 

//Calculator Example of call back function 
// sum mul divide
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return b - a;
}
function Calculator(a, b, operation) {
  return operation(a, b);
}
let res1 = Calculator(3, 5, sum);
console.log(res1);

let res2 = Calculator(4, 3, sub);
console.log(res2);
