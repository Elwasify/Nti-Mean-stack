function withoutStrict(){
    xx = 5
}
withoutStrict()
console.log(xx)
function withStrict(){
    "use strict"
    yy = "no strict"
}
try{
    withStrict()
}catch(error){
    console.log(error.message)
}
function withStrict2(){
    "use strict"
    var localVar = "test"
    var person = {name : "Medhat"}
    delete person.name
    console.log(person)
}
withStrict2()
console.log(x)
var x = 10; 
console.log(x)
sayHi();
function sayHi() { console.log("Hi"); } 
var sayBye = function () { console.log("Bye"); };
let a = 5;
var n = 1;
function demo() {  
    console.log(n)
    var n = 2;  
    console.log(n)
} 
demo()
console.log(n)
function checkAge(){
    if (true) {
        var age = 30;
    }
    console.log(age);
}
checkAge()
function checkAge2(){
    var age = 30
    if(age > 18){
        const isAdult = true
        let msg = "not a teenager"
        console.log(msg)
        console.log(isAdult)
    }
}
checkAge2()
var car = "BMW"
var car = "Ferrari"
console.log(car)
let food = "candy"
console.log(food) 
const student = {
    name : "Geneviave" ,
    age : 21 , 
    city : "Cairo"
}
console.log(student)
student.age = 22
console.log(student)
student.grade = "A+"
console.log(student)
delete student.city
console.log(student)
try{
    student = {name : "Gano"}
} catch(error){
    console.log(error.message)
}
const nums = [1,2,3]
nums.push(4)
console.log(nums)
nums[0] = 10
console.log(nums)
try{
    nums = [10 , 20 , 30]
}catch(error){
    console.log(error.message)
}
var aa;
console.log(aa)
let bb;
console.log(bb)
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1);
console.log(window.g2);
console.log(window.g3);
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0())
console.log(handlers.fn2())
var welcome = (name)=>`Welcome ${name} !`
console.log(welcome("Gano"))
var fullInfo = (first , last , age) => `${first} ${last} is ${age} years old`
console.log(fullInfo("Geneviave" , "Medhat" , 22))
var multiply = (a, b) => a * b
console.log(multiply(4, 5))
var sum = (a , b) => {
    console.log("First Number:", a)
    console.log("Second Number:", b)
    return a + b
}
console.log(sum(10, 20))
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title)
console.log(price)
console.log(inStock)
const courses = ["HTML", "CSS", "JS", "React"]
const [first, second] = courses
console.log(first)
console.log(second)
function greet(name = "Guest", message = "Hello") { 
    return `${message}, ${name}!`
}
console.log(greet("Geneviave", "Welcome"));
console.log(greet("Gano"))
console.log(greet());
function sumAll(...numbers) {
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    return sum;
}
console.log(sumAll(1, 2, 3))
console.log(sumAll(10, 20, 30, 40))
var arr1 = [1, 2]
var arr2 = [3, 4, 5]
var merged = [...arr1, ...arr2]
console.log(merged)
var original = [10, 20, 30]
var copy = [...original]
copy.push(40)
console.log(original)
console.log(copy)
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const mergedA = {...user , ...contact}
console.log(mergedA)
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values))
let person1 = { name: "Ali", child: { age: 5 } }; 
let person2 = person1; 
person2.name = "Omar"; 
console.log(person1.name);
const original2 = { name: "Mona", details: { city: "Cairo" } };
const shallowCopy = {...original2};
shallowCopy.name = "Gano";
shallowCopy.details.city = "Alex";
console.log(original2);
console.log(shallowCopy);
const deepCopy = structuredClone(original2);
deepCopy.details.city = "Aswan";
console.log(original2);
console.log(deepCopy);
const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};
localStorage.setItem("userdata", JSON.stringify(userData))
var storedData = JSON.parse(localStorage.getItem("userdata"))
console.log(typeof storedData)
console.log(storedData)
localStorage.removeItem("userdata")
const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "https://api.test.com",
        timeout: 3000
    }
}
console.log(APP_CONFIG)
APP_CONFIG.api.timeout = 5000
console.log(APP_CONFIG)
APP_CONFIG.features = ["Login", "Logout"]
console.log(APP_CONFIG)
try {
    APP_CONFIG = {name : "App"}
} catch (error) {
    console.log(error.message)
}
function createCard(title , price = 0 , ...tags){
    return {title , price , tags , label : `${title} - ${price} EGP`}
}
var card1 = createCard(
    "Laptop",
    15000,
    "Dell",
    "Core i7"
)
var card2 = createCard(
    "Mouse"
)
console.log(card1)
console.log(card2)
const students = [ { name: "Omar", grade: 80 }, { name: "Mona", grade: 90 }, { name: "Ali", grade: 70 } ];
for(var {name , grade} of students){
    console.log(`${name} scored ${grade}`);
}