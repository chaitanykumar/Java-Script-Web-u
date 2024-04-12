class Account{
      min_Bal=500;
      constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
      }
      open_Account(){
        console.log("Account Created Successfully");
      }
      dep_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
      }
      with_drawl(){

      }
}
let a1=new Account()

a1.dep_Amount(amount);
console.log("deposited",a1);