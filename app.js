function trueWage(){
	var hoursWorked = parseFloat(document.getElementById("hoursWorked").value);
	var hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
	var tips = parseFloat(document.getElementById("tips").value);
	var submit = document.getElementById("submit");
	var totalHourly = hourlyWage*hoursWorked;
	var totalEarnings = totalHourly+tips;
	var trueHourly = totalEarnings/hoursWorked;
	var roundedHourly = trueHourly.toFixed(2)

	document.getElementById("results").innerHTML = "You earned $"+totalEarnings+" today, averaging $"+roundedHourly+" per hour.";
	submit.innerHTML = "Reset";
	submit.onclick = startOver;

	if (roundedHourly > 30) {
		drawBoxes("rbr gyg");
	}
}

function startOver(){
	document.getElementById("wageForm").reset();
	document.getElementById("results").innerHTML = ""	
	submit.innerHTML = "Submit";
	submit.onclick = trueWage;
}

