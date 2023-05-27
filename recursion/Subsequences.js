let arr=[1,1,3]
let dummy=[];
let ans=[];
x(arr,dummy,0)
function x(arr,dummy,i){
    if(i==arr.length){
       ans.push(dummy.slice())
       return;
    }
    x(arr,dummy,i+1);
    dummy.push(arr[i]);
    x(arr,dummy,i+1);
    dummy.pop();
}
console.log(ans)
let a = [1,1,3];
let res = [];
let dup = [];
withoutduplicates(0, a, res, dup);
console.log(res);
function withoutduplicates(idx, arr, ans, dummy) {
    ans.push(dummy.slice());
  for (let i = idx; i < arr.length; i++) {
    if(i>idx&&arr[i]==arr[i-1]){
        continue;
    }
    dummy.push(arr[i]);
    withoutduplicates(i+1, arr, ans, dummy);
    dummy.pop();
  }
}
//it i=0; d=[],arr=[1,2,3] now d=[1],i=1
//it i=1; d=[1],arr=[1,2,3] now d=[1,2],i=2
//it i=2; d=[1,2],arr=[1,2,3] now d=[1,2,3],i=3
//now ans=[1,2,3] return ;
//it i=2; d=[1,2,3],arr=[1,2,3] now d=[2],i=2 pop(3)
//it i=3,return ans[[1,2,3],[1,2]];
// again pop(2)
//d=[1] now i=2;
//d=[1,3] now i =3
//ans=[[1,2,3],[1,2],[1,3]]
// pop(3) now i=3 still so
//ans=[[1,2,3],[1,2],[1,3],[1]]
// now i=1 and d=[] push(2) d=[2]
//now i=2 and d=[2,3] after pushing 2
//ans=[[1,2,3],[1,2],[1,3],[1],[2,3]] and i=2 now remove 3
//ans=[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]];
