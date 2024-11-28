/// AVSNITT 148 - rest & spread

// rest parameter
const double = (...nums) => {
    console.log(nums);
    // do something
    return nums.map(num => num*2)
}

const result = double(1,2,3,4,5,6,7,8,9);
console.log(result);

// spread syntax (arrays)
const people = ["magnus", "selma", "elliot"];
const members = ["evelina", "cassandra", "natti", ...people];
console.log(members);




// spread syntax (objects)

const person = { name: "magnus", age: 38, oocupation: "studies" };
const personClone = {...person, location: "Malmo"};

console.log(personClone)
