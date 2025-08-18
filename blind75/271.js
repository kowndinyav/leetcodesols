var encode = function(strs) {

    let encodedStr = ""
    let PREFIX_SIZE = 3

    for (let s of strs){
        let len = s.length

        let lenPaddedString = "" + len
        lenPaddedString = lenPaddedString.padStart(PREFIX_SIZE, "0")

        encodedStr += (lenPaddedString + s)
    }

    return encodedStr
    
};

var decode = function(s) {
    
    let PREFIX_SIZE = 3
    let start = 0
    let end = start + PREFIX_SIZE
    let strs = []

    while (start < s.length){
        let lenstr = s.substring(start, end)
        let len = parseInt(lenstr)

        let str = s.substring(end, end+len)
        strs.push(str)

        start += (PREFIX_SIZE + len)
        end = start+PREFIX_SIZE
    }

    return strs

};


let encodedStr = encode(["Hello","World"])
console.log(encodedStr)

let decodedStrs = decode(encodedStr)
console.log(decodedStrs)
