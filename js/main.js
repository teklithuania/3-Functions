/* The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

    Write a function named tellFortune that:
        takes 4 arguments: number of children, partner's name, geographic location, job title.
        outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    Call that function 3 times with 3 different values for the arguments.
 */

function tellFortune(numOfChildren, partnersName, geographicLocation, jobTitle) {
    var fortune = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' +  partnersName + ' with ' + numOfChildren + ' kids.'
    console.log(fortune);
}

tellFortune(5, 'Emily', 'Maliorca', 'Stylist');
tellFortune(25, 'Dmitry', 'Ukraine', 'Freelancer');
tellFortune(96, 'Elizabeth', 'Sidney', 'Accountant');

console.log("-----------------");

/*  The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
1.takes 1 argument: your puppy's age.
2.calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
3.outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppysAge, puppysAgeInHumanYears) {
    var dogsYears = 7 * puppysAge;
    var humanYears = 7 / puppysAgeInHumanYears;
    console.log('Your doggie is ' + puppysAge + ' dog years old! Your puppy is ' + puppysAgeInHumanYears + ' human years old!');
}

calculateDogAge(2, 14);
calculateDogAge(7, 0);
calculateDogAge(15, 70);

console.log("-----------------");

/* The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
1. takes 2 arguments: age, amount per day.
2. calculates the amount consumed for rest of the life (based on a constant max age).
3.  outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
*/

function calculateSupply(age, amountPerDay) {
    const maxAge = 70;
    var forRestOf = ((maxAge - age) * 365) * amountPerDay;
    console.log('You will need ' + forRestOf + ' to last you until the ripe old age of ' + maxAge + '.');
}

calculateSupply(30, 4);
calculateSupply(15, 1);
calculateSupply(68, 20);

console.log("-----------------");

/*The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumfrence(radius) {
    var circumference = Math.PI * 2 * radius;
    console.log("The circumference is " + circumference);
}
function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

calcCircumfrence(5);
calcArea(4);

console.log("-----------------");

/* The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

    Create a function called celsiusToFahrenheit:
        1. Store a celsius temperature into a variable.
        2. Convert it to fahrenheit and output "NN°C is NN°F".

    Create a function called fahrenheitToCelsius:
        1. Now store a fahrenheit temperature into a variable.
        2. Convert it to celsius and output "NN°F is NN°C."
 */

function celsiusToFahrenheit(celcius1) {
    var celciusToFar = (celcius1 * 9) / 5 + 32;
    console.log(celcius1 + '°C is ' + celciusToFar + '°F');
}
celsiusToFahrenheit(32);

function fahrenheitToCelsius(faren2) {
    var farenToCelcius = ((faren2 - 32) * 5) / 9;
    console.log(faren2 + '°F is ' + farenToCelcius + '°C');
}
fahrenheitToCelsius(32);