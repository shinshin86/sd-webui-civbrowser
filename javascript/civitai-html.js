"use strict";

function select_model(model_name) {
	console.log(model_name);
	let flag = model_name.split(':');
	switch (flag[0]) {
		case 'Index1':
			var model_dropdown = gradioApp().querySelector('#eventtextIndex1 textarea');
			if (model_dropdown && model_name) {
				model_dropdown.value = model_name;
				updateInput(model_dropdown);
			}
			break;
		case 'Index2':
			var model_dropdown = gradioApp().querySelector('#eventtextIndex2 textarea');
			if (model_dropdown && model_name) {
				model_dropdown.value = model_name;
				updateInput(model_dropdown);
			}
			break;
	}
}

function copyInnerText(node) {
	if (node.nextSibling != null) {
		return navigator.clipboard.writeText(node.nextSibling.innerText).then(
			function () {
				alert("Copied infotext");
			}
		).catch(
			function (error) {
				alert((error && error.message) || "Failed to copy infotext");
			}
		)
	}
}