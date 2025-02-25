##  LC#169 - Majority element (Moore's Voting)

Follow the steps below to solve the given problem:

- Initialize a candidate variable and a count variable.
- Traverse the array once:
    - If count is zero, set the candidate to the current element and set count to one.
    - If the current element equals the candidate, increment count.
    - If the current element differs from the candidate, decrement count.
- Traverse the array again to count the occurrences of the candidate.
- If the candidate‘s count is greater than n / 2, return the candidate as the majority element.

**Note**
<br>
When we use Moore's voting algorithm, time complexity = O(n), space complexity is O(1). An interesting aspect of Moore's voting algorithm is, 
    - If majority element exists, it works fine
    - If majority element does not exist, then an additional validation step is necessary

## LC#189 - Rotation of array elements
Solution is to do the 3 steps where is k is number of rotations
- reverse the array
- reverse the first k elements
- reverse last n-k elements

## LC#122 - Best Time to Buy and Sell Stock II
Best case scenario for getting maximum profit by holding only one at a time is sell if there is profit between point A and point B and add all the profits


