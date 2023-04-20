let arr=[3,1,2,4,1,5,2,6,4,3,2,2,2,2,8];
mergeSort(0,arr.length-1,arr);
console.log(arr);
function mergeSort(low,high,arr){
    if(low==high)return;
    let mid=Math.floor((low+high)/2);
    mergeSort(low,mid,arr);
    mergeSort(mid+1,high,arr);
    merge(low,mid,high,arr);
}
function merge(low,mid,high,arr){
    let temp=[];
    let left=low;
    let right=mid+1;
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