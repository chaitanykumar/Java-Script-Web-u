function greet(name,callback){
console.log(`Hello,${name}!`);
callback();
}
function wish(){
    console.log('callback function Executed!');
}
greet('Rahul',wish);