const article = document.querySelector("article");

// console.log(article.children);
// console.log(Array.from(article.children))
// console.log(article.children);


     // Parent and child relationship
// Array.from(article.children).forEach(child => {
//     child.classList.add("article-elements");
// });

const title = document.querySelector("h2");

console.log(title.parentElement); // Parent to title
console.log(title.parentElement.parentElement); // parent to title > article = body
console.log(title.nextElementSibling); // first p tag in h2
console.log(title.previousElementSibling); // p tag above h2. Right now it says null cause there is no p tag above

// chaining
console.log(title.nextElementSibling.parentElement.children);