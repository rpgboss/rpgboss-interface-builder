var Library = (function() {

	function allowDrop(ev) {
	    ev.preventDefault();
	    $('#screen').addClass('droppable');
	}

	function dragLeave(ev) {
	    ev.preventDefault();
	    $('#screen').removeClass('droppable');
	}

	function drag(ev) {
			console.log(ev)
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
			$('#screen').removeClass('droppable');
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    console.log('dropped')
			var X = event.layerX - $(event.target).position().left;
			var Y = event.layerY - $(event.target).position().top;	    
	    var element = Project.addCanvasElement(data, X, Y);
	    element.addToCanvas();
	}

	return {
		update : function() {
			var element = $('#library'),
					screenEl = $('#screen');
			element.html('');

			var resources = Project.current().resources;
			console.log(resources)
			$.each(resources, function(key, resource) {
				var div = $('<div>',{'class':'libelement col-xs-3',draggable:true,id:resource.index}),
						img = $('<img>',{draggable:false}),
						text = $('<span>',{draggable:false});

				img.attr('src', resource.data);

				div[0].ondragstart = drag;
				screenEl[0].ondragover = allowDrop;
				screenEl[0].ondrop = drop;
				screenEl[0].ondragleave = dragLeave;

				text.text(resource.name);

				div.append(img,text);

				element.append(div);
			});
		}
	}

})();