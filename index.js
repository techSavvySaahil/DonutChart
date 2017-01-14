angular.module('App',[])
.controller('MainController',['$scope', function($scope){
	function initFunctions(){
		$scope.reportsView = false;
		$scope.userName = "";
		$scope.prevValue = 0;
		$scope.uservalue = 0;
		$scope.date = {
			start:"",
			end:""
		};
		$scope.checkMin = function(){
			var date = new Date($scope.date.start)
			$("#endDatePicker").datepicker( "option", "minDate", date );
		}
		$scope.checkMax = function(){
			var date = new Date($scope.date.end)
			$("#startDatePicker").datepicker( "option", "maxDate", date );
		}
		$scope.reportCheck = function(){
			$scope.reportsView = true;
			if($scope.uservalue && $scope.prevValue!==$scope.uservalue){
				$scope.prevValue = $scope.uservalue;
				if($scope.uservalue <= 50){
					var value = 180-(18/5)*$scope.uservalue;
					$("#right-div").css("transform","rotate(-"+value+"deg)");
					$("#left-div").css("background-color","white");
				}
				if($scope.uservalue > 50){
					var value = $scope.uservalue-50;
					value = 180-(18/5)*value;
					$("#left-div").css("transform","rotate(-"+value+"deg)");
				}
			}
		}
	}
	initFunctions();
}]);
