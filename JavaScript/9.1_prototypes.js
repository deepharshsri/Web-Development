let p={
   a:10
}
p.prototype.f=10;
let q=Object.create(p)
q.b=20


let r=Object.create(q)
r.c=30

console.log(p)
console.log(q)
console.log(r)
console.log(r.c)
console.log(r.a)
console.log(r.b)
console.log(r.__proto__.__proto__==p) // true
console.log(r.__proto__==q) // true


