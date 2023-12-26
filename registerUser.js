var currentYear = new Date().getFullYear();
var registerUser = function (name, birthYear) {
    var age = currentYear - birthYear;
    if (checkAge(age)) {
        console.log("User Registration Success" + age);
    }
    else {
        console.log("User Registration Failed");
    }
};
function checkAge(age) {
    return age >= 18;
}
registerUser("Ashik", 2003);
