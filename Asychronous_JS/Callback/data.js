let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Kumar", sal: 6500 }]

let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 5000)
}
let displayEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                      </tr>`
        })
        document.getElementById("emp_Data").innerHTML=rows

    },2000)
}
createEmployee({id:103,name:"Arun",sal:75000},displayEmployees)
// displayEmployees()