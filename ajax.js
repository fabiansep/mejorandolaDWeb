$(function(){

	/*
	$.get('logos_footer.html',function(result){

		$('footer').append(result);
	});
		esto es lo mimso
	*/
	$('footer .logos').load('logos_footer.html #cristalab')
	$.get('usuario.json',function(info){

		var avatar= new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		//console.log(info);
		//console.log(avatar);
		$('#avatar').append(avatar);


	});



});


var base_url = "http://query.yahooapis.com/v1/public/yql?"

function obtenerGeoInformacion(lat,lon){

	var query ='SELECT * FROM geo.placefinder WHERE text ="'+lat+', '+lon+'" AND glfags="R"';

	query = encodeURIComponent(query);

	$.ajax({
		url:base_url+"q="+query,
		datatype: "jsonp",
		jsonpCallBack: 'procesarGeoInfo',
		data:{
			format: 'json'
		}


	});

}

function procesarGeoInfo(datos){
	console.log('aaaa');
}
