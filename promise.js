const promise = new Promise(function hi(resolve,reject,){
    let isSucessful=true;
    if(isSucessful){
        resolve('hi im resolved')
    }
    else {
        reject('promise rejected')
    }
    return promise;
})
promise.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error);
})
function checknumber(value){
    let myPromise=new Promise((resolve,reject)=>{
        if(value%2==0){
            resolve('yes the value is even')
        }
        else{
            reject('error the value is odd');
        }
    })
    return myPromise;
}
function doublenumber(value){
    let myPromise=new Promise((resolve,reject)=>{
        let result=value*2;
        resolve(result);
    })
    return myPromise;
}
checknumber(6)
.then((result)=>{
    console.log(result)
return doublenumber(6)}).
then(result=>console.log(result))
.catch(result=>console.log(result));
checknumber(5)
.then((result)=>console.log(result))
.catch(result=>console.log(result));
