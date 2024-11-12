//  AVSNITT 12 - template strings //

// template strings
/* const title = "Best reads of 2019";
const author = "Magnus";
const likes = 30; */

// Concatenation way

// let result = "The blog called " + title + " by " + author + " has " + likes + " likes ";
// console.log(result);

// template string way (Net Ninja prefer this one) 

/* När det finns många variablar så är det bäst att använda (``)
för att slå ihop variablarna. */

/* let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result); */

// creating html templates

/* let html = `
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span>This blog has ${likes} likes</p>

`;
console.log(html); */



// AVSNITT 13 - arrays //

// let ninjas = ["Magnus", "Mats", "Lundberg"];

// ninjas[1] = "Ken";      // Ett sätt att överskida vissa värden 
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// ages[2] = 20;
// console.log(ages[2]);

// let random = ["Magnus", "Lundberg", 28, 38];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join("-");

// let result = ninjas.indexOf("Lundberg");
// let result = ninjas.concat(["ken", "crystal"]);
// let result = ninjas.push("ken");
// result = ninjas.pop();    //Popped off array "ken" to normal value
// console.log(result);



// AVSNITT 14 - null & undefined //

// let age = null;    // Du får en NaN när man inte har gett age ett värde.

// console.log(age, age + 3, `the age is ${age}`);



// AVSNITT 15 - booleans & comparsions //

// booleans & comparisons
// console.log(true, false, "true", "false");

// method can return booleans

// let email = "magnuslundberg86@live.com";
// let names = ["magnus", "mats", "lundberg"];

// let result = email.includes("@");
// let result = names.includes("mats");
// console.log(result);

//comparsion operators
// let age = 38;

// console.log(age == 38);   // TRUE 
// console.log(age == 30);   // FALSE
// console.log(age != 30);   //age is not (!=) = to 30   TRUE
// console.log(age != 38);   // FALSE   
// console.log(age > 30);    //  TRUE - Åldern är äldre än 30  
// console.log(age < 30);    //  FALSE - Åldern mer än 30  
// console.log(age <= 38);    //  TRUE - Mindre eller lika med
// console.log(age >= 38);    //  TRUE - Större än eller lika med 38

// let name = "magnus";

// console.log(name == "magnus"); // TRUE - == Kallas för abstrakt kvalité
// console.log(name == "Magnus"); // FALSE 
// console.log(name > "crystal"); // TRUE - magnus är större än crystal
// console.log(name > "Magnus");  // TRUE - små bokstav > stor bokstav (kolla let name = "magnus")
// console.log(name > "Crystal"); // TRUE



// AVSNITT 16 - loose vs strict comparisons //

// let age = 25;

// loose comparsion (different types can still be equal)

// console.log(age == 25);     // Javascript säger att med eller utan string är lika men -- TRUE
// console.log(age == "25");   // Javascript säger att med eller utan string är lika men -- TRUE

// console.log(age != 25);  //FALSE
// console.log(age != 25);  //FALSE

// Stict comparsion (different types cannot be equal - this is better according to Net Ninja)

// console.log(age === 25);  // This age and value is same as 25 (===) strict rule
// console.log(age === "25"); // FALSE
// console.log(age !== 25);   // FALSE - "Is age not qual to 25"
// console.log(age !== "25"); // TRUE - (Is not) not using strings in 25 



// AVSNITT 17 - type conversations //

// type conversation
// let score = "100";

// score = Number(score);
// console.log(score + 1); //this code will get incatination = 1001 and not 101

// console.log(typeof score); // ett sätt att kolla variabelns = tecken. Alltso score = Number.

// let result = Number("hello");  //NaN
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean("0");  // ("0") TRUE AND ("") FALSE

// console.log(result, typeof result);


// AVSNITT 18 - what is control flow //

// tLoop is a type of control in javascript.


// AVSNITT 19 - for loops //

// for loops
// We dont use ; at end of loop. It needs to be pushed over and over again.
/* for(let i = 0; i < 5; i++){
    console.log("in loop", i);
}

console.log("loop finished"); */

/* const names = ["magnus", "mats", "selma"];   //itiration = 1 cicle through block

for(let i = 0; i < names.length; i++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`
    console.log(html)
} */



// AVSNITT 22 - if statements //

//conditional statements AKA if statements
/* const age = 25;

if(age > 20) {
    console.log("you are over 20 years old"); // Doesnt show in log cause its not TRUE age is not over 20.
}

const ninjas = ["magnus", "selma", "ted", "alicia"];

if(ninjas.length > 3) {
    console.log("that's a lot of ninjas");
} */

/* const password = "p@ss";

if(password.length >= 8) {
    console.log("that password is not long enough!");
} */



// else & else if statement //

//else if statements

/* const password = "p@ssword1234";
// It will never run both. It will only run either of the codes IF or ELSE

if(password.length >= 12) {
    console.log("that password is mighty strong!");
} else if(password.length >= 8) {  // else if means it first runs 12, if its not true. Then it runs 8 etc..
    console.log("that password is long enough!");
} else {   
    console.log("password is not long enough");
} */

