let str = "ABC";
let dummy = [];
let ans = [];
let strArr = str.split("");
permute(strArr, 0, dummy, ans);
console.log(ans);
function permute(strArr, index, dummy, ans) {
  if (index == strArr.length) {
    ans.push(strArr.slice().join(""));
    return;
  }
  for (let i = index; i < strArr.length; i++) {
    swap(strArr, index, i);
    permute(strArr, index + 1, dummy, ans);
    swap(strArr, index, i);
  }
}
function swap(s, i, r) {
  let temp = s[i];
  s[i] = s[r];
  s[r] = temp;
  return;
}
