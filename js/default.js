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

$(function () {

	
	reloadList();

	$('.addTodo').on('click', function(){
		var todo = {
			todo: $('#todo').val(),
			done: false
		}
		
		lista.push(todo);
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