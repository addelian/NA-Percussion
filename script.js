function checkDriverAge(age) {
        if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

var database = [
    {
        username: "nic",
        password: "hunter2",
    },
    {
        username: "karen",
        password: "hunter3",
    },
    {
        username: "tyler",
        password: "hunter4",
    },
    {
        username: "billy",
        password: "hunter5",
    }
];

var newsfeed = [
    {
        username: "karen",
        timeline: "anybody else afraid of this robot car thing?",
    },
    {
        username: "tyler",
        timeline: "my mom said a robot car stole her purse today!",
    },
    {
        username: "billy",
        timeline: "LOL NOTHING TO FEAR HUMANS, I MEAN FRIENDS, LET'S GO DRIVING",
    },
];


// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsfeed);
//     } else {
//         console.log("Sorry, wrong username and/or password");
//     }
// }

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password) === true) {
        console.log(newsfeed);
    }
}

var usernamePrompt = prompt("Username:");
var passwordPrompt = prompt("Password:");

signIn(usernamePrompt, passwordPrompt);

// signIn(usernamePrompt, passwordPrompt);

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// for (var i=0; i < todos.length; i++) {
//     console.log(todos[i] + "!");
// }