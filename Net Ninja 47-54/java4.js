/// AVSNITT 53 ///


// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log("You clicked me");
// });

// const items = document.querySelectorAll("li");

// items.forEach(item => {
//     item.addEventListener("click", e => {
//         // console.log("item clicked");
//         // console.log(e);
//         // console.log(e.target); // Net ninja prevers e.target cause it doesnt circle through everything
//         // console.log(item);
//         e.target.style.textDecoration = "line-through";

//     });
// });



/// AVSNITT 54 ///


const button = document.querySelector("button");


const ul = document.querySelector("ul");
button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "something new to do";
    // ul.append(li);
    ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach(item => {
    item.addEventListener("click", e => {
        // e.target.style.textDecoration = "line-through";
        e.target.remove();

    });
});