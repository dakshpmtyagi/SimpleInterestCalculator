// Simple Interest Calculator


function mySimpleInterest() {
	let principle = document.getElementById('myInterestPrinciple');
	let rate = document.getElementById('myInterestRate');
	let time = document.getElementById('myInterestTime');
	principle = principle.value;
	rate = rate.value;
	time = time.value;

    var simpleInterestOutput = (principle * rate * time) / 100;
    document.getElementById('myInterestOutput').value = simpleInterestOutput;
}

function myClear() {
	document.getElementById('myInterestOutput').value = '';
	document.getElementById('myInterestPrinciple').value = '';
	document.getElementById('myInterestRate').value = '';
	document.getElementById('myInterestTime').value = '';
}

// ...