window.onload = function() {
	console.log('Welcome to some Object enhancement in ES6 !');

	// The usual way
	class Employee {
		name = ''; id = 0; age = 0; salary = 0;

		show = function() {
			return this.name + '; ' + this.id + '; ' + this.age + '; ' + this.salary;
		}
	}

	let emp = new Employee();
	emp.name = 'Vignesh';
	emp.id = 1444058;
	emp.age = 32;
	emp.salary = 21000;

	console.log(`Employee ${emp.name} - ${emp.id} of age ${emp.age}, who earns ${emp.salary}`);
	console.log(emp.show());

	// Now lets do in ECMA6 Scripting way

	let hour = 3;
	let minute = 20;
	let format = '12'
	let meridian = 'PM'

	let time = {
		hour, minute, format, meridian, 
		show() {
			return `${hour}:${minute} ${format == "12" ? meridian : ""}`;
		}
	}

	time.show();

}