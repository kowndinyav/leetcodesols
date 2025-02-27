function maxProfit(a){

    let minBuy = a[0]
    let maxProfit = 0
    
    for(let i = 0;i<a.length;i++){
        let profit = a[i] - minBuy
        minBuy = Math.min(minBuy, a[i])
        maxProfit = Math.max(profit, maxProfit)
    }

    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))