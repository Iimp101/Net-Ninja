/// AVSNITT 90 - JSON data ///

const getTodos = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        
        if (request.readyState === 4 && request.status === 200) {
            // this gets JSON from somewhere and sends it back to our browser
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("could not fetch data", undefined);
        }
    });
    
    request.open("GET", "todos.json");
    request.send();
};


getTodos((err, data) => {
    console.log("callback fired");

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

