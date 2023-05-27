let arr=[1,2,3,1,5,2];
let sum=0;
let k=5;
let dummy=[];
let ans=[];
subk(arr,0,sum,k,dummy)
function subk(arr,i,sum,k,dummy){
    if(i==arr.length){
        if(sum==k){
            ans.push(dummy.slice());
        }
        return;
    }
    dummy.push(arr[i]);//picked the array and sum 
    sum=sum+arr[i];
    subk(arr,i+1,sum,k,dummy);//picked and moved to another index;
    dummy.pop(arr[i]);//remove that array and sum
    sum=sum-arr[i];
    subk(arr,i+1,sum,k,dummy);//not pick condition
}
console.log(ans);
//new version only unique elements sum upto k;