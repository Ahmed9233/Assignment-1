
// let a = +prompt("Write first Number : ");
// let b = +prompt("Write second Number : ");

// if (a > b) {
//     console.log(a + " is a large number");
// }
// else if (a < b) { console.log(b + " is a large number") };



// let floo = +prompt("Write any number : ");

// if (floo >= 0) {
//     alert("This sign is + ")
// }
// else { alert("This sign is - ") }



let firstnum = +prompt("Write first number : ");
let secondnum = +prompt("Write second number : ");
let thirdnum = +prompt("Write third number : ");
let fourthnum = +prompt("Write fourth number : ");
let fivthtnum = +prompt("Write fivth number : ");

let arr = [firstnum, secondnum, thirdnum, fourthnum, fivthtnum]

if (firstnum > secondnum && firstnum > thirdnum && firstnum > fourthnum && firstnum > fivthtnum) {
    console.log(firstnum + " is greather than among");
}
else if (secondnum > firstnum && secondnum > thirdnum && secondnum > fourthnum && secondnum > fivthtnum) { console.log(secondnum + " is greather than among"); }
else if (thirdnum > firstnum && thirdnum > secondnum && thirdnum > fourthnum && thirdnum > fivthtnum) { console.log(thirdnum + " is greather than among"); }
else if (fourthnum > firstnum && fourthnum > secondnum && fourthnum > thirdnum && fourthnum > fivthtnum) { console.log(fourthnum + " is greather than among"); }
else if (fivthtnum > firstnum && fivthtnum > secondnum && fivthtnum > thirdnum && fivthtnum > fourthnum) { console.log(fivthtnum + " is greather than among"); }


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is Even");
//     }
//     else { console.log(i + " is Odd") }

// }


// let avrmarks = +prompt("Write your average marks here : ");
// if (avrmarks <= 60) { document.write("Your grade is F") }
// else if (avrmarks <= 70) { document.write("Your grade is D") }
// else if (avrmarks <= 80) { document.write("Your grade is C") }
// else if (avrmarks <= 90) { document.write("Your grade is B") }
// else if (avrmarks <= 100) { document.write("Your grade is A") }




// for (let i = 0; i < 6; i++) {
//     star = "";
//     for (let j = 0; j < i; j++) {
//         star = star + "* ";

//     }
//     console.log(star);
// }
