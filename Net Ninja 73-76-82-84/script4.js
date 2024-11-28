/// AVSNITT 83 - timestamps ///

const before = new Date("September 30 2024 09:59:59");

const now = new Date();
// This will show number of miliseconds
console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);


console.log(mins);
console.log(hours);
console.log(days);

console.log(`The blog was written ${days} days ago`);

// converting timestamps into date objects
const timestamp = 1727683199000;
console.log(new Date(timestamp));