// function empobj(...rest){
//     return { 
//         Firstname,
//         lastname,
//         DOJ,


//     }
 
// }
//    let emp1 =  empobj('"shivam"',"setDefaultHighWaterMark","9900")
//     console.log(emp1)

let emp = {
    firstname:"shivam",
    lastname:"sharma",
    age:23,
    getdata:function(){
        console.log(this.firstname)
    }
}
getdata()