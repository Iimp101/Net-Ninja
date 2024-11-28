/// AVSNITT 74 - find method ///
// const scores = [42, 5, 21, 50, 24, 18, 47, 43];

// const firstHighScore = scores.find(score => score >= 43);
// console.log(firstHighScore);



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

const firstPassedStudent = students.find((student) => {
	return student.points >= 40;
});

console.log("First student who passed the exam:", firstPassedStudent);
