
function fact(n){
    if(n<=0)return 1;
    return n*fact(n-1);    
}
function fib(n){
    if(n==0||n==1)return 1;
    return fib(n-1)+fib(n-2);
}
console.log(fact(10));
console.log(fib(6));