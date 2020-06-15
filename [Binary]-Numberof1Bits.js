/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while (n != 0) {
        count++;
        n &= (n-1);
    }
    return count;
};

let n = 00000000000000000000000000001011

// 001011
// count += 1
// 000011
// count += 1
// 000001
// count += 1
// 000000

// return count =  3

// 0 & 1 = 0