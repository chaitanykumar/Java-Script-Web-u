//Normal Function
function Greet(){
    console.log("Good Evening");
}
Greet();

//Fat Arrow Function

let Greet1 =  (a,b) => { 
    return a+b
    }
    let result =Greet1(7,9);
    console.log(result);

// Implicite Fat Arrow Function

let Greet2 =(a,b)=>a-b;
let r=Greet2(85,52);
console.log(r);
