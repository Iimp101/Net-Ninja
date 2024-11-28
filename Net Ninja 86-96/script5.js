/// AVSNMITT 93 - callback hell ///

// const getTodos = (resource, callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
        
//         if (request.readyState === 4 && request.status === 200) {
//             // this gets JSON from somewhere and sends it back to our browser
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback("could not fetch data", undefined);
//         }
//     });
    
//     request.open("GET", resource);
//     request.send();
// };

// // this type of code is called callback hell. Callback in a callback in a callback etc..
// getTodos("todos/magnus.json", (err, data) => {
//     console.log(data);
//      getTodos("todos/selma.json", (err, data) => {
//         console.log(data);
//         getTodos("todos/natti.json", (err, data) => {
//             console.log(data);
//         });
//     });

// });


/// AVSNITT 94 - promise basics ///

const getTodos = (resource, callback) => {

    return new Promise((resolved, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            
            if (request.readyState === 4 && request.status === 200) {
                // this gets JSON from somewhere and sends it back to our browser
                const data = JSON.parse(request.responseText);
                resolved(data);
            } else if (request.readyState === 4) {
                reject("error getting resource");
            }
        });
        
        request.open("GET", resource);
        request.send();
    });  
};

getTodos("todos/magnus.json").then(data => {
    console.log("promise resolved", data);
}).catch((err) => {
    console.log("promise rejected", err);
});


// promise example

const getSomething = () => {

    return new Promise((resolved, reject) => {
        // fetch something/data
        resolved("some data");
        reject("some error instead");
    });

};

// example 1

getSomething().then((data)=> {
    console.log(data);
}, (err) => {
    console.log(err);
});

// example 2

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


/// AVSNITT 95 - chaining promises ///

// const getTodos = (resource, callback) => {

//     return new Promise((resolved, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener("readystatechange", () => {
            
//             if (request.readyState === 4 && request.status === 200) {
//                 // this gets JSON from somewhere and sends it back to our browser
//                 const data = JSON.parse(request.responseText);
//                 resolved(data);
//             } else if (request.readyState === 4) {
//                 reject("error getting resource");
//             }
//         });
        
//         request.open("GET", resource);
//         request.send();
//     });  
// };

// getTodos("todos/magnus.json").then(data => {
//     console.log("promise 1 resolved:", data);
//     return getTodos("todos/selma.json");
// }).then((data) => {
//     console.log("promise 2 resolved", data);
//     return getTodos("todos/natti.json");
// }).then((data) => {
//     console.log("promise 3 resolved", data);
// }).catch((err) => {
//     console.log("promise rejected:", err);
// });