var num_correct = 0

var guess = prompt("Is Barack Obama the 44th president of the U.S.? yes or no?");


if (guess === "yes" || guess === "YES" || guess === "y" || guess === "Y")
{
  alert("you are correct")
  num_correct += 1
}

else {
alert("you are wrong")
}


var guess = prompt("Am I from Salem originally? yes or no?");

if (guess === "yes" || guess === "YES" || guess === "y" || guess === "Y")
{
  alert("you are correct")
  num_correct += 1
}

else {
alert("you are wrong")
}


var guess = prompt("Is the Prime Minister of Australia Malcolm Turnbull? yes or no?");

if (guess === "yes" || guess === "YES" || guess === "y" || guess === "Y")
{
  alert("you are correct")
  num_correct += 1
}
else {
alert("you are wrong")
}



alert("Great job " + num_correct + "/3 is your final score")
