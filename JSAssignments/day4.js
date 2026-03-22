// function test() { 
//   console.log(foo); 
//   var foo = 10; 
//   function foo() {} 
//   console.log(foo); 
// } 
// test(); 

// var x = 5; 
// function scopeCheck() { 
//   console.log(x); 
//   var x = 10; 
//   console.log(x); 
// } 
// scopeCheck(); 

// function counter() { 
//   counter.count = (counter.count || 0) + 1; 
//   return counter.count; 
// } 
 
// console.log(counter()); 
// console.log(counter()); 
 
// let x = 10; 
// { 
//   let x = 20; 
//   var y = 30; 
// } 
// console.log(x); 
// console.log(y); 


// console.log(hlw()); 
//  function hlw() { 
//   return 10; 
// }; 
 
  
// const a = 5; 
// { 
//   const a = 10; 
//   console.log(a); 
// } 
// console.log(a); 
 

// (function() { 
//   console.log(a); 
//   var a = 10; 
// })(); 
 
function outer() { 
  let x = 10; 
  return function() { 
	return x++; 
  }; 
} 
 
const a = outer(); 
const b = outer(); 
 
console.log(a()); 
console.log(b()); 
console.log(a()); 
console.log(b()); 

