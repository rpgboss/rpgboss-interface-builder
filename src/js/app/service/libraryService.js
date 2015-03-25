define([], function() {

	 function LibraryService($rootScope,ProjectService,CanvasElement) {

		return {
			removeElement : function(element) {
				var current = ProjectService.current().resources;
				ProjectService.current().resources = [];
				angular.forEach(current, function(resource, key) {
					console.log(element.index , resource.index)
					if(element.index != resource.index) {
						ProjectService.addResource(resource.name, resource.data);
					}
				});
				var currentScreen = ProjectService.current().canvasElements;
				ProjectService.current().canvasElements = [];
				angular.forEach(currentScreen, function(canvasElement, key) {
					if(canvasElement.resourceindex != element.index) {
						ProjectService.current().canvasElements.push(CanvasService.addElement(element,element.type));
					}
				});
			}
		}

	}

	LibraryService.$inject = ['$rootScope','ProjectService'];

	return LibraryService;

});