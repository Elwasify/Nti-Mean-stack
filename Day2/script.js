var username = window.prompt("Enter your username:");
var password = window.prompt("Enter your password:");

if (username === "") {
    window.alert("Username is required");
}

if (password.length < 8) {
    window.alert("Password must be at least 8 characters");
}

if (username !== "" && password.length >= 8) {
    console.log("Username: " + username);
    console.log("Password: " + password);
}