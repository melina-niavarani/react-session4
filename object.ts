// let country = {
//     name: "Iran",// eslint-disable-line object-shorthand
//     capital: "Tehran",
//     weather: 20
// }
// console.log(country.name)
// console.log(country.weather)
// console.log(country.capital)
// console.log(country)


// let person = {
//     name: "Melina",
//     city: "Tehran",
//     age : 35,
// }
// console.log(person)
// let test = person.age * 2
// console.log(test)

// if (person.age < 30) {
//     console.log("under 30");
// }else {
//     console.log("above 30!");
// }

let bomb = {
    name: "Danger",
    counter: 9,
    message: function (name: string) {
        console.log(`${name} if you can, defuse the bomb.`)
    }
};

bomb.counter += 1
console.log(`The ${bomb.name} is used. ${bomb.counter} seconds until explosion!`)
bomb.message("Babak")