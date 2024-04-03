class Bank{
   balance=0;
   new_balance(amount){
   this.balance=this.balance+amount

   }
}
let rahul=new Bank();
rahul.new_balance(35000);
console.log("Rahul Balance is",rahul);
let sonia=new Bank();
sonia.new_balance(55000);
console.log("sonia balance is",sonia);
let arjun=new Bank();
arjun.new_balance(85000);
console.log("arjun balance is ",arjun);