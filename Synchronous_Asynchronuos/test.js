/* callback and higher order function example:
function square(x){
    console.log(`sruare of ${x} = ${x*x}`);
}

function higherOrderFunction(num,callback){
callback(num);
}
higherOrderFunction(6,square)
*/


const task1 = (callback) => {
    console.log("Task1");
    callback();
}

//asynchronus
const task2 = (callback) => {
setTimeout(()=>{
    console.log("Task2. data loading");
    callback();
},2000);
   
}



const task3 = (callback) => {
    console.log("Task3");
    callback();
}

const task4= () => {
    console.log("Task4");
}

task1(() => {
    task2(() => {
        task3(() => {
            task4();
        });
    });
});