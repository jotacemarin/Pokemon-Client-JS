$(document).ready(function(){
	var ins = ''; // Variable insertable en el DOM
	var pagina_inicial = 'http:/pokeapi.co/api/v2/pokemon/?limit=20&offset='; // GET pokeapi.co : limitar a 721 pokemons
	var pokes = []; // Array con las variables de los pokemon
	var offset = 0; // Variable cursor identificador pagina : en series de 20
	var pagina_actual = pagina_inicial + offset;

	function init(url){
		$.getJSON(url, function(resp){
			$.each(resp.results, function(p, pokemon){
				pokes.push({name : pokemon.name, url : pokemon.url});
			});
			$.each(pokes, function(i, pokemon){
				ins += '<div class="col s6 m4 l3 center"><div class="card">';
				ins += '<div class="card-content"><span class="card-title">' + pokemon.name + '</span><br><a href="' + pokemon.url + '" class="purple-text"><p class="purple-text">' + pokemon.name + '</p></a></div>';
				ins += '</div></div>';
			});
			$('#insert').html(ins);
		});
	}
	
	function anteriorPagina(){ // Cambiar a la anterior pagina : DEPRECATED
		if (offset == 0){

		} else {
			offset -= 20;
			pagina_actual = pagina_inicial + offset;
			init(pagina_actual);
			console.log('anteriorPagina.pagina_actual: ' + pagina_actual);
		}
	}
	function siguientePagina(){ // Cambiar a la anterior pagina
		offset += 20;
		pagina_actual = pagina_inicial + offset;
		init(pagina_actual);
		console.log('siguientePagina.pagina_actual: ' + pagina_actual);
	}


	// ********************** //

	$('#next').on('click', function(){
		// $('#insert').empty();
		siguientePagina();
	});

	init(pagina_inicial);
	
});