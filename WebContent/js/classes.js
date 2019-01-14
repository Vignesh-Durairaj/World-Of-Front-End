var person = {
	firstName:'John',
	lastName:'Smith',
	age:34,
	empId:1
};

// Each of the above will become a property for person object. No class definition
// Where in below a class defenition is provided
function Person(firstName, lastName, age, empId){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.empId = empId;

	this.repr = function() {
		return this.lastName + ', ' + this.firstName
	}
}

function getProperty(prop) {
	return person[prop];
}

function createPerson() {
	alert('Hi !')
	var p1 = new Person('Vignesh', 'Durairaj', 31, 1444058);
	alert(p1.firstName + ' ' + p1.lastName);
	alert(p1.repr());
}

// Certain other core objects in JavaScript
function array_test() {
	var languages = new Array('Java', 'Python', 'Perl', 'Bash');
	for (i = 0; i < languages.length; i++) {
		alert(languages[i]);
	}

	var otherLang = ['English', 'Mandarin', 'Hokkein', 'Cantonese', 'Tamil']
	alert(otherLang[4])
	otherLang[5] = 'Hindi'
	document.write(otherLang[5])
	alert(languages.concat(otherLang))
}

function associativeArrays() {
	var country = [];
	country['India'] = 91
	country['Hong Kong'] = 85
	country['USA'] = 1

	alert(country.length); // return 0
}

function mathObjects() {
	alert(Math.PI)
	alert(Math.E)

	var num = prompt('Input a number')
	alert(Math.sqrt(num))
}

function repeatCall() {
	setInterval(randomFunc, 2000);
}

function dateObjects() {
	alert(new Date());
	var newDate = new Date(1987,06,21);
	alert(newDate);
	alert(newDate.getDay()); // Starts from 0
}

function randomFunc() {
	alert(Math.ceil(Math.random() * 100));
}
