function say_hello(){
	textVal = $('#myText').val()
	if (textVal) {
		alert('Hello ' + textVal)
	} else {
		alert('Hello World !')
	}
}

function change_content(){
	$('#myDiv1').html('New Value');
}