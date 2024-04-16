let goToTour = (success, failure) => {
    let acc_Bal = 15000
    if (acc_Bal < 35000) {
        success("Go and Enjoy");
    }
    else {
        failure("Go to Class");
    }
}
goToTour((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
})