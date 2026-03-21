
// for (var i = 0; i < 3; i++) { 
//   for (let i = 0; i < 2; i++) { 
// 	console.log(i); 
//   } 
// } 
// console.log(i); 

// console.log(typeof func); 
// let func = function() { 
//   return 5; 
// }; 
 
// let x = 10; 
// if (true) { 
//   let x = 20; 
//   console.log(x); 
// } 
// console.log(x); 
// function counter() { 
//   let count = 0; 
//   return function() { 
// 	return ++count; 
//   }; 
// } 
// const increment = counter(); 
// console.log(increment()); 
// console.log(increment()); 
 
 
 
// function testHoisting(param) { 
//   console.log(param); 
//   var param = 20; 
// } 
// testHoisting(10); 
 
// let a = 1; 
// function outer() { 
//   let a = 2; 
//   function inner() { 
// 	console.log(a); 
//   } 
//   inner(); 
// } 
// outer(); 
 
 
// function createCounter() { 
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
 
// const counter = createCounter(); 
// counter.increment(); 
// counter.decrement(); 

// let a = 1; 
// function outerFunc() { 
//   let a = 2; 
//   return function() { 
// 	console.log(a); 
//   }; 
// } 
// let result = outerFunc(); 
// result(); 
 

 
// console.log(test()); 
// function test() { 
//   return 5; 
// } 

 
// function createMultiplier(multiplier) { 
//   return function(num) { 
// 	return num * multiplier; 
//   }; 
// } 
 
// let double = createMultiplier(2); 
// console.log(double(4)); 
 
// var x = 10; 
// if (true) { 
//   let x = 20; 
//   console.log(x); 
// } 
// console.log(x); 
 
// function createCounter() { 
//   let count = 0; 
//   return function() { 
// 	return ++count; 
//   }; 
// } 
 
// let counter = createCounter(); 
// console.log(counter()); 
// console.log(counter()); 

 
// console.log(typeof func); 
// var func = function() { 
//   return 10; 
// }; 
 
 
// function scopeTest() { 
//   console.log(x); 
//   var x = 10; 
// } 
// scopeTest(); 

 
function multiplierFactory(factor) { 
  return function(num) { 
	return num * factor; 
  }; 
} 
let double = multiplierFactory(2); 
console.log(double(5)); 
 
