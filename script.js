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
	        })

	        .when('/company', {
	            templateUrl: 'pages/company.html',
	            controller: 'companyController'
	        });
	});

	coopReviewApp.controller('mainController', function($scope) {
	    $scope.message = 'This is the home page!';
	});

	coopReviewApp.controller('resumeController', function($scope) {
		$scope.fileName = 'file name...';
		$scope.resumeName = 'resume_name.pdf';
		$scope.reviewAmount = '0';
	});

	coopReviewApp.controller('reviewController', function($scope) {});

	coopReviewApp.controller('accountController', function($scope) {
	    $scope.message = 'This is the account page!';
	});

	coopReviewApp.controller('companyController', function($scope) {
	    $scope.company = 'Google';
	    $scope.rating = 4.5;
	    $scope.pros = 'A great company to work for, right from the bat you hit the ground running and start to get your hand dirty in meanigful dev projects.';
	    $scope.cons = 'The work life balance is not to great, expect to do a lot of over time which can be the major pitfall.';
			$scope.salary = '$300000';
			$scope.comment = 'Best company ever!!';
	});
