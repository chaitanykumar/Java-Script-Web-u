let employees = [{ id: 101, name: "Varma", sal: 55000 },
{ id: 102, name: "Kumar", sal: 75000 }]

let createEmployee = (emp) => {
    console.log("Executing First");
    setTimeout(() => {
        employees.push(emp)
    }, 4000)
    console.log(employees.length);
}
let displayEmployees = () => {
    console.log("Executing Second");
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                       <td>${emp.id}</td>
                       <td>${emp.name}</td>
                       <td>${emp.sal}</td>
                       </tr>`
        }
        document.getElementById("emp_Data").innerHTML=rows
    },2000)
}
// It will not come without callback function 
createEmployee({id:103,name:"Rahul",sal:95000})
displayEmployees()
