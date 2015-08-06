LIBS = {

	confirmation: function(args){
		/*
		*
		* Available Parameters :
		*---------------------------------------
		* (1) .element -> The mother element for your confirmation. (optional)
		* (2) .text -> Displayed text
		* (3) .okAction -> Performing OK button
		*
		*/

		var el = (
			(args !== null
				&& typeof args === 'object'
				&& typeof args.element !== 'undefined')
			? args.element
			: '#confirmation'
		);

		$(el + ' .text').html(args.text);
		$(el + ' .negative').on('click', function(){
			$(this).closest('.container').slideUp(300, function(){
				$(this).parent().fadeOut();
			});
		});

		$(el + ' .positive').on('click', args.okAction);

		$(el).fadeIn(300, function(){
			$(this).children().slideDown(150);
		});
	}

}