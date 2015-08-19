'use strict';

////// Main App - used for configs //////////////////
var app = angular.module('LoocaApp', ['ngRoute', 'looca.controllers','looca.services']);

app.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'/views/home.html'
	})
	.when('/project/:id', {
		controller:'ProjectCtrl',
		controllerAs: 'projectCtrl',
		templateUrl:'./views/project.html'
	})
	.otherwise({redirectTo: '/'
});
});
