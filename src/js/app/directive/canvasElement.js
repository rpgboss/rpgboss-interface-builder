define([], function() {

	function CanvasElement() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    scope: {
	    	element : "=element"
	    },
	    controller : function($scope, $rootScope) {
	    	
	    }
  };

  return CanvasElement;
}

});