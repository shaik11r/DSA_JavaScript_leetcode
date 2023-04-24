let arr=[1,2,2,3,4,4,4,5,5,5,5,6,6,];
let map=new Map();
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    }
    else{
    map.set(arr[i],1);
    }
}
console.log(map)