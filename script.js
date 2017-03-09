	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the resume page
			.when('/resume', {
				templateUrl : 'pages/resume.html',
				controller  : 'resumeController'
			})

			// route for the review page
			.when('/review', {
				templateUrl : 'pages/review.html',
				controller  : 'reviewController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		$scope.message = 'This is the home page!';
	});

	scotchApp.controller('resumeController', function($scope) {
		$scope.message = 'This is the resume page!';
	});

	scotchApp.controller('reviewController', function($scope) {
		$scope.message = 'This is the review page!';
	});
