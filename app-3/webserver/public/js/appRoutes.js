angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	
	$routeProvider
	.when('/',{
		templateUrl: 'views/student.html',
		controller: 'studentController'
	})
	.when('/student',{
		templateUrl: 'views/get.html',
		controller: 'getController'
	});

	$locationProvider.html5Mode(true);
}]);