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

const callAllTasks = async () => {

    try{
        const t1 = await task1();
    console.log(t1);

    const t2 = await task2();
    console.log(t2);

    const t3= await task3();
    console.log(t3);

    const t4 = await task4();
    console.log(t4);
    }catch(e){
        console.log(e);
    }

}

callAllTasks();