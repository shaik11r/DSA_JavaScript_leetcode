const arr=[1,2,3,4,5];

function half(x){
    return Math.floor(x);
}
const output=arr.map(half)//functon
const output2=arr.map(function(x){
    return x*x;
})
const output3=arr.map(x=>x*x*x);//arrow function

console.log(output);

console.log(output2);

console.log(output3);
/**
 * Filter function;
 */
const newarr=[5,4,3,2,1];
const newOutput=newarr.filter(function (val){
if(val%2==0){
    return val;
}
})
const newOutput1=newarr.filter((val)=>{
    if(val!==1)return val;
})

console.log(newOutput1)
console.log(newOutput)
const str=" hello world ";
newstr=str.split(' ').reverse();
console.log(newstr.filter((val)=>{
    if(val!==" ")return val
}).join(' '));

