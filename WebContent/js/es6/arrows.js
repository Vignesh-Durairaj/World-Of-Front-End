window.onload = function() {
	console.log('An intro to the arrow functions in ECMA6 JavaScript !');

	let myVal = function(x, y)  {
		return x * y;
	}

	console.log(myVal(10, 3));

	let anotherVal = function(z) {
		console.log(z)
	}

	let aFunc = (a) => console.log('Hello ' + a);

	aFunc('Vignesh');
	anotherVal('Durairaj');

	console.log()

	double = x => 2 * x;
	perimeter = (a, b) => 2 * (a + b);

	console.log(`Twice the value of 4 is ${double(4)}`);
	console.log(`Perimeter of rectangle whose side 12 and 3 is ${perimeter(12, 3)}`);

	gamer = {
		name: 'Mario',
		jump(n) {
			let x = 1;
			setInterval(() => {
				if(x <= n) {
					console.log(`${this.name} jumped for the ${x} th time.`);
					x ++;
				}
			}, 1000);	
		}
	};

	setInterval(gamer.jump(12), 1000);
}