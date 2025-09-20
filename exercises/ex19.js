/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

//Is this the function declaration? not inline function expression?
// const myEmotion = function emotions(emotion, laugh){
//     console.log (`I am ${emotion}, ${laugh}!`)
// }
// const laugh = function(num){
//     return ("ha".repeat(num));
// }
// myEmotion("happy", laugh(2));

//after i googled, i found out that the above was wrong.
function emotions(emotion, callback){
    console.log(`I am ${emotion}, ${callback(2)}!`);
}

emotions("happy", function(num){
    return "ha".repeat(num);
});