
const task1 = () => {
    return new Promise((resolve,reject) => {
        resolve("Task1 is completed");
    });
}
const task2 = () => {
    return new Promise((resolve,reject) => {
        resolve("Task2 is completed");
    });
}
const task3= () => {
    return new Promise((resolve,reject) => {
        reject("Task3 is not completed");
    });
}
const task4 = () => {
    return new Promise((resolve,reject) => {
        resolve("Task4 is completed");
    });
}

task1()
.then((res) => console.log(res))
.then(task2)
.then((res) => console.log(res) )
.then(task3)
.then((res) => console.log(res) )
.then(task4)
.then((res) => console.log(res) )
.catch((err) => console.log(err));