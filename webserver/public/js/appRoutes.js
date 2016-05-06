angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	
	$routeProvider
	.when('/',{
		templateUrl: 'views/login.html',
		controller: 'LoginController'
	})
	.when('/products',{
		templateUrl: 'views/product.html',
		controller: 'ProductController'
	});

	$locationProvider.html5Mode(true);
}]);