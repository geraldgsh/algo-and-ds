var threeSum = function(nums) {
    const sets = [];
    nums = nums.sort((a,b) => a-b)
    for (let x = 0; x < nums.length - 2; x++) {
        for (let y = x + 1; y < nums.length - 1; y++) {
            for (let z = y + 1; z < nums.length; z++) {
                const a = nums[x];
                const b = nums[y];
                const c = nums[z];
                const set = [a, b, c];
                if (a + b + c === 0 && sets.indexOf(set) === -1) {
                    sets.push(set)
                }
            }
        }
    }
    return sets;
};

let nums = [-1, 0, 1, 2, -1, -4]; 