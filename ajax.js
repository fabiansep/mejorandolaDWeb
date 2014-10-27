$(function(){

	$.get('logos_footer.html',function(result){

		$('footer').append(result);
	});

	$.get('usuario.json',function(info){

		var avatar= new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		console.log(info);
		console.log(avatar);
		$('#avatar').append(avatar);

	});
});