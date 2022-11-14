# L03HandsOn
Decision Making Hands-On

Requirements
Part 1
Create a switch..case statement to check against highSchoolGrade within the switch statement. Then, within the case statements, set yourGrade to the appropriate string. Add your switch..case code to the provided updateGrade() function:

in case 9, assign "Freshman" to the yourGrade variable
in case 10, assign "Sophomore" to the yourGrade variable
in case 11, assign "Junior" to the yourGrade variable
in case 12, assign "Senior" to the yourGrade variable
include a default case that assigns "Invalid" to yourGrade.
Part 2
Convert the following if..else into a ternary within the provided name() function. Don't forget to continue to use the document.getElementById() statements within the if..else blocks.

script.js file:

function name() {
  let firstName;
  if (firstName === "John") {
    document.getElementById("demo").innerHTML = "Hello John!";
  }
  else {
    document.getElementById("demo").innerHTML = "Hello Human!";
  }
}
