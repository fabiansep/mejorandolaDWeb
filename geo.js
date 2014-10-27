
$(function(){
	var geo = navigator.geolocation;
	var opciones = {}
	//console.log(geo);

	//funciones

	function geo_error(){

		console.log('Problema con la geolocalizacion');
	}

	function geo_exito(posicion){
		var lat 	= posicion.coords.latitude;
		var lon 	= posicion.coords.longitude;
		var mapa 	= new Image();
		mapa.src	="http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x400&sensor=false&center="+lat+","+lon;

		$('#geo').append(mapa);
		
	}

	geo.getCurrentPosition(geo_exito,geo_error,opciones)

});
