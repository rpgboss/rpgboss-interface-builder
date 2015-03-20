var app = angular.module('rpgbossib', ['ngDialog']);
var gui = require('nw.gui');
var win = gui.Window.get();

win.maximize();
win.focus();