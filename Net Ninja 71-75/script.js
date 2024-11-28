/// AVSNITT 71 - filter method ///

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//     return score > 30;
// });

// console.log(filteredScores);


// const users = [
//     {name: "Magnus", premium: true},
//     {name: "Selma", premium: false},
//     {name: "Natti", premium: false},
//     {name: "Evelina", premium: true}
// ];

// const premiumUsers = users.filter (user => user.premium);

// console.log(premiumUsers);


const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Pernilla",
		points: -3,
	},
	{
		name: "Alicia",
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

// Get all students which are godkända (>= 40)

const passed = students.filter(student => student.points >= 40);

console.log(passed);



