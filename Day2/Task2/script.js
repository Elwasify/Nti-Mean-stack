var name = prompt("Enter employee name:");
var age = Number(prompt("Enter employee age:"));
var experience = Number(prompt("Enter years of experience:"));
var rating = Number(prompt("Enter your self-rating (1-10):"));
var baseSalary = Number(prompt("Enter base salary:"));

var category;

if (experience < 2) {
    category = "Junior";
} else if (experience <= 5) {
    category = "Mid-Level";
} else if (experience <= 10) {
    category = "Senior";
} else {
    category = "Expert";
}

var performance;

switch (true) {
    case (rating >= 9):
        performance = "Excellent";
        break;

    case (rating >= 7):
        performance = "Good";
        break;

    case (rating >= 5):
        performance = "Average";
        break;

    default:
        performance = "Needs Improvement";
}

var bonus;

if (experience <= 2) {
    bonus = baseSalary * 0.10;
} else if (experience <= 5) {
    bonus = baseSalary * 0.15;
} else {
    bonus = baseSalary * 0.20;
}

var finalSalary = baseSalary + bonus;

var hour = new Date().getHours();
var shift;

if (hour >= 9 && hour < 18) {
    shift = "Day Shift";
} else {
    shift = "Night Shift";
}

var report =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Experience: " + experience + " years<br>" +
    "Job Category: " + category + "<br>" +
    "Performance: " + performance + "<br>" +
    "Base Salary: " + baseSalary + "<br>" +
    "Bonus: " + bonus + "<br>" +
    "Final Salary: " + finalSalary + "<br>" +
    "Shift: " + shift;

console.log(
    "Name: " + name +
    "\nAge: " + age +
    "\nExperience: " + experience +
    "\nJob Category: " + category +
    "\nPerformance: " + performance +
    "\nBase Salary: " + baseSalary +
    "\nBonus: " + bonus +
    "\nFinal Salary: " + finalSalary +
    "\nShift: " + shift
);

alert(
    "Name: " + name +
    "\nAge: " + age +
    "\nExperience: " + experience +
    "\nJob Category: " + category +
    "\nPerformance: " + performance +
    "\nFinal Salary: " + finalSalary +
    "\nShift: " + shift
);

document.getElementById("result").innerHTML = report;