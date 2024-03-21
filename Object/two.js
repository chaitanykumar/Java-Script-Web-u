

// let a={} // empty object
// let emp={
//     id:101,
//     name:'rahul'
// }

// console.log(a);
// console.log(emp);

//array create (values) and array read

let col=["red","blue","green","black"]
//indexing  0     1       2       3
console.log(col); //print array with square bracket
console.log(col[2]); //print using indexing 
for(co of col){
    console.log(co);//print with (for of) loop
}

//object create (Property :keys & values)and object read
// let Colors={
//     id:'101',
//     name:'blue',
//     colorcode:'54565',
//     crange:'67',
//     owner:'chaitanya',
// }
// console.log(Colors);// key & value with flower bracket
// for(key in Colors){
//     console.log(key);// output only key 
//     console.log(Colors[key]);// output only value ,print with (for in) loop
// }


//OBJECT create (properties and values)and object read
let colors={
    id:'102',
    color:'green',
    colorcode:'548899',
    crange:'999'
    
}

console.log('colors');
for(key in colors){
    console.log(key);//output
    console.log(colors[key]);
}