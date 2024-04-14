// What is spread operator?
//Extract and Copy
// Spread Operator Expression is ...

// Applicable for arrays and objects.

// 1.Create new arrays
// 2.Merge array
// 3.extending array

let a=[10,20,30]
let b=[750,900,805]
let c=[...a,...b]
console.log(c);

let enames=['Rahul','Varma','Kumar']
let new_enames=[...enames,"Arun","Charan"]
console.log(new_enames);
