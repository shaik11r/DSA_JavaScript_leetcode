let weights = [1, 3, 4,5];
let values = [1, 4, 5,7];
let capacity = 7;
let x = weights.length;
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
