/// AVSNITT 75 - sort method ///

// example 1 - sorting strings
// const names = ["magnus", "selma", "natti", "evelina", "cassandra"];

// names.sort();
// names.reverse();
// console.log(names);

// example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();
// // scores.reverse();

// scores.sort((x,y) => x - y); // you can swap to a - b and the order goes from lowest to highest
// console.log(scores);


// // example 3 - sorting objects

//  const players = [
//     {names: "magnus", score: 20},
//     {names: "selma", score: 10},
//     {names: "natti", score: 50},
//     {names: "evelina", score: 30},
//     {names: "cassandra", score: 70},
// ];


// Example 1 with objects
/* players.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
}); */

// example 2 with objects ----- easier coding
// players.sort((a ,b) => b.score - a.score);

// console.log(players);





const students = [
	{
		name: "johan",
		points: 1337,
	},
	{
		name: "Pernilla",
		points: -3,
	},
	{
		name: "alicia",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
	{
		name: "Elliot",
		points: 42,
	},
];

console.log("students before sort:", students);


// students.sort((x,y) =>  x.points - y.points);
// console.log("Students after sort:", students);

// students.sort((x,y) =>  y.points - x.points);
// console.log("Students after sort:", students);

// students.sort((x,y) =>  x.name - y.name);
// console.log("Students after sort:", students);

students.sort((a,b) => {
    
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    } 

    return 0;
    
});
console.log("students after sort", students);