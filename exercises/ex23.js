/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Under the first, write a while loop that prints out each item of ingredients.
// let myIngredient = 0;
// while (myIngredient < ingredients.length){
//     console.log(ingredients[myIngredient]);
//     myIngredient++;
// }

// Under the second, write a for loop that does the same thing.
// for (let myIngredient = 0; myIngredient < ingredients.length; myIngredient++){
//     console.log(ingredients[myIngredient]);
// }

// And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
for (let myIngredient = ingredients.length - 1; myIngredient >= 0; myIngredient--){
    console.log(ingredients[myIngredient]);
}