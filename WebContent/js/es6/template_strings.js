window.onload = function() {
	
	let normal_string = "String one is here. Let's see how it works";

	let another_string = 'Another string is here. \n And the new line is here'

	console.log(normal_string);
	console.log(another_string);

	function templateStrings() {
		let template_string = `This is a template string!
		And it allows a new line. It's fun`;

		console.log(template_string);
	}

	templateStrings();

	function printPerson(name, age) {
		// Here we use ${} operator to get a handle on the variables.
		console.log(`The name is ${name} and the age is ${age}`);
	}

	printPerson('Vignesh', 32);
}