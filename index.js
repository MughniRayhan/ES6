var student=[
    {
        name : "tisha",
        id : 101,
        cgp : 2.34
    },
    {
        name : "rajib",
        id : 102,
        cgp : 3.54
    },
    {
        name : "sazida",
        id : 103,
        cgp : 4
    },
    {
        name : "mowly",
        id : 104,
        cgp : 2.68
    },
]

//filtering
   var studentCgp= student.filter((x) =>  x.cgp>3);

   //maping
   var studentName=studentCgp.map((y) => y.name);
 console.log(`Name of the students: ${studentName}`);
   


