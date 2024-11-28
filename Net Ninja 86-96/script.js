/// AVSNITT 87 - async in action ///


// This code fires 2 seconds after the counting 1,2,3,4 => 

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("Callback function fired");
// }, 2000);

// console.log(3);
// console.log(4);


/// AVSNITT 89 - making http requests ///

// this creates a request object
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});


request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();



/* 
    XMLHttpRequest.readyState info
    0 = UNSENT - Client has been created open() not called yet
    1 = OPENED - open() has been called
    2 = HEADERS_RECIVED - send() has been called, and headers and statues are available
    3 = LOADING - Downloading; responsText holds partial data
    4 = DONE - The operation is completed 


*/
