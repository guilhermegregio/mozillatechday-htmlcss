var $  = function (elem) {
	return document.querySelectorAll(elem);
}


var lista = [
	{
		todo: 'adsfksjldfhlkjadsfhkladsjf',
		done: true
	},
	{
		todo: 'outro',
		done: false
	}
]

window.load = function () {

	var lis = [];
	lista.forEach(function(item){
		var li = "<li>" + item.todo + "</li>";
		lis.push(li);
	});

	$('.list-item ul')[0].append(lis);	
}

