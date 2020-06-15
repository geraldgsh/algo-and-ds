/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    return maxProfit;
};

let prices = [7,1,5,3,6,4];
let prices = [7,6,4,3,1];
