window.onload = function() {
	
	let normal_string = "String one is here. Let's see how it works";

	let another_string = 'Another string is here. \n And the new line is here';

	console.log(normal_string);
	console.log(another_string);

	function templateStrings() {
		let template_string = `This is a template string!
		And it allows a new line. It's fun`; // New line will not be escaped

		console.log(template_string);

		// And guess what ... we can even evaluate some mathematical expression within variables
		console.log(`The sum value is ${1 + 4}`);

		// Where as normal way is ..
		console.log('The sum value is ' + (1 + 4)); // More annoying isn't it ?

		// How to print the special charactes and escaping literals
		console.log(`The variables are enclosed inside \${} operator. And slashes will be '\\'`);
	}

	templateStrings();

	function printPerson(name, age) {
		// Here we use ${} operator to get a handle on the variables.
		console.log(`The name is ${name} and the age is ${age}`);
	}

	printPerson('Vignesh', 32);
}