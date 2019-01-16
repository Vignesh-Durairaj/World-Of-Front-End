function randomFunc() {
	document.getElementById('myLabel').innerHTML = 'This is some random text'
}

// Lets work on some ECMA6 Scripts
function test() {
	let name = 'Vignesh'
	var anotherName = 'Durairaj'
	midName = 'DV'
}

function popup() {
	let name = 'Vignesh'
	alert(`This is some ${name} here !`)

	var myObj = {name:'Vikhi', age:31, empId:123};
	for (let attr in myObj) {
		console.log(`${attr} : ${myObj[attr]}`);
	}

	var myArr = ['One', 'Two', 'Three'];
	for (let val of myArr) {
		console.log(val);
	}

	for (let char of myArr[1]) {
		console.log(char);
	}
}

const add = (x,y) => console.log(x + y);

let obj1 = {a:1, b:2, c:4};
let obj2 = Object.assign({c:5, d:6}, obj1);
console.log(obj1.c, obj2.d);

