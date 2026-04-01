// rest 
// function student (){
//    console.log(arguments)
// }

// student("shivam", "yash", "lakshay")


// function student (...name){
//    console.log(name)
// }

// student("shivam", "yash", "lakshay")

function addNum (a,b,c, ...others){
    console.log(others)
    return a+b+c;
}
const result = addNum(2,3,4,5,6,7,8)
console.log(result)


//spread 

var names = ["shivam","ajay","ayush", "akshay"]
function getNames(name1,name2,name3,name4){
    console.log(name1,name2,name3,name4)
}
getNames(names)
// getNames(...names)
// getNames(names[0],names[1])

var account = {
    name:"shivam",
    age:28,
    hobbies:["cricket", "singing"]
}
// const age=account.age;
const {...rest}=account 
console.log(rest)