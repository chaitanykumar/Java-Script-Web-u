let employees=[{'id':101,name:"Rahul",sal:45000},{'id':102,name:"Kumar",sal:55000},{'id':103,name:"Arun",sal:65000}]

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag?resolve("Data Inserted"):reject("Failed")
            employees.push(emp)
        },2000)
    })
}
let displayEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(employee of employees){
            rows=rows+`<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.sal}</td> 
            </tr>`
        }
        document.getElementById("emp_data").innerHTML=rows
    },2000)
}
let exec=async ()=>{
    await createEmployee({'id':104,'name':"Modi",'sal':85000})
    displayEmployee()
}
exec()

