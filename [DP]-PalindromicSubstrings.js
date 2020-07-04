/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
        for (let i = j; i < j + 2; i++) {
            let first = j;
            let second = i;
            while (first >= 0 && second < s.length && s[first] === s[second]) {
                count++;
                first--;
                second++;
            }
        }        
    }
    return count
};

let s = [a,b,c]