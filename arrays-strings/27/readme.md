## Pattern
Two Pointer

## Difficulty
Easy

## Problem
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

## Examples

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).


Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).


## Characteristic
If you look at the expected outcome, it like below

[NON-TARGET-VALUES, TARGET-VALUES]
input=[3,2,2,3], val = 3
[2,2, (LHS)  3,3 (RHS)]

input = [0,1,2,2,3,0,4,2], val = 2
[  0,1,4,0,3, (LHS)  2,2,2 (RHS)]


There is a clear demarkation of what is on LHS and what is on RHS. This could be a hint for us to think of the problem as Two Pointer of L-R pointer

## Own words
- Take a left pointer L that points to the first TARGET value to be removed starting from LHS
- Take a right pointer R that points to first non TARGET value from RHS
- Swap (L,R)
- Repeat till L < R
- Finally return the L as it represents the position of END OF DUPLICATES in the array



