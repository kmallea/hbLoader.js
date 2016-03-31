# hbLoader

### Requires: 
* [Jquery](http://jquery.com)
* [Handlebars](http://handlebarsjs.com/)

hbLoader simplifies the process of loading in and using handlebars templates within your application.

## Install
---
##### Old fasion
Download the package and include in your project
```
    <script src="js/hbLoader.min.js"></script>
```

##### Bower
Install via bower and then include in your project
```
    bower install hbloader-js
```
```
    <script src="js/hbLoader.min.js"></script>
```

## Methods
---

Loads the templates specified in the template path and automaticly appends to body.
```
	load(templatePath:String, onComplete:function);
```

Insert a rendered template in an element
```
	insert(templateName:String, data:jsonObject, target:Object);
```
returns the html object of the templateName passed in wih the jsonObject
```
   get(templateName:String, data:object);
```
Add a template that already exists in the dom
```
    addTemplate(teplateId:String);
```

### Usage
---

Here is how we make sure the templates are loaded and perform a function on complete

```
	hbLoader.load('view/templates.htm', function(){ 
	    // templates are loaded do something 
    });
```

When you have templates embeded on the page and not in an external template
``
    hbLoader.addTemplate('template1);
``


Insert a template called "userTemplate" into a div with the class .container and a json object of data
```
	hbLoader.insert('userTemplate', jsonData, '.container');
```

Return the html instead of appending to an element
```	
	var renderedHtml = hbLoader.get('templateName', jsonData);
```