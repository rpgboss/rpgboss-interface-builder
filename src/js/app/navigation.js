app.controller('navigation', function($scope, ngDialog) {
	$scope.new_project = function(evt) {
		evt.preventDefault();

		ngDialog.open({
		    template: 'partials/dialog/new_project.html',
		    controller: ['$scope', function($scope) {

		    		$scope.selectDir = function(evt) {
		    			evt.preventDefault();
		    			var dir = document.getElementById('directory');
			    		dir.addEventListener("change", function(evt) {
					      $scope.directory = this.value;
					      $scope.$apply();
					    }, false);
		    			dir.click();
		    		}

		    		$scope.create = function() {
		    			
		    		}

		        $scope.cancel = function() {
		        	ngDialog.close();
		        }
		    }]
		});		
	}

	$scope.exit = function(evt) {
		evt.preventDefault();
		win.close();
	}
});