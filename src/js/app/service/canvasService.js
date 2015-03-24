define(['app/model/canvasElement'], function(CanvasElement) {

	 function CanvasService($rootScope,ProjectService) {

		return {
			addElement : function(element, type) {
				var current = ProjectService.current();
				var ce = new CanvasElement(ProjectService);
				console.log(ProjectService)
				var id = 'element'+current.canvasElements.length;
				ce.init(type, element.index, id, 0, 0, 1, 1);
				current.canvasElements.push(ce);
			}
		}

	}

	CanvasService.$inject = ['$rootScope','ProjectService'];

	return CanvasService;

});