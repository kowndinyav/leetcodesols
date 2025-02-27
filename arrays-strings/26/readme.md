## Pattern
Two Pointer (L-R Pointer)

## Difficulty
Easy

## Problem
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

## Examples

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

## Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

## Characteristic
If you look at the expected outcome, it like below

[Non-Duplicates, Duplicates]
[LHS, RHS]

There is a clear demarkation of what is on LHS and what is on RHS. This could be a hint for us to think of the problem as Two Pointer of L-R pointer

# Own words
- L+1 represents the slot in which next non-duplicate can come and sit
- R represents the next non-duplcicate position

- Start L, R at 0
- Move R such that a[L] != a[R]. It means that now we have R at position where a next non-duplicate is present
- a[L+1] = a[R] - This step is to move the next non-duplicate to the next available slot
- L++ - move the slot by one for next steps
- Repeat from step 2
