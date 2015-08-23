'use strict';

///////////////////////////////////////////
////////////// App Controllers ////////////
///////////////////////////////////////////
var app = angular.module('LoocaApp');

// Main Controller
app.controller('MainCtrl', [function(){
	console.log('Main controller fired');
}]);
//
//app.directive('lastRepeat', function () {
//	return function(scope, element, attrs) {
//		if (scope.$last) setTimeout(function(){
//			scope.$emit('LastElement', element, attrs);
//		}, 1);
//	};
//});
