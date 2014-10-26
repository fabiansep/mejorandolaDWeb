var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url	= $('#url'),
	$button = $('#publicar_nav'),
	$list	= $('#contenido'),
	$post	= $('.item').first();

//funciones
function agregarPost(){
	var url= $url.val(),
	 	titulo = $titulo.val(),
	 	$clone = $post.clone();

	 	$clone.find('h2 a')
	 		 	.text(titulo)
	 		 	.attr('href',url);
	 $clone.hide();	

	 $list.prepend($clone);
	 $clone.fadeIn();

}
//Eventos

$form.on('submit',agregarPost);

$button.click(function(){

	/*if($form.css('display') == 'none')
		$form.slideDown();
	else
		$form.slideUp();
	*/
	$form.slideToggle();
	$titulo.focus();
	return false;
})



