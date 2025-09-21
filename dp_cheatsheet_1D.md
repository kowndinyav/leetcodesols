# 📗 1D DP Problem Patterns (D-R-B)

| Problem | **Dimension (D)** | **Base (B)** | **Recurrence (R)** |
|---------|-------------------|--------------|---------------------|
| **Fibonacci** | `dp[i]` = ith Fibonacci number | `dp[0]=0`, `dp[1]=1` | `dp[i] = dp[i-1] + dp[i-2]` |
| **Climbing Stairs** | `dp[i]` = ways to reach step i | `dp[0]=1`, `dp[1]=1` | `dp[i] = dp[i-1] + dp[i-2]` |
| **House Robber** | `dp[i]` = max money robbed up to i-th house | `dp[0]=nums[0]`, `dp[1]=max(nums[0], nums[1])` | `dp[i]=max(dp[i-1], nums[i]+dp[i-2])` |
| **Max Subarray (Kadane)** | `dp[i]` = max sum subarray ending at i | `dp[0]=nums[0]` | `dp[i] = max(nums[i], nums[i]+dp[i-1])` |
| **Partition Equal Subset Sum** | `dp[s]` = true if subset sum `s` achievable | `dp[0]=true` | For each num: update backwards → `dp[s] = dp[s] or dp[s-num]` |
| **Coin Change (min coins)** | `dp[amt]` = min coins to form amount | `dp[0]=0`, rest = ∞ | `dp[a] = min(dp[a], 1 + dp[a-coin]) for coin ≤ a` |
| **Coin Change 2 (#ways)** | `dp[amt]` = number of ways to form amt | `dp[0]=1` | For each coin: `dp[a] += dp[a-coin]` |
| **Perfect Squares** | `dp[n]` = min #squares summing to n | `dp[0]=0` | `dp[i]=1+min(dp[i-sq]) for sq ≤ i` |
| **Word Break** | `dp[i]` = true if s[0..i] can be segmented | `dp[0]=true` | `dp[i]=true if ∃j<i with dp[j] and s[j..i] in dict` |
| **Decoding Ways** | `dp[i]` = #ways to decode first i chars | `dp[0]=1`, `dp[1]=1 if s[0]≠'0'` | If valid single: `dp[i]+=dp[i-1]`; if valid double: `dp[i]+=dp[i-2]` |
| **Longest Increasing Subsequence (LIS)** | `dp[i]` = LIS ending at i | `dp[i]=1` | `dp[i] = 1+max(dp[j]) for j<i and nums[j]<nums[i]` |
| **Jump Game I** | `dp[i]` = true if index i reachable | `dp[0]=true` | `dp[i]=true if ∃j<i with dp[j] and j+nums[j]≥i` |
| **Jump Game II (min jumps)** | `dp[i]` = min jumps to reach i | `dp[0]=0` | `dp[i]=min(dp[j]+1)` for j<i with j+nums[j]≥i |

---

### 🔑 Pattern Takeaways
- **Fibo-type** → depends on last 2 states  
- **Path-counting** → sum over previous valid states  
- **Subset/knapsack style** → iterate over numbers, update dp array  
- **String parsing** → dp[i] depends on valid previous partitions  
- **Greedy + DP (Kadane/Jump)** → transition often simplified  