const promise1 = new Promise((resolve,reject) => {
    setTimeout(()  => {
        resolve("completed Promise 1");
    },2000);
});


const promise2 = new Promise((resolve,reject) =>{
   setTimeout(() => {
    resolve("completed Promise 2");
   },1000);
});


/*promise1
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});

promise2
.then((res) => {
    console.log(res);
})

*/
//all function
Promise.all([promise1,promise2]).then((res) => {
    console.log(res);
})
//race function
Promise.race([promise1,promise2]).then((res) => {
    console.log(res);
})
console.log("end");