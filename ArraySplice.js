const arr=[0,1,2,3,4,5,6,7,8];
console.log(arr.splice(0,3,'a','b','c'))// 0-3 0,1,2//a ,b ,c
console.log(arr);

const arr2=[0,1,2,3,4,5,6,7,8];
console.log(arr2.splice(0,7));
console.log(arr2);

const arr3=[0,1,2,3,4,5,6,7,8];
console.log(arr3.splice(0,0,1,2,2,2,2,2)); //splice (start , delete, insert )
console.log(arr3);


const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);
console.log(removed);
