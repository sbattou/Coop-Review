	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
	    $routeProvider

	        // route for the home page
	        .when('/', {
	            templateUrl: 'pages/home.html',
	            controller: 'mainController'
	        })

	        // route for the resume page
	        .when('/resume', {
	            templateUrl: 'pages/resume.html',
	            controller: 'resumeController'
	        })

	        // route for the review page
	        .when('/review', {
	            templateUrl: 'pages/review.html',
	            controller: 'reviewController'
	        })

	        // route for the account page
	        .when('/account', {
	            templateUrl: 'pages/account.html',
	            controller: 'accountController'
	        })

	        // route for the login page
	        .when('/login', {
	            templateUrl: 'pages/login.html',
	            controller: 'loginController'
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
	    $scope.company = 'Google';
	    $scope.pros = 'A great company to work for, right from the bat you hit the ground running and start to get your hand dirty in meanigful dev projects.';
	    $scope.cons = 'The work life balance is not to great, expect to do a lot of over time which can be the major pitfall.';
	    $scope.advice = 'Keep the company growing in new areas where people are needed, without cutting down on older departments where knowledgeable staff have great value added. The newer generation knows the new tools, but the older generation is still learning too.';
	});

	scotchApp.controller('accountController', function($scope) {
	    $scope.message = 'This is the account page!';
	});

	scotchApp.controller('loginController', function($scope) {});
