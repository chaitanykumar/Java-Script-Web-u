let calc=(a,b,result)=>{
    if(result == "sum"){
        return a+b
    }
    if(result == "multi"){
        return a*b
    }
}
let r1=calc(40,30,"sum")
let r2=calc(40,30,"multi")
console.log(r1);
console.log(r2);
