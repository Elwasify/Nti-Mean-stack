document.getElementById('startBtn').addEventListener('click', checkUser);

function checkUser() {
  var name = prompt("What is your name?");
  var birthYear = Number(prompt("What is your birth year?"));
  var isStudent = confirm("Are you a student?");

  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;

  var category;
  if (age < 13) {
    category = "Kid";
  } else if (age >= 13 && age <= 17) {
    category = "Teen";
  } else if (age >= 18 && age <= 59) {
    category = "Adult";
  } else {
    category = "Senior";
  }

  var message = "Hello " + name + ", you are " + age + " years old.\n";
  message += "Category: " + category + ".";

  if (isStudent) {
    message += "\nDon't forget to study hard!";
  }

  console.log(message);
  alert(message);
  document.getElementById('result').innerText = message;
}