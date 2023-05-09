let n=5;
let y=n.toString(2).split('').reverse().join('');
console.log(BigInt(`0b${y}`));