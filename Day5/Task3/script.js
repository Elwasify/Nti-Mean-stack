function greetUser() {
    console.log("Hello, User!");
}

setTimeout(greetUser, 3000);

function countDown() {
    var count = 10;

    var timer = setInterval(function () {
        console.log(count);

        if (count == 1) {
            clearInterval(timer);
            console.log("Time's up!");
        }

        count--;
    }, 1000);
}

countDown();

function modifiedCountDown() {
    var count = 10;

    var timer = setInterval(function () {
        console.log(count);
        count--;
    }, 1000);

    setTimeout(function () {
        clearInterval(timer);
        console.log("Stopped after 5 seconds");
    }, 5000);
}

modifiedCountDown();

var t = setTimeout(function () {
    console.log("This will be cleared!");
}, 5000);

clearTimeout(t);