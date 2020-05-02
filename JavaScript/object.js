let obj ={
    a:10,
    b:"hello",
    c:true,
    d:{
        e:1212,
        f:"hi"
    }
}
obj.l="hwlll"//to add new property to an obj
console.log(obj.a)
console.log(obj.l)
delete obj.c
console.log(obj)
obj.l="j"//to update value in particular property of obj
console.log(obj)
