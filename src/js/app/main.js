var app = angular.module('rpgbossib', ['ngDialog']);
var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');

win.maximize();
win.focus();