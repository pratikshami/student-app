
angular.module('LoginCtrl', [])
.controller("LoginController",function($scope,$http,$window,$location){
	//colsole.log("In AppCtrl function");
	var resetControls = function(){
			$scope.login.username = "";
			$scope.login.password = "";
	};

	$scope.authenticate = function(){
		//console.log($scope.login);
		
		var fd = new FormData();
		console.log($scope.login);
		
		for(var key in $scope.login){
			fd.append(key,$scope.login[key]);
			console.log( key + " : " + $scope.login[key]);
		}
		
		console.log(fd);

		

		$http.post("http://172.27.59.139:8000/authenticate",$scope.login,{
                headers : {
                    'Content-Type': 'application/json'//'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).success(function(response){
            	//console.log(response);
            	
            	if(response==true){
            		//$scope.message='Correct Username or Password';
            		$location.path('/products');	
            	}else{
            		$scope.message='Incorrect Username or Password';
            	}
		});
	};
	//resetControls();
});
