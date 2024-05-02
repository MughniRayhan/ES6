//array destructure
let numbers=[10,20,30,40,50]
let [num1,num2,num3,num4,num5]=numbers;
console.log(`1st and 3rd number of array: ${num1} and ${num3}`);


//object destructure
var student={

    name : "Tisha",
    id : 101,
    
    language : {
        native : "Bangla",
        beginner: "english"
    }
}

const {id,language}=student

console.log(`id of the student is: ${id}`);
console.log(`Native language of the student is: ${language.native}`);


//function parameters destructure
const studentInfo= ({id,name}) => {
console.log(`${id} , ${name}`);
}
const student1={
    id : 102,
    name :  "Mughni"

}
studentInfo(student1);