index = {

	init: function(){
		index._open();
	},
	_open: function(){
		$('a').on('click', function(){
			LIBS.confirmation(
				{
					text		: 'Do you really want to delete this file?',
					okAction	: function(){
						alert('You clicked OK button');
					}
				}
			);
		});
	}

};

jQuery(index.init);