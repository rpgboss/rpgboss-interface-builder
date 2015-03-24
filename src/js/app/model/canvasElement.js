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

			this.data = 'no content';

			if(angular.isDefined(Project)) {
				if(angular.isDefined(Project.current().resources[this.resourceindex])) {
					this.data = Project.current().resources[this.resourceindex].data;
				} else {
					this.data = 'loaded to fail resource='+this.resourceindex;
				}
			}
		}

	}

	return CanvasElement;

});