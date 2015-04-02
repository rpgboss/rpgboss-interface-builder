define([], function() {

	function Screen($scope, ngDialog, ProjectService,$rootScope) {

		$rootScope.$on('project-loaded', function() {
			$scope.project = ProjectService.current();
			$scope.$apply();
		});

		$rootScope.$on('element-drag', function(evt, data) {
			console.log('drag',evt,data)
			data.target.style.top = data.element.y + 'px';
			data.target.style.left = data.element.x + 'px';
		});

		$rootScope.$on('element-resize', function(evt, data) {
			console.log('resize',evt,data)
			data.target.style.width = (data.element.width * data.element.scale) + 'px';
			data.target.style.height = (data.element.height * data.element.scale) + 'px';
		});

		$scope.resize = function(evt, element) {
			console.log(evt, element);
			var width = $(evt.currentTarget).css('width');

			element.scale = parseInt(width) / element.width;
		}

		$scope.drag = function(evt, element) {
			console.log(evt, element);
			var y = $(evt.currentTarget).css('top');
			var x = $(evt.currentTarget).css('left');

			element.x = parseInt(x);
			element.y = parseInt(y);
		}

		$scope.imageLoaded = function(evt, element) {
			var width = evt.currentTarget.naturalWidth;
			var height = evt.currentTarget.naturalHeight;
			element.width = width;
			element.height = height;

			$rootScope.$broadcast('element-resize', {element:element, target:evt.currentTarget.parentNode});

			evt.currentTarget.style.width = '100%';
		}

	}

	Screen.$inject = ['$scope','ngDialog','ProjectService','$rootScope'];

	return Screen;

});