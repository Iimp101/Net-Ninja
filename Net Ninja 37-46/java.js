/// AVSNITT 38 /// 
// creating an object

// object literals
// Detta kallas för object
// let user = {
//     // name är = keyvalue och namnet value
//     name: "Magnus",
//     age: 30,
//     email: "magnuslundberg86@live.com",
//     location: "malmo",
//     blog: ["Why mac & cheese rules", "10 things to make with marmite"]
// };



// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);


// // const key = "location";
// // console.log(user[key]); // user[key] är samma som user["location"]

// console.log(user["location"]); // user[key] är samma som user["location"]

// user["name"] = "Mange";
// console.log(user["name"]);

// console.log(typeof user);


/// AVSNITT 39-40 /// 
// This keyword

// Olika sätt hur man skriver funktioner - STEG 1

// let user = {
//     // name är = keyvalue och namnet value
//     name: "Magnus",
//     age: 30,
//     email: "magnuslundberg86@live.com",
//     location: "malmo",
//     blogs: ["Why mac & cheese rules", "10 things to make with marmite"],
//     login: function() {
//         console.log("the user logged in");
//     },
//     logout: function() {
//         console.log("the user logged out");
//     },
//     logBlogs: function() {
//         // console.log(this.blogs);
//         console.log("This user has written the following blogs:");
//         // forEach är en array som skapades i blogs
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);
// This was part of episode 37.
// user.login();
// user.logout();

//  Olika sätt hur man skriver funktioner - STEG 2

// let user = {
//     // name är = keyvalue och namnet value
//     name: "Magnus",
//     age: 30,
//     email: "magnuslundberg86@live.com",
//     location: "malmo",
//     blogs: ["Why mac & cheese rules", "10 things to make with marmite"],
//     login() {
//         console.log("the user logged in");
//     },
//     logout() {
//         console.log("the user logged out");
//     },
//     logBlogs() {
//         // console.log(this.blogs);
//         console.log("This user has written the following blogs:");
//         // forEach är en array som skapades i blogs
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);



/// AVSNITT 41 ///

// const blogs = [
//     { title: "Why mac & cheese rules", likes: 30},
//     { title: "10 things to make with marmite", likes: 50}
// ];


// let user = {
//     // name är = keyvalue och namnet value
//     name: "Magnus",
//     age: 30,
//     email: "magnuslundberg86@live.com",
//     location: "malmo",
//     blogs: [
//         { title: "Why mac & cheese rules", likes: 30},
//         { title: "10 things to make with marmite", likes: 50}
//     ],
//     login() {
//         console.log("the user logged in");
//     },
//     logout() {
//         console.log("the user logged out");
//     },
//     logBlogs() {
//         // console.log(this.blogs);
//         console.log("This user has written the following blogs:");
//         // forEach är en array som skapades i blogs
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.logBlogs();



/// AVSNITT 42 ///
// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E)

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));



/// AVSNITT 43 ///
// primitive vs reference types 

/* 
PRIMITIVE TYPES                RERFERNCE TYPES

- numbers                   - all types of objects
- strings                     - object literals
- booleans                    - arrays
- null                        - functions
- undefined                   - dates
- symbols                     - all other objects

*/

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

//reference types 

// const userOne = { name: "magnus", age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = "selma";

// console.log(userOne, userTwo);



/// AVSNITT 45 ///
// the DOM explained

/* 

                html (root node)

        head                    body

    title               h1      div     div
  
 (text node)          --//--     p       p

                              --//--  --//--

*/


