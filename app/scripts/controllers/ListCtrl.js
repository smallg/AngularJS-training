/**
 * Created by wpguo on 10/23/2014.
 */
var ListCtrl=['$scope','$location', function($scope, $location){
    $scope.toNextPage=function(url){
        $location.url(url);
    };
}];