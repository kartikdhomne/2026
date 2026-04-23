let arr = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit(arr));

// OR

function maxProfitAlternative(prices) {
    let maxProfit = 0;
    let minPrice = prices[0]

    for (let sell = 1; sell < prices.length; sell++) {
        let sellPrice = prices[sell]
        let profit = sellPrice - minPrice
        maxProfit = Math.max(maxProfit, profit)
        if (sellPrice < minPrice) minPrice = sellPrice
    }
    return maxProfit;
};