function min_time(n, work) {
  let start = 0;
  let end = Math.max(...work);
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (
      cal(mid, work) > cal(mid + 1, work) &&
      cal(mid, work) < cal(mid - 1, work)
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return cal(start, work);
}
function cal(x, work) {
  let totaltime = 0;
  for (let i = 0; i < work.length; i++) {
    totaltime += Math.abs(work[i] - x - (i + 1));
  }
  return totaltime;
}
console.log(min_time(7, [859, 794, 885, 419, 93, 261, 152]));
console.log(min_time(6, [4, 2, 5, 3, 5, 1]));

// let arr=[859,794,885,419,93,216,152]
// console.log(minTime(7,arr))
