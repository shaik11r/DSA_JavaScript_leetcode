let arr=[1,2,3]
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
    dummy.pop(arr[i]);
}
console.log(ans)
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


