$(document).ready(function(){
	var ins = '';
	$.getJSON('http://pokeapi.co/api/v2/pokemon/', function(resp){
		var pokes = [];
		$.each(resp.results, function(p, pokemon){
			pokes.push({name : pokemon.name, url : pokemon.url});
		});
		$.each(pokes, function(i, pokemon){
			var o = i++;
			var count = "";
			ins += '<div class="col s3 center"><div class="card">';
			if(o < 9){
				ins += '<div class="card-image"><img src=" http://assets.pokemon.com/assets/cms2/img/pokedex/full/00' + i + '.png"><span class="card-title purple-text">' + pokemon.name + '</span></div>';
			} else if (o < 100) {
				ins += '<div class="card-image"><img src=" http://assets.pokemon.com/assets/cms2/img/pokedex/full/0' + i + '.png"><span class="card-title">' + pokemon.name + '</span></div>';
			}
			ins += '<div class="card-content"><p class="red-text">' + pokemon.name.toUpperCase() + '</p></div>';
//			ins += '<div class="card-action"><a href="' + pokemon.url + '">' + pokemon.name + '</a></div>';
			ins += '</div></div>';
		});
		$('#insert').html(ins);
	});
});