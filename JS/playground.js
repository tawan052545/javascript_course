//const a = 10

/*
Note : Multiline
*/

var temp = "Hello"
temp = "Google"

let temp2 = 100
temp2 = 50

const temp3 = true
// temp3 = false

var temp4

const a = 10 
const b = 5
let c = 5 
c = "ABC"
const sum = a + b

// console.log(a+b)
// console.log(a + b + c);

const temp5 = [1, 2, 3, 4, 5,"A"]
// console.log(temp5[0]);

temp5.forEach (item =>
{
// console.log(item);
}
)
const filterTemp = temp5.filter(item => item >= 3)
// console.log("Filter number more than 3 is:",filterTemp);


temp5.push(6)
// console.log("insert 6 to array",temp5)

// const car1 = 
// { 
//     Coler:'Red', 
//     Brand:'Honda',
//     Model:{
//         a1:'ASD#R',
//         a2:'FG$REWEFS'
//     } 
// }

// console.log(car1.Model.a2);


const helloMotherFucker =(number, name)=>
{
    console.log(`number is: ${number} by${name}`);
}
const nickname = "bas"

// helloMotherFucker(100, nickname)


///////////////////Fuction return///////////////////////////
const firstName = 'Bas'
const lastName = 'Worrawut'

const mergeName = (firstName,lastName)=>{
    // Note:1
    // return firstName + "" + lastName
    // Note:2
    // const fullname = firstName + "" + lastName
    // return fullname
    return `${firstName} ${lastName}`
}

// const fullname = mergeName(firstName, lastName)
// console.log(mergeName(firstName, lastName));


///////////////////////Condition(If Else)////////////////////////////////
// const number1 = 50
// if(number1 > 30){
//     console.log("number1 is more than 30");
// }
// if(number1 < 30){
//     console.log("number1 is less 30");
// }
// else
// {
//     console.log("number1 is more than 30");
// }
// if(number1 < 20){
//     console.log("number1 is less 20")
// }
// else if(number1 < 30){
//     console.log("number1 is more than 30")
// }
// else if(number1 < 40){
//     console.log("number1 is less 40")
// }
// else
// {
//     console.log("number1 is more than 40");
// }
/////////////////Switch Case///////////////////////////
// switch(number1){
//         case 20:
//         console.log("number1 is equal 20")
//         break
//         case 30:
//         console.log("number1 is equal 30")
//         break
//         case 40:
//         console.log("number1 is equal 40")
        
//         default:
//             console.log("number1 is more than 40");
//             break
// }


//////////////Loops/////////////////////
const myCars =[
    "Ford Rapter", 
    "HondaCRV",
    "Toyota Fortuner",
    "labogini"
]
// for(let index = 0; index < myCars.length; index++){
//     const car = myCars[index];
//     console.log(car);
// }
const car1 = 
{ 
    Coler:'Red', 
    Brand:'Honda',
    Model:{
        a1:'ASD#R',
        a2:'FG$REWEFS'
    } 
}

for (const key in car1) {
    if (Object.hasOwnProperty.call(car1, key)) {
        const element = car1[key];
        console.log(element);
    }
}
for(const item of myCars){
    console.log(item)
}


for(const item of myCars){
    // console.log(item)
}
let i=0
while(i < 10){
    console.log("The number is:",i);
    i++
}