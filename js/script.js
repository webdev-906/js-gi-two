// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

const min = (x, y) => Math.min(x, y);
alert(min(5,3) + " is the minimum number");

// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

//x-men evolution characters/students 
let students = ["Jean", "Grey", 17, "Scott", "Summers", 18, "Katherine", "Pryde", 15];
alert(`Hello, my name is ${students[3]} ${students[4]} and I'm ${students[5]} years old.`)


// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

// ask the user to enter a number 1-12
let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let enterMonth = prompt("Enter a number 1-12");

for (let i = 0; i = months.length; i++){
  if (enterMonth == "1"){
    alert(months[0]);
    break;
  }
  else if (enterMonth == "2"){
    alert(months[1]);
    break;
  }
  else if (enterMonth == "3"){
    alert(months[2]);
    break;
  }
  else if (enterMonth == "4"){
    alert(months[3]);
    break;
  }
  else if (enterMonth == "5"){
    alert(months[4]);
    break;
  }
  else if (enterMonth == "6"){
    alert(months[5]);
    break;
  }
  else if (enterMonth == "7"){
    alert(months[6]);
    break;
  }
  else if (enterMonth == "8"){
    alert(months[7]);
    break;
  }
  else if (enterMonth == "9"){
    alert(months[8]);
    break;
  }
  else if (enterMonth == "10"){
    alert(months[9]);
    break;
  }
  else if (enterMonth == "11"){
    alert(months[10]);
    break;
  }
  else if (enterMonth == "12"){
    alert(months[11]);
    break;
  }
  else if(enterMonth != 1<=12) {
    alert("Please enter a number 1-12")
    break;
  } 
}



// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. // Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

// variables 
const tomHeight = 9; 
const tomMass = 8;
const jerryHeight = 10; 
const jerryMass = 45 

// formula results
let tomBMI = tomMass / (tomHeight * tomHeight);
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);

//conditional 
console.log(`Is Tom's BMI higher than Jerry's? ${tomBMI > jerryBMI}`);











