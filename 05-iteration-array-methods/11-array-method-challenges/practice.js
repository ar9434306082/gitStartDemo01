// let people = [
//     {
//         firstName :'Joe',
//         lastName:'klopp',
//         age:22,
//         email:'joe@xyz',
//         phone:22222-4566,

//     },
//     {
//         firstName :'Jame',
//         lastName:'Oliver',
//         age:30,
//         email:'jame@xyz',
//         phone:22222-4544,

//     },
//     {
//         firstName :'Jim',
//         lastName:'peterson',
//         age:27,
//         email:'jim@xyz',
//         phone:22222-4544,

//     },
//     {
//         firstName :'Joe',
//         lastName:'klopp',
//         age:22,
//         email:'joe@xyz',
//         phone:22222-4566,

//     }
// ];

// let sortedPpl = people.filter((e) =>e.age<=25 )
// .map((e) => {
//     return {
//         name:e.firstName+' '+e.lastName,
//         email:e.email,
//     }
   
// });
                     
// console.log(sortedPpl);

let Arr = [23,56,-2,12,-34,40];
let sum = Arr.filter((e)=>e>0).reduce((acc,next)=>
 acc+=next
,0);
console.log(sum);