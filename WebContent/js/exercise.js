function say_hello() {
	alert('Hello World')
	document.write("<h2>Here I've written a text in the document</h2>")
}

function say_hello(name) {
	if (name) {
		var msg = 'Hello ' + name + ' !'
	} else {
		msg = 'Hello World !'
	}

	alert(msg)
}

function variable_test() {
	var x = 10
	alert('Varibale is : ' + x)

	var y
	alert('And another Variable is : ' + y)

	var num = 22.486
	var str = 'Vignesh Durairaj'
	document.write('\'The value is\' : ' + num + ' : ' + str)
}

function operations() {
	var a = 5, b = 10
	alert(a + b)
	alert(eval('a * b'))
	alert(eval('')) // undefined
	alert('Test' * a) // NaN
}

function checkFunc() {
	alert('2' == 2)
	alert('2' === 2)
}

function logics() {
	var a = '10', b = 100

	var one = (a === b) ? 'Same' : 'Not Same'
	alert(one)

	if (a == b) {
		var myText  = 'Same value. Not sure the type is !'
	} else {
		myText = 'They are not same'
	}

	document.getElementById('myLabel').textContent = myText

	var c = 10
	if (a == c) {
		myText = 'a and c Values are same'
	} else if (a == b) {
		myText = 'a and b values are same'
	} else {
		myText = 'None of the values are same'
	}

	alert(myText)

	var some = '15'

	switch(some){
		case 10:
			myText = 'The value of 10'
			break;
		case 11:
			myText = 'The value is 11'
			break;
		case 15:
			myText = 'The value is 15'
			break;
		case '15':
			myText = 'The value is 15 of type String'
			break;
		case 20:
			myText = 'The value is 20'
			break;
		default:
			myText = 'None of the value is specified !'
			break;
	}

	alert(myText)

	for (i = 1; i <= 30; i++) {
		document.write(i + '<br/>')
	}

	while(i <= 35) {
		alert(i)
		i++
	}

	do {
		alert(i)
		i ++
	} while (i < 40)

	alert('End of loops')
}

function popups() {
	alert('This is an alert popup')

	var x = prompt('Enter a Value for varOne', '1');
	var y = prompt('Enter a Value for varTwo', '2');

	var input = confirm('Do you want to show the popup ?')
	if (input) {
		alert(addUp(x,y))
	}

}

function addUp(a, b) {
	return a + b
}