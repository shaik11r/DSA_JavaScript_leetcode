function promise1(promise2,delay){
    let timeout;
const timeoutPromise=new Promise((resolve,reject)=>{
   timeout=setTimeout(()=>{
    reject("time out")
    },delay)
})
return Promise.race([promise2,timeoutPromise]).finally(()=>{
    clearTimeout(timeout)
})
}
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise")
    },4000)
})
promise1(promise2,3000).then((res)=>console.log(res))