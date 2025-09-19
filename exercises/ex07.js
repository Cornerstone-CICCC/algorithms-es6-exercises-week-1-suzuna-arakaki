/*
In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.

Write a switch statement to set the average salary of a person based on their type of completed education.

Afterwards, print the following to the console.

In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement, and watch out for any extra or missing characters (including spaces and punctuation marks). For help, refer to the findings above.

In 2015, a person with a Bachelor's degree earned an average of $59,124/year.

TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US"). 

*/

// This is the code that i wrote before the hint. It worked but, too repetitive and the salary was repeated in each case...
/*
let education = "a Bachelor's degree";
switch (education){
    case "no high school diploma":
        console.log(`In 2015, a person with ${education} earned an average of $25,636/year.`);
        break;
    case "a high school diploma":
        console.log(`In 2015, a person with ${education} earned an average of $35,256/year.`);
        break;
    case "an Associate's degree":
        console.log(`In 2015, a person with ${education} earned an average of $41,496/year.`);
        break;
    case "a Bachelor's degree":
        console.log(`In 2015, a person with ${education} earned an average of $59,124/year.`);
        break;
    case "a Master's degree":
        console.log(`In 2015, a person with ${education} earned an average of $69,732/year.`);
        break;
    case "a Professional degree":
        console.log(`In 2015, a person with ${education} earned an average of $89,960/year.`);
        break;
    case "a Doctoral degree":
        console.log(`In 2015, a person with ${education} earned an average of $84,396/year.`);
        break;
    default:
        console.log("unknown education");
        break;
}
*/

// This is the code after the hint. Is it adjastable and advanced?
let education = "a Professional degree";
let salary ;
switch (education){
    case "no high school diploma":
    case salary = 25636:
        break;
    case "a high school diploma":
    case salary = 35256:
        break;
    case "an Associate's degree":
    case salary = 41496:
        break;
    case "a Bachelor's degree":
    case salary = 59124:
        break;
    case "a Master's degree":
    case salary = 69732:
        break;
    case "a Professional degree":
    case salary = 89960:
        break;
    case "a Doctoral degree":
    case salary = 84396:
        break;
    default:
        salary = null;
        break;
}

if (salary !== null){
    console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`);
} else {
    console.log("unknown education");
}