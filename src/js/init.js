requirejs([
	'app/controller/library',
	'app/controller/navigation',
	'app/controller/properties',
	'app/controller/screen',

	'app/service/projectService',
	'app/service/dialogService',
	'app/service/appSettingsService',
	'app/service/canvasService',
	'app/service/libraryService'
], function(
	Library,
	Navigation,
	Properties,
	Screen,

	ProjectService,
	DialogService,
	AppSettingsService,
	CanvasService,
	LibraryService
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

	angular.bootstrap(document, ['rpgbossib']);

});