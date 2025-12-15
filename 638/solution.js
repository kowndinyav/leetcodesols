var shoppingOffers = function(price, special, needs) {
    

    function offerApplicable(offerIndex, needs){
        let offer = special[offerIndex]
        for (let i = 0;i < offer.length - 1; i++){
            if( needs[i] - offer[i] < 0){
                // say my need is 5 apples, but offer has 10 apples, then I can't take the offer and offer bing a full set of all items, even if one does not match, I am saying offer is not applicable
                return false
            }
        }
        return true
    }

    function applyOffer(offerIndex, needs){
        let offer = special[offerIndex]
    
        let ret = []
        for (let i = 0;i < needs.length; i++){
            ret.push(needs[i] - offer[i])
        }
        
        // computed remaining needs by subtracting the offered needs from total needs. Also, the final value in the offer array is the total spend for the offer
        return {"needs": ret, "spend": offer[offer.length - 1]}
    }

    function noOfferApplicable(needs){
        
        for (let i = 0; i<special.length;i++){   
            if(offerApplicable(i, needs)){
                return false                
            }
        }
        return true
    }

    function needsLeft(needs){
        for (let i = 0;i<needs.length;i++){
            if(needs[i] > 0){
                return true
            }
        }
        return false
    }

    function needsPrice(needs){
        let sum = 0
        for (let i = 0;i<needs.length;i++){
            sum += needs[i] * price[i]
        }
        return sum
    }

    function cacheKey(needs){
        return needs.join(',')
    }


    let mem = {}

    function solve(needs) {

        if (noOfferApplicable(needs)) {
            // say no offer is applicable, then return the individual needs cost
            return needsPrice(needs)
        }

        let memoizationKey = cacheKey(needs);

        if (mem[memoizationKey]){
            return mem[memoizationKey]
        }
        
        let minCost = needsPrice(needs)  // cost without any special offers

        for (let i = 0; i < special.length; i++) {
            if (offerApplicable(i, needs)) {

                // apply offer
                let offerRes = applyOffer(i, needs)

                // find the total cost
                let cost = offerRes.spend + solve(offerRes.needs)

                // track min cost
                minCost = Math.min(minCost, cost)
            }
        }

        mem[memoizationKey] = minCost
        return minCost
    }

    return solve(needs)

};

