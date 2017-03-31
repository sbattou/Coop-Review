	var coopReviewApp = angular.module('coopReviewApp', ['ngRoute']);

	coopReviewApp.config(function($routeProvider) {
	    $routeProvider

	        .when('/', {
	            templateUrl: 'pages/home.html',
	            controller: 'mainController'
	        })

	        .when('/resume', {
	            templateUrl: 'pages/resume.html',
	            controller: 'resumeController'
	        })

	        .when('/review', {
	            templateUrl: 'pages/review.html',
	            controller: 'reviewController'
	        })

	        .when('/account', {
	            templateUrl: 'pages/account.html',
	            controller: 'accountController'
	        })

	        .when('/login', {
	            templateUrl: 'pages/login.html',
	            controller: 'loginController'
	        });
	});

	coopReviewApp.controller('mainController', function($scope) {
	    $scope.message = 'This is the home page!';
	});

	coopReviewApp.controller('resumeController', function($scope) {
	});

	coopReviewApp.controller('reviewController', function($scope) {
	    $scope.company = 'Google';
	    $scope.pros = 'A great company to work for, right from the bat you hit the ground running and start to get your hand dirty in meanigful dev projects.';
	    $scope.cons = 'The work life balance is not to great, expect to do a lot of over time which can be the major pitfall.';
	    $scope.advice = 'Keep the company growing in new areas where people are needed, without cutting down on older departments where knowledgeable staff have great value added. The newer generation knows the new tools, but the older generation is still learning too.';
	});

	coopReviewApp.controller('accountController', function($scope) {
	    $scope.message = 'This is the account page!';
	});

	coopReviewApp.controller('loginController', function($scope) {
		
	});
