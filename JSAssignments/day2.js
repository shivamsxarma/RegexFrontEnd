// var x = 5;
// function scopeTest() {

// const { cacheSignal } = require("react");

//  console.log(x);
//   var x = 10;
// }
// scopeTest();
// undefined
// 3. Closure Inside a Loop

// function createIncrementer() {
//   let count = 0;
//   return function() {
// 	return ++count;
//   };
// }

// let increment = createIncrementer();
// console.log(increment());
// console.log(increment());
// otp 1,2

// 5. Block Scope with Let

// function blockScope() {
//   let x = 10;
//   if (true) {
// 	let x = 20;
// 	console.log(x);
//   }
//   console.log(x);
// }
// blockScope();

// 6. Function Scope and Closures

// function outer() {
//   var outerVar = "outer";
//   return function inner() {
// 	console.log(outerVar);
//   };
// }
// var innerFunc = outer();
// innerFunc();

//output = outer

// 7. Variable Shadowing

// let a = 10;
// function shadow() {
//   let a = 5;
//   console.log(a);
// }
// shadow();
// console.log(a);
//output 5,10

// 8. Closure and Multiple Functions

// function outerFunc() {
//   let count = 0;
//   return {
// 	increment: function() {
//   	count++;
//   	console.log(count);
// 	},
// 	decrement: function() {
//   	count--;
//   	console.log(count);
// 	}
//   };
// }

// let counter = outerFunc();
// counter.increment();
// counter.decrement();
//output 1 , 0

//  9. Lexical Scoping with Functions

// function outerFunc() {
//   let x = 10;
//   function innerFunc() {
//     console.log(x);
//   }
//   return innerFunc;
// }
// let result = outerFunc();
// result();
// console.log(x)
//output-10

// 10. Hoisting with Function Declarations

// function hoistingTest() {
//   console.log(x);
//   var x = 10;
// }
// hoistingTest();

//output-undefined

// 11.Functions and Default Parameters
//

// function add(a = 5, b = a * 2) {
//   return a + b;
// }
// console.log(add(3));
// console.log(add());
// otp-9,15

//  12. Closure with State

// function createCounter() {
//   let count = 0;
//   return function() {
// 	return ++count;
//   };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
//otp-1,2

//  13. Hoisting in Functions

// function testHoist() {
//   console.log(foo);
//   var foo = 10;
// }
// testHoist();

//output-undefined

// 14. Self-Invoking Function with Closure

// (function() {
//   var x = 5;
// })();
// console.log(x);

// ..output error

// 15. Closure and Returning Functions

// function multiplierFactory(factor) {
//   return function(num) {
// 	return num * factor;
//   };
// }
// let double = multiplierFactory(2);
// console.log(double(4));

//output-8

// 16. Block Scope and Let

// let x = 5;
// function checkScope() {
//   let x = 10;
//   console.log(x);
// }
// checkScope();
// console.log(x);

//output-8

//  17. Functions and Parameter Hoisting

// function hoistParam(param) {
//   console.log(param);
//   var param = 20;

// }
// hoistParam(10);

//output 10

// 18. Nested Functions and Scope Chain

// let x = 1;
// function outer() {
//   let x = 2;
//   function inner() {
// 	console.log(x);
//   }
//   inner();
// }
// outer();

//output - 2
// 19. Arguments Object

// function testArgs(a, b, c) {
//   console.log(arguments[0], arguments[1], arguments[2]);
// }
// testArgs(1, 2);

// output - 1 2 undefined

//  20. Variable Shadowing in Blocks

// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

// output-10,5

// 21. Closures and Lexical Scope

// function outer() {
//   let a = 1;
//   function inner() {
// 	console.log(a);
//   }
//   return inner;
// }
// let result = outer();
// result();

//output - 1

// 22. Hoisting in Function Expressions

// console.log(typeof foo);
// var foo = function() {
//   return 5;
// };

//output - undefined

// 23. Function Declaration Hoisting

// function hoistFunc() {
//   console.log(fool());
//   function fool() {
// 	return 10;
//   }
// }
// hoistFunc();
//otp 10

// 24. Closures and Arguments

// function createFunction() {
//   let count = 0;
//   return function() {
// 	return ++count;
//   };
// }

// const increment = createFunction();
// console.log(increment());
// console.log(increment());
// otp - 1,2

// 25. Scope and Variable Shadowing

// let x = 10;
// function checkScope() {
//   let x = 20;
//   console.log(x);
// }
// checkScope();
// console.log(x);
//otp 20 ,10

// 26. Immediate Invocation and Scope

// (function() {
//   var x = 5;
// })();
// console.log(x);
// // otp error x is not defined

// 27. Closures with Nested Functions

// function outerFunction() {
//   var outerVar = "I'm outer";
//   return function innerFunction() {
//     console.log(outerVar);
//   };

// }
// let temp = outerFunction()
// // console.log(temp())
// temp()
// // outerFunction()();

// for (var i = 0; i < 3; i++) { 
//   for (let i = 0; i < 2; i++) { 
// 	console.log(i); 
//   } 
// } 
// console.log(i); 
 
