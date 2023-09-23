// alert("hello world")
// document.write("hello septa peeps")
// console.log("am learning js")

// console.log (1+1)
// console.log("hey")

// statement java script

// variable

// ways to declare a vairable
// var
// let
// const
// var church ="rccg";

// var name = "dayo";
// // var name = "septa"
// function
// console.log(church)
// const name = "toyota";
// console.log(name)

// you can stART a varaible with number ot with java function
// data type

// String

// let  shape = "triangle";

// Number
let age = 20
let newage =10

console.log (age + newage)
//  Boolean

let isFemiAwake = true

console.log(typeof age)

const website = "google"
const url ="https://www." + website + ".com"

console.log(url)

const oldName = " bayo"
const oldAge = 15
const capi = " am not capping"
console.log("I Know" + oldName + " is " + oldAge + "years old" + capi)

const firstname = " kolade"
const habitat = " akure"
const school = " imole university"
console.log( "my name is" + firstname + " i live at" + habitat + " and schooled in" + school)

console.log( " Assignment")
const word = " what's the"
const question1 = " var"
const question2 = " let"
const question3 = " const?"
console.log( word + " Difference between" + question1 + " ," + question2 + " ," + " and" + question3)

const kvar = " var is used to declear a vairable that can be reasigned"
const klet = " let is similar but has a block scope"
const kconst = " const is used to declear a vairable that cannot be reasined"
console.log( " In Javascript" + kvar + " while" + klet + " and" + kconst)

// null

let gong = "rice"; //empty value is null
console.log(gong)

// let geng = ; //undefined
// console.log(geng)

// () is Params or placeholder

function money() { //declaread a function
    console.log(" send money my fans");
}

money() //invoke or call argument

function greet(name){
    console.log ("hello" + name)
}
greet(" dammy")
greet(" kei")

function addition(a, b){
console.log(a + b)}

addition(2,2)
addition(3,2)
addition(4,2)
addition(5,2)

let sum1 = 2 + 2
let sum2 = 3 + 2
let sum3 = 4 + 2
let sum4 = 5 + 2

// function that returns countries and the first 3 letter of the country

function country1(abr){
    console.log("Nigeria" + abr)
}
country1(" nig")

function country2(spanish){
    console.log("Spain" + spanish)
}
country2(" esp")

function country3(white){
    console.log("united state" + white)
}
country3( " us")

function country4(british){
    console.log("England" + british)
}
country4( " Eng")

function country5(africa){
    console.log("liberia" + africa)
}
country5( " lib")


function country(country, abr){
console.log(country + " " + abr)
}

country("Nigeria" , "nig")
country("Spain" , "esp")
country("England" , "eng")

function addition(a, b ){
    console.log(a + b)
console.log( a + " + " + b + " = ", a + b )
}

addition(4,9)
addition(6,8)

// assignment
// multiply and subtraction?
function multiply(a, b){
console.log(a + " * " + b + " =", a * b  )
}
multiply(3,3)

function subtraction(a,b){
    console.log(a + " - " + b + " = ", a - b)
}
subtraction(9,2)

//objects
//object is a collection of properties
//properties can be kay is a value

let name1 = "kei"

let car = {
    color: "red",
    brand:"toyota",
    platenumber:"2468135",
    model:"corolla",
    tyrecolor:"black",
    year:2010
}

console.log(car.model)
console.log(car["color"])

//access an obj
console.log("old obj", car)
car.model = "kei model"
console.log("new obj", car)

let house ={
    color: "blue",
    structure: "duplex",
    car: "5 cars",
    address: {
        streetname: "dada street",
        localgovt: "jagunjagun",
        state: "lagos"

    },

    build: function () {
        console.log("i have built it")
    }
}
console.log(house.address.localgovt)
// console.log(house.build())

console.log(house.structure)

console.log(house["color"])

console.log( "old obj", house)
house.structure = "flat"
console.log("new obj", house)

