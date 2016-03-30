hbLoader
========
Requires: [Jquery](https://jquery.com)

A loader object for handlebars.

hbLoader simplifies the process of loading in and using handlebars templates within your application.

Methods
-------

	load(templatePath:String, onComplete:function);
Loads the templates specified in the template path and automaticly appends to body.

	insert(templateName:String, data:jsonObject, target:Object);
The templateName that is passed in is called and assigned the jsonObject passed in with the data and then appends the result to the passed in "target"

    addTemplate(teplateId);
add a template that already exists in the dom

	get(templateName, data);
returns the html object of the templateName passed in wih the jsonObject

Usage
-----

Here is how we make sure the templates are loaded and perform a function on complete

	hbLoader.load('view/templates.htm', function(){ console.log('TEMPLATES LOADED'); });

    hbLoader.addTemplate('template1);
Adds a template to the instance of hbLoader

Insert a template called "userTemplate" into a div with the class .container and a json object of data

	hbLoader.insert('userTemplate', jsonData, '.container');

Return the html instead of appending to an element
	
	hbLoader.get('templateName', jsonData);