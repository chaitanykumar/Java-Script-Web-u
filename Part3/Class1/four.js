class Account{
    acc_bal=0;
    dep_amount(number){
        this.acc_bal=this.acc_bal+number;
    }
}


let a1=new Account();
console.log(a1);
a1.dep_amount(500);
a1.dep_amount(1000);
console.log(a1);

let a2=new Account();
console.log(a2);
a2.dep_amount(100);
a2.dep_amount(200);
console.log(a2);