//Array

let cars = [ "toyota", "benz", "lexus", "bently"]

//access an array

console.log(cars);

console.log(cars[2])

cars[2] = "porshe"

console.log(cars)

let food =[ "rice", "beans", "spag", "bread"]

console.log(food);
console.log(food[2])
food[2] = "garri"

console.log(food)

let person =[{
    gender: "male",
    ageBracket: "15-20",
    school: "queens college",
    adress:{
        street: "adekunle street",
        city: "akure"
    }
},
{
    gender: "female",
    ageBracket: "15-20",
    school: "queens college",
    adress:{
        street: "adekunle street",
        city: "lagos"
    }
},
"Adebayo"


]
//access both gender
//change city to ogun
//change adebayo to my name

// console.log(person);
console.log(person[0].gender)

console.log(person[1].gender)

// console.log(person[0].adress.city)
// person.city = "ogun"
// console.log(person);
// console.log(person[1]);
// console.log(person[1].adress)
// console.log(person[1].adress.city)
// person[0].adress.city = "ogun"

console.log(person);
console.log(person[2])
person[2] = "kolade"
// console.log(person)

console.log(person);
console.log(person[0].adress);
// console.log.person[0].adress[1] = "ogun"

// if(comdition){
//     //code to be executed if the condition is true
// }

//> = greater than
//< = less than
//<= = less than or equal to
//>= = greater than or equal to
//== =double equals to
// === =  triple equaks to
// != = not eqals to
// !==


// let agee = 5;

// if (age>20){
//     console.log("age is greater than 20")
// }else if (agee < 3 ) {
//     console.log("age is less than 3")
// }else {
//     console.log("no")
// }

// let dogBARK = true;
// let lionRoar = false

// if (dogBARK){
//     console.log("age is greater than 20")
// }else if (!lionRoar) {
//     console.log("age is less than 3")
// }
// else if (!dogBARK){
//     console.log(maybe)
// }
// else {
//     console.log("no")
// }

// if (!dogBARK){
//     console.log("age is greater than 20")
// }else if (!!dogBARK){
//     console.log("ccc")
// }
// else if (!lionRoar) {
//     console.log("age is less than 3")
// }
// else if (!dogBARK){
//     console.log(maybe)
// }
// else {
//     console.log("no")
// }
// // ||-OR && - AND
// if(2!=2){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// let gage = 18;

// if (gage !== "18") {
//     console.log("yes age is greater");

// }

// if (gage > "18") {
//     console.log("yes age is greater");

// }else{
//     console.log("this condition is false")
// }

// if (gage > "18") {
//     console.log("yes age is greater");

// } else if (age >= 20){
//     console.log("yes age")
// }else{
//     console("co condition")
// }

//conditional statement

// let rainfall = true
// let sunshine = false

// if (rainfall) {
//     console.log("yes rain fall")
// } else {
// console.log(" no rain didnt fall")
// }



// let dogBark = true;
// let tobiSleepsaLot = true;

// if (dogBark || tobiSleepsaLot){
//     console.log("yes")
// }else{
//     console.log(nah)
// }



let citizenage = prompt("put in your age in figure e.g 22")
console.log(citizenage)

let Citizen = prompt("Are you a citizen of Nigeria: (Yes/No)") 
console.log(Citizen)

if (citizenage >= 18 && Citizen ==="Yes"){
    alert("You are above 18 therefore you can cast your vote")
}else if (citizenage>= 18 && Citizen === "No"){
    alert("You are above 18 but not a citizen therefore you cant vote")
}else if (citizenage <18 && Citizen === "Yes"){
    alert("Dear user; Being a citizen alone doesnt count you are below 18 therefore you cant't cast your vote")
}else if (citizenage <18 && Citizen === "No"){
    alert("Below 18 years and not a citizen of Nigeria therefore you are not eligible to vote")
}