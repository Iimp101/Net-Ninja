/// AVSNITT 85 - dates-fns ///
const now = new Date();

// console.log(dateFns.isToday(now));  // this returns a boolean TRUE

// formatting options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));

// dateFns Day / date / month / year
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

// comparing dates


// When it was written it stood 2 minutes ago and it refers 
// to "const now = new Date();"
const before = new Date("November 14 2024 20:07");
console.log(dateFns.distanceInWords(now, before));


console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
