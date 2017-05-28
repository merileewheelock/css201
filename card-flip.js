$(document).ready(function(){
	// $('#parent').click(function(){
	// 	$(this).css({
	// 		'perspective': '500px'
	// 	})
	// })

	$('#change-perspective').change(function(event){
		// console.log(event);
		// console.log($(this).val())
		var newVal = $(this).val();
		$('#parent').css({
			'perspective': newVal
		})
	})

	$('#change-loc').change(function(event){
		// console.log(event);
		// console.log($(this).val())
		var newVal = $(this).val();
		$('#parent').css({
			'perspective-origin': newVal
		})
	})

	$('.card-holder').click(function(){
		// This acts like toggle (e.g. show/hide)
		// Will change between "card-holder flip" and "card-holder"
		$(this).toggleClass('flip');
	})
})