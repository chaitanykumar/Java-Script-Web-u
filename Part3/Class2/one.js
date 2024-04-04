class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
}
let a1=new Account(101,"Rahul",35000)
let a2=new Account(102,"Arjun",55000)
let a3=new Account(103,"Sunil",75000)
let a4=new Account(104,"Rajini",95000)

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);