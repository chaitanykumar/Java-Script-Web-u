class Account{
    create_account(){
        console.log("Account Created Sucessfully!!!");
    }
    check_balance(){
        console.log("Server busy");
    }
    close_account(){
        console.log("account closed");
    }
}
let c1=new Account();
c1.create_account();
c1.check_balance();
c1.close_account();