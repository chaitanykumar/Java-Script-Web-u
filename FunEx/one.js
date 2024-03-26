function wish(){
    console.log("Hello,Good Night");
    return "Hello,Good Morning" // To return the the particular value of function and the return statement should be last statement of the function -code after the return statement won't be accessible
    console.log("Hello, Good Night"); // after the return statement if we will write that is unreachable statement
}
let message=wish();// holding the value
console.log(message);// Printing the value