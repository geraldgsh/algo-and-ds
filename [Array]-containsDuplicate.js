/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Brute force

var containsDuplicate = function(nums) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = x+1; y < nums.length; y++) {
            if (nums[y] == nums[x]) {
                return true;
            }            
        }
    }
    return false
};


// Binary

var containsDuplicate = function(nums) {
    return new Set(nums).size ^ nums.length   
};

// Sorting

var containsDuplicate = function(nums) {
    nums.sort()
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] == nums[x+1]) {
            return true;        
        }
    }
    return false
};

// Hast set

var containsDuplicate = function(nums) {
    let data = new Set()
    for (let num of nums) {
        if (data.has(num)) {
            return true
        }
        data.add(num)
    }
    return false
};

var containsDuplicate = function(nums) {
	return nums.length === new Set(nums).size ? false : true;
};

var containsDuplicate = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true
        }
        hash[nums[i]] = 1
    }
    return false;
};

let nums = [1,2,3,1];
let nums = [1,2,3,4];
let nums = [1,1,1,3,3,4,3,2,4,2];