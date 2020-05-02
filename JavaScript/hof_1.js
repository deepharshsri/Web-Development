// function add(x , y){
//     return x+y;
// }
// // let sum=add(4,5)
// let sum=add
// console.log(sum)
function getFirstName(fullname){
 let firstname= fullname.split(" ")[1];
  return firstname
}
// console.log(getFirstName("Deepansh->Srivastava"))
function greeter(findname,fullname){
   let val=findname(fullname)
       console.log("Hello "+val)

}
greeter(getFirstName,"Deepansh Srivastava")
