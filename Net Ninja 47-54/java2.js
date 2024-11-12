/// AVSNITT 49 ///

// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "TheNet Ninja Website";

// const mssg = document.querySelector("p");

// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green");


/// AVSNITT 50 ///

// const title = document.querySelector("h1");

// // title.setAttribute("style", "margin: 2rem;");

// console.log(title.style);
// console.log(title.style.color);


// // A better way to style in html
// title.style.margin = "2rem";
// title.style.color = "crimson";
// title.style.fontSize = "60px";
// title.style.margin = ""; // removes property



/// AVSNITT 51 ///

// const content = document.querySelector("p");

// // A smple way to add and remove classList in p tagg in HTML
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

// const paras = document.querySelectorAll("p");

// paras.forEach(p => {
//    if (p.textContent.includes("error")) {
//     p.classList.add("error");
//    }
//    if (p.textContent.includes("success")) {
//     p.classList.add("success");
//    }
   
// });

// const title = document.querySelector(".title");
// title.classList.toggle("test");
// title.classList.toggle("test");

/// AVSNITT 52 ///
/*       NODE TREE

            HTML (Root node)

    HEAD            BODY

TITLE         H1    DIV    DIV    ----- siblings

                     p      p    ------ child to div / siblings
*/ 