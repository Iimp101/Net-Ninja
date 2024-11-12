const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");

form.addEventListener("submit", e => {
    e.preventDefault(); //förhindrar så sidan "refreshar"
    // console.log(username.value);

    // Det går att länka med name eller form
    console.log(form.username.value);
});