var lista = JSON.parse(localStorage.getItem('lista')) || [];

$(function () {

	console.log(lista);
	reloadList();

	$('.addTodo').on('click', function(){
		var todo = {
			todo: $('#todo').val(),
			done: false
		}
		
		lista.push(todo);
		localStorage.setItem('lista', JSON.stringify(lista));
		reloadList();
	});	
});

var reloadList = function(){
	var lis = [];
	$('.list-item ul').empty();
	lista.forEach(function(item){
		var li = $("<li>");
		var check = $('<input/>', {type: 'checkbox'});

		li.append(check).append(item.todo);

		lis.push(li);
	});
	$('.list-item ul').append(lis);
}