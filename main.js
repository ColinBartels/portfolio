var projectData = null;
$.getJSON("data/projects.json", function(data) {
	projectData = data;
});

// Create app
var myApp = angular.module('myApp', ['ui.router']);


// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'templates/home.html',
		//controller: 'HomeController',
	})
	.state('projects', {
		url:'/projects',
		templateUrl: 'templates/projects.html',
		controller: 'projectsController',
	})
	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		//controller: 'aboutController'
	});
});

myApp.run(['$state', function ($state) {
	$state.transitionTo('home');
}]);

var projectsController = myApp.controller('projectsController', function($scope) {
		$scope.projects = projectData
});