
var Trie = function() {

    this.root = {}
    this.root.val = "ROOT"
    this.root.children = []
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    let node = this.root
    
    for (char of word){
        
        let found = false
        
        for (let childNode of node.children){
            if(childNode.val == char){
                found = true
                node = childNode
            }
        }
        
        if(!found){
            // reached a level where the char is not found
            let childNode = {"val": char, "children": []}
            node.children.push(childNode)
            node = childNode
        }
    }
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root

    for (char of word){
        
        let found = false
        
        for (let childNode of node.children){
            if(childNode.val == char){
                found = true
                node = childNode
            }
        }
        
        if(!found){
            return false
        }
    }

    return node.children.length == 0
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root

    for (char of prefix){
        
        let found = false
        
        for (let childNode of node.children){
            if(childNode.val == char){
                found = true
                node = childNode
            }
        }
        
        if(!found){
            return false
        }
    }

    return true
};

var obj = new Trie()
obj.insert("apple")
console.log(obj.search("apple"))
console.log(obj.search("app"))
console.log(obj.startsWith("app"))


 