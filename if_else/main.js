// *** DIFFERENCE BETWEEN IF AND ELSE IF ***

let x = 5;

// IF:
// if (x === 0) { console.log("First if statement"); }

// if (x === 0) { console.log("Second if statement"); }

// if (x === 0) { console.log("Third if statement"); }

// ELSE IF:
// if (x === 0) {console.log("First if statement");}

// else if (x === 0) {console.log("First else if statement");}

// else if (x === 0) {console.log("Second else if statement");}

// const sayHello = (num) => {

//     if (num === 5) { console.log("Number is equal to 5"); }

//     else if (num > 0) { console.log("Number is greater than 0"); }

//     else if (num < 0) { console.log("Number is less than 0"); }
// }

// console.log(sayHello(5))

const totalMonths = ["January", "February", "Marj", "April", "Mei", "June", "July", "August", "September"];

const changeArray = (num1, num2, num3) => {
    if (num1 > num2) {
        totalMonths.pop();
    }
    else if (num2 > num3 && num2 < 10) {
        totalMonths.shift();
    }
    else if (num2 > num3 || num2 > num1) {
        totalMonths.push("October");
    }
    else {
        console.log("Bad luck!");
    }
    console.log(totalMonths)
}

changeArray(9, 7, 5)
changeArray(4, 7, 5)
changeArray(5, 24, 8)
changeArray(8, 8, 8)