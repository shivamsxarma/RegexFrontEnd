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
 
// function outer() { 
//   let x = 10; 
//   return function() { 
// 	return x++; 
//   }; 
// } 
 
// const a = outer(); 
// const b = outer(); 
 
// console.log(a()); 
// console.log(b()); 
// console.log(a()); 
// console.log(b()); 

// 69. Scope Chain in Nested Functions 
 
 
// let a = 1; 
// function outer () { 
//   let b = 2; 
//   function inner() { 
// 	console.log(a, b); 
//   } 
//   inner(); 
// } 
// outer(); 
 
// var a = 15 ;
// function abc(){
//   console.log(a)
// }
// abc()
 
// Question: What will be printed and why? Explain how the scope chain works in nested functions. 
 

// console.log(foo()); 
// var foo = function() { 
//   return 5; 
// }; 

 
// console.log(test()); 
// function test() { 
//   return 5; 
// } 

 
// function outerFunc() { 
//   let count = 0; 
//   return { 
// 	increment: function() { 
//   	count++; 
//   	return count; 
// 	}, 
// 	decrement: function() { 
//   	count--; 
//   	return count; 
// 	} 
//   }; 
// } 
 
// let counter = outerFunc(); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 

// let a = 5; 
// { 
//   let a = 10; 
//   console.log(a); 
// } 
// console.log(a); 
// function outerFunc() { 
//   var x = 10; 
//   function innerFunc() { 
// 	console.log(x); 
//   } 
//   innerFunc(); 
// } 
// outerFunc(); 
 
 
// var a = 10; 
// function testVar() { 
//   var a = 20; 
//   console.log(a); 
// } 
// testVar(); 
// console.log(a); 

// function testScope() { 
//   console.log(x); 
//   var x = 10; 
//   console.log(x); 
// } 
// testScope(); 
 

// let a = 5; 
// function test() { 
//   var a = 10; 
//   console.log(a); 
// } 
// test(); 
// console.log(a); 
 
// for (var i = 0; i < 3; i++) { 
//   let j = i; 
//   console.log(j); 
// } 
// console.log(i); 
// function outer() { 
//   let counter = 0; 
//   return function increment() { 
// 	counter++; 
// 	return counter; 
//   }; 
// } 
 
// let increment1 = outer(); 
// let increment2 = outer(); 
// console.log(increment1()); 
// console.log(increment2()); 
// console.log(increment1()); 
