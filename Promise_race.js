
function race(promises) {

 
  return new Promise((resolve,reject)=>{

    promises.forEach((promise)=>{
      promise.then(
        (value)=>{resolve(value)
        }
        ,
        (reason) => {
          reject(reason);
        }
        )
    })
  })
}