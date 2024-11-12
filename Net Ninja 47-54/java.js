/// AVSNITT 47 ///

// get an element ID

// const title = document.getElementById("page-title");
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);
// errors.forEach(error => {
//     console.log(error);
// })

// get elements by their tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[0]);


/// AVSNITT 48 ///


// const para = document.querySelector("p");

// console.log(para.innerText);
// para.innerHTML = "ninjas are awesome";

// const paras= document.querySelectorAll("p");

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += " new text";
// });

// const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += "<h2>THIS IS A NEW H2</h2>";

// const people = ["mario", "luigi", "yoshi"];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });






/**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet enligt nedan. Ersätt det som står med
 * stora bokstäver med rätt sak för varje `pet`.
 *
 * Koden ni skriver ska fungera *oavsett* hur många (eller få) husdjur som
 * finns i listan `pets`! Ni kan testa detta genom att ta bort kommenteringen
 * av det sista husdjuret i listan.
 *
 * 👶🏻 STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * 😊 STEG 2
 * NAME is a SPECIES of AGE year(s) old. His favorite
 * hobbies is to HOBBIES.
 *
 * 🤓 STEG 3 (skriv endast ut owner om det finns någon)
 * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
 * hobbies is to HOBBIES.
 *
 */