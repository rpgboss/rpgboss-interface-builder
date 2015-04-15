define(['app/model/canvasElement'], function(CanvasElement) {

	 function CanvasService($rootScope,ProjectService) {

	 	function addToStage(element,type) {
				var current = ProjectService.current();
				var ce = new CanvasElement(ProjectService);
				console.log(ProjectService)
				var id = 'element'+current.canvasElements.length;
				ce.init(type, element.index, id, 0, 0, 1, 1);
				ce.index = current.canvasElements.length;
				current.canvasElements.push(ce);
	 	}

	 	function removeFromStage(element) {
				var currentScreen = ProjectService.current().canvasElements;
				ProjectService.current().canvasElements = [];
				angular.forEach(currentScreen, function(canvasElement, key) {
					console.log(canvasElement, element)
					if(canvasElement.index != element.index) {
						ProjectService.current().canvasElements.push(canvasElement);
					}
				});
	 	}

		return {
			addElement : function(element, type) {
				addToStage(element,type);
			},
			removeElement : function(element) {
				removeFromStage(element);
			}
		}

	}

	CanvasService.$inject = ['$rootScope','ProjectService'];

	return CanvasService;

});