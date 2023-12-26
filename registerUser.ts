/*Create the function registerUser which takes the following parameters:
name - string
birthYear - number

Create a function checkAge which takes the following parameter:
birthYear - number

checkAge returns a boolean value denoting if the user is of age >= 18
Inside registerUser, call checkAge function and pass the birthYear.
If checkAge returns true, then print "User Registration Success!" 
else print "User Registration Failed!"
*/

const registerUser = (name: string, birthYear: number) => {
    const currentYear: number = new Date().getFullYear();
    const age = currentYear - birthYear 
    if(checkAge(age)) {
        console.log("User Registration Success");
    } else {
        console.log("User Registration Failed");
    }
}

function checkAge(age: number): boolean {
    return age >= 18;
}

registerUser("Ashik",2003);