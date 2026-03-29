// Best time to buy and sell stcok

let prices = [7, 1, 5, 3, 6, 4];
Output: 5;

// Step 1 : Brute force

function BestTimeStock(prices) {
  if (prices.length === 0) return;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }
  return maxProfit;
}

console.log(BestTimeStock(prices));

// Step 2 : One Pass (Min Price Tracking) → ⭐ BEST

function BestTimeStock(prices) {
  if (prices.length === 0) return;

  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

console.log(BestTimeStock(prices));

// Step 3 : With 

function BestTimeStock(prices) {
  if (prices.length === 0) return;

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;

    maxProfit = Math.max(profit, maxProfit);

    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}

console.log(BestTimeStock(prices));
