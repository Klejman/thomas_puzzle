$(document).ready(function(){
	$('.tiles').sortable();

	const shuffle = function(){
		let tiles = $('.tiles li');

		for(var i = 0, length = tiles.length; i < length; i++){
			var randIndex = Math.floor(Math.random() * (length - i) + i);
			$(tiles[i]).after($(tiles[randIndex]));
			$(tiles[randIndex - 1]).after($(tiles[i]));
		}
	};

	shuffle();

	$('button').on('click', shuffle);
});