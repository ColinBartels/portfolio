// Create app
var myApp = angular.module('myApp', ['ui.router']);

// Configure app
myApp.config(function($stateProvider, $locationProvider) {
	
	// remove # in url
  	$locationProvider.html5Mode(true);

    $stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'templates/home.html',
		controller: 'homeController',
	})
	.state('projects', {
		url:'/projects',
		templateUrl: 'templates/projects.html',
		controller: 'projectsController',
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html',
		//controller: 'aboutController'
	});
});

var devLogos = null;
$.getJSON("data/devLogos.json", function(data) {
	devLogos = data;
});

var secLogos = null;
$.getJSON("data/secLogos.json", function(data) {
	secLogos = data;
});

var projectData = null;
$.getJSON("data/projects.json", function(data) {
	projectData = data;
});

var homeController = myApp.controller('homeController', function($scope) {
	$scope.devLogos = devLogos;
	$scope.secLogos = secLogos;
});

var projectsController = myApp.controller('projectsController', function($scope) {
	$scope.projects = projectData;
});