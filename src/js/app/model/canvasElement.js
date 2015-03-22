define([], function() {

	function CanvasElement(Project) {

		this.init = function(type, resourceindex, id, x, y, scale, layer) {
			this.type = type;

			this.resourceindex = resourceindex;

			this.id = id;

			this.x = x;

			this.y = y;

			this.scale = scale;

			this.layer = layer;
		}

	}

	return CanvasElement;

});