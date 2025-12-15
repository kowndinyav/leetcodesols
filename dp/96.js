var numTrees = function(n) {
    // dp[i] = number of unique BSTs with i nodes
    let dp = new Array(n + 1).fill(0);

    // Base case: empty tree
    dp[0] = 1;

    // Fill DP table from 1 to n nodes
    for (let i = 1; i <= n; i++) {
        dp[i] += dp[j - 1] * dp[i - j];
    }

    return dp[n];
};

