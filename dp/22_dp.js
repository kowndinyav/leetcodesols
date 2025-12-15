var generateParenthesis = function(n) {

    // a 2D array
    // dp[0] - [""]
    // dp[1] - ["()"]
    // dp[2] - ["()()", "(())"]
    // ...
    let dp = Array.from({length: n+1}, () => [])

    // D - B - R - I
    // (D) Dimensions: here i is the dimension and it represents the array of all possible combinations
    // (B) Base case: dp[0] = ""
    // (R) Recurrence relation: (dp[i])dp[n-i-1]
    // (I) Intuition: "(" <Inside> a valid sequence ")" "<Outside> a valid sequence"

    dp[0] = [""]

    for (let i = 1; i <= n; i++){
        for (let j=0; j < i; j++){
            for (const inside of dp[j]) {
                for (const outside of dp[i - 1 - j]) {
                    dp[i].push("(" + inside + ")" + outside);
                }
            }
        }
    }

    return dp[n]
 
};

console.log(generateParenthesis(3))
