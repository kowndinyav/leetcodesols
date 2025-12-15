function numDecodings(s) {


    function isValid(str){
        if (str[0] == "0"){
            return false
        }
        
        let num = parseInt(str)
        return num>=1 && num <= 26
    }
    
    function decode(i) {
        // Base case: what if we've processed the entire string?
        if (i == s.length){
            return 1
        }
        
        // Try taking 1 digit
        let ways1 = 0
        if (isValid(s[i])){
            ways1 = decode(i+1)
        }
        
        
        // Try taking 2 digits
        let ways2 = 0
        if (isValid(s.slice(i, i+2))){
            ways2 = decode(i+2)
        }
        
        // Return total ways
        return ways1 + ways2

    }
    
    return decode(0);
}