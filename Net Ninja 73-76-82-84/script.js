/// AVSNITT 73 - reduce method  ///

// reduced method
// const scores = [10, 20, 60, 40, 70, 90, 30];

// Example 1

// const result = scores.reduce((acc, curr) => {   // acc = accumilator (running total AKA through each element/object) and curr = current
//     if (curr > 50) {
//         acc++
        
//     }
//     return acc;
// }, 0);

// console.log("There is three scores over 50 =", result);

// Example 2

 // OBJECTS IN ARRAY
const scores = [
    {player: "magnus", score: 50},
    {player: "selma", score: 30},
    {player: "natti", score: 70},
    {player: "evelina", score: 60},
    {player: "magnus", score: 50},
    {player: "selma", score: 30},
    {player: "natti", score: 70},
    {player: "evelina", score: 60},
    {player: "magnus", score: 80},
    {player: "selma", score: 30},
    {player: "natti", score: 70},
    {player: "evelina", score: 60},
    {player: "magnus", score: 90},
    {player: "selma", score: 30},
    {player: "natti", score: 70},
    {player: "evelina", score: 60},
];

const magnusTotal = scores.reduce( (acc, curr) => {
    if (curr.player === "magnus") {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log("Players score is :", magnusTotal);
