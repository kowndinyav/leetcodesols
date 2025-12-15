// Edit distance
var minDistance = function(word1, word2) {

    /*

        D

        ----------------------------------------
        Base case
        ----------------------------------------
        dp[0][*] = 1 (tranform s1)

        ----------------------------------------
        Recurrence Relation (Definition of DP)
        ----------------------------------------
        dp[i][j] = dp[i+1][j+1] when s[i] == s[j]

        dp[i][j] =  min {
                        1 + dp[i][j+1] when insert (insertion happens at i-1, so i remains as is)
                        1 + dp[i+1][j] when delete
                        1 + dp[i+1][j+1] when update
                    }

*/

    let m = word1.length
    let n = word2.length
    
    let dp = Array.from ({length: m + 1}, () => new Array(n + 1).fill(0))
    
    // Base case

    // number of deletions to transform word1 to {} uptil i i.e, 0->i
    for (let i = 0; i <= m; i++) dp[i][0] = i;

    // number of insertions to transform {} to word2 uptil j i.e, 0->j
    for (let j = 0; j <= n; j++) dp[0][j] = j;



    // Recurrence
    for (let i=1; i<=m; i++ ){
        for (let j=1; j<=n; j++ ){

            if (word1[i] == word2[j]){
                dp[i][j] = dp[i-1][j-1]
            }else{

                let insertDp = 1 + dp[i][j-1]
                let deleteDp = 1 + dp[i-1][j]
                let updateDp = 1 + dp[i-1][j-1]

                dp[i][j] = Math.min (insertDp, deleteDp, updateDp)
            }
        }
    }

    return dp[m][n]

};

