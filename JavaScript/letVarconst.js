function x(){
    var x;
    x++;
    console.log(x);
    x=21
}
x();

//
let y=10;
function fun(){
    let y=20;
    console.log("inside the function fun",y);
}
fun();
console.log(y);

// here it got changed because they are refering to same location;
var z=100;
function newfun(){
    z=200;
    console.log('inside the function newfun',z);
}
newfun();
console.log(z);
