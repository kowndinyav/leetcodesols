function alienOrder(words) {
    
    let graph = {}
    let indegree = {}

    // step1: initialize indegree of all the chars/nodes as 0
    for (let word of words) {
        for (let char of word) {
            if (!(char in graph)) {
                graph[char] = [];
                indegree[char] = 0;
            }
        }
    }


    // step2: from adjacent words, prepare neighbours and also increase the indegre
    for (let i=0;i < words.length - 1;i++){
        const w1 = words[i], w2 = words[i + 1];
        let minLen = Math.min(w1.length, w2.length);

        if (w1.length > w2.length && w1.startsWith(w2)) {
            return "";
        }

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                graph[w1[j]].push(w2[j])
                indegree[w2[j]]++
                break
            }
        }
    }


    // 3. topological sort
    
    // 3.1 - push the nodes with zero indegree
    const queue = [];
    for (let char in indegree) {
        if (indegree[char] === 0) queue.push(char);
    }
    

    // 3.2 pick the nodes in queues and traverse

    let result = ""
    while (queue.length > 0){

        // return the char and also remove the item
        let ch = queue.shift()

        result += ch

        for (let neighbor of graph[ch]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    if (result.length < Object.keys(graph).length) {
        return "";
    }

    return result;


}


console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // "wertf"
// console.log(alienOrder(["z","x"])); // "zx"
// console.log(alienOrder(["z","x","z"])); // ""
