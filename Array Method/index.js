//find(callback,value)

let numbers = [5,55,12,5,78];


const evenNumber = (value,index,array) => {
if(value%2===0)

    return value;
}
//find the first even value from the array
let firstEvenNumber= numbers.find(evenNumber);
console.log(firstEvenNumber);

//find the first even value's index from the array
let firstEvenNumberIndex= numbers.findIndex(evenNumber);
console.log(firstEvenNumberIndex);

//find usign callback
 const students=[
    {
        id :101,
        cgp : 2.5
    },{
        id :102,
        cgp : 3.56
    },{
        id :103,
        cgp : 4.25
    },{
        id :104,
        cgp : 2.83
    },
 ]
 console.log(students.find(x => x.cgp>3))

