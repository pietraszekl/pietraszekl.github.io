'use strict';
var controllers = angular.module('looca.controllers', []);
// Controllers
// Main Controller 

controllers.controller('MainCtrl', ['loocaResponse', function(loocaResponse){
	var mainCtrl = this,
	looca = {};
	loocaResponse.getData('users').then(function(response) {
		looca = response.data.users[0];
		mainCtrl.name = looca.name;
		mainCtrl.profession = looca.profession;
		mainCtrl.specialities = looca.specialities;
		mainCtrl.image = looca.avatar;
		mainCtrl.bio = looca.bio;
		mainCtrl.what = looca.what;
		mainCtrl.skills = looca.skills;
		mainCtrl.testimonials = looca.testimonials;
		mainCtrl.clients = looca.clientsText;
		mainCtrl.projects = looca.projects;
	});
}]);

controllers.controller('ProjectCtrl', ['loocaResponse', '$routeParams',function(loocaResponse,$routeParams){
	var projectCtrl = this,
			id = $routeParams.id,
			location = 'projects';

	projectCtrl.project = {};
	loocaResponse.getData(location).then(function (response){
		var arr = response.data[location];
		for (var d = 0, len = arr.length; d < len; d ++) {
			if (arr[d].id === id) {
				projectCtrl.project = arr[d];
			}
		}
	});

}]);
