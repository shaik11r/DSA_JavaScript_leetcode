let num=12321;
console.log(Ispalindrome(num))
function Ispalindrome(n){
    let temp=n;
    let temp2=0;
while(temp>0){
    let x=temp%10;
    temp2=x+temp2*10;
    temp=Math.floor(temp/10);
}
if(temp2==n)return true;
else 
return false;
}