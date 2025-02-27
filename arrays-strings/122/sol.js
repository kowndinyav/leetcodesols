function maxProfit(a){
    
    let profit = 0
    
    for (let i=0;i<a.length-1;i++){
        let p = a[i+1] - a[i]
        if(p>0){
            profit += p
        }
    }
    
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))