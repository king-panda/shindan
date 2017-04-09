angular.module('myApp')

//TOPページ用のコントローラー
.controller('TopViewController', ['$scope','$routeParams', function($scope,$routeParams){
}])

//質問ページ用のコントローラー
.controller('QuestionViewController', ['$scope','$routeParams','QList', function($scope,$routeParams,QList){
	//パスに応じた情報をスコープに渡す
	var QList = QList();
	$scope.path = $routeParams.path;
	$scope.title = QList[$routeParams.path]['title'];
	$scope.str = QList[$routeParams.path]['str'];
	$scope.yes = QList[$routeParams.path]['yes'];
	$scope.no = QList[$routeParams.path]['no'];
}])

//結果ページ用のコントローラー
.controller('ResultViewController', ['$scope','$routeParams','resultList', function($scope,$routeParams,resultList){
	//パスに応じた情報をスコープに渡す
	var resultList = resultList();
	$scope.path = $routeParams.path;
	$scope.title = resultList[$routeParams.path]['title'];
	$scope.str = resultList[$routeParams.path]['str'];
}]);
