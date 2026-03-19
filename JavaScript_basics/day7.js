// const a = 7;

// function abc (){
//     let a =8;
//     console.log(a)
// }
// abc()

// //lexical scoping 

// function outer1(){
//  b = 10;
//     console.log(b)
//     function inner (){
//         console.log(b)
//     }
//     inner()
// }
// outer();

//

// c = "hii";
// c= 5;
// console.log(typeof(c))
// console.log(b)
// console.log(a)


function outer () {

    function inner1 () {
            d= 10;
        console.log(d)
    }

    function inner2 (){
        console.log(d)

        function inner202(){
         console.log(d)
        }
        inner202()
    }
    function inner3(){
        console.log(d)
    }
inner1()
inner2()

inner3()
}
outer()

let a;
var b;
const c=0;

