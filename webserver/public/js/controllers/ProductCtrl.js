
angular.module('ProductCtrl', [])
.controller("ProductController",function($scope,$http,$window,$location){
	var refresh = function(){
		$http.get("http://172.27.59.139:8002/products").success(function(response){
			console.log('refresh success');
			$scope.products = response;
			console.log($scope.products);
		});	
	};

	var resetControls = function(){
			$scope.product.id = "";
			$scope.product.name = "";
			$scope.product.description = "";
			$scope.product_message = "";
	};

	$scope.addProduct = function(){
		console.log($scope.product);
		if($scope.product.id==null||$scope.product.name==''||$scope.product.description==''){
			$scope.product_message='Please fill all the fields';
		}
		else{
			$http.post("http://172.27.59.139:8002/products",$scope.product,{
            	    headers: { 'Content-Type': 'application/json' }
            	}).success(function(response){
            		console.log("...in success function...");
					refresh();
					resetControls();
				});
        }
	};

	$scope.removeProduct = function(id){
		console.log("Employee id to delete : " + id);
		if($window.confirm('Are you sure you want to delete product?'))
		{
			$http.delete("http://172.27.59.139:8002/products/"+id).success(function(response){
				console.log('product removed : ' + response);
				refresh();
				resetControls();
			});
		}
	};

	refresh();
});
