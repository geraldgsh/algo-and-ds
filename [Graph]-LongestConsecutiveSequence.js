/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums === null || nums === 0) {
        return 0;
    }
    let longest = 0
    let set = new Set(nums)
    for (let num of nums) {
        set.add(num)
    }    
    for (let num of set) {
        if(!set.has(num-1)) {
            let curr = num;
            let count = 0;
            while (set.has(curr++)) {
                count++;
            }
            longest = Math.max(longest, count)        }
    }
    return longest
};

let nums = [100,4,200,1,3,2];