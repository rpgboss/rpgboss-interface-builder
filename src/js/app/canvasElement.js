var CanvasElement = function(type, resourceindex, id, x, y) {

	this.type = type;

	this.resourceindex = resourceindex;

	this.id = id;

	this.x = x;

	this.y = y;

	this.scale = 1;

	this.layer = 1;

	this.addToCanvas = function() {

		var resource = Project.current().resources[this.resourceindex];
		console.log(this,resource);
		var el = $('<div>', {'id':this.id});
		el.css({
			position : 'absolute',
			top : this.x,
			left : this.y,
			zIndex : this.layer
		});
		switch(this.type) {
			case 0:
				var img = $('<img>');
				img.attr('src', resource.data);

				el.append(img);
			break;
		}

		$('#screen').append(el);
	}
}