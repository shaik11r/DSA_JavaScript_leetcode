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

let arr=[1,2,3,4,5];
console.log(fReverse(0,4,arr));
console.log(fact(10));
console.log(fib(6));