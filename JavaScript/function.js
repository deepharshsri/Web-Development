function incr(x){
    return (x+1)
}
let five=incr(4)

console.log(five);
five=incr(true)//ture=1 that's why 1+1=2
console.log(five);
five=incr("Hello")
console.log(five);//anything added to string return string
five=incr(false)//false contain val=0 which on add +1 gives =1
console.log(five);

