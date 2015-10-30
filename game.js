






var myconsole = document.getElementById("myconsole");
function mylog(v) {
 myconsole.innerHTML += (v + "<br>");
}


function questionGame(){

var num_correct = 0

var guess = prompt("Is Barack Obama the 44th president of the U.S.? yes or no?");


if (guess === "yes" || guess === "YES" || guess === "y" || guess === "Y")
{
  mylog("you are correct")
  num_correct += 1
}

else {
mylog("you are wrong")
}


var guess = prompt("Am I from Salem originally? yes or no?");

if (guess === "yes" || guess === "YES" || guess === "y" || guess === "Y")
{
  mylog("you are correct")
  num_correct += 1
}

else {
mylog("you are wrong")
}


var guess = prompt("Is the Prime Minister of Australia Malcolm Turnbull? yes or no?");

if (guess === "yes" || guess === "YES" || guess === "y" || guess === "Y")
{
  mylog("you are correct")
  num_correct += 1
}
else {
mylog("you are wrong")
}



mylog("Great job " + num_correct + "/3 is your final score")

}
