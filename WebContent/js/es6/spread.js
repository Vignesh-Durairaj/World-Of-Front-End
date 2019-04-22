window.onload = function() {
	let arrOne = [10, 2, 3, 4, 5];

	console.log(arrOne);
	console.log(...arrOne);

	function addNums(a, b, c) {
		return a + b + c;
	}

	console.log(addNums(arrOne));
	console.log(addNums(...arrOne));

	let arrTwo = ['a', 'b', 'c'];
	console.log([arrTwo, 'e' ,'f']);

	let variable = [...arrTwo];
	console.log(arrTwo);
	console.log(variable);
	console.log(...arrOne, ...arrTwo);
	console.log([...arrOne, ...arrTwo]);
	console.log(arrOne.concat(arrTwo));
	console.log(arrTwo.concat(arrOne));
	console.log(Math.min(arrOne));
	console.log(Math.min(...arrOne));
}