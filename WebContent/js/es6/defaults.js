window.onload = function() {
	
	function calcCircleArea(r, pi=3.164){
		return pi * r * r;
	}

	console.log(calcCircleArea(10));
	console.log(calcCircleArea(10, 10));

	function printEmployee(name="Vignesh", age=32, city) {
		console.log("Name : " + name + "; Age : " + age + "; City : " + city);
	}

	printEmployee();
	printEmployee("Durairaj", "TUP");
	printEmployee("Durairaj", 62, "TUP");

	function printEmployeeCorrectly(name, age, country="India") {
		console.log("Correct Way - Name : " + name + "; Age : " + age + "; Country : " + country);
	}

	printEmployeeCorrectly();
	printEmployeeCorrectly("Roger Ye", 52, "China P.R.");
	printEmployeeCorrectly("Durairaj", 63);
}