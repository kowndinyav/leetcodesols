
var WordDictionary = function() {
    this.dict = []

    this.countIndex = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.dict.push(word)

    let key = word.length

    if(!this.countIndex.has(key)){
        this.countIndex.set(key, [])
    }

    this.countIndex.get(key).push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    let alpha = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));


    let targetArray = this.countIndex.get(word.length)

    if(targetArray == undefined){
        return false
    }

    if(word.indexOf(".") >= 0){

        for(w of targetArray){

            
            if(w.length == word.length){

                let i = 0
                for ( i = 0; i < w.length; i++){
                    if(w[i] != word[i] && word[i] != '.'){
                        ret = false
                        break
                    }
                }

                if(i == w.length){
                    return true
                }
            }

        }

        return false

    }else{
        for(w of targetArray){
            if (w.length == word.length && w == word){
                return true
            }
        }
    }

    

    return false

};


// let wordDictionary = new WordDictionary();
// wordDictionary.addWord("at");
// wordDictionary.addWord("and");
// wordDictionary.addWord("add");

// console.log(wordDictionary.search("a"))
// console.log(wordDictionary.search(".at"))

// wordDictionary.addWord("bat");

// console.log(wordDictionary.search(".at"))
