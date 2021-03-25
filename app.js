var marks1 = parseInt(prompt("Enter Marks 1 out of 100"));
var marks2 = parseInt(prompt("Enter Marks 2 out of 100"));
var marks3 = parseInt(prompt("Enter Marks 3 out of 100"));
var marks4 = parseInt(prompt("Enter Marks 4 out of 100"));
var marks5 = parseInt(prompt("Enter Marks 5 out of 100"));
var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
document.write("Marks 1 : " + marks1 + "<br>");
document.write("Marks 2 : " + marks2 + "<br>");
document.write("Marks 3 : " + marks3 + "<br>");
document.write("Marks 4 : " + marks4 + "<br>");
document.write("Marks 5 : " + marks5 + "<br>");
document.write("Obtained Marks : " + totalMarks + "<br>");
document.write("Total Marks : 500<br>" );
if(totalMarks >= 250){
    document.write("Your grade is 'A'" + "<br>");
}
else if(totalMarks >= 200){
    document.write("Your grade is 'B'" + "<br>");
}
else if(totalMarks >= 150){
    document.write("Your grade is 'C'" + "<br>");
}
else if(totalMarks >= 100){
    document.write("Your grade is 'D'" + "<br>");
}
else if(totalMarks <= 100){
    document.write("Your grade is 'F'" + "<br>");
}
