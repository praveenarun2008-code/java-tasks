
var student = { name: '', birthYear: '', city: '' };
var quotes = [
	"Keep going!",
	"Coding is fun!",
	"You can do it!",
	"Never give up!",
	"Practice makes perfect!"
];
function showTab(tab) {
	var tabs = document.getElementsByClassName('tab-content');
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].style.display = 'none';
	}
	document.getElementById(tab).style.display = 'block';
}
document.getElementById('profileForm').onsubmit = function(e) {
	e.preventDefault();
	var name = document.getElementById('name').value;
	var year = document.getElementById('birthYear').value;
	var city = document.getElementById('city').value;
	var msg = document.getElementById('profileResult');
	if (name && year && city) {
		student.name = name;
		student.birthYear = year;student.city = city;
		msg.innerHTML = 'Hi ' + name + ' from ' + city + '!';
	} else {
		msg.innerHTML = 'Please fill everything!';
	}
};
function checkAge() {
	var msg = document.getElementById('ageResult');
	if (!student.name || !student.birthYear) {
		msg.innerHTML = 'Fill your profile first!';
		return;
	}
	var now = new Date().getFullYear();
	var age = now - parseInt(student.birthYear);
	if (isNaN(age) || age < 0 || age > 120) {
		msg.innerHTML = 'Year is weird!';
		return;
	}
	if (age >= 18) {
		msg.innerHTML = 'You are ' + age + ' years old. You are an adult!';
	} else {
		msg.innerHTML = 'You are ' + age + ' years old. Not an adult yet!';
	}
}

function showGreeting() {
	var msg = document.getElementById('greetingResult');
	if (!student.name) {
		msg.innerHTML = 'Fill your profile first!';
		return;
	}
	var h = new Date().getHours();
	var greet = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
	msg.innerHTML = greet + ', ' + student.name + '!';
}

document.getElementById('calcForm').onsubmit = function(e) {
	e.preventDefault();
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);
	var op = document.getElementById('operation').value;
	var msg = document.getElementById('calcResult');
	if (isNaN(n1) || isNaN(n2)) {
		msg.innerHTML = 'Type both numbers!';
		return;
	}
	if (op === 'div' && n2 === 0) {
		msg.innerHTML = 'No dividing by zero!';
		return;
	}
	var ans = 0;
	if (op === 'add') ans = n1 + n2;
	if (op === 'sub') ans = n1 - n2;
	if (op === 'mul') ans = n1 * n2;
	if (op === 'div') ans = n1 / n2;
	msg.innerHTML = 'Answer: ' + ans;
};

function showQuote() {
	var msg = document.getElementById('quoteResult');
	var i = Math.floor(Math.random() * quotes.length);
	msg.innerHTML = quotes[i];
}

function showJSON() {
	var msg = document.getElementById('jsonResult');
	if (!student.name || !student.birthYear || !student.city) {
		msg.textContent = 'Fill your profile first!';
		return;
	}
	msg.textContent = JSON.stringify(student, null, 2);
}

showTab('profile');
 
