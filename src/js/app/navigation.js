function Navigation($scope, ngDialog, DialogService) {
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

		    			if($scope.name !=null && $scope.name != ''
		    				&& $scope.directory !=null && $scope.directory != '') {

			    			Project.create($scope.name, $scope.directory, function(result,err) {
			    				if(result) {
			    					DialogService.confirm('Notice','The project was successfully created.', function() {
			    						ngDialog.close();
			    					});
			    				} else {
			    					DialogService.confirm('Notice','The project couldnt be created at that location. Error:' + err);
			    				}
			    			});
		    			}		else {
		    				DialogService.confirm('Notice','You need to give your project a name and select a folder.');
		    			}
		    		}

		        $scope.cancel = function() {
		        	$scope.closeThisDialog();
		        }
		    }]
		});		
	}

	$scope.save_project = function(evt) {
		evt.preventDefault();

		Project.save(function(result) {
			console.log(result);
		});
	}

	$scope.open_project = function(evt) {
		evt.preventDefault();

		ngDialog.open({
		    template: 'partials/dialog/open_project.html',
		    controller: ['$scope', function($scope) {

		    		$scope.selectProjectFile = function(evt) {
		    			evt.preventDefault();
		    			var dir = document.getElementById('filepath');
			    		dir.addEventListener("change", function(evt) {
					      $scope.filepath = this.value;
					      $scope.$apply();
					    }, false);
		    			dir.click();
		    		}

		    		$scope.open = function() {

		    			if($scope.filepath !=null && $scope.filepath != '') {

			    			Project.load($scope.filepath, function(result,err) {
			    				if(result) {
			    					ngDialog.close();
			    					Library.update();
			    					Canvas.update();
			    				} else {
			    					DialogService.confirm('Notice','Could not load the file. Error:' + err);
			    				}
			    			});
		    			}		else {
		    				DialogService.confirm('Notice','You need to select a project file first.');
		    			}
		    		}

		        $scope.cancel = function() {
		        	$scope.closeThisDialog();
		        }
		    }]
		});		
	}

	$scope.exit = function(evt) {
		evt.preventDefault();
		win.close();
	}
}

Navigation.$inject = ['$scope','ngDialog','DialogService'];