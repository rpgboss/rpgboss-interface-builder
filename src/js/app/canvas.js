var Canvas = (function() {

	return {
		update : function() {
			var elements = Project.current().canvasElements;
			Project.setData({
				canvasElements : []
			});
			$.each(elements, function(key, celement) {
				var element = Project.addCanvasElement(celement.resourceindex, celement.x, celement.y);
				element.addToCanvas();
			});
		}
	}

})();