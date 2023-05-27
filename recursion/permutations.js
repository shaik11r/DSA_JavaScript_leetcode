let str = 'abc';
let ans = [];
let dummy = [];
permutations(str, 0, ans, dummy);
console.log(ans);

function permutations(str, index, ans, dummy) {
  if (index >= str.length) {
    ans.push(dummy.slice().join(''));
    return;
  }
  dummy.push(str[index]);
  permutations(str, index + 1, ans, dummy);
  dummy.pop();
  dummy.push(str[index].toUpperCase());
  permutations(str, index + 1, ans, dummy);
  dummy.pop();
}
//str[index] a then index+1 so b c then pop c
//str[index] C and push it so again pop c
//pop b then add B then c then pop c add C pop c again
//pop b and c then A b C then pop C ABc then ABC
