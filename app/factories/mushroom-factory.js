'use strict';

myApp.factory('MushFactory', function($q, $http, FBUrl) {

  let getMush = () => {
    
    return $q( (resolve, reject) => {
      $http.get(`${FBUrl}/mushrooms.json`)
      .then( (mushrooms) => {
        resolve(mushrooms)
      })
      .catch ( (err) => {
        reject(err);
      });
    });

  };

  return {getMush};

});
