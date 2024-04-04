class Account{   
    acc_Id;
    acc_Name;
    acc_Bal=0;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;              
    }
    open_Account(){
        console.log("Account opened successfully");
    }
    depAmount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    with_Drawl(){                                                   
        this.acc_Bal=this.acc_Bal-amount
    }
    get_Bal(){
        return this.acc_Bal
    }
    close_account(){}
} 
          
 let a1=new Account(101,"Rahul",6000)
console.log("base money",a1);

a1.depAmount(7000);
console.log("deposited",a1);

// let gb=a1.get_Bal();
// console.log("get balance",gb);

let Rahul=a1.get_Bal();
console.log("get balance",Rahul);