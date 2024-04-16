//Promise
let employees = [{ id: 101, name: "Rahul", sal: 4500 },
{ id: 102, name: "kumar", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag?resolve("Data Inserted!") : reject("Failed!")
            employees.push(emp)
        }, 4000)
    })

}
let displayEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td> 
                        </tr>`
        }
        document.getElementById("table_body_data").innerHTML=rows
    },3000)
}
createEmployee({id:103,name:"Arun",sal:75000})
.then((msg)=>{
    console.log(msg);
    displayEmployees()
})
.catch((err)=>{
    console.log(err);
})