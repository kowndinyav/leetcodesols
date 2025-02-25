## Pattern
N/A

## Difficulty
Easy, but O(N) time and O(1) is medium/difficult

## Problem
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

## Examples
Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

## Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

## Insights
- If we use two nested loops, time complexity = O(n*n), space complexity O(1)
- If we use sorting, time complexity = O(n*logn), space complexity O(1)
- If we use Hashmap, time complexity = O(n), space complexity is O(n)
- If we use Moore's voting algorithm, time complexity = O(n), space complexity is O(1). An interesting aspect of Moore's voting algorithm is, 
    - If majority element exists, it works fine
    - If majority element does not exist, then an additional validation step is necessary

