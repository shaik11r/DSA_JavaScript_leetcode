//factorial of a number;
function fact(n){
    if(n<=0)return 1;
    return n*fact(n-1);    
}
//fibnocci of number;
function fib(n){
    if(n==0||n==1)return 1;
    return fib(n-1)+fib(n-2);
}
//reverse an array using recursion;
function fReverse(l,r,arr){
if(l>=r)return arr;
[arr[l],arr[r]]=[arr[r],arr[l]];
return fReverse(l+1,r-1,arr);
}
function sReverse(i,n,arr){
    if(i>=Math.floor(n/2))return arr;
    [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]];
    return sReverse(i+1,n,arr);
}
let arr=[1,2,3,4,5,6];
console.log(sReverse(0,arr.length,arr));
// console.log(fReverse(0,4,arr));
// console.log(fact(10));
// console.log(fib(6));