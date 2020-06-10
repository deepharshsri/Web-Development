function createCounter(initval,delta){
    let val=initval;
    function counter(){
        val=val+delta;
    return val;
    }
    return counter;
}

let fiveCount=createCounter(5,5);
console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());

let anotherCount=createCounter(18,4)
console.log(anotherCount())
console.log(anotherCount())
console.log(anotherCount())
console.log(anotherCount())



