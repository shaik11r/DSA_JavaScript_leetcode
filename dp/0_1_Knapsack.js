let weights = [1, 3, 4,5];
let values = [1, 4, 5,7];
let capacity = 7;
let x = weights.length;
let memo=[];
console.log(findmaxprofit(weights, x - 1, values, capacity));
function findmaxprofit(weights, index, values, capacity) {
  if (capacity == 0 || index <0) {
    return 0;
  }
  if (weights[index] > capacity) {
    return findmaxprofit(weights, index - 1, values, capacity);
  }
  const take = values[index] +findmaxprofit(weights, index - 1, values, capacity - weights[index]);
  const notake = findmaxprofit(weights, index - 1, values, capacity);
  return Math.max(take, notake);
}

for (let i = 0; i < x; i++) {
  memo[i] = [];
}
console.log(memo)
console.log(findmaxprofit1(weights, x - 1, values, capacity));
console.log(memo);
function findmaxprofit1(weights, index, values, capacity) {
  if (capacity === 0 || index === 0) {
    return 0;
  }

  if (memo[index][capacity]) {
    return memo[index][capacity];
  }

  if (weights[index] > capacity) {
    memo[index][capacity] = findmaxprofit1(weights, index - 1, values, capacity);
  } else {
    const take = values[index] + findmaxprofit1(weights, index - 1, values, capacity - weights[index]);
    const notake = findmaxprofit1(weights, index - 1, values, capacity);
    memo[index][capacity] = Math.max(take, notake);
  }

  return memo[index][capacity];
}
