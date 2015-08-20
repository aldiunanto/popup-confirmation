# Popup Confirmation
A simple popup confirmation using jQuery

Usage
------------

Import **jQuery Library** (in this case I used jquery-1.10.2 version) and `libs.js`
```html
<script type="text/javascript" src="libs.js"></script>
```

Load the stylesheet
```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

Create your 'confirmation' element.
```html
<div id="confirmation">
 	<div class="container">
 		<div class="text"></div>
 		<div class="actions">
 			<button class="btn default negative">cancel</button>
 			<button class="btn primary positive">ok</button>
 		</div>
 	</div>
</div>
```

Then, call it with your event handler. e.g.
```javascript
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
```

Note
----------------

This property (i.e. `LIBS.confirmation`) required 2 parameters and 1 optional parameter.

1. `.text` -> Your message to be displayed (required)
2. `.okAction` -> The callback when user click 'OK' button (required)
3. `.element` -> The mother element for your own confirmation HTML tag. (optional)

*If you have a specific element with certain `class` or `id` for your `.element` (e.g. `#confir` or `.confir`), then you need to set it manually like :
```javascript
LIBS.confirmation(
		{
		 element : '#confir', //or .confir
			text		: 'Do you really want to delete this file?',
			okAction	: function(){
				alert('You clicked OK button');
			}
		}
	);
```

If you didn't do so, it will assume your `.element` has an ID called **confirmation**.

Enjoy!

**Contributor and owner: [Aldi Unanto](http://aldiunanto.com) - aldiunanto@yahoo.com**
