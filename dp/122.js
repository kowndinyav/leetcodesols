
var maxProfit = function(prices) {

    let N = prices.length
    
    let leftMin = []
    leftMin.push(prices[0])
    for (let i = 1; i < N; i++){
        leftMin.push(Math.min(leftMin[i-1], prices[i]))
    }

    let firsSellProfit = []
    firsSellProfit.push(0)
    let leftProfit = 0
    for (let i = 1; i < N; i++){
        leftProfit = Math.max(leftProfit, prices[i] - leftMin[i])
        firsSellProfit.push(leftProfit)
    }

    let max = 0

    for(let i = 0; i < N;i++){        
        let leftMinIJ = prices[i]

        for(let j = i+1; j < N;j++){
            leftMinIJ = Math.min(leftMinIJ, prices[j])
            max = Math.max(firsSellProfit[i] + (prices[j] - leftMinIJ), max)
        }
    }

    return max
};


// console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([3,3,5,0,0,3,1,4]))

