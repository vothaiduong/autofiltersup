
function fillForm() {

	var name = window.document.querySelectorAll('input[type=name]:not([type="hidden"]');
	console.log(name)
	for (var i=0; i<name.length;i++){
		name[i].value = 'VO THAI DUONG'
	}

	var email = window.document.querySelectorAll('input[type=email]:not([type="hidden"]');
	console.log(email)
	for (var i=0; i<email.length;i++){
		email[i].value = 'vothaiduong1991@gmail.com'
	}

	var tel = window.document.querySelectorAll('input[type=tel]:not([type="hidden"]');
	console.log(tel)
	for (var i=0; i<tel.length;i++){
		tel[i].value = '09063972553'
	}

	var radiosArea = window.document.getElementsByName('area');
	console.log('By area',radiosArea)
	if (radiosArea.length) {
		radiosArea[3].checked = true
		for (var i=0; i<radiosArea.length;i++){
			if (radiosArea[i].value === 'fukuoka') {
				console.log('fukuoka')
				radiosArea[i].checked = true
			}
		}
	}

	var radiosLocation = window.document.getElementsByName('location');
	console.log('By location', radiosLocation)
	if (radiosLocation.length) {
		radiosLocation[3].checked = true
		for (var i=0; i<radiosLocation.length;i++){
			if (radiosLocation[i].value === 'fukuoka') {
				console.log('fukuoka')
				radiosLocation[i].checked = true
			}
		}
	}


	var classFormRadio = window.document.getElementsByClassName("form-radio")[0]
	console.log('dung class tim radio', classFormRadio)
	if (classFormRadio) {
		var listRadio = classFormRadio.querySelectorAll("input");
		console.log(listRadio)
		if (listRadio.length) {
			listRadio[3].checked = true
			for (var i=0; i<listRadio.length;i++){
				if (listRadio[i].value === 'fukuoka') {
					console.log('fukuoka')
					listRadio[i].checked = true
				}
			}
		}
	}

	var checkBoxAree = window.document.getElementsByName('agree');
	console.log(checkBoxAree)
	for (var i=0; i<checkBoxAree.length;i++){
		checkBoxAree[i].checked = true
	}

	if (name.length && email.length && tel.length) {
		var btnCommit = window.document.getElementsByName("commit");
		console.log(btnCommit)
		if (btnCommit) {
			console.log(2222)
			setTimeout(() => {
				console.log(3333)
				btnCommit[0].click()
				console.log(44444)
			}, 20)
		}

		var button = window.document.getElementById("commit");
		var myfunc = function(){
			console.log('Click duoc roi nhe')
		}
		button.addEventListener("click",myfunc);
	}
}

chrome.runtime.sendMessage({
    action: "eformFormFill",
    source: fillForm()
});