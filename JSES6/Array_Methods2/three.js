let prices=[98,198,298,398]

//create new Prices values - by adding plus + 1
//forEach doesn't written new array for that we are using map method

let new_Prices=prices.forEach((price)=>{
    return price +1
})
console.log(new_Prices)