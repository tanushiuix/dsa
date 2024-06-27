
function any(promises) {
    if (promises.length === 0) {
      return Promise.resolve();
    }
  
    let isFulfilled = false;
    const errors = Array(promises.length);
    let numOfErrors = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, i) => {
        if (!(promise instanceof Promise)) {
          promise = Promise.resolve(promise);
        }
  
        promise.then(
          (value) => {
            if (isFulfilled) {
              return;
            }
  
            resolve(value);
            isFulfilled = true;
          },
          (reason) => {
            errors[i] = reason;
            numOfErrors++;
  
            if (numOfErrors === promises.length) {
              reject(
                new AggregateError(
                  'No Promise in Promise.any was resolved',
                  errors
                )
              );
            }
          }
        );
      });
    });
  }