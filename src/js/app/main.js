var app = angular.module('rpgbossib', ['ngDialog']);
var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var osenv = require('osenv');
var clone = require('clone');

win.maximize();
win.focus();