let sum=(a,b)=>{
    return a+b
}
let multi=(a,b)=>{
    return a*b
}
let calc=(a,b,callback)=>{
    return callback(a,b)
}
let c1=calc(50,20,sum)
let c2=calc(50,20,multi)
console.log(c1);
console.log(c2);