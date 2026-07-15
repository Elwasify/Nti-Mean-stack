var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "white"
};
console.log(car);

console.log(car.brand);
console.log(car["year"]);

car.color = "black";
car.price = 500000;
console.log(car);

delete car.year;
console.log(car);
console.log(car.year);

var student = {
  "student-name": "Abdallah",
  age: 20
};
console.log(student["student-name"]);

var book = {
  title: "JavaScript Basics",
  author: {
    firstName: "Ahmed",
    lastName: "Mohamed"
  }
};
console.log(book.author.lastName);

var person = { name: "Ali", age: 25, city: "Cairo" };
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));

var settings = { theme: "dark", lang: "en" };
Object.freeze(settings);

settings.theme = "light";
settings.fontSize = 16;

console.log(settings);

var cities = ["Cairo", "Giza", "Alex", "Arish", "banha"];
console.log(cities);
console.log(cities.length);

console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);

cities.push("Zagazig");
console.log(cities);

cities.unshift("Mansoura");
console.log(cities);

cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

var techList = ["HTML", "CSS", "JS", "React"];
console.log(techList.indexOf("JS"));
console.log(techList.includes("Python"));

var items = ["Pen", "Book", "Bag"];
items.forEach(function (item, index) {
  console.log(item, "index =", index);
});

var colors = ["Red", "Green", "Blue", "Yellow"];
for (var color of colors) {
  if (color === "Blue") {
    break;
  }
  console.log(color);
}

var letters16 = ["A", "B", "C"];
letters16.push("D");
letters16.push("E");
letters16.shift();
console.log(letters16);
console.log(letters16.length);

var fruits17 = ["apple", "banana", "cherry"];
var upperFruits = fruits17.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(upperFruits);
console.log(fruits17);

var numbers18 = [10, 55, 30, 80, 45, 90];
var bigNumbers = numbers18.filter(function (num) {
  return num > 50;
});
console.log(bigNumbers);

var egyptCities = ["Cairo", "Giza", "Alex", "Aswan"];
var foundCity = egyptCities.find(function (city) {
  return city.startsWith("A");
});
var foundCityIndex = egyptCities.findIndex(function (city) {
  return city.startsWith("A");
});
console.log(foundCity);
console.log(foundCityIndex);

var letters20 = ["a", "b", "c", "d", "e"];
var slicedLetters = letters20.slice(1, 4);
console.log(slicedLetters);
console.log(letters20);

var numberWords = ["one", "two", "three", "four", "five"];
var removedWords = numberWords.splice(1, 2);
console.log(removedWords);
console.log(numberWords);

var numbers22 = [40, 100, 1, 5, 25];
numbers22.sort(function (a, b) {
  return a - b;
});
console.log(numbers22);

var ages23 = [16, 21, 17, 19];
console.log(ages23.some(function (age) { return age >= 18; }));
console.log(ages23.every(function (age) { return age >= 18; }));

var numbers24 = [5, 10, 15, 20];
var total24 = numbers24.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(total24);

var students25 = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];
students25.forEach(function (student) {
  console.log(student.name, "-", student.grade);
});

var passedStudents = students25.filter(function (student) {
  return student.grade >= 80;
});
var passedNames = passedStudents.map(function (student) {
  return student.name;
});
console.log(passedNames);

var products27 = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 200 }
];
var totalPrice27 = products27.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(totalPrice27);

var techArr28 = ["js", "html", "css", "js", "react", "js"];
var jsCount = techArr28.filter(function (item) {
  return item === "js";
}).length;
console.log(jsCount);

var classroom = {
  teacher: "Mr. khalil",
  students: ["Omar", "Mona", "Ali", "Sara"]
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

var products30 = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];

var upperTitles = products30.map(function (product) {
  return product.title.toUpperCase();
});
console.log(upperTitles);

var cheapProducts = products30.filter(function (product) {
  return product.price < 30;
});
console.log(cheapProducts);

var totalPrice30 = products30.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(totalPrice30);