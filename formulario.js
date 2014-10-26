var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url	= $('#url'),
	$button = $('#publicar_nav'),
	$list	= $('#contenido'),
	$post	= $('.item').first();


if(localStorage.getItem('autosave')){

	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){

	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());

},1000);
//funciones
function agregarPost(e){
	e.preventDefault();
	var url= $url.val(),
	 	titulo = $titulo.val(),
	 	$clone = $post.clone();

	 	$clone.find('h2 a')
	 		 	.text(titulo)
	 		 	.attr('href',url);
	 $clone.hide();	
	 MostrarOcultarForm();
	 $list.prepend($clone);
	 $clone.fadeIn();
	 $url.val('');
	 $titulo.val('');
	 return false;

}

function MostrarOcultarForm(e){
	e.preventDefault();
	$form.slideToggle();
	$list.slideToggle();
	$titulo.focus();

}

//Eventos

$form.on('submit',agregarPost);

$button.click(MostrarOcultarForm);



