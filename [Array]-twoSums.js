/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute Force Method

var twoSum = function(nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if (y != x && nums[y] + nums[x] === target) {
                return [x , y];
            }
        }
    }
};

//Hash Table Method

var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let diff = target - curr;
        const index2 = hash[diff];
        if (index2 != undefined) {
            return [index2, i];
        } else {
            hash[curr] = i;
        }
    }
};

let nums = [2,7,11,15];
let target = 9;
