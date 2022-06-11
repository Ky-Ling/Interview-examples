// Promise.all function: 
function promiseAll(promises) {
    const outputs = [];
    let settledPromiseCounter = 0;
  
    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((value) => {
                outputs[i] = value;
                settledPromiseCounter++;
  
                if (settledPromiseCounter === promises.length) {
                    resolve(outputs);
                }
            }).catch(reject)
            
            
        });
    })
  }
  

  const slowPromise = new Promise(res => {
    setTimeout(() => {
        res("Slow")
    }, 1000)
  })
  
  
  const promises = [
    Promise.resolve("2"),
    Promise.resolve("3"),
    Promise.resolve("4"),
    // Promise.reject("Error"),
    slowPromise
  ]
  
  console.log(promiseAll(promises));
  
  