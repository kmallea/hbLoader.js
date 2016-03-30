/*
	Author: Khary Mallea kharymallea@gmail.com

	DESCRIPTION:
	hbLoader simplifies the process of loading in and using handlebars templates within your application.

	USAGE:

	//make sure the templates are loaded and perform a function on complete
	hbLoader.load('view/templates.htm', function(){ console.log('TEMPLATES LOADED'); });

	//insert a template called "userTemplate" into a div with the class .container and a json object of data
	hbLoader.insert('userTemplate', jsonData, '.container');

	//return the html instead of appending to an element
	hbLoader.addTemplate('template1');

	//return the html instead of appending to an element
	hbLoader.get('templateName', jsonData);
*/

window.hbLoader = {
    insert: function(templateName, data, target, complete) {
        var itm = window.hbLoader.templates[templateName](data);
        if(typeof complete === 'function'){
            
            $(itm.trim()).appendTo(target);
            setTimeout(function(){ complete.call(this); }, 500);
        } else {
            //$(target).show();
            $(itm.trim()).appendTo(target);
        }
    },
    addTemplate: function(tmpId) {
        if (typeof window.hbLoader.templates[tmpId] === 'undefined'){
            window.hbLoader.templates[tmpId] = Handlebars.compile($("#" + tmpId).html());
        }
    },
    get: function(templateName, data) {
        return window.hbLoader.templates[templateName](data).trim();
    },
    load: function(templatePath, complete) {
        $.get(templatePath,function(templates) {
            $('body').append(templates);
            $(templates).each(function(){
                var tmpId = $(this).attr('id');
                if (typeof tmpId !== 'undefined') {
                    window.hbLoader.templates[tmpId] = Handlebars.compile($("#" + tmpId).html());
                }
            });
            if (typeof complete === 'function') {
                complete.call(this);
            }
        });
    },
    templates: {}
};