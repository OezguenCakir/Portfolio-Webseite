// calc years of work experience
var date1 = new Date("2022-07-01");
var date2 = new Date();
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
var Difference_In_Years = Difference_In_Days / 365.25;
document.getElementById("years_experience").innerHTML = Difference_In_Years.toFixed(1).replace('.', ',') + " Jahre";
