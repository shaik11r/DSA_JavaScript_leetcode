let arr=[3,1,2,4,1,5,2,6,4,8];
mergeSort(0,arr.length-1,arr);
console.log(arr);
function mergeSort(low,high,arr){
    if(low==high)return;
    let mid=Math.floor((low+high)/2);//use math.floor for js or else stack limit reached;
    mergeSort(low,mid,arr);//divide arr []
    mergeSort(mid+1,high,arr);//2nd half
    merge(low,mid,high,arr);
}
function merge(low,mid,high,arr){
    let temp=[];
    let left=low;
    let right=mid+1;
    //add elements to new array;//time complexity is o(log(n)) space is O(n) as temp array size
    while(left<=mid&&right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left]);
            left++;
        }
        else{
            temp.push(arr[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }
    for(i=low;i<=high;i++){
        arr[i]=temp[i-low];
    }
}