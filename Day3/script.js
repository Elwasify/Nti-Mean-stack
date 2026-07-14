var fullName = "Ahmed Ali";
console.log(fullName.length);

var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

var email = "student@nti.com";
console.log(email.includes("@"));

var word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);

var text = "This is a bad day";
console.log(text.replace("bad", "good"));

var text2 = "I love coding";
var words = text2.split(" ");
console.log(words.join("-"));

var text3 = " nti egypt training ";
text3 = text3.trim();
text3 = text3.toUpperCase();
text3 = text3.replace("EGYPT", "CAIRO");
console.log(text3);

var num = parseFloat("45.8");
console.log(num);

var n = 7.6;
console.log(Math.round(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));

console.log(Math.max(12, 5, 28, 9));
console.log(Math.min(12, 5, 28, 9));

var random = Math.floor(Math.random() * 20) + 1;
console.log(random);

var price = 19.4567;
console.log(price.toFixed(2));

var arr = [];
var sum = 0;

for (var i = 0; i < 5; i++) {
    var x = Math.floor(Math.random() * 50) + 1;
    arr.push(x);
    sum += x;
}

console.log(arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));
console.log((sum / 5).toFixed(2));

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

for (var i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

var names = ["Sara", "Omar", "Mona", "Youssef"];

for (var name of names) {
    console.log(name);
}

for (var i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}

for (var i = 1; i <= 30; i++) {
    if (i == 25) {
        break;
    }

    if (i % 3 == 0) {
        continue;
    }

    console.log(i);
}

var hello = "HELLO";

for (var i = 0; i < hello.length; i++) {
    console.log(hello[i]);
}

var nums = [10, 20, 30, 40];
var total = 0;

for (var i = 0; i < nums.length; i++) {
    total += nums[i];
}

console.log(total);

var str = "JavaScript is amazing and awesome";
var count = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") {
        count++;
    }
}

console.log(count);

var grades = [70, 85, 92, 60, 77, 88];

for (var i = 0; i < grades.length; i++) {
    if (grades[i] % 2 == 0) {
        console.log(grades[i]);
    }
}

for (var i = 1; i <= 4; i++) {
    var star = "";

    for (var j = 1; j <= i; j++) {
        star += "* ";
    }

    console.log(star);
}

var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var countNames = 0;

for (var i = 0; i < students.length; i++) {
    var name = students[i].toUpperCase();

    if (name[0] == "A" || name[0] == "S") {
        console.log(name);
        countNames++;
    }
}

console.log(countNames);