
angular.module('studCtrl', [])
.controller("studentController",function($scope,$http,$window,$location){
	var refresh = function(){
		$http.get("http://172.27.59.139:8002/list").success(function(response){
			console.log('refresh success');
			$scope.students = response;
			console.log($scope.students);
		});	
	};

	
	
	refresh();
});
