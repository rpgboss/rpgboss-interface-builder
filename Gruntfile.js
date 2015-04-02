module.exports = function(grunt) {

	grunt.initConfig({
	  nodewebkit: {
	    options: {
	        platforms: ['win','osx'],
	        buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
	        macZip : true,
	        // macIcns : 'path/to/icns.file',
	        // winIco : 'path/to/ICO.file'
	    },
	    src: ['./src/**/*'] // Your node-webkit app
	  },
	})

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', ['nodewebkit']);

};