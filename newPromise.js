
function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`resolved after ${ms}`),resolve()},ms)
        }
        )}
async function theexample(){
    console.log('new promise');
    await delay(4000);
    console.log('called await no wait for 10sec')
}
theexample().then(result=>{
    console.log(result);
})
.catch(error=>console.log(error));