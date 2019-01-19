var lowerCase = /[a-z]/g,
upperCase = /[A-Z]/g,
underScore = /[_]/g,
number = /[0-9]/g,
symbol = /[`~!@#$%^&*()-_=+|]/g,

username1 = '_jakarta',
username2 = 'solo_abc',
username3 = 'soetami_',

password1 = 'wsxE99##',
password2 = 'sw1p3^UP'

function validateUsername(username){
	var caseOne = 0,
	caseTwo = 0,
	caseThree = 0;
	console.log(username);

	if(username.match(lowerCase)){
		caseOne += 1;
	}
	console.log(caseOne);
	if(username.match(underScore)){
		caseTwo += 1;
	}
	console.log(caseTwo);
	if(username.length === 8){
		caseThree += 1;
	}
	console.log(caseThree);

	if(caseOne > 0 && caseTwo > 0 && caseThree > 0){
		return true;
	}
	else{
		return false;
	}
}

function validatePassword(password){
	var caseOne = 0,
	caseTwo = 0,
	caseThree = 0,
	caseFour = 0,
	caseFive = 0;
	console.log(password);

	if(password.match(lowerCase)){
		caseOne += 1;
	}
	console.log(caseOne);
	if(password.match(upperCase)){
		caseTwo += 1;
	}
	console.log(caseTwo);
	if(password.match(number)){
		caseThree += 1;
	}
	console.log(caseThree);
	if(password.match(symbol)){
		caseFour += 1;
	}
	console.log(caseFour);
	if(password.length === 8){
		caseFive += 1;
	}
	console.log(caseFive);

	if(caseOne > 0 && caseTwo > 0 && caseThree > 0 && caseFour > 0 && caseFive > 0){
		return true;
	}
	else{
		return false;
	}
}


console.log(validateUsername(username3));
console.log(validatePassword(password1));