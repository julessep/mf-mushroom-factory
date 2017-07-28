'use strict';

myApp.controller('MushController', function($scope, MushFactory){
  
  MushFactory.getMush()

  .then( (mushrooms) => {
    let mushroomData = [];
    angular.forEach(mushrooms.data, function(item){
      mushroomData.push(item);
    })
    $scope.mushList = mushroomData;
  });

});