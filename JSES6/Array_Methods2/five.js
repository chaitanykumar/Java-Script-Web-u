let enames=["kumar","rahul","arjun","modi","sai","arun"]
 
//creating new employee names with capital letters -array

let new_Enames=enames.map((ename)=>{
    return (ename.toLocaleUpperCase())
})
console.log(new_Enames);