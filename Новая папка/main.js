$('document').ready(function(){
	// $('.part').hover (
		// function(){
			// $('.description').html($(this).attr('description-data'));
			// $('.description').fadeIn(50);
		// },
		// function() {
			// $('.description').fadeOut(50);
		// }
	// )

	
	$('.part').on('click', function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn(50);
	})

	jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".description"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
	
	$('[data-toggle="tooltip"]').tooltip ();
	
});
});


document.querySelector('#part').oninput = function(){
	let val = this.value.trim();
	let = elasticItems = document.querySelectorAll('.part li');
	if (val != ''){
		elasticItems.forEach(function(elem){
			if (elem.innerText.search(val) == -1){
				elem.classicList.add('hide');
			}
			else {
				elem.classList.remove('hide');
			}
		});
	}
	else {
		elasticItems.forEach(function(elem){
			elem.classList.remove('hide');
		});
	}
}