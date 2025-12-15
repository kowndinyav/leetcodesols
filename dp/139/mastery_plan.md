# Word Break - 7-Day Mastery Plan

## Day 1: Understanding (Today)
- ✅ Read both solutions (iterative & recursive)
- ✅ Trace "leetcode" example by hand on paper
- ✅ Understand why dp[0] = true

**Exercise:** Trace through "applepenapple" with dict=["apple","pen"] by hand

## Day 2: Implementation
- Close all files
- Implement bottom-up version from scratch
- If stuck, check solution, then try again
- Goal: Write it correctly without looking

## Day 3: Recursive Practice
- Implement top-down version from scratch
- Add memoization from memory
- Compare with your Day 2 solution

## Day 4: Edge Cases
Test your solution against:
```javascript
wordBreak("", ["a"])              // true
wordBreak("a", [])                // false
wordBreak("cars", ["car","ca","rs"]) // true
wordBreak("aaaaaaa", ["aaaa","aaa"]) // true (test memoization)
```

## Day 5: Variations
Try solving WITHOUT looking at original:
1. Return the actual segmentation (not just true/false)
2. Count number of possible segmentations
3. Find the minimum number of words needed

## Day 6: Explain to Rubber Duck 🦆
Open a blank file and write:
- The problem in your own words
- Why DP is needed (what are overlapping subproblems?)
- The state, base case, transition
- Both approaches and when to use each

## Day 7: Final Test
1. Solve from scratch (both approaches) - no peeking!
2. Explain it out loud as if teaching someone
3. If successful → You've mastered it! 🎉

---

## The "3 Things" You Must Remember

If you forget everything else, remember these 3 things:

### 1. The State
**"Which position/index am I at?"**
- Bottom-up: dp[i] = can I segment first i characters?
- Top-down: canSegment(start) = can I segment from start to end?

### 2. The Question
**"Can I split this somewhere such that both parts are valid?"**
```
|------ left part ------|------ right part ------|
      (already valid)      (word in dictionary)
```

### 3. The Pattern
**Try all possible splits, take the best/valid one**
```javascript
for each possible split point:
    if (left_part_is_valid && right_part_is_word):
        current_position_is_valid = true
```

---

## Quick Reference Card (Print This!)

```
WORD BREAK CHEAT SHEET
═══════════════════════

PATTERN: String Segmentation DP
TIME: O(n² × m), SPACE: O(n)

BOTTOM-UP:
─────────
dp[0] = true
for i in 1..n:
  for j in 0..i:
    if dp[j] and s[j:i] in dict:
      dp[i] = true

TOP-DOWN:
─────────
canSegment(start):
  if start == n: return true
  if memo[start]: return memo[start]
  for end in start+1..n:
    if s[start:end] in dict and canSegment(end):
      return true
  return false

KEY INSIGHTS:
─────────────
• dp[i] = "first i chars segmentable?"
• dp[0] = true (empty string)
• Try ALL split points
• Use Set for O(1) word lookup
• Memoize by position/index
```

---

## When You're Stuck

Ask yourself these debugging questions:

1. **Indices wrong?** → Draw out string with positions 0,1,2...
2. **Not finding solution?** → Is wordDict converted to Set?
3. **Too slow?** → Did you add memoization?
4. **Off-by-one?** → Remember: substring(j, i) is EXCLUSIVE of i
5. **Base case wrong?** → Empty string is always segmentable

---

## Related Problems (Practice Next)

After mastering Word Break, try these in order:

1. **Word Break II** (LC 140) - Return actual segmentations
2. **Concatenated Words** (LC 472) - Words made of other words
3. **Decode Ways** (LC 91) - Similar pattern, different domain
4. **Partition Equal Subset Sum** (LC 416) - Your 2D DP practice

---

## Your Personal Notes

(Add your own insights here as you practice)

- 


