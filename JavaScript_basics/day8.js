//  let  a = 25
// function LocalScope (){
//     console.log(a)
// }
// LocalScope()
//     console.log(a)

//     // function expression
//     const age = function (){
//         console.log(30);
//     }
//     age()

// setTimeout(function(){
//     console.log("hellow");

// }, 2000)

function school(name, age) {
  console.log("Hello " + name);
  age();
}

function hii() {
  console.log("25");
}

school("Shivam", hii)

