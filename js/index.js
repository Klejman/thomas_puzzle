$(document).ready(function(){
	$('.tiles').sortable();

	var shuffle = function(){
		var tiles = $('.tiles li');

		for(var i = 0, length = tiles.length; i < length; i++){
			var randIndex = Math.floor(Math.random() * (length - i) + i);
			$(tiles[i]).after($(tiles[randIndex]));
			$(tiles[randIndex - 1]).after($(tiles[i]));
		}
	};

	shuffle();

	$('button').on('click', shuffle);
});