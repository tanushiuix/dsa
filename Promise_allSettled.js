

function allSettled(promises) {
  
    if(promises.length==0){
      return Promise.resolve([]);
    }
  
    const result= Array(promises.length);
    let settledPromise=0;
    return new Promise((resolve, reject)=>{
      promises.forEach((promise,i)=>
      {
        if(!(promise instanceof Promise)){
        promise=Promise.resolve(promise);
        }
        promise.then((value)=>{
            result[i]={
              status: 'fulfilled',
              value,
            }
        settledPromise++;
        if (settledPromise === promises.length) {
            resolve(result);
        }
        },
        (reason)=>{
          result[i]={
            status:"rejected",
            reason
          };
          settledPromise++;
            if (settledPromise === promises.length) {
              resolve(result);
            }
        })
      })
    })
  }
       
  
    
  
  