# 📘 2D DP Problem Patterns (D-R-B)

| Problem | **Dimensions (D)** | **Base (B)** | **Recurrence (R)** |
|---------|---------------------|--------------|---------------------|
| **LCS (Longest Common Subsequence)** | `dp[i][j]` = LCS length of first i chars of A, first j chars of B | `dp[0][*] = 0`, `dp[*][0] = 0` | If `A[i-1]==B[j-1]`: `dp[i][j]=dp[i-1][j-1]+1`; else `dp[i][j]=max(dp[i-1][j], dp[i][j-1])` |
| **Edit Distance** | `dp[i][j]` = min ops to convert first i of A → first j of B | `dp[0][j]=j`, `dp[i][0]=i` | If match: `dp[i][j]=dp[i-1][j-1]`; else `1+min(dp[i-1][j] (del), dp[i][j-1] (ins), dp[i-1][j-1] (rep))` |
| **0/1 Knapsack** | `dp[i][W]` = max value using first i items with capacity W | `dp[0][*]=0`, `dp[*][0]=0` | If wt[i] ≤ W: `dp[i][W]=max(dp[i-1][W], val[i]+dp[i-1][W-wt[i]])`; else `dp[i-1][W]` |
| **Unbounded Knapsack / Coin Change (min coins)** | `dp[i][j]` = min coins using first i coin types to make sum j | `dp[0][*]=∞`, `dp[*][0]=0` | If coin[i] ≤ j: `dp[i][j] = min(dp[i-1][j], 1+dp[i][j-coin[i]])`; else `dp[i-1][j]` |
| **Grid Min Path Sum** | `dp[i][j]` = min cost to reach (i,j) | `dp[0][0]=grid[0][0]`; fill first row/col cumulatively | `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])` |
| **Unique Paths in Grid** | `dp[i][j]` = #ways to reach (i,j) | `dp[0][*]=1`, `dp[*][0]=1` | `dp[i][j] = dp[i-1][j] + dp[i][j-1]` |
| **Longest Palindromic Subsequence** | `dp[i][j]` = LPS length in substring [i..j] | `dp[i][i]=1` | If `s[i]==s[j]`: `dp[i][j]=2+dp[i+1][j-1]`; else `max(dp[i+1][j], dp[i][j-1])` |
| **Matrix Chain Multiplication** | `dp[i][j]` = min cost of multiplying matrices i..j | `dp[i][i]=0` | `dp[i][j] = min_{k}( dp[i][k] + dp[k+1][j] + cost(i,k,j) )` |
| **Wildcard / Regex Matching** | `dp[i][j]` = can first i chars of s match first j of pattern | `dp[0][0]=true`; handle `*` in pattern for `dp[0][j]` | If `p[j-1]=='*'`: `dp[i][j]=dp[i][j-1] or dp[i-1][j]`; else if char matches: `dp[i][j]=dp[i-1][j-1]` |

---

### 🔑 Pattern Takeaways
- **Grid-style problems** → indices = `(row, col)`
- **String problems** → indices = `(i, j)` prefixes
- **Knapsack problems** → indices = `(items, capacity/sum)`