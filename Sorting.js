let arr=[34,45,11,2,0,8];
//selectionsort works like find min and swap it with the first element i=0 to min=j so swap(i,j);
function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        var minimumIndex=i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[minimumIndex])
            minimumIndex=j;
        }
        [arr[i],arr[minimumIndex]]=[arr[minimumIndex],arr[i]]
    }
    return arr;
}
//done using adjacent swaps so we will get final as max element so decrease the length of loop i--;//
//worst case o(n^2),best case O(n),avg case O(n^2); max element go to last 
function BubbleSort(arr){
    for(let i=arr.length-1;i>0;i--){
        var didswap=0;
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                didswap=1;
            }
        }
        if(didswap==0) return arr;
    }
    return arr;
}
//swap untill the we got the correct position if 6 is at last we compare untill it get its correct postion
function inserstionSort(arr){
    for(let i=0;i<arr.length;i++){
        let j=i;
        while(j>0&&arr[j-1]>arr[j]){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
            j--;
        }
    }
    return arr;
}
const newarr=[437,29,188,27,9,1]
console.log(selectionSort(arr));
console.log(inserstionSort(newarr));
console.log(BubbleSort(arr));
