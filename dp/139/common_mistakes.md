# Word Break - Common Mistakes and Gotchas

## Mistake 1: Forgetting to convert wordDict to Set
```javascript
// ❌ BAD - O(n) lookup each time
if (wordDict.includes(word)) { ... }

// ✅ GOOD - O(1) lookup
const wordSet = new Set(wordDict);
if (wordSet.has(word)) { ... }
```

## Mistake 2: Off-by-one errors in indices

### Bottom-Up Approach
```javascript
// ❌ WRONG - confusion with indices
for (let i = 0; i < s.length; i++) {  // should be i <= s.length
    for (let j = 0; j < i; j++) {
        if (dp[j] && wordSet.has(s.substring(j, i+1))) {  // wrong!
```

```javascript
// ✅ CORRECT - dp array is size s.length + 1
// dp[i] represents: can we segment s[0...i-1]?
for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
        if (dp[j] && wordSet.has(s.substring(j, i))) {
            dp[i] = true;
        }
    }
}
```

**Remember:** `dp` array is length `s.length + 1` because `dp[0]` is the base case (empty string)

## Mistake 3: Not memoizing in recursive solution
```javascript
// ❌ BAD - Exponential time complexity
function canSegment(start) {
    if (start === s.length) return true;
    for (let end = start + 1; end <= s.length; end++) {
        if (wordSet.has(s.substring(start, end)) && canSegment(end)) {
            return true;
        }
    }
    return false;
}
```

```javascript
// ✅ GOOD - With memoization
const memo = new Map();
function canSegment(start) {
    if (start === s.length) return true;
    if (memo.has(start)) return memo.get(start);  // ← Critical!
    
    for (let end = start + 1; end <= s.length; end++) {
        if (wordSet.has(s.substring(start, end)) && canSegment(end)) {
            memo.set(start, true);
            return true;
        }
    }
    memo.set(start, false);
    return false;
}
```

## Mistake 4: Breaking too early in bottom-up
```javascript
// ✅ This is actually GOOD (optimization)
if (dp[j] && wordSet.has(s.substring(j, i))) {
    dp[i] = true;
    break;  // ← This is fine! Once we know dp[i] is true, no need to check more
}
```

## Mistake 5: Wrong base case understanding

**Bottom-Up:**
- `dp[0] = true` means "empty string can be segmented" (vacuously true)
- `dp[i]` means "can we segment s[0...i-1]?" (first i characters)

**Top-Down:**
- `if (start === s.length) return true` means "we've consumed entire string successfully"
- NOT `if (start === 0)` - that would be backwards!

## Mistake 6: Forgetting edge cases
```javascript
// Edge cases to consider:
s = ""           → true (empty string)
s = "a", dict=[] → false (no words available)
s = "a", dict=["a"] → true
s = "aa", dict=["a"] → true (can reuse words!)
```

## Mistake 7: String operations gotchas
```javascript
// JavaScript substring is [start, end) - end is EXCLUSIVE
s.substring(0, 4)  // Returns s[0], s[1], s[2], s[3]

// Example with s = "leetcode"
s.substring(0, 4)  // "leet"
s.substring(4, 8)  // "code"
```

## Practice Checklist

Before you say you've mastered Word Break, can you:

- [ ] Code both bottom-up and top-down from memory?
- [ ] Explain why dp[0] = true without hesitation?
- [ ] Trace through "leetcode" example step by step?
- [ ] Identify the time complexity? O(n² × m) where m = avg word length
- [ ] Handle the edge cases listed above?
- [ ] Convert Set to avoid O(n) lookup?
- [ ] Add memoization to recursive version?
- [ ] Debug an off-by-one error if you see one?

If yes to all → You've mastered it! 🎉
If no to any → Review that section again.

