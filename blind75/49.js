/*

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]


*/

var groupAnagrams = function(strs) {

    function sortCharactersInString(str) {
        // Convert the string to an array of characters
        const charArray = str.split('');
      
        // Sort the array of characters alphabetically
        charArray.sort();
      
        // Join the sorted array back into a string
        const sortedString = charArray.join('');
      
        return sortedString;
      }
  
    // sort each word
    // create a map and key should be the sorted word and value should be array of matching indices

    let clonedStrs = []
    for (let i = 0;i < strs.length; i++){
        clonedStrs.push(sortCharactersInString(strs[i]))
    }

    console.log(clonedStrs)

    let mm = new Map()
    for (let i = 0;i < clonedStrs.length; i++){
        if(mm.get(clonedStrs[i]) == undefined){
            mm.set(clonedStrs[i], [])
        }
        mm.get(clonedStrs[i]).push(i)
    }

    let res = []
    for (key of mm.keys()){
        let indices = mm.get(key)

        let group = []
        for (let i =0;i<indices.length;i++){
            group.push(strs[indices[i]])
        }

        res.push(group)
    }

    return res
    
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))