'use strict';
var services = angular.module('looca.services', []);

// // Factory Get JSON
// services.factory('loocaResponse', ['$http',function ($http) {
// 		console.log('loocaResponse');
// 		var url = '/loocadata.json',
// 		loocaResponse = loocaResponse || {};
// 		loocaResponse.getData = function () {
// 			return $http.get(url);
// 		};
// 		return loocaResponse;
// 	}
// 	]);



// Factory Get JSON
services.factory('loocaResponse', ['$http',function ($http) {
	function load(path){
		return $http.get('/api/'+path+'.json');
	}
	return {
		getData: function(name){
			return load(name);
		}
	};
}
]);