requirejs([
	'app/controller/library',
	'app/controller/navigation',
	'app/controller/properties',
	'app/controller/screen',

	'app/service/projectService',
	'app/service/dialogService',
	'app/service/appSettingsService',
	'app/service/canvasService',
	'app/service/libraryService',

	'app/directive/resizeable',
	'app/directive/canvasElement',
	'app/directive/events'
], function(
	Library,
	Navigation,
	Properties,
	Screen,

	ProjectService,
	DialogService,
	AppSettingsService,
	CanvasService,
	LibraryService,

	resizeable,
	canvasElement,
	events
) {

	app.controller('Navigation',Navigation);
	app.controller('Properties',Properties);
	app.controller('Library',Library);
	app.controller('Screen',Screen);

	app.service('DialogService',DialogService);
	app.factory('ProjectService',ProjectService);
	app.factory('AppSettingsService',AppSettingsService);
	app.factory('CanvasService',CanvasService);
	app.factory('LibraryService',LibraryService);

	app.directive('resizeable',resizeable);
	app.directive('canvasElement',canvasElement);
	app.directive('events',events);

	app.run(function($rootScope) {
		$rootScope.openLinkInBrowser = function(link) {
			gui.Shell.openExternal(link);
		}

		$rootScope.changeTitle = function(text) {
			document.title = 'RPGBOSS Interface Builder : V' + appVersion + text;
		}

		// Init process
		$rootScope.changeTitle('');
	});

	angular.bootstrap(document, ['rpgbossib']);

});