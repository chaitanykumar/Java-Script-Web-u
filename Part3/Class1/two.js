class Account{
    acc_id;
    acc_name;
    acc_bal;
    open_account(){
        console.log("Account opened sucessfully");
    }
    deposit_ammount(){
        console.log("Ammount deposit sucessfully");
    }
    with_drawl(){
        console.log("Insufficent balance");
    }
    check_balance(){
        console.log("Server Busy");
    }
}
let a1=new Account();
a1.open_account();
a1.deposit_ammount();
a1.with_drawl();
a1.check_balance();