
// function hello(name: string, location:string){
//     console.log("Hi,", name)   
//     console.log("From:", location)
//     return "salam";
// }

// const melina = hello("melina", "iran")

// hello("melina", "iran")
// console.log(melina)

// function welcome(name: string, location: string){
//     let welcome_message: string = " ";
//     welcome_message += "Hello " + name;
//     welcome_message += " From: " + location
//     return welcome_message
// }
// const greeting = welcome("nariman", "kish")
// console.log(greeting)

// =============================================

function circumference(r: number) {
    const p = 3.14
    return 2 * p * r
}

// let a = circumference(10)
// console.log(a)


// ==============================================

// function areaOfCircle(r: number): number{
//     const p = 3.14
//     return (r ** 2) * p
// }

// let area = areaOfCircle(10)
// console.log(area)

// ==================================mohit nim dayere=====
function halfCircumference(r: number): number {
    return (circumference(r)/2) + (2 * r)
}

let nimDayere = halfCircumference(10)
console.log(nimDayere)
