$(document).read(function(){
	$.ajax({
		url: '/notes',
		method: 'get',		
		success: function(data){
			console.log('()()()()', data);
		}
	});
});