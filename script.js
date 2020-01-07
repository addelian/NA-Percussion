function checkDriverAge(age) {
        if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

var userDB = {
    username: "nic",
    password: "hunter2",
};

var database = [userDB];

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

var usernamePrompt = prompt("Username:");
var passwordPrompt = prompt("Password:");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        console.log("Sorry, wrong username and/or password");
    }
}

signIn(usernamePrompt, passwordPrompt);
