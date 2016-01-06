  angular.module('myApp',[])
.config(function($httpProvider){
  $httpProvider.defaults.useXDomain=true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.controller('instagramCtrl',function($scope,$http)
{
  //console.log($scope.instaform.$submitted);
  //console.log($scope.instaform.$submitted);
  console.log('hi');
  var returnobject;
  $scope.submitsearch=function()
  {
    console.log($scope.instaform.$submitted);
    console.log($scope.instaform.searchtext.$error.required);
    var mediaid=$scope.tag;
    console.log(mediaid);

    var url='https://api.flickr.com/services/rest';

    var reqparams={
    method: 'flickr.photos.search',
    api_key:'b03ea2d34c38c32e728559fcb5830a26',
    tags: mediaid,
    format: 'json',
    nojsoncallback: 1
    };

    $http({
		  method: 'GET',
		  url: url,
		  params: reqparams
	  })
	  .then(function(response) {
		  $scope.photoobj = response.data.photos.photo;
      //console.log(response.data.photos.photo);
      console.log($scope.photoobj);
      /*for ( var i =0 ; i < $scope.photoobj.length-80;i++)
      {
        $scope.farmid[i]=$scope.photoobj[i].farm;
        $scope.serverid[i]=$scope.photoobj[i].server;
        $scope.id=$scope[i].photoobj[i].id;
        $scope.secret[i]= $scope.photoobj[i].secret;

      }*/
	  },
	  function(response) {
		  alert('error');
	  });
    console.log("hello"+ $scope.photoobj );
    /*for ( var i =0 ; i < $scope.results.length;i++)
    {
      console.log("i=" +  i + $scope.results[i]);
    }*/


  }

});
