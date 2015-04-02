module.exports = function(grunt) {

	grunt.initConfig({
	  nodewebkit: {
	    options: {
	        platforms: ['win','osx'],
	        buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
	        macZip : true,
	        macIcns : './src/icon_mac.icns',
	        winIco : './src/icon_windows.ico'
	    },
	    src: ['./src/**/*'] // Your node-webkit app
	  },
	})

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', ['nodewebkit']);

};