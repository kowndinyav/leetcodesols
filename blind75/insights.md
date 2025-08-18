
## count of palindromes:
- there are palindromes that are of even length and odd length
- approach 
    -> expandFromCenter - taking (i) as center
    -> expandFromCenter2 - taking (i, i+1) as center
- n characters having (2n-1) centers

## sorted + rotated array search
- There are two sorted portions in the array
- if you know that MID lies which portion, you can make an educated guess on where the target could be
    
    - If MID > LEFT (LSA))
        IF LEFT < TARGET < MID
            RIGHT = MID - 1
        ELSE:
            LEFT = MID + 1
            
    - ELSE (RSA)
        IF MID < TARGET < RIGHT
            LEFT = MID + 1
        ELSE
            RIGHT = MID - 1

- boundary conditions [l, m) and (m, r] which means, 
    - left half, L is inclusive and M is excluded
    - right half, m is inclusive and r is excluded. pretty much in right half, m becomes L in the next iteration and so it is included

## removal of nth node from end
- trick is to add one dummy node before head to avoid the complex conditions
- move the first pointer by n+1 nodes instead of n because of dummy node

## Count bits (dp problem)
- O(n logN) 
    - not a dp problem 
    - for every number, find bits using >> operator (log N time for every number)

- O(n) solution requires insight
    - dp[i] = 1 + dp[i - offset] where offset is prev pow(2,n)


## longest sequence unsorted array

### snake head detection and follow till tail

1. This is a pattern called "sequence start detection" or another interesting analogy called finding "Snake header and follow till tail"

Input: nums = [100,4,200,1,3,2]

1   ✅ head (no 0 in set)
2   ❌ has 1 before it
3   ❌ has 2 before it
4   ❌ has 3 before it
100 ✅ head (no 99 in set)
200 ✅ head (no 199 in set)

Algorithm
- Create a hashset with numbers
- start iteration
    - if hashset.has(curr - 1) -> not a head, so continue
    - else, it is head -> loop until curr + 1 is present in the hashset and keep track of seq length



## combinations for a given sum (Leetcode 39)

- to avoid duplicate solutions, for loop should be starting from (START) and not (0) always

    CORRECT: for (let i = START;i< n ; i++)
    WRONG: for (let i = 0;i< n ; i++)

- solution array must be popped after the function call
    sol.push(candidates[i])
        solve(i, target - candidates[i], sol)
    sol.pop()

- create a clone/copy of the array at the time of pushing the solution array into final list
    [...sol]
