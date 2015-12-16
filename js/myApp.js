angular.module('myApp',[])
.controller('instagramCtrl',function($scope)
{
  //console.log($scope.instaform.$submitted);
  //console.log($scope.instaform.$submitted);
  console.log('hi');
  $scope.submit=function()
  {
    console.log($scope.instaform.$submitted);
    console.log($scope.instaform.searchtext.$error.required);
  }

});
