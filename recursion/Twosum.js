const arr=[1,2,3,5,9,0,7]
const target=7;
console.log(twoSum(arr,target))
function twoSum(arr,target){
let map=new Map();
for(let i=0;i<arr.length;i++){
    var num=arr[i];
   if(map.get(num)===undefined){
    map.set(target-num,i);
   }
   else{
    return [map.get(num),i];
   }
}
}