let emp={id:101,name:'Kumar',email:'kumar@varma.com'}

//Create new object based on exisiting object 
//In object no duplications are allowed and it will Update an object

let new_emp={...emp}
console.log(new_emp);

//Merge Object

let details={sal:45000,email:'kumar@ibm.com'}
let emp_details={...emp,...details}
console.log(emp_details);
