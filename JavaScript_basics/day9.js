// let a = "abc"*25;
// console.log(a)

// let b = Infinity/Infinity;
// console.log(b)

// let c = Infinity*0
// console.log(c)

// let d = 0/0;
// console.log(d)


// let e = Infinity-Infinity;
// console.log(e)

// let f = Math.pow(1,Infinity)
// console.log(f)

// let g = undefined/undefined
// console.log(g)

// let h = Math.pow(0,0)
// console.log(h)

//lexical scope
//  a = 18;
// function outer (){
//     let a = 15;
//     function inner(){
//         let a = 44;
//       console.log(a)
//     }
//     inner()
// }
// outer()

// console.log(host)
// var host = 18;
// console.log(host)


function outer (){
    let count = 0;
   return  function inner(){
    console.log("hellow")
  return count++;
    }
    // inner()
}
// outer()

let res = outer()
console.log(res)

let ans = outer()
console.log(ans)

let ans1 = res();
console.log(ans1)